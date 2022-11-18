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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchUsers\": function() { return /* binding */ fetchUsers; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_extends_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_extends.mjs */ \"./node_modules/@swc/helpers/src/_extends.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\n\n\nvar GITHUB_URL = process.env.REACT_APP_GITHUB_URL;\nvar GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;\nvar fetchUsers = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function(login) {\n        var headers, baseRoot, userReposURL, res, data, res2, data2;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    headers = {\n                        Authorization: \"token \".concat(GITHUB_TOKEN)\n                    };\n                    baseRoot = \"GITHUB_URL\".concat(login);\n                    userReposURL = \"\".concat(baseRoot, \"/repos\");\n                    return [\n                        4,\n                        isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(userReposURL)\n                    ];\n                case 1:\n                    res = _state.sent();\n                    return [\n                        4,\n                        res.json()\n                    ];\n                case 2:\n                    data = _state.sent();\n                    return [\n                        4,\n                        isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(baseRoot)\n                    ];\n                case 3:\n                    res2 = _state.sent();\n                    return [\n                        4,\n                        res2.json()\n                    ];\n                case 4:\n                    data2 = _state.sent();\n                    console.log(data2);\n                    return [\n                        2,\n                        data.map(function(_param) {\n                            var User = (0,_swc_helpers_src_extends_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, _param);\n                            return (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, User);\n                        })\n                    ];\n            }\n        });\n    });\n    return function fetchUsers(login) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvZ2l0aHViLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDc0M7QUFFdEMsSUFBTUMsYUFBYUMsT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDQyxvQkFBb0I7QUFDbkQsSUFBTUMsZUFBZUgsT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDRyxzQkFBc0I7QUFFaEQsSUFBTUM7ZUFBYSw2RkFBT0MsT0FBa0M7WUFFM0RDLFNBSUFDLFVBQ0FDLGNBQ0FDLEtBRUFDLE1BRUFDLE1BQ0FDOzs7O29CQVhBTixVQUFVO3dCQUNkTyxlQUFlLFNBQXNCLE9BQWJYO29CQUMxQjtvQkFFTUssV0FBVyxhQUFtQixPQUFORjtvQkFDeEJHLGVBQWUsR0FBWSxPQUFURCxVQUFTO29CQUNyQjs7d0JBQU1WLHlEQUFLQSxDQUFDVzs7O29CQUFsQkMsTUFBTTtvQkFFQzs7d0JBQU1BLElBQUlLLElBQUk7OztvQkFBckJKLE9BQU87b0JBRUE7O3dCQUFNYix5REFBS0EsQ0FBQ1U7OztvQkFBbkJJLE9BQU87b0JBQ0M7O3dCQUFNQSxLQUFLRyxJQUFJOzs7b0JBQXZCRixRQUFRO29CQUNkRyxRQUFRQyxHQUFHLENBQUNKO29CQUVaOzt3QkFBT0YsS0FBS08sR0FBRyxDQUNiLGlCQUF5QjtnQ0FBbkJDLE9BQUFBLHdFQUFBQTttQ0FBbUIsbUZBQUtBO3dCQUFLOzs7O0lBRXZDO29CQW5CYWQsV0FBb0JDOzs7SUFtQmhDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwaS9naXRodWIudHM/NjRkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWwvVXNlcidcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuXHJcbmNvbnN0IEdJVEhVQl9VUkwgPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfR0lUSFVCX1VSTFxyXG5jb25zdCBHSVRIVUJfVE9LRU4gPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfR0lUSFVCX1RPS0VOXHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hVc2VycyA9IGFzeW5jIChsb2dpbiA6IHN0cmluZyk6IFByb21pc2U8VXNlcj4gPT4ge1xyXG5cclxuICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgQXV0aG9yaXphdGlvbjogYHRva2VuICR7R0lUSFVCX1RPS0VOfWAsXHJcbiAgfVxyXG5cclxuICBjb25zdCBiYXNlUm9vdCA9IGBHSVRIVUJfVVJMJHtsb2dpbn1gXHJcbiAgY29uc3QgdXNlclJlcG9zVVJMID0gYCR7YmFzZVJvb3R9L3JlcG9zYFxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVzZXJSZXBvc1VSTClcclxuICBcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgY29uc3QgcmVzMiA9IGF3YWl0IGZldGNoKGJhc2VSb290KVxyXG4gIGNvbnN0IGRhdGEyID0gYXdhaXQgcmVzMi5qc29uKCk7XHJcbiAgY29uc29sZS5sb2coZGF0YTIpXHJcblxyXG4gIHJldHVybiBkYXRhLm1hcChcclxuICAgICh7IC4uLlVzZXIgfSA6IFVzZXIpID0+ICh7IC4uLlVzZXIgfSBhcyBVc2VyKVxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiZmV0Y2giLCJHSVRIVUJfVVJMIiwicHJvY2VzcyIsImVudiIsIlJFQUNUX0FQUF9HSVRIVUJfVVJMIiwiR0lUSFVCX1RPS0VOIiwiUkVBQ1RfQVBQX0dJVEhVQl9UT0tFTiIsImZldGNoVXNlcnMiLCJsb2dpbiIsImhlYWRlcnMiLCJiYXNlUm9vdCIsInVzZXJSZXBvc1VSTCIsInJlcyIsImRhdGEiLCJyZXMyIiwiZGF0YTIiLCJBdXRob3JpemF0aW9uIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/github.ts\n"));

/***/ })

});