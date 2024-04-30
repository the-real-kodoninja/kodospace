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

/***/ "./pages/_document.tsx":
/*!*****************************!*\
  !*** ./pages/_document.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {\n    static async getInitialProps(ctx) {\n        const originalRenderPage = ctx.renderPage;\n        // Run the React rendering logic synchronously\n        ctx.renderPage = ()=>originalRenderPage({\n                // Useful for wrapping the whole react tree\n                enhanceApp: (App)=>App,\n                // Useful for wrapping in a per-page basis\n                enhanceComponent: (Component)=>Component\n            });\n        // Run the parent `getInitialProps`, it now includes the custom `renderPage`\n        const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);\n        return initialProps;\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n            lang: \"en\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"/css/main.css\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/kodospace_v1/client/pages/_document.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"/css/output.css\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/kodospace_v1/client/pages/_document.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"https://rsms.me/inter/inter.css\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/kodospace_v1/client/pages/_document.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                            src: \"https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/kodospace_v1/client/pages/_document.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            href: \"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap\",\n                            rel: \"stylesheet\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/kodospace_v1/client/pages/_document.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspaces/kodospace_v1/client/pages/_document.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}, void 0, false, {\n                    fileName: \"/workspaces/kodospace_v1/client/pages/_document.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                            fileName: \"/workspaces/kodospace_v1/client/pages/_document.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                            fileName: \"/workspaces/kodospace_v1/client/pages/_document.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspaces/kodospace_v1/client/pages/_document.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspaces/kodospace_v1/client/pages/_document.tsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDocument);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZG9jdW1lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU9zQjtBQUV0QixNQUFNSyxtQkFBbUJMLHNEQUFRQTtJQUMvQixhQUFhTSxnQkFDWEMsR0FBb0IsRUFDVztRQUMvQixNQUFNQyxxQkFBcUJELElBQUlFLFVBQVU7UUFFekMsOENBQThDO1FBQzlDRixJQUFJRSxVQUFVLEdBQUcsSUFDZkQsbUJBQW1CO2dCQUNqQiwyQ0FBMkM7Z0JBQzNDRSxZQUFZLENBQUNDLE1BQVFBO2dCQUNyQiwwQ0FBMEM7Z0JBQzFDQyxrQkFBa0IsQ0FBQ0MsWUFBY0E7WUFDbkM7UUFFRiw0RUFBNEU7UUFDNUUsTUFBTUMsZUFBZSxNQUFNZCxvRUFBd0IsQ0FBQ087UUFFcEQsT0FBT087SUFDVDtJQUVBQyxTQUFTO1FBQ1AscUJBQ0UsOERBQUNkLCtDQUFJQTtZQUFDZSxNQUFLOzs4QkFDVCw4REFBQ2QsK0NBQUlBOztzQ0FDTCw4REFBQ2U7NEJBQUtDLEtBQUk7NEJBQWFDLE1BQUs7Ozs7OztzQ0FDdEIsOERBQUNGOzRCQUFLQyxLQUFJOzRCQUFhQyxNQUFLOzs7Ozs7c0NBQzVCLDhEQUFDRjs0QkFBS0MsS0FBSTs0QkFBYUMsTUFBSzs7Ozs7O3NDQUM1Qiw4REFBQ0M7NEJBQU9DLEtBQUk7Ozs7OztzQ0FDWiw4REFBQ0o7NEJBQUtFLE1BQUs7NEJBQWtHRCxLQUFJOzs7Ozs7Ozs7Ozs7OEJBRXZILDhEQUFDaEIsK0NBQUlBOzs7Ozs4QkFDTCw4REFBQ29COztzQ0FDQyw4REFBQ25CLCtDQUFJQTs7Ozs7c0NBQ0wsOERBQUNDLHFEQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJbkI7QUFDRjtBQUVBLGlFQUFlQyxVQUFVQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va29kb3NwYWNlLy4vcGFnZXMvX2RvY3VtZW50LnRzeD9kMzdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEb2N1bWVudCwge1xuICBIdG1sLFxuICBIZWFkLFxuICBNYWluLFxuICBOZXh0U2NyaXB0LFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxufSBmcm9tICduZXh0L2RvY3VtZW50J1xuIFxuY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhcbiAgICBjdHg6IERvY3VtZW50Q29udGV4dFxuICApOiBQcm9taXNlPERvY3VtZW50SW5pdGlhbFByb3BzPiB7XG4gICAgY29uc3Qgb3JpZ2luYWxSZW5kZXJQYWdlID0gY3R4LnJlbmRlclBhZ2VcbiBcbiAgICAvLyBSdW4gdGhlIFJlYWN0IHJlbmRlcmluZyBsb2dpYyBzeW5jaHJvbm91c2x5XG4gICAgY3R4LnJlbmRlclBhZ2UgPSAoKSA9PlxuICAgICAgb3JpZ2luYWxSZW5kZXJQYWdlKHtcbiAgICAgICAgLy8gVXNlZnVsIGZvciB3cmFwcGluZyB0aGUgd2hvbGUgcmVhY3QgdHJlZVxuICAgICAgICBlbmhhbmNlQXBwOiAoQXBwKSA9PiBBcHAsXG4gICAgICAgIC8vIFVzZWZ1bCBmb3Igd3JhcHBpbmcgaW4gYSBwZXItcGFnZSBiYXNpc1xuICAgICAgICBlbmhhbmNlQ29tcG9uZW50OiAoQ29tcG9uZW50KSA9PiBDb21wb25lbnQsXG4gICAgICB9KVxuIFxuICAgIC8vIFJ1biB0aGUgcGFyZW50IGBnZXRJbml0aWFsUHJvcHNgLCBpdCBub3cgaW5jbHVkZXMgdGhlIGN1c3RvbSBgcmVuZGVyUGFnZWBcbiAgICBjb25zdCBpbml0aWFsUHJvcHMgPSBhd2FpdCBEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuIFxuICAgIHJldHVybiBpbml0aWFsUHJvcHNcbiAgfVxuIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIdG1sIGxhbmc9XCJlblwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvY3NzL21haW4uY3NzXCIgLz5cbiAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvY3NzL291dHB1dC5jc3NcIiAvPiBcbiAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3JzbXMubWUvaW50ZXIvaW50ZXIuY3NzXCIgLz5cbiAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvcHlvZGlkZS92MC4yNS4xL2Z1bGwvcHlvZGlkZS5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwLi44MDA7MSwzMDAuLjgwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxIZWFkIC8+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9IdG1sPlxuICAgIClcbiAgfVxufVxuIFxuZXhwb3J0IGRlZmF1bHQgTXlEb2N1bWVudCJdLCJuYW1lcyI6WyJEb2N1bWVudCIsIkh0bWwiLCJIZWFkIiwiTWFpbiIsIk5leHRTY3JpcHQiLCJNeURvY3VtZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwib3JpZ2luYWxSZW5kZXJQYWdlIiwicmVuZGVyUGFnZSIsImVuaGFuY2VBcHAiLCJBcHAiLCJlbmhhbmNlQ29tcG9uZW50IiwiQ29tcG9uZW50IiwiaW5pdGlhbFByb3BzIiwicmVuZGVyIiwibGFuZyIsImxpbmsiLCJyZWwiLCJocmVmIiwic2NyaXB0Iiwic3JjIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_document.tsx\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

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

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_document.tsx")));
module.exports = __webpack_exports__;

})();