"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/repos-section/item.tsx":
/*!*******************************************!*\
  !*** ./components/repos-section/item.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _layout_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/Button */ \"./components/layout/Button.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction RepoItem(param) {\n    var name = param.name, id = param.id, description = param.description, html_url = param.html_url, forks = param.forks, open_issues = param.open_issues, watchers_count = param.watchers_count, stargazers_count = param.stargazers_count;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[250px] h-[500px] shadow-lg shadow-[#040c16] group container flex content-div mt-3\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"my-4 mx-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \" text-xl font-bold justify-center text-black tracking-wider dark:text-teal-900\",\n                    children: name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\components\\\\repos-section\\\\item.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-black tracking-wider dark:text-teal-600\",\n                    children: description\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\components\\\\repos-section\\\\item.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" dark:text-teal-900 grid content-center grid-cols-4 justify-items-stretch gap-4 mt-3 mx-4 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"px-3 \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaEye, {\n                                    className: \"mr-2\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\components\\\\repos-section\\\\item.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, this),\n                                \" \",\n                                watchers_count\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\components\\\\repos-section\\\\item.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"px-3 \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaStar, {\n                                    className: \"mr -2\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\components\\\\repos-section\\\\item.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, this),\n                                \" \",\n                                stargazers_count\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\components\\\\repos-section\\\\item.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"px-3 \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaInfo, {\n                                    className: \"mr-2\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\components\\\\repos-section\\\\item.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this),\n                                \" \",\n                                open_issues\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\components\\\\repos-section\\\\item.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"px-3 \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaUtensils, {\n                                    className: \"mr-2\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\components\\\\repos-section\\\\item.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this),\n                                \" \",\n                                forks\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\components\\\\repos-section\\\\item.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\components\\\\repos-section\\\\item.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"justify-center pt-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: \"mx-auto\",\n                        target: \"_blank\",\n                        href: \"\".concat(html_url),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            title: \"Repo\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\components\\\\repos-section\\\\item.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\components\\\\repos-section\\\\item.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\components\\\\repos-section\\\\item.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\components\\\\repos-section\\\\item.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, id, false, {\n        fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\components\\\\repos-section\\\\item.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_c = RepoItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RepoItem);\nvar _c;\n$RefreshReg$(_c, \"RepoItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JlcG9zLXNlY3Rpb24vaXRlbS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQTBFO0FBRXJDO0FBQ1Q7QUFFNUIsU0FBU00sU0FBUyxLQVNYLEVBQUU7UUFSUEMsT0FEZ0IsTUFDaEJBLE1BQ0FDLEtBRmdCLE1BRWhCQSxJQUNBQyxjQUhnQixNQUdoQkEsYUFDQUMsV0FKZ0IsTUFJaEJBLFVBQ0FDLFFBTGdCLE1BS2hCQSxPQUNBQyxjQU5nQixNQU1oQkEsYUFDQUMsaUJBUGdCLE1BT2hCQSxnQkFDQUMsbUJBUmdCLE1BUWhCQTtJQUVBLHFCQUNFLDhEQUFDQztRQUVDQyxXQUFVO2tCQUdWLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUtELFdBQVU7OEJBQ2JUOzs7Ozs7OEJBRUgsOERBQUNXO29CQUFFRixXQUFVOzhCQUNWUDs7Ozs7OzhCQUVILDhEQUFDTTtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ2hCLGlEQUFLQTtvQ0FBQ2dCLFdBQVU7Ozs7OztnQ0FBUztnQ0FBRUg7Ozs7Ozs7c0NBRTlCLDhEQUFDRTs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNkLGtEQUFNQTtvQ0FBQ2MsV0FBVTs7Ozs7O2dDQUFVO2dDQUFFRjs7Ozs7OztzQ0FFaEMsOERBQUNDOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ2Ysa0RBQU1BO29DQUFDZSxXQUFVOzs7Ozs7Z0NBQVM7Z0NBQUVKOzs7Ozs7O3NDQUUvQiw4REFBQ0c7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDYixzREFBVUE7b0NBQUNhLFdBQVU7Ozs7OztnQ0FBUztnQ0FBRUw7Ozs7Ozs7Ozs7Ozs7OEJBR3JDLDhEQUFDSTtvQkFBSUMsV0FBVTs4QkFFYiw0RUFBQ1gsa0RBQUlBO3dCQUFDVyxXQUFVO3dCQUFVRyxRQUFPO3dCQUFTQyxNQUFNLEdBQVksT0FBVFY7a0NBQ2pELDRFQUFDTixzREFBTUE7NEJBQUNpQixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BNUJoQmI7Ozs7O0FBa0NYO0tBOUNTRjtBQWdEVCwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3JlcG9zLXNlY3Rpb24vaXRlbS50c3g/ZGRmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYUV5ZSwgRmFJbmZvLCBGYUxpbmssIEZhU3RhciwgRmFVdGVuc2lscyB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5pbXBvcnQgeyBSZXBvIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9SZXBvJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2xheW91dC9CdXR0b24nXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmZ1bmN0aW9uIFJlcG9JdGVtKHtcclxuICBuYW1lLFxyXG4gIGlkLFxyXG4gIGRlc2NyaXB0aW9uLFxyXG4gIGh0bWxfdXJsLFxyXG4gIGZvcmtzLFxyXG4gIG9wZW5faXNzdWVzLFxyXG4gIHdhdGNoZXJzX2NvdW50LFxyXG4gIHN0YXJnYXplcnNfY291bnQsXHJcbn06IFJlcG8pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBrZXk9e2lkfVxyXG4gICAgICBjbGFzc05hbWU9J3ctWzI1MHB4XSBoLVs1MDBweF0gc2hhZG93LWxnIHNoYWRvdy1bIzA0MGMxNl0gZ3JvdXAgY29udGFpbmVyIGZsZXggY29udGVudC1kaXYgbXQtMydcclxuICAgID5cclxuICAgICAgey8qIEhvdmVyIEVmZmVjdHMgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdteS00IG14LTMnPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nIHRleHQteGwgZm9udC1ib2xkIGp1c3RpZnktY2VudGVyIHRleHQtYmxhY2sgdHJhY2tpbmctd2lkZXIgZGFyazp0ZXh0LXRlYWwtOTAwJz5cclxuICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtYmxhY2sgdHJhY2tpbmctd2lkZXIgZGFyazp0ZXh0LXRlYWwtNjAwJz5cclxuICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBkYXJrOnRleHQtdGVhbC05MDAgZ3JpZCBjb250ZW50LWNlbnRlciBncmlkLWNvbHMtNCBqdXN0aWZ5LWl0ZW1zLXN0cmV0Y2ggZ2FwLTQgbXQtMyBteC00ICc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHgtMyAnPlxyXG4gICAgICAgICAgICA8RmFFeWUgY2xhc3NOYW1lPSdtci0yJyAvPiB7d2F0Y2hlcnNfY291bnR9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweC0zICc+XHJcbiAgICAgICAgICAgIDxGYVN0YXIgY2xhc3NOYW1lPSdtciAtMicgLz4ge3N0YXJnYXplcnNfY291bnR9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweC0zICc+XHJcbiAgICAgICAgICAgIDxGYUluZm8gY2xhc3NOYW1lPSdtci0yJyAvPiB7b3Blbl9pc3N1ZXN9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweC0zICc+XHJcbiAgICAgICAgICAgIDxGYVV0ZW5zaWxzIGNsYXNzTmFtZT0nbXItMicgLz4ge2ZvcmtzfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2p1c3RpZnktY2VudGVyIHB0LTMnPlxyXG4gICAgICAgICAgey8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL31cclxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nbXgtYXV0bycgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9e2Ake2h0bWxfdXJsfWB9PlxyXG4gICAgICAgICAgICA8QnV0dG9uIHRpdGxlPXsnUmVwbyd9IC8+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXBvSXRlbVxyXG4iXSwibmFtZXMiOlsiRmFFeWUiLCJGYUluZm8iLCJGYVN0YXIiLCJGYVV0ZW5zaWxzIiwiQnV0dG9uIiwiTGluayIsIlJlcG9JdGVtIiwibmFtZSIsImlkIiwiZGVzY3JpcHRpb24iLCJodG1sX3VybCIsImZvcmtzIiwib3Blbl9pc3N1ZXMiLCJ3YXRjaGVyc19jb3VudCIsInN0YXJnYXplcnNfY291bnQiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwicCIsInRhcmdldCIsImhyZWYiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/repos-section/item.tsx\n"));

/***/ })

});