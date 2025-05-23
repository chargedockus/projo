/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "(pages-dir-browser)/./components/HeroSection.js":
/*!***********************************!*\
  !*** ./components/HeroSection.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(pages-dir-browser)/./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(pages-dir-browser)/./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(pages-dir-browser)/./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"(pages-dir-browser)/./components/Navbar.js\");\n/* harmony import */ var _components_HeroSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HeroSection */ \"(pages-dir-browser)/./components/HeroSection.js\");\n/* harmony import */ var _components_HeroSection__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_HeroSection__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ProblemSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProblemSection */ \"(pages-dir-browser)/./components/ProblemSection.js\");\n/* harmony import */ var _components_SolutionSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SolutionSection */ \"(pages-dir-browser)/./components/SolutionSection.js\");\n/* harmony import */ var _components_CtaSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/CtaSection */ \"(pages-dir-browser)/./components/CtaSection.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer */ \"(pages-dir-browser)/./components/Footer.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    // Update document title\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Home.useEffect\": ()=>{\n            document.title = 'ChargeDock - Sustainable E-Mobility Charging';\n            // Smooth scrolling for anchor links\n            document.querySelectorAll('a[href^=\"#\"]').forEach({\n                \"Home.useEffect\": (anchor)=>{\n                    anchor.addEventListener('click', {\n                        \"Home.useEffect\": function(e) {\n                            e.preventDefault();\n                            const href = this.getAttribute('href');\n                            if (!href) return;\n                            const targetElement = document.querySelector(href);\n                            if (!targetElement) return;\n                            window.scrollTo({\n                                top: targetElement.getBoundingClientRect().top + window.scrollY,\n                                behavior: 'smooth'\n                            });\n                        }\n                    }[\"Home.useEffect\"]);\n                }\n            }[\"Home.useEffect\"]);\n            return ({\n                \"Home.useEffect\": ()=>{\n                    document.querySelectorAll('a[href^=\"#\"]').forEach({\n                        \"Home.useEffect\": (anchor)=>{\n                            anchor.removeEventListener('click', {\n                                \"Home.useEffect\": ()=>{}\n                            }[\"Home.useEffect\"]);\n                        }\n                    }[\"Home.useEffect\"]);\n                }\n            })[\"Home.useEffect\"];\n        }\n    }[\"Home.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gray-50\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/diegomarquez/Desktop/chargedock/project/pages/index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_HeroSection__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {\n                fileName: \"/Users/diegomarquez/Desktop/chargedock/project/pages/index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProblemSection__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/diegomarquez/Desktop/chargedock/project/pages/index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SolutionSection__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/diegomarquez/Desktop/chargedock/project/pages/index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CtaSection__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/diegomarquez/Desktop/chargedock/project/pages/index.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/diegomarquez/Desktop/chargedock/project/pages/index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/diegomarquez/Desktop/chargedock/project/pages/index.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1icm93c2VyKS8uL3BhZ2VzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0M7QUFDVTtBQUNNO0FBQ0U7QUFDVjtBQUNSO0FBRTNCLFNBQVNROztJQUN0Qix3QkFBd0I7SUFDeEJQLGdEQUFTQTswQkFBQztZQUNSUSxTQUFTQyxLQUFLLEdBQUc7WUFFakIsb0NBQW9DO1lBQ3BDRCxTQUFTRSxnQkFBZ0IsQ0FBQyxnQkFBZ0JDLE9BQU87a0NBQUNDLENBQUFBO29CQUNoREEsT0FBT0MsZ0JBQWdCLENBQUM7MENBQVMsU0FBVUMsQ0FBQzs0QkFDMUNBLEVBQUVDLGNBQWM7NEJBRWhCLE1BQU1DLE9BQU8sSUFBSSxDQUFDQyxZQUFZLENBQUM7NEJBQy9CLElBQUksQ0FBQ0QsTUFBTTs0QkFFWCxNQUFNRSxnQkFBZ0JWLFNBQVNXLGFBQWEsQ0FBQ0g7NEJBQzdDLElBQUksQ0FBQ0UsZUFBZTs0QkFFcEJFLE9BQU9DLFFBQVEsQ0FBQztnQ0FDZEMsS0FBS0osY0FBY0sscUJBQXFCLEdBQUdELEdBQUcsR0FBR0YsT0FBT0ksT0FBTztnQ0FDL0RDLFVBQVU7NEJBQ1o7d0JBQ0Y7O2dCQUNGOztZQUVBO2tDQUFPO29CQUNMakIsU0FBU0UsZ0JBQWdCLENBQUMsZ0JBQWdCQyxPQUFPOzBDQUFDQyxDQUFBQTs0QkFDaERBLE9BQU9jLG1CQUFtQixDQUFDO2tEQUFTLEtBQU87O3dCQUM3Qzs7Z0JBQ0Y7O1FBQ0Y7eUJBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQzNCLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNDLGdFQUFXQTs7Ozs7MEJBQ1osOERBQUNDLGtFQUFjQTs7Ozs7MEJBQ2YsOERBQUNDLG1FQUFlQTs7Ozs7MEJBQ2hCLDhEQUFDQyw4REFBVUE7Ozs7OzBCQUNYLDhEQUFDQywwREFBTUE7Ozs7Ozs7Ozs7O0FBR2I7R0F4Q3dCQztLQUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL2RpZWdvbWFycXVlei9EZXNrdG9wL2NoYXJnZWRvY2svcHJvamVjdC9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgSGVyb1NlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9IZXJvU2VjdGlvbic7XG5pbXBvcnQgUHJvYmxlbVNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9ibGVtU2VjdGlvbic7XG5pbXBvcnQgU29sdXRpb25TZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvU29sdXRpb25TZWN0aW9uJztcbmltcG9ydCBDdGFTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvQ3RhU2VjdGlvbic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gVXBkYXRlIGRvY3VtZW50IHRpdGxlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQudGl0bGUgPSAnQ2hhcmdlRG9jayAtIFN1c3RhaW5hYmxlIEUtTW9iaWxpdHkgQ2hhcmdpbmcnO1xuXG4gICAgLy8gU21vb3RoIHNjcm9sbGluZyBmb3IgYW5jaG9yIGxpbmtzXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXj1cIiNcIl0nKS5mb3JFYWNoKGFuY2hvciA9PiB7XG4gICAgICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgaHJlZiA9IHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgIGlmICghaHJlZikgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhyZWYpO1xuICAgICAgICBpZiAoIXRhcmdldEVsZW1lbnQpIHJldHVybjtcblxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgIHRvcDogdGFyZ2V0RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXj1cIiNcIl0nKS5mb3JFYWNoKGFuY2hvciA9PiB7XG4gICAgICAgIGFuY2hvci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHt9KTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWdyYXktNTBcIj5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxIZXJvU2VjdGlvbiAvPlxuICAgICAgPFByb2JsZW1TZWN0aW9uIC8+XG4gICAgICA8U29sdXRpb25TZWN0aW9uIC8+XG4gICAgICA8Q3RhU2VjdGlvbiAvPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIk5hdmJhciIsIkhlcm9TZWN0aW9uIiwiUHJvYmxlbVNlY3Rpb24iLCJTb2x1dGlvblNlY3Rpb24iLCJDdGFTZWN0aW9uIiwiRm9vdGVyIiwiSG9tZSIsImRvY3VtZW50IiwidGl0bGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImFuY2hvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiZ2V0QXR0cmlidXRlIiwidGFyZ2V0RWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInNjcm9sbFkiLCJiZWhhdmlvciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-browser)/./pages/index.js\n"));

/***/ })

});