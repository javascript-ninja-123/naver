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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search/search */ "./components/search/search.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _search_search__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/search/search.js":
/*!*************************************!*\
  !*** ./components/search/search.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-addons-css-transition-group */ "react-addons-css-transition-group");
/* harmony import */ var react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    position:fixed;\n    top:0;\n    left:0;\n    width:100vw;\n    min-height:100vh;\n    background-color:white;\n    z-index:10000;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    display: ", ";\n    box-sizing: border-box;\n    width: 340px;\n    list-style: none;\n    padding: 1rem 1.5rem;\n    background-color: white;\n    border: 2px solid #1ebea5;\n    margin: 0;\n    margin-left: 79px;\n    li {\n      padding: 1rem 0;\n      cursor: pointer;\n      p {\n        padding: 0 !important;\n        color: #d8d8d8;\n        font-size: 1rem;\n        margin-left: 1.9rem;\n        margin-top: 0;\n        margin-bottom: 0;\n      }\n      div {\n        display: flex;\n        align-items: center;\n        justfiy-content: flex-start;\n        p {\n          font-size: 1.2rem;\n          color: black;\n          margin-left: 0.8rem;\n        }\n      }\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    padding: 0 0.5rem;\n    border: 2px solid #1ebea5;\n    :focus {\n      outline: none;\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    width: 419px;\n    height: 51px;\n    position: relative;\n    div:first-child {\n      background-color: #1ebea5;\n      flex: 0 0 79px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n    input {\n      caret-color: #1ebea5;\n      flex: 1;\n      font-size: 2rem;\n      padding-left: 1rem;\n    }\n    input + img {\n      position: absolute;\n      right: 0;\n      top: 50%;\n      transform: translate(-50%, -50%);\n      cursor: pointer;\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    margin-top: 1.5rem;\n    margin-left: 1.5rem;\n    .subtle-enter {\n      opacity: 0.01;\n    }\n\n    .subtle-enter.subtle-enter-active {\n      opacity: 1;\n      transition: opacity 500ms ease-in;\n    }\n\n    .subtle-leave {\n      opacity: 1;\n    }\n\n    .subtle-leave.subtle-leave-active {\n      opacity: 0.01;\n      transition: opacity 300ms ease-in;\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var SearchContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject()),
    InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2()),
    StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input(_templateObject3()),
    StyledSearchResult = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul(_templateObject4(), function (_ref) {
  var display = _ref.display;
  return display ? 'block' : 'none';
}),
    StyledLi = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li(_templateObject5(), function (_ref2) {
  var hover = _ref2.hover;
  return hover ? 'rgba(30,190,165,.3)' : '';
}),
    SearchLoadingContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject6());

var Search =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Search, _PureComponent);

  function Search() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Search)).call.apply(_getPrototypeOf2, [this].concat(_args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      searchText: '',
      index: -1
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "cache", new Map());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (_ref3) {
      var target = _ref3.target;

      _this.setState({
        searchText: target.value
      }, function () {
        _this.props.onChange(_this.state.searchText);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getCachedClickHanlder", function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var jsonStringified = JSON.stringify(args);

      var cached = _this.cache.get(jsonStringified);

      if (cached !== undefined) {
        console.log('from caache');
        return cached;
      } else {
        var a = function a() {
          _this.setState({
            searchText: '',
            index: -1
          }, function () {
            _this.props.updateZoom();

            _this.props.reset();

            _this.props.moveCenter(args[0], args[1]);
          });
        };

        _this.cache.set(jsonStringified, a);

        return a;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyDown", function (e) {
      if (_this.props.searchData.length > 0) {
        if (e.keyCode === 13) {
          _this.props.updateZoom();

          _this.props.reset();

          var value = _this.props.searchData[_this.state.index];

          _this.getCachedClickHanlder(value['renderInNaver']['latitude'], value['renderInNaver']['longitude'])();
        } else if (e.keyCode === 40) {
          if (_this.state.index !== _this.props.searchData.length - 1) {
            _this.setState({
              index: _this.state.index + 1
            });
          }
        } else if (e.keyCode === 38) {
          if (_this.state.index !== 0) {
            _this.setState({
              index: _this.state.index - 1
            });
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function () {
      if (_this.props.searchData.length > 0) {
        _this.props.updateZoom();

        _this.props.reset();

        var finalIndex = _this.state.index === -1 ? 0 : _this.state.index;
        var value = _this.props.searchData[finalIndex];

        _this.getCachedClickHanlder(value['renderInNaver']['latitude'], value['renderInNaver']['longitude'])();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderList", function () {
      if (_this.state.searchText.trim() === '') {
        return;
      } else if (_this.props.error !== null) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSearchResult, {
          display: _this.props.error !== null
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, _this.props.error.message));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSearchResult, {
          display: _this.props.searchData.length > 0
        }, _this.props.searchData.map(function (value, i) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLi, {
            key: i,
            hover: _this.state.index === i,
            onClick: _this.getCachedClickHanlder(value['renderInNaver']['latitude'], value['renderInNaver']['longitude'])
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: "/static/pin.svg",
            alt: "pin-image"
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, value.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, value.jibun_address));
        }));
      }
    });

    return _this;
  }

  _createClass(Search, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cache.clear();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/logo.svg",
        alt: "logo-image"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledInput, {
        type: "text",
        name: "searchText",
        onChange: this.onChange,
        value: this.state.searchText,
        onKeyDown: this.onKeyDown
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/search.svg",
        alt: "search-image",
        onClick: this.onClick
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_3___default.a, {
        transitionName: "subtle",
        transitionEnterTimeout: 500,
        transitionLeaveTimeout: 500
      }, this.renderList()));
    }
  }]);

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

Search.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  searchData: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  moveCenter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  reset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  updateZoom: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./hoc/requireGeoLocation.js":
/*!***********************************!*\
  !*** ./hoc/requireGeoLocation.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var RequireGeoLocation = function RequireGeoLocation(BaseComponent) {
  var RequireGoLocationClass =
  /*#__PURE__*/
  function (_Component) {
    _inherits(RequireGoLocationClass, _Component);

    function RequireGoLocationClass() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, RequireGoLocationClass);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RequireGoLocationClass)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        latitude: '',
        longitude: '',
        count: 0
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "success", function (_ref) {
        var coords = _ref.coords;
        var latitude = coords.latitude;
        var longitude = coords.longitude;

        _this.setState({
          latitude: latitude,
          longitude: longitude
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "error",
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _ref3, data, geoplugin_latitude, geoplugin_longitude;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.state.count == 0)) {
                  _context.next = 9;
                  break;
                }

                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://www.geoplugin.net/json.gp');

              case 3:
                _ref3 = _context.sent;
                data = _ref3.data;
                geoplugin_latitude = data.geoplugin_latitude, geoplugin_longitude = data.geoplugin_longitude;

                _this.setState({
                  latitude: Number(geoplugin_latitude),
                  longitude: Number(geoplugin_longitude),
                  count: 1
                });

                _context.next = 10;
                break;

              case 9:
                return _context.abrupt("return");

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      })));

      return _this;
    }

    _createClass(RequireGoLocationClass, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.success, this.error);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        navigator.geolocation.getCurrentPosition(this.success, this.error);
      }
    }, {
      key: "render",
      value: function render() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BaseComponent, _extends({}, this.props, {
          location: this.state
        }));
      }
    }]);

    return RequireGoLocationClass;
  }(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

  return RequireGoLocationClass;
};

/* harmony default export */ __webpack_exports__["default"] = (RequireGeoLocation);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions */ "./actions/index.js");
/* harmony import */ var _hoc_requireGeoLocation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hoc/requireGeoLocation */ "./hoc/requireGeoLocation.js");
/* harmony import */ var _utils_geolocation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/geolocation */ "./utils/geolocation.js");
/* harmony import */ var _utils_geolocation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_utils_geolocation__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils */ "./utils/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles */ "./styles/index.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_3___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;









var CustomOverlay;

var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      zoom: 10,
      realData: [],
      standard: 'who'
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "map", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "marker", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "infowindow", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "reset", function () {
      Object.values(_this.state.realData).forEach(function (value, i) {
        if (_this.state[i] !== undefined && _this.state[i + 'overlay'] !== undefined) {
          _this.state[i + 'overlay'].setMap(null);

          _this.state[i].setMap(null);
        }

        _this.setState(_defineProperty({}, i + 'overlay', new CustomOverlay(null, {
          position: new naver.maps.LatLng(value.latitude, value.longitude),
          map: _this.map
        })));

        _this.setState(_defineProperty({}, i, new naver.maps.Marker({
          position: new naver.maps.LatLng(value.latitude, value.longitude),
          map: _this.map,
          icon: {
            url: '/static/good.png',
            origin: new naver.maps.Point(0, 0)
          }
        })), function () {
          naver.maps.Event.addListener(_this.state[i], 'click', function (e) {
            _this.state[i + 'overlay'].setMap(null);

            var element = jquery__WEBPACK_IMPORTED_MODULE_10___default()("\n                <div class=\"overlay\">\n                  this is clicked\n                </div>\n              ");
            console.log('clicked');

            _this.setState(_defineProperty({}, i + 'overlay', new CustomOverlay(element, {
              position: new naver.maps.LatLng(value.latitude, value.longitude),
              map: _this.map
            })));
          });
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "fetchData",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('called');
              axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://s3.ap-northeast-2.amazonaws.com/misemise-fine-dust-data/current-data/map-data/data.json').then(function (_ref2) {
                var data = _ref2.data;
                var realData = data['data'];
                var nearbyStation = _utils_geolocation__WEBPACK_IMPORTED_MODULE_8___default()(37.3595704, 127.105399, Object.values(realData));

                if (publicRuntimeConfig.mode === 'production') {
                  nearbyStation = _utils_geolocation__WEBPACK_IMPORTED_MODULE_8___default()(_this.props.location.latitude, _this.props.location.longitude, Object.values(realData));
                } // //create a info view
                // var contentString = [
                //   '<div class="info_window">',
                //   '<div class="first-wrapper">',
                //   '<img src="/static/happy.svg">',
                //   "<div class='first-text-wrapper'>",
                //   ` <p>${nearbyStation.stationName}</p>`,
                //   ` <h3>좋음</h3>`,
                //   '</div>',
                //   '</div>',
                //   '<div class="second-wrapper">',
                //   '<p>mise dusty</p>',
                //   '<p>good 12 </p>',
                //   '</div>',
                //   '</div>',
                // ].join('');
                // this.infowindow = new naver.maps.InfoWindow({
                //   content: contentString,
                //   backgroundColor: '#0277BD',
                //   disableAnchor: true,
                //   borderWidth: '0',
                //   pixelOffset: new naver.maps.Point(0, -10),
                // });
                // // this.infowindow.open(this.map, this.marker)


                CustomOverlay = function CustomOverlay() {
                  var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                  var options = arguments.length > 1 ? arguments[1] : undefined;

                  if (element == null) {
                    this._element = jquery__WEBPACK_IMPORTED_MODULE_10___default()("\n                <div class=\"overlay\">\n                  this is not clicked yet\n                </div>\n              ");
                  } else {
                    this._element = element;
                  }

                  this.setPosition(options.position);
                  this.setMap(options.map || null);
                };

                CustomOverlay.prototype = new naver.maps.OverlayView();
                CustomOverlay.prototype.constructor = CustomOverlay;

                CustomOverlay.prototype.setPosition = function (position) {
                  this._position = position;
                  this.draw();
                };

                CustomOverlay.prototype.getPosition = function () {
                  return this._position;
                };

                CustomOverlay.prototype.onAdd = function () {
                  var overlayLayer = this.getPanes().overlayLayer;

                  this._element.appendTo(overlayLayer);
                };

                CustomOverlay.prototype.onRemove = function () {
                  this._element.remove(); // 이벤트 핸들러를 설정했다면 정리합니다.


                  this._element.off();
                };

                CustomOverlay.prototype.draw = function () {
                  // 지도 객체가 설정되지 않았으면 draw 기능을 하지 않습니다.
                  if (!this.getMap()) {
                    return;
                  } // projection 객체를 통해 LatLng 좌표를 화면 좌표로 변경합니다.


                  var projection = this.getProjection(),
                      position = this.getPosition();
                  var pixelPosition = projection.fromCoordToOffset(position);

                  this._element.css('left', pixelPosition.x);

                  this._element.css('top', pixelPosition.y);
                };

                _this.setState({
                  realData: realData
                }, function () {
                  Object.values(realData).forEach(function (value, i) {
                    if (_this.state[i] !== undefined && _this.state[i + 'overlay'] !== undefined) {
                      _this.state[i + 'overlay'].setMap(null);

                      _this.state[i].setMap(null);
                    }

                    _this.setState(_defineProperty({}, i + 'overlay', new CustomOverlay(null, {
                      position: new naver.maps.LatLng(value.latitude, value.longitude),
                      map: _this.map
                    })));

                    _this.setState(_defineProperty({}, i, new naver.maps.Marker({
                      position: new naver.maps.LatLng(value.latitude, value.longitude),
                      map: _this.map,
                      icon: {
                        url: '/static/good.png',
                        origin: new naver.maps.Point(0, 0)
                      }
                    })), function () {
                      naver.maps.Event.addListener(_this.state[i], 'click', function (e) {
                        _this.state[i + 'overlay'].setMap(null);

                        var element = jquery__WEBPACK_IMPORTED_MODULE_10___default()("\n                      <div class=\"overlay\">\n                        this is clicked\n                      </div>\n                    ");
                        console.log('clicked');

                        _this.setState(_defineProperty({}, i + 'overlay', new CustomOverlay(element, {
                          position: new naver.maps.LatLng(value.latitude, value.longitude),
                          map: _this.map
                        })));
                      });
                    });
                  });
                });
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onCenter", function () {
      var center = new naver.maps.LatLng(37.3595704, 127.105399);

      _this.map.setZoom(10, true);

      _this.map.panTo(center);

      Object.values(_this.state.realData).map(function (value, i) {
        _this.state[i].setMap(null);

        _this.state[i + 'overlay'].setMap(null);
      });

      _this.setState({
        zoom: 10
      }, function () {
        _this.fetchData();
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (searchText) {
      _this.props.fetchSearchResult(searchText);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "moveCenter", function (lat, lng) {
      var center = new naver.maps.LatLng(lat, lng);

      _this.map.setZoom(10, true);

      _this.map.panTo(center);

      _this.props.removeSearchData();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onZoomIn", function () {
      _this.setState({
        zoom: _this.state.zoom + 1
      }, function () {
        if (_this.state.zoom === 8) {
          Object.values(_this.state.realData).forEach(function (value, i) {
            _this.state[i].setMap(null);

            _this.setState(_defineProperty({}, i + 'overlay', new CustomOverlay(null, {
              position: new naver.maps.LatLng(value.latitude, value.longitude),
              map: _this.map
            })));

            _this.setState(_defineProperty({}, i, new naver.maps.Marker({
              position: new naver.maps.LatLng(value.latitude, value.longitude),
              map: _this.map,
              icon: {
                url: '/static/good.png',
                origin: new naver.maps.Point(0, 0)
              }
            })), function () {
              naver.maps.Event.addListener(_this.state[i], 'click', function (e) {
                _this.state[i + 'overlay'].setMap(null);

                var element = jquery__WEBPACK_IMPORTED_MODULE_10___default()("\n                  <div class=\"overlay\">\n                    this is not clicked\n                  </div>\n                ");
                console.log('clicked');

                _this.setState(_defineProperty({}, i + 'overlay', new CustomOverlay(element, {
                  position: new naver.maps.LatLng(value.latitude, value.longitude),
                  map: _this.map
                })));
              });
            });
          });
        }

        _this.map.setZoom(_this.state.zoom, true);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onZoomOut", function () {
      _this.setState({
        zoom: _this.state.zoom - 1
      }, function () {
        if (_this.state.zoom === 5) {
          Object.values(_this.state.realData).forEach(function (value, i) {
            _this.state[i + 'overlay'].setMap(null);

            _this.state[i].setMap(null);

            _this.setState(_defineProperty({}, i, new naver.maps.Marker({
              position: new naver.maps.LatLng(value.latitude, value.longitude),
              map: _this.map,
              icon: {
                url: '/static/bad.png',
                origin: new naver.maps.Point(0, 0)
              }
            })));
          });
        }

        _this.map.setZoom(_this.state.zoom, true);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickWho", function () {
      _this.setState({
        standard: 'who'
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickKorea", function () {
      _this.setState({
        standard: 'korea'
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateZoom", function () {
      _this.setState({
        zoom: 10
      });
    });

    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var position = new naver.maps.LatLng(37.3595704, 127.105399);

      if (publicRuntimeConfig.mode === 'production') {
        position = new naver.maps.LatLng(this.props.location.latitude, this.props.location.longitude);
      } //create map


      var mapOptions = {
        center: position,
        zoom: 10,
        mapTypeId: naver.maps.MapTypeId.NORMAL,
        draggable: true,
        scrollWheel: false,
        keyboardShortcuts: false,
        disableDoubleTapZoom: false,
        disableDoubleClickZoom: false,
        disableTwoFingerTapZoom: false //zoom from naver
        //   zoomControl: true,
        // zoomControlOptions: {
        //   style: naver.maps.ZoomControlStyle.LARGE,
        //   position: naver.maps.Position.TOP_RIGHT
        // }

      };
      this.map = new naver.maps.Map('map', mapOptions); //create a marker

      this.marker = new naver.maps.Marker({
        position: position,
        map: this.map,
        icon: {
          url: '/static/center.svg',
          origin: new naver.maps.Point(0, 0)
        },
        animation: naver.maps.Animation.BOUNCE
      });
      this.fetchData();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_11__["HomeContainer"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "home-container__second-comp"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "home-container__second-comp--center-button",
        onClick: this.onCenter
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "/static/mylocation.svg",
        alt: "my-location"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "home-container__second-comp--zoomIn-button",
        onClick: this.onZoomIn
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "/static/zoomIn.svg",
        alt: "zoom-in"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "home-container__second-comp--zoomOut-button",
        onClick: this.onZoomOut
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "/static/zoomOut.svg",
        alt: "zoom-out"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_11__["StandardContaienr"], {
        className: "home-container__second-comp--who",
        onClick: this.onClickWho,
        standard: this.state.standard === 'who'
      }, "WHO"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_11__["StandardContaienr"], {
        className: "home-container__second-comp--who-answer",
        onClick: this.onClickKorea,
        standard: this.state.standard === "korea"
      }, "\uD55C\uAD6D"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "home-container__second-comp--search-container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Search"], {
        onChange: this.onChange,
        searchData: this.props.searchData,
        error: this.props.error,
        moveCenter: this.moveCenter,
        reset: this.reset,
        updateZoom: this.updateZoom
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "map",
        style: {
          width: "100vw",
          minHeight: '100vh'
        }
      })));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var mapStateToProps = function mapStateToProps(_ref3) {
  var search = _ref3.search;
  var searchData = search.searchData,
      error = search.error;
  return {
    searchData: searchData,
    error: error
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils__WEBPACK_IMPORTED_MODULE_9__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, {
  fetchSearchResult: _actions__WEBPACK_IMPORTED_MODULE_6__["fetchSearchResult"],
  removeSearchData: _actions__WEBPACK_IMPORTED_MODULE_6__["removeSearchData"]
}), _hoc_requireGeoLocation__WEBPACK_IMPORTED_MODULE_7__["default"])(Index));

/***/ }),

/***/ "./styles/index.js":
/*!*************************!*\
  !*** ./styles/index.js ***!
  \*************************/
/*! exports provided: HomeContainer, StandardContaienr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeContainer", function() { return HomeContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardContaienr", function() { return StandardContaienr; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n color:", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  min-height: 100vh;\n  .home-container__second-comp {\n    flex: 1;\n    position: relative;\n    & > div {\n      box-shadow: 0px 2px 4px #000000;\n    }\n    &--center-button {\n      position: absolute;\n      top: 1.5rem;\n      right: 1.5rem;\n      z-index: 100;\n      padding: 0.3rem;\n      background-color: white;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      cursor: pointer;\n    }\n    &--zoomIn-button {\n      position: absolute;\n      top: 6.91rem;\n      right: 1.5rem;\n      z-index: 100;\n      padding: 0.3rem;\n      background-color: white;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      cursor: pointer;\n      img {\n        width: 2.4rem;\n        height: 2.4rem;\n      }\n    }\n    &--zoomOut-button {\n      position: absolute;\n      top: 10rem;\n      right: 1.5rem;\n      z-index: 100;\n      padding: 0.3rem;\n      background-color: white;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      cursor: pointer;\n      img {\n        transform: rotate(90deg);\n        width: 2.4rem;\n        height: 2.4rem;\n      }\n    }\n    &--who {\n      box-sizing: border-box;\n      position: absolute;\n      top: 15rem;\n      right: 1.5rem;\n      z-index: 100;\n      padding: 0.3rem;\n      background-color: white;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      font-size: 0.8rem;\n      font-weight: bold;\n      width: 3rem;\n      cursor: pointer;\n    }\n    &--who-answer {\n      box-sizing: border-box;\n      position: absolute;\n      top: 16.5rem;\n      width: 3rem;\n      right: 1.5rem;\n      z-index: 100;\n      padding: 0.3rem;\n      background-color: white;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      font-weight: bold;\n      font-size: 0.8rem;\n      cursor: pointer;\n    }\n    &--search-container {\n      width: 15rem;\n      height: 4rem;\n      position: absolute;\n      top: 0;\n      left: 0;\n      z-index: 100;\n    }\n  }\n  @media (max-width: 70rem) {\n    flex-direction: column-reverse;\n    .home-container__second-comp {\n      #map {\n        width: 100vw !important;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var HomeContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject()),
    StandardContaienr = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject2(), function (_ref) {
  var standard = _ref.standard;
  return standard ? '#1ebea5' : 'lightgrey';
});

/***/ }),

/***/ "./utils/geolocation.js":
/*!******************************!*\
  !*** ./utils/geolocation.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GeoLocation = function () {
  var privateWeakMap = new WeakMap();

  var GeolocationClass =
  /*#__PURE__*/
  function () {
    function GeolocationClass() {
      var location = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      _classCallCheck(this, GeolocationClass);

      if (location !== null) {
        this.location = location;
      }

      privateWeakMap.set(this, {
        Deg2Rad: function Deg2Rad(deg) {
          return deg * Math.PI / 180;
        },
        PythagorasEquirectangular: function PythagorasEquirectangular(lat1, lon1, lat2, lon2) {
          lat1 = this.Deg2Rad(lat1);
          lat2 = this.Deg2Rad(lat2);
          lon1 = this.Deg2Rad(lon1);
          lon2 = this.Deg2Rad(lon2);
          var R = 6371; // km

          var x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
          var y = lat2 - lat1;
          var d = Math.sqrt(x * x + y * y) * R;
          return d;
        }
      });
    }

    _createClass(GeolocationClass, [{
      key: "setLocations",
      set: function set(locations) {
        this.location = locations;
      }
    }], [{
      key: "nearestLocation",
      value: function nearestLocation(latitude, longitude, locations) {
        var mindif = 99999;
        var closest;

        for (var _index = 0; _index < locations.length; ++_index) {
          var dif = privateWeakMap.get(this).PythagorasEquirectangular(latitude, longitude, locations[_index]['latitude'], locations[_index]['longitude']);

          if (dif < mindif) {
            closest = _index;
            mindif = dif;
          }
        } // return the nearest location


        var closestLocation = locations[closest];
        return closestLocation;
      }
    }]);

    return GeolocationClass;
  }();

  return GeolocationClass;
}(); // Convert Degress to Radians


function Deg2Rad(deg) {
  return deg * Math.PI / 180;
}

function PythagorasEquirectangular(lat1, lon1, lat2, lon2) {
  lat1 = Deg2Rad(lat1);
  lat2 = Deg2Rad(lat2);
  lon1 = Deg2Rad(lon1);
  lon2 = Deg2Rad(lon2);
  var R = 6371; // km

  var x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
  var y = lat2 - lat1;
  var d = Math.sqrt(x * x + y * y) * R;
  return d;
}

function NearestLocation(latitude, longitude, locations) {
  var mindif = 99999;
  var closest;

  for (index = 0; index < locations.length; ++index) {
    var dif = PythagorasEquirectangular(latitude, longitude, locations[index]['latitude'], locations[index]['longitude']);

    if (dif < mindif) {
      closest = index;
      mindif = dif;
    }
  } // return the nearest location


  var closestLocation = locations[closest];
  return closestLocation;
}

module.exports = NearestLocation;

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: compose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
var compose = function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduce(function (acc, fn) {
      return fn(acc);
    }, x);
  };
};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-addons-css-transition-group":
/*!****************************************************!*\
  !*** external "react-addons-css-transition-group" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-addons-css-transition-group");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map