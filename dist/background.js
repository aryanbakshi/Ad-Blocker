/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
chrome.webRequest.onBeforeRequest.addListener((details) => {
    console.log(details);
    return {
        cancel: true,
    };
}, {
    urls: ['*://*.googleservices.com/*', '*://*.tpc.googlesyndication.com/*', '*://*.g.doubleclick.net/*'],
}, ['blocking']);

/******/ })()
;
//# sourceMappingURL=background.js.map