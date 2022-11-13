(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 46:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(764);
;// CONCATENATED MODULE: external "styled-components"
const external_styled_components_namespaceObject = require("styled-components");
;// CONCATENATED MODULE: ./styles/globalStyle.ts

const GlobalStyle = external_styled_components_namespaceObject.createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

`;

;// CONCATENATED MODULE: external "tailwind-styled-components"
const external_tailwind_styled_components_namespaceObject = require("tailwind-styled-components");
var external_tailwind_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_tailwind_styled_components_namespaceObject);
;// CONCATENATED MODULE: ./styles/theme.ts

const theme = {
    colors: {
        primary: "#212121"
    }
};
const Section = (external_tailwind_styled_components_default()).div`
 w-full
 h-screen
  bg-white
   dark:bg-[#0a192f]
    text-gray-900
     dark:text-gray-300
  `;

;// CONCATENATED MODULE: ./pages/_app.tsx





function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_styled_components_namespaceObject.ThemeProvider, {
            theme: theme,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(GlobalStyle, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    });
}


/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(46));
module.exports = __webpack_exports__;

})();