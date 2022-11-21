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

/***/ "./components/repos/RepoItem.tsx":
/*!***************************************!*\
  !*** ./components/repos/RepoItem.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _layout_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/Button */ \"./components/layout/Button.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction RepoItem(param) {\n    var name = param.name, id = param.id, description = param.description, html_url = param.html_url, forks = param.forks, open_issues = param.open_issues, watchers_count = param.watchers_count, stargazers_count = param.stargazers_count;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"shadow-lg shadow-[#040c16] group container rounded-nd flex content-div mt-3\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"my-4 mx-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"text-xl font-bold justify-center text-black tracking-wider dark:text-white\",\n                    children: name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\components\\\\repos\\\\RepoItem.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-black tracking-wider dark:text-gray-300\",\n                    children: description\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\components\\\\repos\\\\RepoItem.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" grid content-center grid-cols-4 justify-items-stretch gap-4 mt-3 mx-4 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" justify-self-stretch\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaEye, {\n                                    className: \"mr-2\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\components\\\\repos\\\\RepoItem.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, this),\n                                \" \",\n                                watchers_count\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\components\\\\repos\\\\RepoItem.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" justify-self-stretch\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaStar, {\n                                    className: \"mr -2\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\components\\\\repos\\\\RepoItem.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, this),\n                                \" \",\n                                stargazers_count\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\components\\\\repos\\\\RepoItem.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" justify-self-stretch\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaInfo, {\n                                    className: \"mr-2\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\components\\\\repos\\\\RepoItem.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this),\n                                \" \",\n                                open_issues\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\components\\\\repos\\\\RepoItem.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" justify-self-stretch\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaUtensils, {\n                                    className: \"mr-2\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\components\\\\repos\\\\RepoItem.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this),\n                                \" \",\n                                forks\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\components\\\\repos\\\\RepoItem.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\components\\\\repos\\\\RepoItem.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center pt-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: \"mx-auto\",\n                        target: \"_blank\",\n                        href: \"\".concat(html_url),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            title: \"Repo\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\components\\\\repos\\\\RepoItem.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\components\\\\repos\\\\RepoItem.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\components\\\\repos\\\\RepoItem.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\components\\\\repos\\\\RepoItem.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, id, false, {\n        fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\components\\\\repos\\\\RepoItem.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_c = RepoItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RepoItem);\nvar _c;\n$RefreshReg$(_c, \"RepoItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JlcG9zL1JlcG9JdGVtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBMEU7QUFFckM7QUFDVDtBQUU1QixTQUFTTSxTQUFTLEtBU1gsRUFBRTtRQVJQQyxPQURnQixNQUNoQkEsTUFDQUMsS0FGZ0IsTUFFaEJBLElBQ0FDLGNBSGdCLE1BR2hCQSxhQUNBQyxXQUpnQixNQUloQkEsVUFDQUMsUUFMZ0IsTUFLaEJBLE9BQ0FDLGNBTmdCLE1BTWhCQSxhQUNBQyxpQkFQZ0IsTUFPaEJBLGdCQUNBQyxtQkFSZ0IsTUFRaEJBO0lBRUEscUJBQ0UsOERBQUNDO1FBRUNDLFdBQVU7a0JBR1YsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBS0QsV0FBVTs4QkFDYlQ7Ozs7Ozs4QkFFSCw4REFBQ1c7b0JBQUVGLFdBQVU7OEJBQ1ZQOzs7Ozs7OEJBRUgsOERBQUNNO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDaEIsaURBQUtBO29DQUFDZ0IsV0FBVTs7Ozs7O2dDQUFTO2dDQUFFSDs7Ozs7OztzQ0FFOUIsOERBQUNFOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ2Qsa0RBQU1BO29DQUFDYyxXQUFVOzs7Ozs7Z0NBQVU7Z0NBQUVGOzs7Ozs7O3NDQUVoQyw4REFBQ0M7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDZixrREFBTUE7b0NBQUNlLFdBQVU7Ozs7OztnQ0FBUztnQ0FBRUo7Ozs7Ozs7c0NBRS9CLDhEQUFDRzs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNiLHNEQUFVQTtvQ0FBQ2EsV0FBVTs7Ozs7O2dDQUFTO2dDQUFFTDs7Ozs7Ozs7Ozs7Ozs4QkFHckMsOERBQUNJO29CQUFJQyxXQUFVOzhCQUViLDRFQUFDWCxrREFBSUE7d0JBQUNXLFdBQVU7d0JBQVVHLFFBQU87d0JBQVNDLE1BQU0sR0FBWSxPQUFUVjtrQ0FDakQsNEVBQUNOLHNEQUFNQTs0QkFBQ2lCLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0E1QmhCYjs7Ozs7QUFrQ1g7S0E5Q1NGO0FBZ0RULCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcmVwb3MvUmVwb0l0ZW0udHN4PzRmMDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFFeWUsIEZhSW5mbywgRmFMaW5rLCBGYVN0YXIsIEZhVXRlbnNpbHMgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcclxuaW1wb3J0IHsgUmVwbyB9IGZyb20gJy4uLy4uL21vZGVsL1JlcG8nXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vbGF5b3V0L0J1dHRvbidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZnVuY3Rpb24gUmVwb0l0ZW0oe1xyXG4gIG5hbWUsXHJcbiAgaWQsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgaHRtbF91cmwsXHJcbiAgZm9ya3MsXHJcbiAgb3Blbl9pc3N1ZXMsXHJcbiAgd2F0Y2hlcnNfY291bnQsXHJcbiAgc3RhcmdhemVyc19jb3VudCxcclxufTogUmVwbykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGtleT17aWR9XHJcbiAgICAgIGNsYXNzTmFtZT0nc2hhZG93LWxnIHNoYWRvdy1bIzA0MGMxNl0gZ3JvdXAgY29udGFpbmVyIHJvdW5kZWQtbmQgZmxleCBjb250ZW50LWRpdiBtdC0zJ1xyXG4gICAgPlxyXG4gICAgICB7LyogSG92ZXIgRWZmZWN0cyAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J215LTQgbXgtNCc+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXhsIGZvbnQtYm9sZCBqdXN0aWZ5LWNlbnRlciB0ZXh0LWJsYWNrIHRyYWNraW5nLXdpZGVyIGRhcms6dGV4dC13aGl0ZSc+XHJcbiAgICAgICAgICB7bmFtZX1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWJsYWNrIHRyYWNraW5nLXdpZGVyIGRhcms6dGV4dC1ncmF5LTMwMCc+XHJcbiAgICAgICAgICB7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPScgZ3JpZCBjb250ZW50LWNlbnRlciBncmlkLWNvbHMtNCBqdXN0aWZ5LWl0ZW1zLXN0cmV0Y2ggZ2FwLTQgbXQtMyBteC00ICc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIGp1c3RpZnktc2VsZi1zdHJldGNoJz5cclxuICAgICAgICAgICAgPEZhRXllIGNsYXNzTmFtZT0nbXItMicgLz4ge3dhdGNoZXJzX2NvdW50fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIGp1c3RpZnktc2VsZi1zdHJldGNoJz5cclxuICAgICAgICAgICAgPEZhU3RhciBjbGFzc05hbWU9J21yIC0yJyAvPiB7c3RhcmdhemVyc19jb3VudH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBqdXN0aWZ5LXNlbGYtc3RyZXRjaCc+XHJcbiAgICAgICAgICAgIDxGYUluZm8gY2xhc3NOYW1lPSdtci0yJyAvPiB7b3Blbl9pc3N1ZXN9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScganVzdGlmeS1zZWxmLXN0cmV0Y2gnPlxyXG4gICAgICAgICAgICA8RmFVdGVuc2lscyBjbGFzc05hbWU9J21yLTInIC8+IHtmb3Jrc31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIHB0LTMnPlxyXG4gICAgICAgICAgey8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL31cclxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nbXgtYXV0bycgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9e2Ake2h0bWxfdXJsfWB9PlxyXG4gICAgICAgICAgICA8QnV0dG9uIHRpdGxlPXsnUmVwbyd9IC8+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXBvSXRlbVxyXG4iXSwibmFtZXMiOlsiRmFFeWUiLCJGYUluZm8iLCJGYVN0YXIiLCJGYVV0ZW5zaWxzIiwiQnV0dG9uIiwiTGluayIsIlJlcG9JdGVtIiwibmFtZSIsImlkIiwiZGVzY3JpcHRpb24iLCJodG1sX3VybCIsImZvcmtzIiwib3Blbl9pc3N1ZXMiLCJ3YXRjaGVyc19jb3VudCIsInN0YXJnYXplcnNfY291bnQiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwicCIsInRhcmdldCIsImhyZWYiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/repos/RepoItem.tsx\n"));

/***/ })

});