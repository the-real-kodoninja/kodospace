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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"(pages-dir-node)/./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {\n    static async getInitialProps(ctx) {\n        const originalRenderPage = ctx.renderPage;\n        // Run the React rendering logic synchronously\n        ctx.renderPage = ()=>originalRenderPage({\n                // Useful for wrapping the whole react tree\n                enhanceApp: (App)=>App,\n                // Useful for wrapping in a per-page basis\n                enhanceComponent: (Component)=>Component\n            });\n        // Run the parent `getInitialProps`, it now includes the custom `renderPage`\n        const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);\n        return initialProps;\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n            lang: \"en\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"/css/main.css\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/kodospace/client/pages/_document.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"/css/output.css\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/kodospace/client/pages/_document.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"https://rsms.me/inter/inter.css\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/kodospace/client/pages/_document.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                            src: \"https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/kodospace/client/pages/_document.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            href: \"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap\",\n                            rel: \"stylesheet\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/kodospace/client/pages/_document.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspaces/kodospace/client/pages/_document.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}, void 0, false, {\n                    fileName: \"/workspaces/kodospace/client/pages/_document.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                            fileName: \"/workspaces/kodospace/client/pages/_document.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                            fileName: \"/workspaces/kodospace/client/pages/_document.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspaces/kodospace/client/pages/_document.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspaces/kodospace/client/pages/_document.tsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDocument);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19kb2N1bWVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBT3NCO0FBRXRCLE1BQU1LLG1CQUFtQkwsc0RBQVFBO0lBQy9CLGFBQWFNLGdCQUNYQyxHQUFvQixFQUNXO1FBQy9CLE1BQU1DLHFCQUFxQkQsSUFBSUUsVUFBVTtRQUV6Qyw4Q0FBOEM7UUFDOUNGLElBQUlFLFVBQVUsR0FBRyxJQUNmRCxtQkFBbUI7Z0JBQ2pCLDJDQUEyQztnQkFDM0NFLFlBQVksQ0FBQ0MsTUFBUUE7Z0JBQ3JCLDBDQUEwQztnQkFDMUNDLGtCQUFrQixDQUFDQyxZQUFjQTtZQUNuQztRQUVGLDRFQUE0RTtRQUM1RSxNQUFNQyxlQUFlLE1BQU1kLG9FQUF3QixDQUFDTztRQUVwRCxPQUFPTztJQUNUO0lBRUFDLFNBQVM7UUFDUCxxQkFDRSw4REFBQ2QsK0NBQUlBO1lBQUNlLE1BQUs7OzhCQUNULDhEQUFDZCwrQ0FBSUE7O3NDQUNMLDhEQUFDZTs0QkFBS0MsS0FBSTs0QkFBYUMsTUFBSzs7Ozs7O3NDQUN0Qiw4REFBQ0Y7NEJBQUtDLEtBQUk7NEJBQWFDLE1BQUs7Ozs7OztzQ0FDNUIsOERBQUNGOzRCQUFLQyxLQUFJOzRCQUFhQyxNQUFLOzs7Ozs7c0NBQzVCLDhEQUFDQzs0QkFBT0MsS0FBSTs7Ozs7O3NDQUNaLDhEQUFDSjs0QkFBS0UsTUFBSzs0QkFBa0dELEtBQUk7Ozs7Ozs7Ozs7Ozs4QkFFdkgsOERBQUNoQiwrQ0FBSUE7Ozs7OzhCQUNMLDhEQUFDb0I7O3NDQUNDLDhEQUFDbkIsK0NBQUlBOzs7OztzQ0FDTCw4REFBQ0MscURBQVVBOzs7Ozs7Ozs7Ozs7Ozs7OztJQUluQjtBQUNGO0FBRUEsaUVBQWVDLFVBQVVBLEVBQUEiLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL2tvZG9zcGFjZS9jbGllbnQvcGFnZXMvX2RvY3VtZW50LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRG9jdW1lbnQsIHtcbiAgSHRtbCxcbiAgSGVhZCxcbiAgTWFpbixcbiAgTmV4dFNjcmlwdCxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbn0gZnJvbSAnbmV4dC9kb2N1bWVudCdcbiBcbmNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoXG4gICAgY3R4OiBEb2N1bWVudENvbnRleHRcbiAgKTogUHJvbWlzZTxEb2N1bWVudEluaXRpYWxQcm9wcz4ge1xuICAgIGNvbnN0IG9yaWdpbmFsUmVuZGVyUGFnZSA9IGN0eC5yZW5kZXJQYWdlXG4gXG4gICAgLy8gUnVuIHRoZSBSZWFjdCByZW5kZXJpbmcgbG9naWMgc3luY2hyb25vdXNseVxuICAgIGN0eC5yZW5kZXJQYWdlID0gKCkgPT5cbiAgICAgIG9yaWdpbmFsUmVuZGVyUGFnZSh7XG4gICAgICAgIC8vIFVzZWZ1bCBmb3Igd3JhcHBpbmcgdGhlIHdob2xlIHJlYWN0IHRyZWVcbiAgICAgICAgZW5oYW5jZUFwcDogKEFwcCkgPT4gQXBwLFxuICAgICAgICAvLyBVc2VmdWwgZm9yIHdyYXBwaW5nIGluIGEgcGVyLXBhZ2UgYmFzaXNcbiAgICAgICAgZW5oYW5jZUNvbXBvbmVudDogKENvbXBvbmVudCkgPT4gQ29tcG9uZW50LFxuICAgICAgfSlcbiBcbiAgICAvLyBSdW4gdGhlIHBhcmVudCBgZ2V0SW5pdGlhbFByb3BzYCwgaXQgbm93IGluY2x1ZGVzIHRoZSBjdXN0b20gYHJlbmRlclBhZ2VgXG4gICAgY29uc3QgaW5pdGlhbFByb3BzID0gYXdhaXQgRG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eClcbiBcbiAgICByZXR1cm4gaW5pdGlhbFByb3BzXG4gIH1cbiBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8SHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Nzcy9tYWluLmNzc1wiIC8+XG4gICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Nzcy9vdXRwdXQuY3NzXCIgLz4gXG4gICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9yc21zLm1lL2ludGVyL2ludGVyLmNzc1wiIC8+XG4gICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L3B5b2RpZGUvdjAuMjUuMS9mdWxsL3B5b2RpZGUuanNcIj48L3NjcmlwdD5cbiAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOml0YWwsd2dodEAwLDMwMC4uODAwOzEsMzAwLi44MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8SGVhZCAvPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvSHRtbD5cbiAgICApXG4gIH1cbn1cbiBcbmV4cG9ydCBkZWZhdWx0IE15RG9jdW1lbnQiXSwibmFtZXMiOlsiRG9jdW1lbnQiLCJIdG1sIiwiSGVhZCIsIk1haW4iLCJOZXh0U2NyaXB0IiwiTXlEb2N1bWVudCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsIm9yaWdpbmFsUmVuZGVyUGFnZSIsInJlbmRlclBhZ2UiLCJlbmhhbmNlQXBwIiwiQXBwIiwiZW5oYW5jZUNvbXBvbmVudCIsIkNvbXBvbmVudCIsImluaXRpYWxQcm9wcyIsInJlbmRlciIsImxhbmciLCJsaW5rIiwicmVsIiwiaHJlZiIsInNjcmlwdCIsInNyYyIsImJvZHkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_document.tsx\n");

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