"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,744];
exports.modules = {

/***/ 154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/layout/section/index.tsx
var section = __webpack_require__(7204);
// EXTERNAL MODULE: ./components/layout/section/title.tsx
var title = __webpack_require__(3398);
;// CONCATENATED MODULE: ./components/about-section/index.tsx




const About = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(section/* default */.Z, {
        charKey: "about",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid grid-cols-2 gap-8",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sm:text-right pb-8",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(title/* default */.Z, {
                        title: "About"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "max-w-[1000px] w-full grid sm:grid-cols-2 gap-8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-3xl font-bold",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Nice to meet you. Please take a look around."
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "I\xb4m developer from Portugal. My academic background is Telecommunications and Computer Sciences at the University of Minho. I\xb4ve also experience in business management, namely in tourism and short-term rentals, and bitcoin atm operation."
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const about_section = (About);

// EXTERNAL MODULE: ./components/layout/Button.tsx
var Button = __webpack_require__(4232);
;// CONCATENATED MODULE: ./components/contact-section/index.tsx





const Contact = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(section/* default */.Z, {
        charKey: "contact",
        className: "",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
            method: "POST",
            action: "https://getform.io/f/be51338c-b526-44b0-9a54-131fea7b9c13",
            className: "flex flex-col max-w-[1000px] w-full",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(title/* default */.Z, {
                    title: "Contact",
                    desc: "Submit the form to send me an email"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    className: "bg-[#f1f1f1] p-2",
                    type: "text",
                    name: "name",
                    id: "name",
                    placeholder: "Name"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    className: "bg-[#f1f1f1] my-4 p-2",
                    type: "email",
                    name: "email",
                    id: "email",
                    placeholder: "Email"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                    className: "bg-[#f1f1f1]",
                    name: "message",
                    id: "message",
                    rows: 10,
                    placeholder: "Message"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                    title: "Let\xb4s Work Together"
                })
            ]
        })
    });
};
/* harmony default export */ const contact_section = (Contact);

;// CONCATENATED MODULE: external "react-icons/hi"
const hi_namespaceObject = require("react-icons/hi");
;// CONCATENATED MODULE: ./components/hero-section/index.tsx



const Hero = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(section/* default */.Z, {
        charKey: "home",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "dark:text-pink-600",
                children: "Hi, my name is"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-4xl sm:text-7xl font-bold ",
                children: "Fernando Guimar\xe3es"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-4xl sm:text-7xl font-bold text-gray-500",
                children: "I\xb4m a frontend developer."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-gray-500 py-4 max-w-[700px]",
                children: "Specializing in building applications with React."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    className: "bg-pink-600 text-white group border-2 px-6 py-3 my-2 flex items-center dark:hover:border-pink-600 hover:border-pink-600",
                    children: [
                        "View Work",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "group-hover:rotate-90 duration-300",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(hi_namespaceObject.HiArrowNarrowRight, {
                                className: "ml-3"
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const hero_section = (Hero);

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: external "react-icons/bs"
const bs_namespaceObject = require("react-icons/bs");
;// CONCATENATED MODULE: external "react-scroll"
const external_react_scroll_namespaceObject = require("react-scroll");
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./assets/logo192.png
/* harmony default export */ const logo192 = ({"src":"/_next/static/media/logo192.8cbf9221.png","height":192,"width":192,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEVMaXF+lViFs3S9qWv7p2Zkwo6nrmX0v6LxqnKGwG2HyXuQwnKOxXf2mV72rW+Px3n5z4rynmKDpmlijFvHomP0uXf/1Iu1unZym1mX1YSV0ICW0HzAsWn9z4XNwHjaqmoK2U3dAAAAHHRSTlMA/mqU/Qf9Bkb1KM57+4x4ffCeSf3j0Nv7S46/tcUn4gAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEBJREFUeJw9xkUSgDAQAMGJEEGC+yb8/5dUcaBPDb8wpOABv2bbfdmyHfsaqr0sLjZg1KFcbMHIIzIB56VvPcMLSUgCfEmR3E0AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./components/layout/navbar/index.tsx








const Navbar = ({ updateDarkMode  })=>{
    const [nav, setNav] = (0,external_react_.useState)(false);
    const [darkMode, setDarkMode] = (0,external_react_.useState)(false);
    const handleClick = ()=>setNav(!nav);
    const changeTheme = (event)=>{
        setDarkMode(!darkMode);
        updateDarkMode(!darkMode);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "fixed w-full h-[80px] flex justify-between items-center px-4 bg-teal-900 text-gray-200",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mx-8",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: logo192,
                    alt: "",
                    style: {
                        width: "50px"
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "hidden md:flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsFillMoonStarsFill, {
                            onClick: changeTheme,
                            className: "mr-2 inline first-letter:cursor-pointer"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_namespaceObject.Link, {
                            to: "home",
                            smooth: true,
                            duration: 500,
                            children: "Home"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_namespaceObject.Link, {
                            to: "about",
                            smooth: true,
                            duration: 500,
                            children: "About"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_namespaceObject.Link, {
                            to: "skills",
                            smooth: true,
                            duration: 500,
                            children: "Skills"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_namespaceObject.Link, {
                            to: "work",
                            smooth: true,
                            duration: 500,
                            children: "Work"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_namespaceObject.Link, {
                            to: "contact",
                            smooth: true,
                            duration: 500,
                            children: "Contact"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: handleClick,
                className: "md:hidden z-10",
                children: !nav ? /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaBars, {}) : /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaTimes, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: !nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        className: "py-6 text-4xl",
                        children: [
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_namespaceObject.Link, {
                                onClick: handleClick,
                                to: "home",
                                smooth: true,
                                duration: 500,
                                children: "Home"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "py-6 text-4xl",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_namespaceObject.Link, {
                            onClick: handleClick,
                            to: "about",
                            smooth: true,
                            duration: 500,
                            children: "About"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "py-6 text-4xl",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_namespaceObject.Link, {
                            onClick: handleClick,
                            to: "skills",
                            smooth: true,
                            duration: 500,
                            children: "Skills"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "py-6 text-4xl",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_namespaceObject.Link, {
                            onClick: handleClick,
                            to: "work",
                            smooth: true,
                            duration: 500,
                            children: "Work"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "py-6 text-4xl",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_namespaceObject.Link, {
                            onClick: handleClick,
                            to: "contact",
                            smooth: true,
                            duration: 500,
                            children: "Contact"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hidden md:flex fixed flex-col top-[35%] left-0",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "w-[160px] h-[60px] flex justify-between items-center bg-teal-900 ml-[-100px] hover:ml-[-10px] duration-500",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: "flex justify-between items-center w-full text-gray-300",
                                href: "https://www.linkedin.com/in/fernandoguima/",
                                rel: "noreferrer",
                                target: "_blank",
                                children: [
                                    "Linkedin ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaLinkedin, {
                                        size: 30
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "w-[160px] h-[60px] flex justify-between items-center bg-teal-900 ml-[-100px] hover:ml-[-10px] duration-500",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: "flex justify-between items-center w-full text-gray-300",
                                href: "https://github.com/guima-seifer",
                                rel: "noreferrer",
                                target: "_blank",
                                children: [
                                    "Github ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaGithub, {
                                        size: 30
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "w-[160px] h-[60px] flex justify-between items-center bg-teal-900 ml-[-100px] hover:ml-[-10px] duration-500",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: "flex justify-between items-center w-full text-gray-300",
                                href: "mailto:fernandobvguimaraes@gmail.com",
                                rel: "noreferrer",
                                children: [
                                    "Email ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(hi_namespaceObject.HiOutlineMail, {
                                        size: 30
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "w-[160px] h-[60px] flex justify-between items-center bg-teal-900 ml-[-100px] hover:ml-[-10px] duration-500",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: "flex justify-between items-center w-full text-gray-300",
                                href: "/CV_FernandoGuimaraes_EN.pdf",
                                children: [
                                    "Resume ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsFillPersonLinesFill, {
                                        size: 30
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const navbar = (Navbar);

;// CONCATENATED MODULE: ./assets/html.png
/* harmony default export */ const html = ({"src":"/_next/static/media/html.e89c02ec.png","height":250,"width":250,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEXjRR7lQxTpsaLnUyf1oX7lTybsZTbmQxPjVC/ePyL4xbDgNw/iQhnhOhHkTSf5vaPkSBzjRR3nUSTjSyTzjWPq4N76w6fkWzfojXPoxr7mbUznn43wbz382cf959zpq5nun4X27+7uAAAAHHRSTlM7y/3s/v799wMT/SViS3T+kZHj6P79/f/////+PVWgIAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAERJREFUeJwFwYUBwCAQBLBDH6eOtt1/SxIkRUSkEkIZf35mQOx3lVJHoDTusga8Gv36tIcVjbtXWJizVDkPC4OdsQ1mAXvgA0d4WuNJAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/react.png
/* harmony default export */ const react = ({"src":"/_next/static/media/react.3ac94d47.png","height":250,"width":250,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEUA1/4A1/4A1/4A1/4A1/4A1/5MaXEA1/4A1/4A1/4MrcPvAAAACnRSTlN5GV2GSHMAIgU79rbmPgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADNJREFUeJw1i0kKADAMhEwmW///4ZJCb4JKmXe7FRVGWhSTADn4kaTwBVgY1uW8mI3/fgEfaQDaqbfOGAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/node.png
/* harmony default export */ const node = ({"src":"/_next/static/media/node.ec18d39f.png","height":250,"width":250,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEWLx0qLyEqLx0qLx0qLx0qLx0qLx0qLx0qLx0r7AyJ4AAAACXRSTlOAAmI9k28VUiJBOnAQAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAM0lEQVR4nBXGyRHAQAgEsZ4D2PwjdlkvIaWNxDKSWcjGuQG5Jf7DdQzP4/Pw6Mo8pIWTPhjjALewFJ+CAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/css.png
/* harmony default export */ const css = ({"src":"/_next/static/media/css.7e16fac1.png","height":250,"width":250,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEUCdLpPncwCd710s9ex2e7G6/wAb7kHeb0NcrQAgcwAdbwAc7sAcbkIdbhrwuwAdr0Ab7tmq9Ryr9OQvtlNvPGOz+8AcLsAeMSZ2vkCd70GlNwAf8hCms4AiNJEseg8AfivAAAAGXRSTlNG/Yr+/f38BSD3dPheNP6T/v78/fz+0NH9kL7E6gAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAEVJREFUeJwVxkcSgCAQBMABlpzMugT//0zLPjUkm6X7LhFYrOVoAYk3deqWADaK9AQyi1H0zHBxJ3q8g4083vYH9bor7Ad9wQNwgP4LDwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/firebase.png
/* harmony default export */ const firebase = ({"src":"/_next/static/media/firebase.8ec987e0.png","height":250,"width":250,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEX/xQD+rgD+kgD+pAD/tgD+wwD+xQBMaXH+qwD+wQD+wgD+wwD+wgD+oAD+oAD/cwD+mAD+ngD+lgD+hQD+nwDyI+gTAAAAE3RSTlP+F8Ry/rzKADN9WZn4Rez5hiSQN4q/qwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADlJREFUeJwdyUcSgCAAwMBQA4oV//9WR/e6GJIfvPazGcTtmbEuYppHpov3zLCKMY9BFTvwl62Upi9IDAHahXh08AAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/github.png
/* harmony default export */ const github = ({"src":"/_next/static/media/github.fc98b4a7.png","height":250,"width":250,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEVMaXHt7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e1u+JsXAAAADXRSTlMAIInVt+g69qdYBw4Eoxrk5gAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADhJREFUeJwVxrcRwEAMBLE92nfsv12NEAG0MpdAnt3pIhwJD8YArP+8hw3h+7w9QYVdzRSUnbuKDyWoAT7YJZoEAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/mongo.png
/* harmony default export */ const mongo = ({"src":"/_next/static/media/mongo.155fdbaf.png","height":250,"width":250,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEU472xMlUdQlEpJv1NQgUNnVUVdQTdbTTpNo01JzlhKs1BRjEh3i2Vsh1p1uHZNoUxNoExJxFVaODJXYT5RrlN7x39gY0a7ad9iAAAAEnRSTlMCxddV9v76/o4wH935+f6kpESe8DGOAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAQElEQVR4nBXGQRaAIAgFwK+CoFb2AL3/UcvVDPocROPtULe9zRUq9YkqJ7xCRFGcV1QvQLbrtgygETM1nKX0+wFj0wJQMrtjKgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/tailwind.png
/* harmony default export */ const tailwind = ({"src":"/_next/static/media/tailwind.3c2dd1a9.png","height":250,"width":250,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEVMaXFDp7JDp7JDp7JDp7JDp7JDp7JDp7JDp7JDp7JYR9XBAAAACnRSTlMAWxJq9ym+zdcvV8vU0QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADBJREFUeJxNi0EOACAMwhgwN///YWOMUU5tUoA3Kg7EcGUCJOQORFtbMLM8biR+3wUP4ABx2S7kHgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./data/skills.ts








const skills = [
    {
        id: 1,
        name: "HTML",
        image: html
    },
    {
        id: 2,
        name: "CSS",
        image: css
    },
    {
        id: 3,
        name: "Reactjs",
        image: react
    },
    {
        id: 4,
        name: "Nodejs",
        image: node
    },
    {
        id: 5,
        name: "Firebase",
        image: firebase
    },
    {
        id: 6,
        name: "Github",
        image: github
    },
    {
        id: 7,
        name: "Mongodb",
        image: mongo
    },
    {
        id: 8,
        name: "Tailwind",
        image: tailwind
    }
];

;// CONCATENATED MODULE: ./components/skills-section/index.tsx
/* eslint-disable react/jsx-no-comment-textnodes */ 




const Skills = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(section/* default */.Z, {
        charKey: "skills",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(title/* default */.Z, {
                title: "Skills",
                desc: "These are the tecnologies I\xb4ve worked with"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 ",
                children: skills.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "py-5 shadow-md shadow-[#040c16] hover:scale-110 duration-500",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: item.image,
                                className: "w-20 mx-auto",
                                alt: "CSS Icon"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: item.name
                            })
                        ]
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const skills_section = (Skills);

;// CONCATENATED MODULE: ./assets/house-marketplace.png
/* harmony default export */ const house_marketplace = ({"src":"/_next/static/media/house-marketplace.cefde124.png","height":940,"width":960,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEX5+vuoq6yAdW25sa/19fbNzM7CxtDy9fnx8/bu8PPFtJ/T1dKloaHi5OdSUFVcV1/Gv7igk45+jZ2imYrJuquTnKKYfmXOwLDs6+tnfIiuO2aYAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAQElEQVR4nBXExxHAMAwDMLrIIl3S6/6L5oIH0J5MSkK47mNvtaK/Z9/CkjCGWQmlwCytcZ4iRFCUQKe7O4EM/H1e2AIomNjjWwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./data/work.ts

const works = [
    {
        id: 1,
        name: "House Marketplace",
        image: house_marketplace,
        github: "",
        live: "house-marketplace.affectiveturtle.pt"
    },
    {
        id: 2,
        name: "React JS Application",
        image: house_marketplace,
        github: "",
        live: ""
    },
    {
        id: 3,
        name: "React JS Application",
        image: house_marketplace,
        github: "",
        live: ""
    },
    {
        id: 4,
        name: "React JS Application",
        image: house_marketplace,
        github: "",
        live: ""
    }
];

;// CONCATENATED MODULE: ./components/work-section/index.tsx





/* eslint-disable react/jsx-no-comment-textnodes */ const Work = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(section/* default */.Z, {
        charKey: "work",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(title/* default */.Z, {
                title: "Work",
                desc: "Check out some of my recent work."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "pt-5 grid sm:grid-cols-2 md:grid-cols-3 gap-4",
                children: works.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            backgroundImage: `url(${item.image.src})`
                        },
                        className: "shadow-lg shadow-[#040c16] group container rounded-nd flex justify-center items-center mx-auto content-div mt-3",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "opacity-0 group-hover:opacity-100",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-2xl font-bold text-white tracking-wider",
                                    children: item.name
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "pt-8 text-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: item.github,
                                            target: "_blank"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font\xb4bold text-lg",
                                            children: "Demo"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: item.live,
                                            target: "_blank",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font\xb4bold text-lg",
                                                children: "Code"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const work_section = (Work);

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./api/github.ts
var api_github = __webpack_require__(4397);
// EXTERNAL MODULE: ./pages/repos/index.tsx + 3 modules
var pages_repos = __webpack_require__(712);
;// CONCATENATED MODULE: ./pages/index.tsx











const Home = ({ user , repos  })=>{
    const [darkMode, setDarkMode] = (0,external_react_.useState)(false);
    const updateDarkMode = (dark)=>{
        setDarkMode(dark);
    };
    (0,external_react_.useEffect)(()=>{}, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: darkMode ? "dark" : "",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Portefolio - Fernando Guimar\xe3es"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/logo192.png"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(navbar, {
                        updateDarkMode: updateDarkMode
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(hero_section, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(about_section, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(skills_section, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(work_section, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(pages_repos["default"], {
                        user: user,
                        repos: repos
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(contact_section, {})
                ]
            })
        ]
    });
};
Home.getInitialProps = async ()=>{
    const user = await (0,api_github/* fetchUsers */.u)("guima-seifer");
    const repos = await (0,api_github/* fetchRepos */.p)("guima-seifer");
    return {
        user,
        repos
    };
};
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 7881:
/***/ ((module) => {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,712], () => (__webpack_exec__(154)));
module.exports = __webpack_exports__;

})();