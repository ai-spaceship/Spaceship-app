import appDispatcher from '../dispatcher';
import cons from '../state/cons';

export function selectTab(tabId, isSpace) {
  appDispatcher.dispatch({
    type: cons.actions.navigation.SELECT_TAB,
    tabId,
    isSpace,
  });
}

export function selectRoomMode(roomType) {
  appDispatcher.dispatch({
    type: cons.actions.navigation.SELECT_ROOM_MODE,
    roomType,
  });
}

export function selectSpace(roomId) {
  appDispatcher.dispatch({
    type: cons.actions.navigation.SELECT_SPACE,
    roomId,
  });
}

export function selectRoom(roomId, eventId, threadId, forceScroll = false) {
  appDispatcher.dispatch({
    type: cons.actions.navigation.SELECT_ROOM,
    roomId,
    eventId,
    threadId,
    forceScroll,
  });
}

// Open navigation on compact screen sizes
export function openNavigation() {
  appDispatcher.dispatch({
    type: cons.actions.navigation.OPEN_NAVIGATION,
  });
}

export function openSpaceSettings(roomId, tabText) {
  appDispatcher.dispatch({
    type: cons.actions.navigation.OPEN_SPACE_SETTINGS,
    roomId,
    tabText,
  });
}

export function openSpaceManage(roomId) {
  appDispatcher.dispatch({
    type: cons.actions.navigation.OPEN_SPACE_MANAGE,
    roomId,
  });
}

export function openSpaceAddExisting(roomId) {
  appDispatcher.dispatch({
    type: cons.actions.navigation.OPEN_SPACE_ADDEXISTING,
    roomId,
  });
}

export function toggleRoomSettings(tabText) {
  appDispatcher.dispatch({
    type: cons.actions.navigation.TOGGLE_ROOM_SETTINGS,
    tabText,
  });
}

export function updateRoomInfo(info) {
  appDispatcher.dispatch({
    type: cons.actions.navigation.ROOM_INFO_UPDATE,
    info,
  });
}

export function openShortcutSpaces() {
  appDispatcher.dispatch({
    type: cons.actions.navigation.OPEN_SHORTCUT_SPACES,
  });
}

export function openInviteList() {
  appDispatcher.dispatch({
    type: cons.actions.navigation.OPEN_INVITE_LIST,
  });
}

export function openPublicRooms(searchTerm) {
  appDispatcher.dispatch({
    type: cons.actions.navigation.OPEN_PUBLIC_ROOMS,
    searchTerm,
  });
}

export function openCreateRoom(isSpace = false, parentId = null) {
  appDispatcher.dispatch({
    type: cons.actions.navigation.OPEN_CREATE_ROOM,
    isSpace,
    parentId,
  });
}

export function openJoinAlias(term) {
  appDispatcher.dispatch({
    type: cons.actions.navigation.OPEN_JOIN_ALIAS,
    term,
  });
}

export function openInviteUser(roomId, searchTerm) {
  appDispatcher.dispatch({
    type: cons.actions.navigation.OPEN_INVITE_USER,
    roomId,
    searchTerm,
  });
}

export function openProfileViewer(userId, roomId) {
  appDispatcher.dispatch({
    type: cons.actions.navigation.OPEN_PROFILE_VIEWER,
    userId,
    roomId,
  });
}

export function openRoomViewer(roomId, oId, isId = false) {
  appDispatcher.dispatch({
    type: cons.actions.navigation.OPEN_ROOM_VIEWER,
    roomId,
    oId,
    isId,
  });
}

export function openSettings(tabText) {
  appDispatcher.dispatch({
    type: cons.actions.navigation.OPEN_SETTINGS,
    tabText,
  });
}

export function openChangelog(version) {
  appDispatcher.dispatch({
    type: cons.actions.navigation.OPEN_CHANGELOG,
    version,
  });
}

export function openProxyModal() {
  appDispatcher.dispatch({
    type: cons.actions.navigation.OPEN_PROXY_MODAL,
  });
}

export function openEmojiBoard(roomId, cords, dom, requestEmojiCallback) {
  appDispatcher.dispatch({
    type: cons.actions.navigation.OPEN_EMOJIBOARD,
    roomId,
    cords,
    requestEmojiCallback,
    dom,
  });
}

export function ethereumUpdate(address) {
  appDispatcher.dispatch({
    type: cons.actions.navigation.ETHEREUM_UPDATE,
    address,
  });
}

export function openReadReceipts(roomId, userIds) {
  appDispatcher.dispatch({
    type: cons.actions.navigation.OPEN_READRECEIPTS,
    roomId,
    userIds,
  });
}

export function openViewSource(event) {
  appDispatcher.dispatch({
    type: cons.actions.navigation.OPEN_VIEWSOURCE,
    event,
  });
}

export function replyTo(userId, eventId, body, formattedBody) {
  appDispatcher.dispatch({
    type: cons.actions.navigation.CLICK_REPLY_TO,
    userId,
    eventId,
    body,
    formattedBody,
  });
}

export function openSearch(term) {
  appDispatcher.dispatch({
    type: cons.actions.navigation.OPEN_SEARCH,
    term,
  });
}

export function openReusableContextMenu(placement, cords, render, afterClose) {
  appDispatcher.dispatch({
    type: cons.actions.navigation.OPEN_REUSABLE_CONTEXT_MENU,
    placement,
    cords,
    render,
    afterClose,
  });
}

export function openReusableDialog(title, render, afterClose) {
  appDispatcher.dispatch({
    type: cons.actions.navigation.OPEN_REUSABLE_DIALOG,
    title,
    render,
    afterClose,
  });
}

export function openEmojiVerification(request, targetDevice) {
  appDispatcher.dispatch({
    type: cons.actions.navigation.OPEN_EMOJI_VERIFICATION,
    request,
    targetDevice,
  });
}

export function emitUpdateProfile(content) {
  appDispatcher.dispatch({
    type: cons.actions.navigation.PROFILE_UPDATE,
    content,
  });
}

export function updateEmojiList(roomId) {
  appDispatcher.dispatch({
    type: cons.actions.navigation.UPDATE_EMOJI_LIST,
    roomId,
  });
}

export function updateEmojiListData(roomId) {
  appDispatcher.dispatch({
    type: cons.actions.navigation.UPDATE_EMOJI_LIST_DATA,
    roomId,
  });
}

if (__ENV_APP__.MODE === 'development') {
  global.navigationApi = {
    openProxyModal,
    openRoomViewer,
    openProfileViewer,
    openInviteList,
    openPublicRooms,
    openShortcutSpaces,
    openSpaceManage,
    selectSpace,
    selectRoom,
    openNavigation,
    openChangelog,
    openReadReceipts,
    openViewSource,
    openSearch,
    openSpaceSettings,
    openSpaceAddExisting,
    openCreateRoom,
    openJoinAlias,
    openInviteUser,
    openSettings,
  };
}
