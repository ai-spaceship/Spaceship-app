import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { objType } from 'for-promise/utils/lib.mjs';
import initMatrix from '@src/client/initMatrix';

export const postMessage = (current, msg = null) => current.contentWindow.postMessage(msg);

const Iframe = React.forwardRef(
  (
    {
      onLoad = null,
      title = null,
      id = null,
      src = null,
      alt = null,
      className = null,
      allowFullScreen = null,
      onMessage = null,
      name = null,
      align = null,
      height = null,
      sandbox = null,
      width = null,
      seamless = null,
      style = null,
      frameBorder = null,
    },
    ref,
  ) => {
    const iframeRef = ref || useRef(null);
    const url =
      typeof src === 'string' &&
      src.startsWith('mxc://') &&
      initMatrix.mxcUrl &&
      initMatrix.mxcUrl.toHttp
        ? initMatrix.mxcUrl.toHttp(src)
        : src;

    let urlValidator;
    try {
      urlValidator = new URL(url);
    } catch {
      urlValidator = new URL(location.href);
    }

    useEffect(() => {
      if (iframeRef.current && onMessage) {
        const msgFilter = (event) => {
          if (event.origin === urlValidator.origin) {
            let data;
            if (typeof event.data === 'string') {
              try {
                data = JSON.parse(event.data);
              } catch {
                data = event.data;
              }
            } else data = event.data;

            onMessage(event, data);
          }
        };
        window.addEventListener('message', msgFilter, false);
        return () => {
          window.removeEventListener('message', msgFilter, false);
        };
      }
    });

    return (
      <iframe
        onLoad={onLoad}
        title={title}
        style={style}
        id={id}
        src={url}
        alt={alt}
        ref={iframeRef}
        className={className || 'w-100'}
        allowFullScreen={allowFullScreen}
        name={name}
        align={align}
        height={height}
        sandbox={sandbox}
        width={width}
        seamless={seamless}
        frameBorder={typeof frameBorder !== 'undefined' ? String(frameBorder) : null}
        webkitallowfullscreen={
          typeof allowFullScreen !== 'undefined' ? String(allowFullScreen) : null
        }
        mozallowfullscreen={typeof allowFullScreen !== 'undefined' ? String(allowFullScreen) : null}
      />
    );
  },
);

Iframe.propTypes = {
  style: PropTypes.object,
  allowFullScreen: PropTypes.bool,
  name: PropTypes.string,
  align: PropTypes.string,
  sandbox: PropTypes.string,
  seamless: PropTypes.bool,
  height: PropTypes.number,
  width: PropTypes.number,
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  onMessage: PropTypes.func,
  onLoad: PropTypes.func,
  frameBorder: PropTypes.number,
};

export default Iframe;
