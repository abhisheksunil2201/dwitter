"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./hooks/useDwitter.ts":
/*!*****************************!*\
  !*** ./hooks/useDwitter.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_abhis_web3_Projects_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_abhis_web3_Projects_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_abhis_web3_Projects_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Dwitter_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dwitter.json */ \"./hooks/Dwitter.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar ContractABI = _Dwitter_json__WEBPACK_IMPORTED_MODULE_1__.abi;\nvar ContractAddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3';\nvar Ethereum =  true && window.ethereum;\nvar getDwitterContract = function() {\n    var provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.Web3Provider(Ethereum);\n    var signer = provider.getSigner();\n    return new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(ContractAddress, ContractABI, signer);\n};\nvar useDwitter = function() {\n    //const Dwitter = getDwitterContract();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), currentAccount = ref[0], setCurrentAccount = ref[1];\n    var connect = function() {\n        var _ref = _asyncToGenerator(C_Users_abhis_web3_Projects_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var accounts, account;\n            return C_Users_abhis_web3_Projects_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        if (Ethereum) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        alert('Please install MetaMask');\n                        return _ctx.abrupt(\"return\");\n                    case 4:\n                        _ctx.next = 6;\n                        return Ethereum.request({\n                            method: 'eth_requestAccounts'\n                        });\n                    case 6:\n                        accounts = _ctx.sent;\n                        if (!(accounts.length === 0)) {\n                            _ctx.next = 10;\n                            break;\n                        }\n                        console.log('No authorized accounts');\n                        return _ctx.abrupt(\"return\");\n                    case 10:\n                        account = accounts[0];\n                        console.log('Connected to account', account);\n                        setCurrentAccount(account);\n                        return _ctx.abrupt(\"return\");\n                    case 16:\n                        _ctx.prev = 16;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 19:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    16\n                ]\n            ]);\n        }));\n        return function connect() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!Ethereum) {\n            console.log('No ethereum wallets found, please get metamaask');\n            return;\n        }\n    });\n    return {\n        connect: connect,\n        account: currentAccount\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useDwitter);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VEd2l0dGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9DO0FBQ0w7QUFDWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNDLEdBQUssQ0FBQ0ksV0FBVyxHQUFHSiw4Q0FBVztBQUMvQixHQUFLLENBQUNNLGVBQWUsR0FBRyxDQUE0QztBQUNwRSxHQUFLLENBQUNDLFFBQVEsR0FBRyxLQUE2QixJQUFLQyxNQUFNLENBQVNDLFFBQVE7QUFFMUUsR0FBSyxDQUFDQyxrQkFBa0IsR0FBRyxRQUFRLEdBQUYsQ0FBQztJQUNoQyxHQUFLLENBQUNDLFFBQVEsR0FBRyxHQUFHLENBQUNWLGlFQUE2QixDQUFDTSxRQUFRO0lBQzNELEdBQUssQ0FBQ08sTUFBTSxHQUFHSCxRQUFRLENBQUNJLFNBQVM7SUFDakMsTUFBTSxDQUFDLEdBQUcsQ0FBQ2QsbURBQWUsQ0FBQ0ssZUFBZSxFQUFFRixXQUFXLEVBQUVVLE1BQU07QUFDakUsQ0FBQztBQUVELEdBQUssQ0FBQ0csVUFBVSxHQUFHLFFBQVEsR0FBRixDQUFDO0lBQ3hCLEVBQXVDO0lBQ3ZDLEdBQUssQ0FBdUNkLEdBQW9CLEdBQXBCQSwrQ0FBUSxDQUFTLENBQUUsSUFBeERlLGNBQWMsR0FBdUJmLEdBQW9CLEtBQXpDZ0IsaUJBQWlCLEdBQUloQixHQUFvQjtJQUNoRSxHQUFLLENBQUNpQixPQUFPO3lMQUFHLFFBQVEsV0FBSSxDQUFDO2dCQU1uQkMsUUFBUSxFQU9SQyxPQUFPOzs7Ozs0QkFYUmYsUUFBUTs7Ozt3QkFDWGdCLEtBQUssQ0FBQyxDQUF5Qjs7OzsrQkFHVmhCLFFBQVEsQ0FBQ2lCLE9BQU8sQ0FBQyxDQUFDOzRCQUN2Q0MsTUFBTSxFQUFFLENBQXFCO3dCQUMvQixDQUFDOzt3QkFGS0osUUFBUTs4QkFHVkEsUUFBUSxDQUFDSyxNQUFNLEtBQUssQ0FBQzs7Ozt3QkFDdkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQXdCOzs7d0JBR2hDTixPQUFPLEdBQUdELFFBQVEsQ0FBQyxDQUFDO3dCQUMxQk0sT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBc0IsdUJBQUVOLE9BQU87d0JBQzNDSCxpQkFBaUIsQ0FBQ0csT0FBTzs7Ozs7d0JBR3pCSyxPQUFPLENBQUNDLEdBQUc7Ozs7Ozs7Ozs7O1FBRWYsQ0FBQzt3QkFwQktSLE9BQU87Ozs7SUFzQmJsQixnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2YsRUFBRSxHQUFHSyxRQUFRLEVBQUUsQ0FBQztZQUNkb0IsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBaUQ7WUFDN0QsTUFBTTtRQUNSLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLENBQUM7UUFBQ1IsT0FBTyxFQUFQQSxPQUFPO1FBQUVFLE9BQU8sRUFBRUosY0FBYztJQUFDLENBQUM7QUFDN0MsQ0FBQztBQUVELCtEQUFlRCxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlRHdpdHRlci50cz9iNjA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEd2l0dGVyIGZyb20gJy4vRHdpdHRlci5qc29uJztcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IENvbnRyYWN0QUJJID0gRHdpdHRlci5hYmk7XHJcbmNvbnN0IENvbnRyYWN0QWRkcmVzcyA9ICcweDVmYmRiMjMxNTY3OGFmZWNiMzY3ZjAzMmQ5M2Y2NDJmNjQxODBhYTMnO1xyXG5jb25zdCBFdGhlcmV1bSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICh3aW5kb3cgYXMgYW55KS5ldGhlcmV1bTtcclxuXHJcbmNvbnN0IGdldER3aXR0ZXJDb250cmFjdCA9ICgpID0+IHtcclxuICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihFdGhlcmV1bSk7XHJcbiAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgcmV0dXJuIG5ldyBldGhlcnMuQ29udHJhY3QoQ29udHJhY3RBZGRyZXNzLCBDb250cmFjdEFCSSwgc2lnbmVyKTtcclxufTtcclxuXHJcbmNvbnN0IHVzZUR3aXR0ZXIgPSAoKSA9PiB7XHJcbiAgLy9jb25zdCBEd2l0dGVyID0gZ2V0RHdpdHRlckNvbnRyYWN0KCk7XHJcbiAgY29uc3QgW2N1cnJlbnRBY2NvdW50LCBzZXRDdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICBjb25zdCBjb25uZWN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCFFdGhlcmV1bSkge1xyXG4gICAgICAgIGFsZXJ0KCdQbGVhc2UgaW5zdGFsbCBNZXRhTWFzaycpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IEV0aGVyZXVtLnJlcXVlc3Qoe1xyXG4gICAgICAgIG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnLFxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdObyBhdXRob3JpemVkIGFjY291bnRzJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcclxuICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBhY2NvdW50JywgYWNjb3VudCk7XHJcbiAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnQpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIUV0aGVyZXVtKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdObyBldGhlcmV1bSB3YWxsZXRzIGZvdW5kLCBwbGVhc2UgZ2V0IG1ldGFtYWFzaycpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7IGNvbm5lY3QsIGFjY291bnQ6IGN1cnJlbnRBY2NvdW50IH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VEd2l0dGVyO1xyXG4iXSwibmFtZXMiOlsiRHdpdHRlciIsImV0aGVycyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29udHJhY3RBQkkiLCJhYmkiLCJDb250cmFjdEFkZHJlc3MiLCJFdGhlcmV1bSIsIndpbmRvdyIsImV0aGVyZXVtIiwiZ2V0RHdpdHRlckNvbnRyYWN0IiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJDb250cmFjdCIsInVzZUR3aXR0ZXIiLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50IiwiY29ubmVjdCIsImFjY291bnRzIiwiYWNjb3VudCIsImFsZXJ0IiwicmVxdWVzdCIsIm1ldGhvZCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useDwitter.ts\n");

/***/ })

});