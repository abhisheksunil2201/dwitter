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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_abhis_web3_Projects_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_abhis_web3_Projects_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_abhis_web3_Projects_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Dwitter_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dwitter.json */ \"./hooks/Dwitter.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar ContractABI = _Dwitter_json__WEBPACK_IMPORTED_MODULE_1__.abi;\nvar ContractAddress = '0x0165878A594ca255338adfa4d48449f69242Eb8F';\nvar Ethereum =  true && window.ethereum;\nvar getDwitterContract = function() {\n    var provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.Web3Provider(Ethereum);\n    var signer = provider.getSigner();\n    return new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(ContractAddress, ContractABI, signer);\n};\nvar useDwitter = function() {\n    //const Dwitter = getDwitterContract();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), currentAccount = ref[0], setCurrentAccount = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), currentUser = ref1[0], setCurrentUser = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        ''\n    ]), dweets1 = ref2[0], setDweets = ref2[1];\n    var connect = function() {\n        var _ref = _asyncToGenerator(C_Users_abhis_web3_Projects_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var accounts, account;\n            return C_Users_abhis_web3_Projects_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        if (Ethereum) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        alert('Please install MetaMask');\n                        return _ctx.abrupt(\"return\");\n                    case 4:\n                        _ctx.next = 6;\n                        return Ethereum.request({\n                            method: 'eth_requestAccounts'\n                        });\n                    case 6:\n                        accounts = _ctx.sent;\n                        if (!(accounts.length === 0)) {\n                            _ctx.next = 10;\n                            break;\n                        }\n                        console.log('No authorized accounts');\n                        return _ctx.abrupt(\"return\");\n                    case 10:\n                        account = accounts[0];\n                        console.log('Connected to account', account);\n                        setCurrentAccount(account);\n                        return _ctx.abrupt(\"return\");\n                    case 16:\n                        _ctx.prev = 16;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 19:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    16\n                ]\n            ]);\n        }));\n        return function connect() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!Ethereum) {\n            console.log('No ethereum wallets found, please get metamaask');\n            return;\n        }\n        connect();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (currentAccount) {\n            getUser();\n            getDweets();\n        }\n    }, [\n        currentAccount\n    ]);\n    var getUser = function() {\n        var _ref = _asyncToGenerator(C_Users_abhis_web3_Projects_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var contract, user, avatar, bio, name, username, wallet;\n            return C_Users_abhis_web3_Projects_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        contract = getDwitterContract();\n                        _ctx.next = 3;\n                        return contract.getUser(currentAccount);\n                    case 3:\n                        user = _ctx.sent;\n                        avatar = user.avatar, bio = user.bio, name = user.name, username = user.username, wallet = user.wallet;\n                        setCurrentUser({\n                            avatar: avatar,\n                            bio: bio,\n                            name: name,\n                            username: username,\n                            wallet: wallet\n                        });\n                        return _ctx.abrupt(\"return\", user);\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getUser() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var createUser = function() {\n        var _ref = _asyncToGenerator(C_Users_abhis_web3_Projects_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(username, name, bio, avatar) {\n            var contract, user;\n            return C_Users_abhis_web3_Projects_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        contract = getDwitterContract();\n                        _ctx.next = 3;\n                        return contract.signup(username, name, bio, avatar);\n                    case 3:\n                        user = _ctx.sent;\n                        console.log(user);\n                        getUser();\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function createUser(username, name, bio, avatar) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getDweets = function() {\n        var _ref = _asyncToGenerator(C_Users_abhis_web3_Projects_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var contract, dweets;\n            return C_Users_abhis_web3_Projects_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        contract = getDwitterContract();\n                        _ctx.next = 3;\n                        return contract.getDweets();\n                    case 3:\n                        dweets = _ctx.sent;\n                        console.log(dweets);\n                        setDweets(dweets);\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getDweets() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var postDweet = function() {\n        var _ref = _asyncToGenerator(C_Users_abhis_web3_Projects_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dweet) {\n            var contract;\n            return C_Users_abhis_web3_Projects_dwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        contract = getDwitterContract();\n                        _ctx.next = 3;\n                        return contract.postDweet(dweet);\n                    case 3:\n                        _ctx.next = 5;\n                        return getDweets();\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function postDweet(dweet) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return {\n        connect: connect,\n        account: currentAccount,\n        user: currentUser,\n        createUser: createUser,\n        postDweet: postDweet,\n        dweets: dweets1\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useDwitter);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxTQUFTOzs7O0lBT2YsR0FBSyxDQUFDVSxTQUFTO3lMQUFHLFFBQVEsU0FBREMsS0FBYSxFQUFLLENBQUM7Z0JBQ3BDVixRQUFROzs7O3dCQUFSQSxRQUFRLEdBQUd6QixrQkFBa0I7OytCQUM3QnlCLFFBQVEsQ0FBQ1MsU0FBUyxDQUFDQyxLQUFLOzs7K0JBQ3hCWCxTQUFTOzs7Ozs7UUFDakIsQ0FBQzt3QkFKS1UsU0FBUyxDQUFVQyxLQUFhOzs7O0lBTXRDLE1BQU0sQ0FBQyxDQUFDO1FBQ05yQixPQUFPLEVBQVBBLE9BQU87UUFDUEUsT0FBTyxFQUFFUixjQUFjO1FBQ3ZCa0IsSUFBSSxFQUFFaEIsV0FBVztRQUNqQnNCLFVBQVUsRUFBVkEsVUFBVTtRQUNWRSxTQUFTLEVBQVRBLFNBQVM7UUFDVHRCLE1BQU0sRUFBTkEsT0FBTTtJQUNSLENBQUM7QUFDSCxDQUFDO0FBRUQsK0RBQWVMLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rcy91c2VEd2l0dGVyLnRzP2I2MDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IER3aXR0ZXIgZnJvbSAnLi9Ed2l0dGVyLmpzb24nO1xyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQ29udHJhY3RBQkkgPSBEd2l0dGVyLmFiaTtcclxuY29uc3QgQ29udHJhY3RBZGRyZXNzID0gJzB4MDE2NTg3OEE1OTRjYTI1NTMzOGFkZmE0ZDQ4NDQ5ZjY5MjQyRWI4Ric7XHJcbmNvbnN0IEV0aGVyZXVtID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgKHdpbmRvdyBhcyBhbnkpLmV0aGVyZXVtO1xyXG5cclxuY29uc3QgZ2V0RHdpdHRlckNvbnRyYWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKEV0aGVyZXVtKTtcclxuICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcclxuICByZXR1cm4gbmV3IGV0aGVycy5Db250cmFjdChDb250cmFjdEFkZHJlc3MsIENvbnRyYWN0QUJJLCBzaWduZXIpO1xyXG59O1xyXG5cclxudHlwZSBVc2VyID0ge1xyXG4gIGF2YXRhcjogc3RyaW5nO1xyXG4gIGJpbzogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB1c2VybmFtZTogc3RyaW5nO1xyXG4gIHdhbGxldDogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgdXNlRHdpdHRlciA9ICgpID0+IHtcclxuICAvL2NvbnN0IER3aXR0ZXIgPSBnZXREd2l0dGVyQ29udHJhY3QoKTtcclxuICBjb25zdCBbY3VycmVudEFjY291bnQsIHNldEN1cnJlbnRBY2NvdW50XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gIGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXJdID0gdXNlU3RhdGU8VXNlciB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtkd2VldHMsIHNldER3ZWV0c10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oWycnXSk7XHJcbiAgY29uc3QgY29ubmVjdCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghRXRoZXJldW0pIHtcclxuICAgICAgICBhbGVydCgnUGxlYXNlIGluc3RhbGwgTWV0YU1hc2snKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBFdGhlcmV1bS5yZXF1ZXN0KHtcclxuICAgICAgICBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTm8gYXV0aG9yaXplZCBhY2NvdW50cycpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF07XHJcbiAgICAgIGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gYWNjb3VudCcsIGFjY291bnQpO1xyXG4gICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFFdGhlcmV1bSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnTm8gZXRoZXJldW0gd2FsbGV0cyBmb3VuZCwgcGxlYXNlIGdldCBtZXRhbWFhc2snKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29ubmVjdCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjdXJyZW50QWNjb3VudCkge1xyXG4gICAgICBnZXRVc2VyKCk7XHJcbiAgICAgIGdldER3ZWV0cygpO1xyXG4gICAgfVxyXG4gIH0sIFtjdXJyZW50QWNjb3VudF0pO1xyXG5cclxuICBjb25zdCBnZXRVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgY29udHJhY3QgPSBnZXREd2l0dGVyQ29udHJhY3QoKTtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBjb250cmFjdC5nZXRVc2VyKGN1cnJlbnRBY2NvdW50KTtcclxuICAgIGNvbnN0IHsgYXZhdGFyLCBiaW8sIG5hbWUsIHVzZXJuYW1lLCB3YWxsZXQgfSA9IHVzZXI7XHJcbiAgICBzZXRDdXJyZW50VXNlcih7IGF2YXRhciwgYmlvLCBuYW1lLCB1c2VybmFtZSwgd2FsbGV0IH0pO1xyXG4gICAgcmV0dXJuIHVzZXI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY3JlYXRlVXNlciA9IGFzeW5jIChcclxuICAgIHVzZXJuYW1lOiBzdHJpbmcsXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBiaW86IHN0cmluZyxcclxuICAgIGF2YXRhcjogc3RyaW5nXHJcbiAgKSA9PiB7XHJcbiAgICBjb25zdCBjb250cmFjdCA9IGdldER3aXR0ZXJDb250cmFjdCgpO1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGNvbnRyYWN0LnNpZ251cCh1c2VybmFtZSwgbmFtZSwgYmlvLCBhdmF0YXIpO1xyXG4gICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICBnZXRVc2VyKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0RHdlZXRzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgY29udHJhY3QgPSBnZXREd2l0dGVyQ29udHJhY3QoKTtcclxuICAgIGNvbnN0IGR3ZWV0cyA9IGF3YWl0IGNvbnRyYWN0LmdldER3ZWV0cygpO1xyXG4gICAgY29uc29sZS5sb2coZHdlZXRzKTtcclxuICAgIHNldER3ZWV0cyhkd2VldHMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBvc3REd2VldCA9IGFzeW5jIChkd2VldDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBjb250cmFjdCA9IGdldER3aXR0ZXJDb250cmFjdCgpO1xyXG4gICAgYXdhaXQgY29udHJhY3QucG9zdER3ZWV0KGR3ZWV0KTtcclxuICAgIGF3YWl0IGdldER3ZWV0cygpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBjb25uZWN0LFxyXG4gICAgYWNjb3VudDogY3VycmVudEFjY291bnQsXHJcbiAgICB1c2VyOiBjdXJyZW50VXNlcixcclxuICAgIGNyZWF0ZVVzZXIsXHJcbiAgICBwb3N0RHdlZXQsXHJcbiAgICBkd2VldHMsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUR3aXR0ZXI7XHJcbiJdLCJuYW1lcyI6WyJEd2l0dGVyIiwiZXRoZXJzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb250cmFjdEFCSSIsImFiaSIsIkNvbnRyYWN0QWRkcmVzcyIsIkV0aGVyZXVtIiwid2luZG93IiwiZXRoZXJldW0iLCJnZXREd2l0dGVyQ29udHJhY3QiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsInNpZ25lciIsImdldFNpZ25lciIsIkNvbnRyYWN0IiwidXNlRHdpdHRlciIsImN1cnJlbnRBY2NvdW50Iiwic2V0Q3VycmVudEFjY291bnQiLCJjdXJyZW50VXNlciIsInNldEN1cnJlbnRVc2VyIiwiZHdlZXRzIiwic2V0RHdlZXRzIiwiY29ubmVjdCIsImFjY291bnRzIiwiYWNjb3VudCIsImFsZXJ0IiwicmVxdWVzdCIsIm1ldGhvZCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJnZXRVc2VyIiwiZ2V0RHdlZXRzIiwiY29udHJhY3QiLCJ1c2VyIiwiYXZhdGFyIiwiYmlvIiwibmFtZSIsInVzZXJuYW1lIiwid2FsbGV0IiwiY3JlYXRlVXNlciIsInNpZ251cCIsInBvc3REd2VldCIsImR3ZWV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useDwitter.ts\n");

/***/ })

});