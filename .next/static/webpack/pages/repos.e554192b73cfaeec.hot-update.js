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

/***/ "./api/github.ts":
/*!***********************!*\
  !*** ./api/github.ts ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchUsers\": function() { return /* binding */ fetchUsers; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\nvar GITHUB_URL = process.env.REACT_APP_GITHUB_URL;\nvar GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;\nvar fetchUsers = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function(login) {\n        var baseRoot, userReposURL, res, resRepos, resUser, user;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    baseRoot = \"\".concat(GITHUB_URL, \"/users/\").concat(login);\n                    userReposURL = \"\".concat(baseRoot, \"/repos\");\n                    return [\n                        4,\n                        isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(userReposURL, {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-type\": \"application/x-www-form-urlencoded\",\n                                Accept: \"application/json\",\n                                Authorization: \"token \".concat(GITHUB_TOKEN)\n                            }\n                        })\n                    ];\n                case 1:\n                    res = _state.sent();\n                    return [\n                        4,\n                        res.json()\n                    ];\n                case 2:\n                    resRepos = _state.sent();\n                    return [\n                        4,\n                        isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(baseRoot)\n                    ];\n                case 3:\n                    resUser = _state.sent();\n                    return [\n                        4,\n                        resUser.json()\n                    ];\n                case 4:\n                    user = _state.sent();\n                    return [\n                        2,\n                        user /* .map(\r\n    ({ ...User } : User) => ({ ...User } as User)\r\n  ); */ \n                    ];\n            }\n        });\n    });\n    return function fetchUsers(login) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvZ2l0aHViLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNzQztBQUV0QyxJQUFNQyxhQUFhQyxPQUFPQSxDQUFDQyxHQUFHLENBQUNDLG9CQUFvQjtBQUNuRCxJQUFNQyxlQUFlSCxPQUFPQSxDQUFDQyxHQUFHLENBQUNHLHNCQUFzQjtBQUVoRCxJQUFNQztlQUFhLDZGQUFPQyxPQUFrQztZQUUzREMsVUFDQUMsY0FDQUMsS0FVQUMsVUFFQUMsU0FDQUM7Ozs7b0JBZkFMLFdBQVcsR0FBdUJELE9BQXBCUCxZQUFXLFdBQWUsT0FBTk87b0JBQ2xDRSxlQUFlLEdBQVksT0FBVEQsVUFBUztvQkFDckI7O3dCQUFNVCx5REFBS0EsQ0FBQ1UsY0FBYzs0QkFDcENLLFFBQVE7NEJBQ1JDLFNBQVM7Z0NBQ1AsZ0JBQWU7Z0NBQ2YsUUFBVTtnQ0FDVixlQUFpQixTQUFzQixPQUFiWDs0QkFFNUI7d0JBQ0Y7OztvQkFSTU0sTUFBTTtvQkFVSzs7d0JBQU1BLElBQUlNLElBQUk7OztvQkFBekJMLFdBQVc7b0JBRUQ7O3dCQUFNWix5REFBS0EsQ0FBQ1M7OztvQkFBdEJJLFVBQVU7b0JBQ0g7O3dCQUFNQSxRQUFRSSxJQUFJOzs7b0JBQXpCSCxPQUFPO29CQUViOzt3QkFBT0EsS0FBSTs7OztJQUdiOzs7O0lBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBpL2dpdGh1Yi50cz82NGRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2RlbC9Vc2VyJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5cclxuY29uc3QgR0lUSFVCX1VSTCA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9HSVRIVUJfVVJMXHJcbmNvbnN0IEdJVEhVQl9UT0tFTiA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9HSVRIVUJfVE9LRU5cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJzID0gYXN5bmMgKGxvZ2luIDogc3RyaW5nKTogUHJvbWlzZTxVc2VyPiA9PiB7XHJcblxyXG4gIGNvbnN0IGJhc2VSb290ID0gYCR7R0lUSFVCX1VSTH0vdXNlcnMvJHtsb2dpbn1gXHJcbiAgY29uc3QgdXNlclJlcG9zVVJMID0gYCR7YmFzZVJvb3R9L3JlcG9zYFxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVzZXJSZXBvc1VSTCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC10eXBlXCI6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcclxuICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgJ0F1dGhvcml6YXRpb24nOiBgdG9rZW4gJHtHSVRIVUJfVE9LRU59YFxyXG4gICAgICBcclxuICAgIH1cclxuICB9KVxyXG4gIFxyXG4gIGNvbnN0IHJlc1JlcG9zID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgY29uc3QgcmVzVXNlciA9IGF3YWl0IGZldGNoKGJhc2VSb290KVxyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCByZXNVc2VyLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIHVzZXIvKiAubWFwKFxyXG4gICAgKHsgLi4uVXNlciB9IDogVXNlcikgPT4gKHsgLi4uVXNlciB9IGFzIFVzZXIpXHJcbiAgKTsgKi9cclxufSJdLCJuYW1lcyI6WyJmZXRjaCIsIkdJVEhVQl9VUkwiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX0dJVEhVQl9VUkwiLCJHSVRIVUJfVE9LRU4iLCJSRUFDVF9BUFBfR0lUSFVCX1RPS0VOIiwiZmV0Y2hVc2VycyIsImxvZ2luIiwiYmFzZVJvb3QiLCJ1c2VyUmVwb3NVUkwiLCJyZXMiLCJyZXNSZXBvcyIsInJlc1VzZXIiLCJ1c2VyIiwibWV0aG9kIiwiaGVhZGVycyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/github.ts\n"));

/***/ })

});