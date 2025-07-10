"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "(pages-dir-node)/./pages/_document.tsx":
/*!*****************************!*\
  !*** ./pages/_document.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyDocument)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ \"(pages-dir-node)/./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/server/create-instance */ \"@emotion/server/create-instance\");\n/* harmony import */ var _utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/createEmotionCache */ \"(pages-dir-node)/./utils/createEmotionCache.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__, _utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__]);\n([_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__, _utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_2___default()) {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {\n            lang: \"ja\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {\n                    children: this.props.emotionStyleTags\n                }, void 0, false, {\n                    fileName: \"/home/wawawa/projects/kyoproGenerater/kyopro-generator/pages/_document.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {}, void 0, false, {\n                            fileName: \"/home/wawawa/projects/kyoproGenerater/kyopro-generator/pages/_document.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {}, void 0, false, {\n                            fileName: \"/home/wawawa/projects/kyoproGenerater/kyopro-generator/pages/_document.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/wawawa/projects/kyoproGenerater/kyopro-generator/pages/_document.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/wawawa/projects/kyoproGenerater/kyopro-generator/pages/_document.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this);\n    }\n}\nMyDocument.getInitialProps = async (ctx)=>{\n    const originalRenderPage = ctx.renderPage;\n    const cache = (0,_utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    const { extractCriticalToChunks } = (0,_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(cache);\n    ctx.renderPage = ()=>originalRenderPage({\n            enhanceApp: (App)=>function EnhanceApp(props) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, {\n                        emotionCache: cache,\n                        ...props\n                    }, void 0, false, {\n                        fileName: \"/home/wawawa/projects/kyoproGenerater/kyopro-generator/pages/_document.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 18\n                    }, this);\n                }\n        });\n    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_2___default().getInitialProps(ctx);\n    const emotionStyles = extractCriticalToChunks(initialProps.html);\n    const emotionStyleTags = emotionStyles.styles.map((style)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n            \"data-emotion\": `${style.key} ${style.ids.join(' ')}`,\n            // eslint-disable-next-line react/no-danger\n            dangerouslySetInnerHTML: {\n                __html: style.css\n            }\n        }, style.key, false, {\n            fileName: \"/home/wawawa/projects/kyoproGenerater/kyopro-generator/pages/_document.tsx\",\n            lineNumber: 40,\n            columnNumber: 5\n        }, undefined));\n    return {\n        ...initialProps,\n        emotionStyleTags\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19kb2N1bWVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUN5RDtBQUN0QjtBQUNMO0FBRTlDLE1BQU1RLG1CQUFtQlAsc0RBQVFBO0lBQzlDUSxTQUFTO1FBQ1AscUJBQ0UsOERBQUNQLCtDQUFJQTtZQUFDUSxNQUFLOzs4QkFDVCw4REFBQ1AsK0NBQUlBOzhCQUVGLElBQUssQ0FBQ1EsS0FBSyxDQUFTQyxnQkFBZ0I7Ozs7Ozs4QkFFdkMsOERBQUNDOztzQ0FDQyw4REFBQ1QsK0NBQUlBOzs7OztzQ0FDTCw4REFBQ0MscURBQVVBOzs7Ozs7Ozs7Ozs7Ozs7OztJQUluQjtBQUNGO0FBRUFHLFdBQVdNLGVBQWUsR0FBRyxPQUFPQztJQUNsQyxNQUFNQyxxQkFBcUJELElBQUlFLFVBQVU7SUFFekMsTUFBTUMsUUFBUVgscUVBQWtCQTtJQUNoQyxNQUFNLEVBQUVZLHVCQUF1QixFQUFFLEdBQUdiLDJFQUFtQkEsQ0FBQ1k7SUFFeERILElBQUlFLFVBQVUsR0FBRyxJQUNmRCxtQkFBbUI7WUFDakJJLFlBQVksQ0FBQ0MsTUFDWCxTQUFTQyxXQUFXWCxLQUFLO29CQUN2QixxQkFBTyw4REFBQ1U7d0JBQUlFLGNBQWNMO3dCQUFRLEdBQUdQLEtBQUs7Ozs7OztnQkFDNUM7UUFDSjtJQUVGLE1BQU1hLGVBQWUsTUFBTXZCLG9FQUF3QixDQUFDYztJQUNwRCxNQUFNVSxnQkFBZ0JOLHdCQUF3QkssYUFBYUUsSUFBSTtJQUMvRCxNQUFNZCxtQkFBbUJhLGNBQWNFLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLHNCQUNqRCw4REFBQ0E7WUFDQ0MsZ0JBQWMsR0FBR0QsTUFBTUUsR0FBRyxDQUFDLENBQUMsRUFBRUYsTUFBTUcsR0FBRyxDQUFDQyxJQUFJLENBQUMsTUFBTTtZQUVuRCwyQ0FBMkM7WUFDM0NDLHlCQUF5QjtnQkFBRUMsUUFBUU4sTUFBTU8sR0FBRztZQUFDO1dBRnhDUCxNQUFNRSxHQUFHOzs7OztJQU1sQixPQUFPO1FBQ0wsR0FBR1AsWUFBWTtRQUNmWjtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIi9ob21lL3dhd2F3YS9wcm9qZWN0cy9reW9wcm9HZW5lcmF0ZXIva3lvcHJvLWdlbmVyYXRvci9wYWdlcy9fZG9jdW1lbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEb2N1bWVudCwgeyBIdG1sLCBIZWFkLCBNYWluLCBOZXh0U2NyaXB0LCBEb2N1bWVudENvbnRleHQgfSBmcm9tICduZXh0L2RvY3VtZW50JztcbmltcG9ydCBjcmVhdGVFbW90aW9uU2VydmVyIGZyb20gJ0BlbW90aW9uL3NlcnZlci9jcmVhdGUtaW5zdGFuY2UnO1xuaW1wb3J0IGNyZWF0ZUVtb3Rpb25DYWNoZSBmcm9tICcuLi91dGlscy9jcmVhdGVFbW90aW9uQ2FjaGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeURvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIdG1sIGxhbmc9XCJqYVwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICB7LyogSW5qZWN0IE1VSSBzdHlsZXMgZmlyc3QgdG8gbWF0Y2ggd2l0aCB0aGUgcHJlcGVuZDogdHJ1ZSBjb25maWd1cmF0aW9uLiAqL31cbiAgICAgICAgICB7KHRoaXMucHJvcHMgYXMgYW55KS5lbW90aW9uU3R5bGVUYWdzfVxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9IdG1sPlxuICAgICk7XG4gIH1cbn1cblxuTXlEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4OiBEb2N1bWVudENvbnRleHQpID0+IHtcbiAgY29uc3Qgb3JpZ2luYWxSZW5kZXJQYWdlID0gY3R4LnJlbmRlclBhZ2U7XG5cbiAgY29uc3QgY2FjaGUgPSBjcmVhdGVFbW90aW9uQ2FjaGUoKTtcbiAgY29uc3QgeyBleHRyYWN0Q3JpdGljYWxUb0NodW5rcyB9ID0gY3JlYXRlRW1vdGlvblNlcnZlcihjYWNoZSk7XG5cbiAgY3R4LnJlbmRlclBhZ2UgPSAoKSA9PlxuICAgIG9yaWdpbmFsUmVuZGVyUGFnZSh7XG4gICAgICBlbmhhbmNlQXBwOiAoQXBwOiBhbnkpID0+XG4gICAgICAgIGZ1bmN0aW9uIEVuaGFuY2VBcHAocHJvcHMpIHtcbiAgICAgICAgICByZXR1cm4gPEFwcCBlbW90aW9uQ2FjaGU9e2NhY2hlfSB7Li4ucHJvcHN9IC8+O1xuICAgICAgICB9LFxuICAgIH0pO1xuXG4gIGNvbnN0IGluaXRpYWxQcm9wcyA9IGF3YWl0IERvY3VtZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICBjb25zdCBlbW90aW9uU3R5bGVzID0gZXh0cmFjdENyaXRpY2FsVG9DaHVua3MoaW5pdGlhbFByb3BzLmh0bWwpO1xuICBjb25zdCBlbW90aW9uU3R5bGVUYWdzID0gZW1vdGlvblN0eWxlcy5zdHlsZXMubWFwKChzdHlsZSkgPT4gKFxuICAgIDxzdHlsZVxuICAgICAgZGF0YS1lbW90aW9uPXtgJHtzdHlsZS5rZXl9ICR7c3R5bGUuaWRzLmpvaW4oJyAnKX1gfVxuICAgICAga2V5PXtzdHlsZS5rZXl9XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZGFuZ2VyXG4gICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHN0eWxlLmNzcyB9fVxuICAgIC8+XG4gICkpO1xuXG4gIHJldHVybiB7XG4gICAgLi4uaW5pdGlhbFByb3BzLFxuICAgIGVtb3Rpb25TdHlsZVRhZ3MsXG4gIH07XG59OyJdLCJuYW1lcyI6WyJSZWFjdCIsIkRvY3VtZW50IiwiSHRtbCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsImNyZWF0ZUVtb3Rpb25TZXJ2ZXIiLCJjcmVhdGVFbW90aW9uQ2FjaGUiLCJNeURvY3VtZW50IiwicmVuZGVyIiwibGFuZyIsInByb3BzIiwiZW1vdGlvblN0eWxlVGFncyIsImJvZHkiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJvcmlnaW5hbFJlbmRlclBhZ2UiLCJyZW5kZXJQYWdlIiwiY2FjaGUiLCJleHRyYWN0Q3JpdGljYWxUb0NodW5rcyIsImVuaGFuY2VBcHAiLCJBcHAiLCJFbmhhbmNlQXBwIiwiZW1vdGlvbkNhY2hlIiwiaW5pdGlhbFByb3BzIiwiZW1vdGlvblN0eWxlcyIsImh0bWwiLCJzdHlsZXMiLCJtYXAiLCJzdHlsZSIsImRhdGEtZW1vdGlvbiIsImtleSIsImlkcyIsImpvaW4iLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImNzcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_document.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./utils/createEmotionCache.ts":
/*!*************************************!*\
  !*** ./utils/createEmotionCache.ts ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createEmotionCache)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_cache__WEBPACK_IMPORTED_MODULE_0__]);\n_emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction createEmotionCache() {\n    return (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        key: 'css',\n        prepend: true\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3V0aWxzL2NyZWF0ZUVtb3Rpb25DYWNoZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QztBQUUxQixTQUFTQztJQUN0QixPQUFPRCwwREFBV0EsQ0FBQztRQUFFRSxLQUFLO1FBQU9DLFNBQVM7SUFBSztBQUNqRCIsInNvdXJjZXMiOlsiL2hvbWUvd2F3YXdhL3Byb2plY3RzL2t5b3Byb0dlbmVyYXRlci9reW9wcm8tZ2VuZXJhdG9yL3V0aWxzL2NyZWF0ZUVtb3Rpb25DYWNoZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSAnQGVtb3Rpb24vY2FjaGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbW90aW9uQ2FjaGUoKSB7XG4gIHJldHVybiBjcmVhdGVDYWNoZSh7IGtleTogJ2NzcycsIHByZXBlbmQ6IHRydWUgfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ2FjaGUiLCJjcmVhdGVFbW90aW9uQ2FjaGUiLCJrZXkiLCJwcmVwZW5kIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./utils/createEmotionCache.ts\n");

/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("@emotion/cache");;

/***/ }),

/***/ "@emotion/server/create-instance":
/*!**************************************************!*\
  !*** external "@emotion/server/create-instance" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = import("@emotion/server/create-instance");;

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./pages/_document.tsx")));
module.exports = __webpack_exports__;

})();