import moment from 'moment-timezone';
import sqlite3 from 'sqlite3';

export default async function tinyDB(filename, ipcMain, newWin) {
  return new Promise((resolve) => {
    const db = new sqlite3.Database(filename);

    const tinyCache = {
      using: false,
      send: [],
    };

    tinyCache.run = (type, value1, value2, rechecking = false) =>
      new Promise((resolve2, reject) => {
        if (!tinyCache.using || rechecking) {
          tinyCache.using = true;
          try {
            db[type](value1, value2, (data) => {
              tinyCache.using = false;
              resolve2(data);
            });
          } catch (err) {
            reject(err);
          }
        } else {
          tinyCache.push({ value1, value2, resolve: resolve2, reject, type });
          tinyCache.recheck();
        }
      });

    tinyCache.recheck = () => {
      setTimeout(() => {
        if (!tinyCache.using) {
          // Data
          tinyCache.using = true;
          const newData = tinyCache.shift();
          tinyCache
            .run(newData.type, newData.value1, newData.value2, true)
            .then(newData.resolve)
            .catch(newData.reject);
        } else {
          tinyCache.recheck();
        }
      }, 100);
    };

    const result = {
      run: (value1, value2) => tinyCache.run('run', value1, value2),
      all: (value1, value2) => tinyCache.run('all', value1, value2),
    };

    result
      .run(
        `
            CREATE TABLE IF NOT EXISTS ping (
                id VARCHAR(10),
                unix BIGINT,
                PRIMARY KEY (id)
            );
        `,
      )
      .then(() =>
        result.run(
          `
            INSERT OR REPLACE INTO ping (id, unix) VALUES($id, $unix);
        `,
          {
            $id: 'start',
            $unix: moment().unix(),
          },
        ),
      );

    ipcMain.on('requestDB', (type, value, value2) => {
      if (typeof result[type] === 'function') {
        result[type](value, value2).then(data => newWin.webContents.send('requestDB', { result: data })).catch(err => newWin.webContents.send('requestDB', { err }));
      } else {
        newWin.webContents.send('requestDB', null);
      }
    });

    resolve(result);
  });
}
