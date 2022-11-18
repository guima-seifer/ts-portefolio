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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchUsers\": function() { return /* binding */ fetchUsers; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\nvar GITHUB_URL = process.env.REACT_APP_GITHUB_URL;\nvar GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;\nvar fetchUsers = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function(login) {\n        var baseURL, requestHeaders, baseRoot, userReposURL, res, data;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    baseURL = \"https://api.github.com/users/\";\n                    requestHeaders = new Headers();\n                    requestHeaders.set(\"Content-Type\", \"application/json\");\n                    requestHeaders.set(\"Authorization\", \"token \".concat(GITHUB_TOKEN));\n                    baseRoot = \"\".concat(GITHUB_URL, \"/users/\").concat(login);\n                    userReposURL = \"\".concat(baseRoot, \"/repos\");\n                    return [\n                        4,\n                        isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(userReposURL, {\n                            headers: requestHeaders\n                        })\n                    ];\n                case 1:\n                    res = _state.sent();\n                    return [\n                        4,\n                        res.json()\n                    ];\n                case 2:\n                    data = _state.sent();\n                    /*   const res2 = await fetch(baseRoot)\r\n  const data2 = await res2.json();\r\n  console.log(data2) */ return [\n                        2,\n                        data\n                    ];\n            }\n        });\n    });\n    return function fetchUsers(login) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvZ2l0aHViLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNzQztBQUV0QyxJQUFNQyxhQUFhQyxPQUFPQSxDQUFDQyxHQUFHLENBQUNDLG9CQUFvQjtBQUNuRCxJQUFNQyxlQUFlSCxPQUFPQSxDQUFDQyxHQUFHLENBQUNHLHNCQUFzQjtBQUVoRCxJQUFNQztlQUFhLDZGQUFPQyxPQUFrQztZQUMzREMsU0FDQUMsZ0JBS0FDLFVBQ0FDLGNBQ0FDLEtBR0FDOzs7O29CQVhBTCxVQUFVO29CQUNWQyxpQkFBOEIsSUFBSUs7b0JBQzFDTCxlQUFlTSxHQUFHLENBQUMsZ0JBQWdCO29CQUNuQ04sZUFBZU0sR0FBRyxDQUFDLGlCQUFpQixTQUFzQixPQUFiWDtvQkFHckNNLFdBQVcsR0FBdUJILE9BQXBCUCxZQUFXLFdBQWUsT0FBTk87b0JBQ2xDSSxlQUFlLEdBQVksT0FBVEQsVUFBUztvQkFDckI7O3dCQUFNWCx5REFBS0EsQ0FBQ1ksY0FBYzs0QkFDcENLLFNBQVNQO3dCQUFlOzs7b0JBRHBCRyxNQUFNO29CQUdDOzt3QkFBTUEsSUFBSUssSUFBSTs7O29CQUFyQkosT0FBTztvQkFFZjs7d0JBSVNBOzs7O0lBQ1Q7Ozs7SUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcGkvZ2l0aHViLnRzPzY0ZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL21vZGVsL1VzZXInXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXHJcblxyXG5jb25zdCBHSVRIVUJfVVJMID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0dJVEhVQl9VUkxcclxuY29uc3QgR0lUSFVCX1RPS0VOID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0dJVEhVQl9UT0tFTlxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoVXNlcnMgPSBhc3luYyAobG9naW4gOiBzdHJpbmcpOiBQcm9taXNlPFVzZXI+ID0+IHtcclxuICBjb25zdCBiYXNlVVJMID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJ1xyXG4gIGNvbnN0IHJlcXVlc3RIZWFkZXJzOiBIZWFkZXJzSW5pdCA9IG5ldyBIZWFkZXJzKCk7XHJcbnJlcXVlc3RIZWFkZXJzLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxucmVxdWVzdEhlYWRlcnMuc2V0KCdBdXRob3JpemF0aW9uJywgYHRva2VuICR7R0lUSFVCX1RPS0VOfWApXHJcblxyXG5cclxuICBjb25zdCBiYXNlUm9vdCA9IGAke0dJVEhVQl9VUkx9L3VzZXJzLyR7bG9naW59YFxyXG4gIGNvbnN0IHVzZXJSZXBvc1VSTCA9IGAke2Jhc2VSb290fS9yZXBvc2BcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1c2VyUmVwb3NVUkwsIHtcclxuICAgIGhlYWRlcnM6IHJlcXVlc3RIZWFkZXJzLH0pXHJcbiAgXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4vKiAgIGNvbnN0IHJlczIgPSBhd2FpdCBmZXRjaChiYXNlUm9vdClcclxuICBjb25zdCBkYXRhMiA9IGF3YWl0IHJlczIuanNvbigpO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEyKSAqL1xyXG5cclxuICByZXR1cm4gZGF0YVxyXG59Il0sIm5hbWVzIjpbImZldGNoIiwiR0lUSFVCX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfR0lUSFVCX1VSTCIsIkdJVEhVQl9UT0tFTiIsIlJFQUNUX0FQUF9HSVRIVUJfVE9LRU4iLCJmZXRjaFVzZXJzIiwibG9naW4iLCJiYXNlVVJMIiwicmVxdWVzdEhlYWRlcnMiLCJiYXNlUm9vdCIsInVzZXJSZXBvc1VSTCIsInJlcyIsImRhdGEiLCJIZWFkZXJzIiwic2V0IiwiaGVhZGVycyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/github.ts\n"));

/***/ })

});