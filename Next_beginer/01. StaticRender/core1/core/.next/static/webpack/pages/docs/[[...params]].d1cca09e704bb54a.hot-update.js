"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/docs/[[...params]]",{

/***/ "./pages/docs/[[...params]].js":
/*!*************************************!*\
  !*** ./pages/docs/[[...params]].js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar params = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var _query = router.query, _params = _query.params, params1 = _params === void 0 ? [] : _params;\n    console.log(params1);\n    if (params1.length === 1) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"features Page \",\n                    params1[0]\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\NextJs\\\\core1\\\\core\\\\pages\\\\docs\\\\[[...params]].js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, _this)\n        }, void 0, false));\n    } else if (params1.length === 2) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Feature page \",\n                    params1[0],\n                    \" and Example  \",\n                    params1[2]\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\NextJs\\\\core1\\\\core\\\\pages\\\\docs\\\\[[...params]].js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, _this)\n        }, void 0, false));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Hello, Docs Home Page\"\n        }, void 0, false, {\n            fileName: \"D:\\\\NextJs\\\\core1\\\\core\\\\pages\\\\docs\\\\[[...params]].js\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\NextJs\\\\core1\\\\core\\\\pages\\\\docs\\\\[[...params]].js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, _this));\n};\n_s(params, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (params);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kb2NzL1tbLi4ucGFyYW1zXV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFxQzs7O0FBRXJDLEdBQUssQ0FBQ0MsTUFBTSxHQUFHLFFBQVEsR0FBRixDQUFDOztJQUNsQixHQUFLLENBQUNDLE1BQU0sR0FBR0Ysc0RBQVM7SUFDeEIsR0FBSyxDQUFlRSxNQUFZLEdBQVpBLE1BQU0sQ0FBQ0MsS0FBSyxZQUFaRCxNQUFZLENBQXpCRCxNQUFNLEVBQU5BLE9BQU0sd0JBQUMsQ0FBQyxDQUFDO0lBQ2hCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osT0FBTTtJQUNsQixFQUFFLEVBQUVBLE9BQU0sQ0FBQ0ssTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ3RCLE1BQU07a0dBQ0RDLENBQUU7O29CQUFDLENBQWM7b0JBQUVOLE9BQU0sQ0FBQyxDQUFDOzs7Ozs7OztJQUVwQyxDQUFDLE1BQU0sRUFBRSxFQUFFQSxPQUFNLENBQUNLLE1BQU0sS0FBSyxDQUFDLEVBQUMsQ0FBQztRQUM1QixNQUFNO2tHQUNEQyxDQUFFOztvQkFBQyxDQUFhO29CQUFDTixPQUFNLENBQUMsQ0FBQztvQkFBRSxDQUFjO29CQUFDQSxPQUFNLENBQUMsQ0FBQzs7Ozs7Ozs7SUFFM0QsQ0FBQztJQUNELE1BQU0sNkVBQ0RPLENBQUc7OEZBQ0NELENBQUU7c0JBQUMsQ0FBcUI7Ozs7Ozs7Ozs7O0FBR3JDLENBQUM7R0FsQktOLE1BQU07O1FBQ09ELGtEQUFTOzs7QUFtQjVCLCtEQUFlQyxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jcy9bWy4uLnBhcmFtc11dLmpzP2VhOGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgcGFyYW1zID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHtwYXJhbXM9W119ID0gcm91dGVyLnF1ZXJ5XHJcbiAgICBjb25zb2xlLmxvZyhwYXJhbXMpO1xyXG4gICAgaWYgKHBhcmFtcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAgPGgxPmZlYXR1cmVzIFBhZ2UgeyBwYXJhbXNbMF19PC9oMT5cclxuICAgICAgICA8Lz5cclxuICAgIH0gZWxzZSBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMil7XHJcbiAgICAgICAgcmV0dXJuIDw+XHJcbiAgICAgICAgICAgIDxoMT5GZWF0dXJlIHBhZ2Uge3BhcmFtc1swXX0gYW5kIEV4YW1wbGUgIHtwYXJhbXNbMl19PC9oMT5cclxuICAgICAgICA8Lz5cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPkhlbGxvLCBEb2NzIEhvbWUgUGFnZTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYXJhbXM7Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInBhcmFtcyIsInJvdXRlciIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImgxIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/docs/[[...params]].js\n");

/***/ })

});