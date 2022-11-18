"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/repos",{

/***/ "./pages/repos/index.tsx":
/*!*******************************!*\
  !*** ./pages/repos/index.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/github */ \"./api/github.ts\");\n/* harmony import */ var _components_repos_UserItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/repos/UserItem */ \"./components/repos/UserItem.tsx\");\n\n\nvar _this = undefined;\n\n\n\nvar Repos = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_repos_UserItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    name: props.user.name,\n                    type: props.user.type,\n                    avatar_url: props.user.avatar_url,\n                    location: props.user.location,\n                    bio: props.user.bio,\n                    blog: props.user.blog,\n                    twitter_username: \"\",\n                    login: props.user.login,\n                    html_url: \"\",\n                    followers: 0,\n                    following: 0,\n                    public_repos: 0,\n                    public_gists: 0,\n                    hireable: false\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\pages\\\\repos\\\\index.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\pages\\\\repos\\\\index.tsx\",\n                lineNumber: 13,\n                columnNumber: 4\n            }, _this),\n            console.log(props)\n        ]\n    }, void 0, true);\n};\n_c = Repos;\n/* getInitialProps enables server-side rendering in a page and \r\nallows you to do initial data population, it means sending the \r\npage with the data already populated from the server. \r\nThis is especially useful for SEO. */ Repos.getInitialProps = /*#__PURE__*/ (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n    var user;\n    return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n        switch(_state.label){\n            case 0:\n                return [\n                    4,\n                    (0,_api_github__WEBPACK_IMPORTED_MODULE_1__.fetchUsers)(\"guima-seifer\")\n                ];\n            case 1:\n                user = _state.sent();\n                return [\n                    2,\n                    {\n                        user: user\n                    }\n                ];\n        }\n    });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Repos);\nvar _c;\n$RefreshReg$(_c, \"Repos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZXBvcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRTZDO0FBQ1M7QUFPdEQsSUFBTUUsUUFBeUIsU0FBQ0M7eUJBQzlCOzswQkFDQyw4REFBQ0M7MEJBQ0EsNEVBQUNILGtFQUFRQTtvQkFDUEksTUFBTUYsTUFBTUcsSUFBSSxDQUFDRCxJQUFJO29CQUNyQkUsTUFBTUosTUFBTUcsSUFBSSxDQUFDQyxJQUFJO29CQUNyQkMsWUFBWUwsTUFBTUcsSUFBSSxDQUFDRSxVQUFVO29CQUNqQ0MsVUFBVU4sTUFBTUcsSUFBSSxDQUFDRyxRQUFRO29CQUM3QkMsS0FBS1AsTUFBTUcsSUFBSSxDQUFDSSxHQUFHO29CQUNuQkMsTUFBTVIsTUFBTUcsSUFBSSxDQUFDSyxJQUFJO29CQUNyQkMsa0JBQWtCO29CQUNsQkMsT0FBT1YsTUFBTUcsSUFBSSxDQUFDTyxLQUFLO29CQUN2QkMsVUFBVTtvQkFDVkMsV0FBVztvQkFDWEMsV0FBVztvQkFDWEMsY0FBYztvQkFDZEMsY0FBYztvQkFDZEMsVUFBVSxLQUFLOzs7Ozs7Ozs7OztZQUdsQkMsUUFBUUMsR0FBRyxDQUFDbEI7Ozs7S0FwQlREO0FBMEJOO1FBS1FJOzs7O3dGQUFPOzs7OztnQkFBUEEsSUFBQUEsdURBQU87Z0JBQ2I7O29CQUFPO3dCQUNMQTtvQkFDRjs7OztBQUNGO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVwb3MvaW5kZXgudHN4PzU2NGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IGZldGNoVXNlcnMgfSBmcm9tICcuLi8uLi9hcGkvZ2l0aHViJ1xyXG5pbXBvcnQgVXNlckl0ZW0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9yZXBvcy9Vc2VySXRlbSdcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL21vZGVsL1VzZXInXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHVzZXI6IFVzZXJcclxufVxyXG5cclxuY29uc3QgUmVwb3M6IE5leHRQYWdlPFByb3BzPiA9IChwcm9wcykgPT4gKFxyXG4gIDw+XHJcbiAgIDxkaXY+XHJcbiAgICA8VXNlckl0ZW1cclxuICAgICAgbmFtZT17cHJvcHMudXNlci5uYW1lfVxyXG4gICAgICB0eXBlPXtwcm9wcy51c2VyLnR5cGV9XHJcbiAgICAgIGF2YXRhcl91cmw9e3Byb3BzLnVzZXIuYXZhdGFyX3VybH1cclxuICAgICAgbG9jYXRpb249e3Byb3BzLnVzZXIubG9jYXRpb259XHJcbiAgICAgIGJpbz17cHJvcHMudXNlci5iaW99XHJcbiAgICAgIGJsb2c9e3Byb3BzLnVzZXIuYmxvZ31cclxuICAgICAgdHdpdHRlcl91c2VybmFtZT17Jyd9XHJcbiAgICAgIGxvZ2luPXtwcm9wcy51c2VyLmxvZ2lufVxyXG4gICAgICBodG1sX3VybD17Jyd9XHJcbiAgICAgIGZvbGxvd2Vycz17MH1cclxuICAgICAgZm9sbG93aW5nPXswfVxyXG4gICAgICBwdWJsaWNfcmVwb3M9ezB9XHJcbiAgICAgIHB1YmxpY19naXN0cz17MH1cclxuICAgICAgaGlyZWFibGU9e2ZhbHNlfVxyXG4gICAgLz5cclxuICA8L2Rpdj5cclxuICB7Y29uc29sZS5sb2cocHJvcHMpfVxyXG48Lz5cclxuIFxyXG4gIFxyXG4pXHJcblxyXG4vKiBnZXRJbml0aWFsUHJvcHMgZW5hYmxlcyBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgaW4gYSBwYWdlIGFuZCBcclxuYWxsb3dzIHlvdSB0byBkbyBpbml0aWFsIGRhdGEgcG9wdWxhdGlvbiwgaXQgbWVhbnMgc2VuZGluZyB0aGUgXHJcbnBhZ2Ugd2l0aCB0aGUgZGF0YSBhbHJlYWR5IHBvcHVsYXRlZCBmcm9tIHRoZSBzZXJ2ZXIuIFxyXG5UaGlzIGlzIGVzcGVjaWFsbHkgdXNlZnVsIGZvciBTRU8uICovXHJcblJlcG9zLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCB1c2VyID0gYXdhaXQgZmV0Y2hVc2VycygnZ3VpbWEtc2VpZmVyJylcclxuICByZXR1cm4ge1xyXG4gICAgdXNlcixcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcG9zXHJcbiJdLCJuYW1lcyI6WyJmZXRjaFVzZXJzIiwiVXNlckl0ZW0iLCJSZXBvcyIsInByb3BzIiwiZGl2IiwibmFtZSIsInVzZXIiLCJ0eXBlIiwiYXZhdGFyX3VybCIsImxvY2F0aW9uIiwiYmlvIiwiYmxvZyIsInR3aXR0ZXJfdXNlcm5hbWUiLCJsb2dpbiIsImh0bWxfdXJsIiwiZm9sbG93ZXJzIiwiZm9sbG93aW5nIiwicHVibGljX3JlcG9zIiwicHVibGljX2dpc3RzIiwiaGlyZWFibGUiLCJjb25zb2xlIiwibG9nIiwiZ2V0SW5pdGlhbFByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/repos/index.tsx\n"));

/***/ })

});