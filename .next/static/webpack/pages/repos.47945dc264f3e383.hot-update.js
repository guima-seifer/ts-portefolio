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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/github */ \"./api/github.ts\");\n/* harmony import */ var _components_repos_UserItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/repos/UserItem */ \"./components/repos/UserItem.tsx\");\n\n\nvar _this = undefined;\n\n\n\nvar Repos = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_repos_UserItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            name: \"\",\n            type: \"\",\n            avatar_url: props.user.avatar_url,\n            location: \"\",\n            bio: \"\",\n            blog: \"\",\n            twitter_username: \"\",\n            login: \"\",\n            html_url: \"\",\n            followers: 0,\n            following: 0,\n            public_repos: 0,\n            public_gists: 0,\n            hireable: false\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\pages\\\\repos\\\\index.tsx\",\n            lineNumber: 13,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ferna\\\\OneDrive\\\\Documentos\\\\Development\\\\ts-portefolio\\\\pages\\\\repos\\\\index.tsx\",\n        lineNumber: 12,\n        columnNumber: 3\n    }, _this);\n};\n_c = Repos;\n/* getInitialProps enables server-side rendering in a page and \r\nallows you to do initial data population, it means sending the \r\npage with the data already populated from the server. \r\nThis is especially useful for SEO. */ Repos.getInitialProps = /*#__PURE__*/ (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n    var user;\n    return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n        switch(_state.label){\n            case 0:\n                return [\n                    4,\n                    (0,_api_github__WEBPACK_IMPORTED_MODULE_1__.fetchUsers)(\"guima-seifer\")\n                ];\n            case 1:\n                user = _state.sent();\n                return [\n                    2,\n                    {\n                        user: user\n                    }\n                ];\n        }\n    });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Repos);\nvar _c;\n$RefreshReg$(_c, \"Repos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZXBvcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRTZDO0FBQ1M7QUFPdEQsSUFBTUUsUUFBeUIsU0FBQ0M7eUJBQzlCLDhEQUFDQztrQkFDQyw0RUFBQ0gsa0VBQVFBO1lBQ1BJLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxZQUFZSixNQUFNSyxJQUFJLENBQUNELFVBQVU7WUFDakNFLFVBQVU7WUFDVkMsS0FBSztZQUNMQyxNQUFNO1lBQ05DLGtCQUFrQjtZQUNsQkMsT0FBTztZQUNQQyxVQUFVO1lBQ1ZDLFdBQVc7WUFDWEMsV0FBVztZQUNYQyxjQUFjO1lBQ2RDLGNBQWM7WUFDZEMsVUFBVSxLQUFLOzs7Ozs7Ozs7Ozs7S0FoQmZqQjtBQXFCTjtRQUtRTTs7Ozt3RkFBTzs7Ozs7Z0JBQVBBLElBQUFBLHVEQUFPO2dCQUNiOztvQkFBTzt3QkFDTEE7b0JBQ0Y7Ozs7QUFDRjtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JlcG9zL2luZGV4LnRzeD81NjRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBmZXRjaFVzZXJzIH0gZnJvbSAnLi4vLi4vYXBpL2dpdGh1YidcclxuaW1wb3J0IFVzZXJJdGVtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcmVwb3MvVXNlckl0ZW0nXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbC9Vc2VyJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB1c2VyOiBVc2VyXHJcbn1cclxuXHJcbmNvbnN0IFJlcG9zOiBOZXh0UGFnZTxQcm9wcz4gPSAocHJvcHMpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPFVzZXJJdGVtXHJcbiAgICAgIG5hbWU9eycnfVxyXG4gICAgICB0eXBlPXsnJ31cclxuICAgICAgYXZhdGFyX3VybD17cHJvcHMudXNlci5hdmF0YXJfdXJsfVxyXG4gICAgICBsb2NhdGlvbj17Jyd9XHJcbiAgICAgIGJpbz17Jyd9XHJcbiAgICAgIGJsb2c9eycnfVxyXG4gICAgICB0d2l0dGVyX3VzZXJuYW1lPXsnJ31cclxuICAgICAgbG9naW49eycnfVxyXG4gICAgICBodG1sX3VybD17Jyd9XHJcbiAgICAgIGZvbGxvd2Vycz17MH1cclxuICAgICAgZm9sbG93aW5nPXswfVxyXG4gICAgICBwdWJsaWNfcmVwb3M9ezB9XHJcbiAgICAgIHB1YmxpY19naXN0cz17MH1cclxuICAgICAgaGlyZWFibGU9e2ZhbHNlfVxyXG4gICAgLz5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuLyogZ2V0SW5pdGlhbFByb3BzIGVuYWJsZXMgc2VydmVyLXNpZGUgcmVuZGVyaW5nIGluIGEgcGFnZSBhbmQgXHJcbmFsbG93cyB5b3UgdG8gZG8gaW5pdGlhbCBkYXRhIHBvcHVsYXRpb24sIGl0IG1lYW5zIHNlbmRpbmcgdGhlIFxyXG5wYWdlIHdpdGggdGhlIGRhdGEgYWxyZWFkeSBwb3B1bGF0ZWQgZnJvbSB0aGUgc2VydmVyLiBcclxuVGhpcyBpcyBlc3BlY2lhbGx5IHVzZWZ1bCBmb3IgU0VPLiAqL1xyXG5SZXBvcy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IGZldGNoVXNlcnMoJ2d1aW1hLXNlaWZlcicpXHJcbiAgcmV0dXJuIHtcclxuICAgIHVzZXIsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXBvc1xyXG4iXSwibmFtZXMiOlsiZmV0Y2hVc2VycyIsIlVzZXJJdGVtIiwiUmVwb3MiLCJwcm9wcyIsImRpdiIsIm5hbWUiLCJ0eXBlIiwiYXZhdGFyX3VybCIsInVzZXIiLCJsb2NhdGlvbiIsImJpbyIsImJsb2ciLCJ0d2l0dGVyX3VzZXJuYW1lIiwibG9naW4iLCJodG1sX3VybCIsImZvbGxvd2VycyIsImZvbGxvd2luZyIsInB1YmxpY19yZXBvcyIsInB1YmxpY19naXN0cyIsImhpcmVhYmxlIiwiZ2V0SW5pdGlhbFByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/repos/index.tsx\n"));

/***/ })

});