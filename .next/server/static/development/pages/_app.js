module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/*! exports provided: SearchType, fetchSearchResult, fetchSearchResultFufilled, fetchSearchResultFailed, removeSearchData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search */ "./actions/search.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchSearchResult", function() { return _search__WEBPACK_IMPORTED_MODULE_0__["fetchSearchResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchSearchResultFufilled", function() { return _search__WEBPACK_IMPORTED_MODULE_0__["fetchSearchResultFufilled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchSearchResultFailed", function() { return _search__WEBPACK_IMPORTED_MODULE_0__["fetchSearchResultFailed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeSearchData", function() { return _search__WEBPACK_IMPORTED_MODULE_0__["removeSearchData"]; });

/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ "./actions/type.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchType", function() { return _type__WEBPACK_IMPORTED_MODULE_1__["SearchType"]; });




/***/ }),

/***/ "./actions/search.js":
/*!***************************!*\
  !*** ./actions/search.js ***!
  \***************************/
/*! exports provided: fetchSearchResult, fetchSearchResultFufilled, fetchSearchResultFailed, removeSearchData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSearchResult", function() { return fetchSearchResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSearchResultFufilled", function() { return fetchSearchResultFufilled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSearchResultFailed", function() { return fetchSearchResultFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeSearchData", function() { return removeSearchData; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./actions/type.js");

var fetchSearchResult = function fetchSearchResult(searchText) {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["SearchType"].SEARCH,
    payload: searchText
  };
};
var fetchSearchResultFufilled = function fetchSearchResultFufilled(payload) {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["SearchType"].SEARCH_FUFILLED,
    payload: payload
  };
};
var fetchSearchResultFailed = function fetchSearchResultFailed(err) {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["SearchType"].SEARCH_FAILED,
    payload: err
  };
};
var removeSearchData = function removeSearchData() {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["SearchType"].CLEAR_SEARCH
  };
};

/***/ }),

/***/ "./actions/type.js":
/*!*************************!*\
  !*** ./actions/type.js ***!
  \*************************/
/*! exports provided: SearchType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchType", function() { return SearchType; });
var SearchType = {
  SEARCH: '[Search] search',
  SEARCH_FUFILLED: '[Search] search fufilled',
  SEARCH_FAILED: '[Search] search failed',
  CLEAR_SEARCH: '[Search] clear search result'
};

/***/ }),

/***/ "./epics/index.js":
/*!************************!*\
  !*** ./epics/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-observable */ "redux-observable");
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search */ "./epics/search.js");


var rootEpic = Object(redux_observable__WEBPACK_IMPORTED_MODULE_0__["combineEpics"])(_search__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (rootEpic);

/***/ }),

/***/ "./epics/search.js":
/*!*************************!*\
  !*** ./epics/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-observable */ "redux-observable");
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_ajax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/ajax */ "rxjs/ajax");
/* harmony import */ var rxjs_ajax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_ajax__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./actions/index.js");







var fetchSearhDataEpic = function fetchSearhDataEpic(action$) {
  return action$.pipe(Object(redux_observable__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["SearchType"].SEARCH), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref) {
    var payload = _ref.payload;
    return Object(rxjs_ajax__WEBPACK_IMPORTED_MODULE_3__["ajax"])({
      url: "/search",
      method: "POST",
      body: {
        searchText: payload
      },
      headers: {
        contentType: "application/json; charset=utf-8"
      }
    });
  }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref2) {
    var response = _ref2.response;
    console.log(response);

    if (Array.isArray(response)) {
      return Object(_actions__WEBPACK_IMPORTED_MODULE_4__["fetchSearchResultFufilled"])(response);
    }

    return Object(_actions__WEBPACK_IMPORTED_MODULE_4__["fetchSearchResultFailed"])(response);
  }));
};

var searchEpics = Object(redux_observable__WEBPACK_IMPORTED_MODULE_0__["combineEpics"])(fetchSearhDataEpic);
/* harmony default export */ __webpack_exports__["default"] = (searchEpics);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-observable */ "redux-observable");
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_observable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _epics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../epics */ "./epics/index.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var makeStore = function makeStore(initialState) {
  var epicMiddleware = Object(redux_observable__WEBPACK_IMPORTED_MODULE_7__["createEpicMiddleware"])();
  var x = Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_6__["default"], initialState, Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])(epicMiddleware));
  epicMiddleware.run(_epics__WEBPACK_IMPORTED_MODULE_8__["default"]);
  return x;
};

var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_4__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
        store: store
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, pageProps)));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;

                if (!Component.getInitialProps) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return Component.getInitialProps(ctx);

              case 4:
                _context.t0 = _context.sent;
                _context.next = 8;
                break;

              case 7:
                _context.t0 = {};

              case 8:
                pageProps = _context.t0;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_4___default.a);

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_5___default()(makeStore)(MyApp));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search */ "./reducers/search.js");


var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  search: _search__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/search.js":
/*!****************************!*\
  !*** ./reducers/search.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/type */ "./actions/type.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var InitialState = {
  searchData: [],
  error: null
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : InitialState;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _actions_type__WEBPACK_IMPORTED_MODULE_0__["SearchType"].SEARCH_FUFILLED:
      return _objectSpread({}, state, {
        searchData: payload || [],
        error: null
      });

    case _actions_type__WEBPACK_IMPORTED_MODULE_0__["SearchType"].SEARCH_FAILED:
      return _objectSpread({}, state, {
        searchData: [],
        error: payload
      });

    case _actions_type__WEBPACK_IMPORTED_MODULE_0__["SearchType"].CLEAR_SEARCH:
      return _objectSpread({}, state, {
        searchData: [],
        error: null
      });

    default:
      return state;
  }
});

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-observable":
/*!***********************************!*\
  !*** external "redux-observable" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-observable");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/ajax":
/*!****************************!*\
  !*** external "rxjs/ajax" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/ajax");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map