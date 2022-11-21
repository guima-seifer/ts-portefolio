"use strict";
exports.id = 712;
exports.ids = [712];
exports.modules = {

/***/ 4397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ fetchRepos),
/* harmony export */   "u": () => (/* binding */ fetchUsers)
/* harmony export */ });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7881);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const options = {
    method: "POST",
    headers: {
        "Content-type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
        "Authorization": `token ${GITHUB_TOKEN}`
    }
};
const fetchUsers = async (login)=>{
    const baseRoot = `${GITHUB_URL}/users/${login}`;
    const userReposURL = `${baseRoot}/repos`;
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(userReposURL, options);
    const resRepos = await res.json();
    const resUser = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(baseRoot);
    const user = await resUser.json();
    /*   console.log(user)
 */ return user;
};
//Get user and repos
const fetchRepos = async (login)=>{
    const baseRoot = `${GITHUB_URL}/users/${login}`;
    const userReposURL = `${baseRoot}/repos`;
    const resUser = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(userReposURL);
    const repos = await resUser.json();
    console.log(repos);
    return repos;
};


/***/ }),

/***/ 4232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Button = ({ title  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "bg-white text-pink-600 dark:text-white dark:bg-pink-600 dark:hover:bg-white dark:hover:text-pink-600 group border-2 px-6 py-3 border-pink-600 my-2 flex items-center hover:bg-pink-600 hover:text-white mx-auto",
        children: title
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 7204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Section = ({ ...Props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: Props.charKey,
        className: "sm:py-8 w-full h-screen bg-white dark:bg-[#0a192f] text-gray-900 dark:text-gray-300 py-8",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full",
            children: Props.children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);


/***/ }),

/***/ 3398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const TitleSection = ({ ...Props })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-4xl font-bold inline border-b-4 border-pink-600",
                children: Props.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "pt-4",
                children: Props.desc
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TitleSection);


/***/ }),

/***/ 712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ repos)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./api/github.ts
var github = __webpack_require__(4397);
// EXTERNAL MODULE: ./components/layout/section/index.tsx
var section = __webpack_require__(7204);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: ./components/layout/Button.tsx
var Button = __webpack_require__(4232);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/repos-section/item.tsx




function RepoItem({ name , id , description , html_url , forks , open_issues , watchers_count , stargazers_count  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "shadow-lg shadow-[#040c16] group container flex content-div mt-3",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "my-4 mx-4",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "text-xl font-bold justify-center text-black tracking-wider dark:text-white",
                    children: name
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-black tracking-wider dark:text-gray-300",
                    children: description
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: " grid content-center grid-cols-4 justify-items-stretch gap-4 mt-3 mx-4 ",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "px-3 ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaEye, {
                                    className: "mr-2"
                                }),
                                " ",
                                watchers_count
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "px-3 ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaStar, {
                                    className: "mr -2"
                                }),
                                " ",
                                stargazers_count
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "px-3 ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaInfo, {
                                    className: "mr-2"
                                }),
                                " ",
                                open_issues
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "px-3 ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaUtensils, {
                                    className: "mr-2"
                                }),
                                " ",
                                forks
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex justify-center pt-3",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        className: "mx-auto",
                        target: "_blank",
                        href: `${html_url}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaLink, {
                                className: "mr -2"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                title: "Repo"
                            })
                        ]
                    })
                })
            ]
        })
    }, id);
}
/* harmony default export */ const item = (RepoItem);

;// CONCATENATED MODULE: ./components/repos-section/list.tsx


function RepoList({ repos  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "pt-5 grid sm:grid-cols-2 md:grid-cols-3 gap-4",
        children: repos.map((repo, index)=>/*#__PURE__*/ jsx_runtime_.jsx(item, {
                ...repo
            }, index))
    });
}
/* harmony default export */ const list = (RepoList);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/layout/section/title.tsx
var title = __webpack_require__(3398);
;// CONCATENATED MODULE: ./components/repos-section/user-info.tsx






function UserItem({ avatar_url , login  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(title/* default */.Z, {
                title: "Repos",
                desc: "My github repositories."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-8 flex flex-row",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "shadow-md",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mx-auto",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    className: "mx-auto",
                                    src: avatar_url,
                                    alt: "Github Profile Pic",
                                    height: 100,
                                    width: 100
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                    className: "text-center font-bold",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaGithubAlt, {
                                            className: "inline mr-2"
                                        }),
                                        login
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mx-3",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                className: "mx-auto",
                                target: "_blank",
                                href: `https://github.com/${login}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    title: "Visit Profile"
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const user_info = (UserItem);

;// CONCATENATED MODULE: ./pages/repos/index.tsx





const Repos = ({ user , repos  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(section/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(user_info, {
                ...user
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(list, {
                repos: repos
            })
        ]
    });
/* getInitialProps enables server-side rendering in a page and 
allows you to do initial data population, it means sending the 
page with the data already populated from the server. 
This is especially useful for SEO. */ Repos.getInitialProps = async ()=>{
    const user = await (0,github/* fetchUsers */.u)("guima-seifer");
    const repos = await (0,github/* fetchRepos */.p)("guima-seifer");
    return {
        user,
        repos
    };
};
/* harmony default export */ const repos = (Repos);


/***/ })

};
;