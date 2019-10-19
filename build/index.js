module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _handlers = __webpack_require__(7);

var handlers = _interopRequireWildcard(_handlers);

var _decorator = __webpack_require__(8);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ManagedInput = function (_React$Component) {
  _inherits(ManagedInput, _React$Component);

  function ManagedInput(props) {
    _classCallCheck(this, ManagedInput);

    var _this = _possibleConstructorReturn(this, (ManagedInput.__proto__ || Object.getPrototypeOf(ManagedInput)).call(this, props));

    _this.input = _react2.default.createRef();
    _this.id = _this.props.id;
    _this.classNames = _this.props.classNames || {};
    _this.inputClass = _this.classNames.input || 'input';
    _this.labelClass = _this.classNames.label || 'label';
    _this.valueClass = _this.classNames.value || 'value';
    _this.autofillClass = _this.classNames.value || 'autofill';
    _this.focusClass = _this.classNames.focus || 'focus';
    _this.hoverClass = _this.classNames.hover || 'hover';
    _this.errorClass = _this.classNames.error || 'error';
    _this.errorContainerClass = _this.classNames.error || 'error-container';
    _this.onMouseOverHandler = handlers.onMouseOverHandler.bind(_this);
    _this.onMouseLeaveHandler = handlers.onMouseLeaveHandler.bind(_this);
    _this.onFocusHandler = handlers.onFocusHandler.bind(_this);
    _this.onBlurHandler = handlers.onBlurHandler.bind(_this);
    _this.onChangeHandler = handlers.onChangeHandler.bind(_this);
    _this.onClickHandler = handlers.onClickHandler.bind(_this);
    _this.decorator = _decorator.decorator.bind(_this);
    _this.state = {
      mouseOver: false,
      autofill: true,
      focus: false,
      decorator: ''
    };
    return _this;
  }

  _createClass(ManagedInput, [{
    key: 'isMobile',
    value: function isMobile() {
      return (/Android|BlackBerry|IEMobile|Opera Mini|iPad|iPhone|iPod|webOS/i.test(navigator.userAgent)
      );
    }
  }]);

  return ManagedInput;
}(_react2.default.Component);

exports.default = ManagedInput;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
         value: true
});
exports.ManagedPagination = exports.ManagedMultipleCheckbox = exports.ManagedCheckbox = exports.ManagedButton = exports.ManagedRadio = exports.ManagedTextarea = exports.ManagedSelect = exports.ManagedText = undefined;

var _text = __webpack_require__(3);

var _text2 = _interopRequireDefault(_text);

var _textarea = __webpack_require__(10);

var _textarea2 = _interopRequireDefault(_textarea);

var _select = __webpack_require__(12);

var _select2 = _interopRequireDefault(_select);

var _radio = __webpack_require__(14);

var _radio2 = _interopRequireDefault(_radio);

var _checkbox = __webpack_require__(17);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _multipleCheckbox = __webpack_require__(19);

var _multipleCheckbox2 = _interopRequireDefault(_multipleCheckbox);

var _button = __webpack_require__(22);

var _button2 = _interopRequireDefault(_button);

var _pagination = __webpack_require__(23);

var _pagination2 = _interopRequireDefault(_pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ManagedText = _text2.default;
exports.ManagedSelect = _select2.default;
exports.ManagedTextarea = _textarea2.default;
exports.ManagedRadio = _radio2.default;
exports.ManagedButton = _button2.default;
exports.ManagedCheckbox = _checkbox2.default;
exports.ManagedMultipleCheckbox = _multipleCheckbox2.default;
exports.ManagedPagination = _pagination2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _input = __webpack_require__(1);

var _input2 = _interopRequireDefault(_input);

var _handlers = __webpack_require__(9);

var handlers = _interopRequireWildcard(_handlers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ManagedText = function (_ManagedInput) {
  _inherits(ManagedText, _ManagedInput);

  function ManagedText(props) {
    _classCallCheck(this, ManagedText);

    var _this = _possibleConstructorReturn(this, (ManagedText.__proto__ || Object.getPrototypeOf(ManagedText)).call(this, props));

    _this.input = _react2.default.createRef();
    _this.controlled = _this.props.controlled;
    _this.type = _this.props.type;
    _this.autoComplete = _this.props.autoComplete;
    _this.match = _this.props.match;
    _this.containerClass = _this.classNames.container || 'managed-input text';
    _this.onKeyDownHandler = handlers.onKeyDownHandler.bind(_this);
    _this.onChangeHandler = handlers.onChangeHandler.bind(_this);
    return _this;
  }

  _createClass(ManagedText, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          controlled = _props.controlled,
          display = _props.display,
          disabled = _props.disabled,
          value = _props.value,
          label = _props.label,
          children = _props.children,
          error = _props.error;


      var decorator = '' + this.state.decorator + (error ? ' error' : '') + (this.input.current && (this.input.current.value || value) ? ' value' : '');

      return _react2.default.createElement(
        'div',
        {
          style: { display: display },
          className: this.containerClass + decorator,
          onMouseOver: this.onMouseOverHandler,
          onMouseLeave: this.onMouseLeaveHandler,
          onClick: this.onClickHandler
        },
        _react2.default.createElement(
          'div',
          { className: this.labelClass + decorator },
          label
        ),
        _react2.default.createElement('input', {
          ref: this.input,
          type: this.type,
          disabled: disabled,
          id: this.id,
          className: '' + this.inputClass + decorator,
          autoComplete: this.autoComplete,
          value: controlled ? value : undefined,
          onFocus: this.onFocusHandler,
          onKeyDown: this.onKeyDownHandler,
          onBlur: this.onBlurHandler,
          onChange: this.onChangeHandler
        }),
        children,
        _react2.default.createElement(
          'div',
          { className: this.errorContainerClass + decorator },
          error
        )
      );
    }
  }]);

  return ManagedText;
}(_input2.default);

exports.default = ManagedText;


ManagedText.propTypes = {
  controlled: _propTypes2.default.boolean
};

ManagedText.defaultProps = {
  controlled: true
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(5)();
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(6);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onMouseOverHandler = onMouseOverHandler;
exports.onMouseLeaveHandler = onMouseLeaveHandler;
exports.onFocusHandler = onFocusHandler;
exports.onBlurHandler = onBlurHandler;
exports.onClickHandler = onClickHandler;
exports.onChangeHandler = onChangeHandler;
function onMouseOverHandler(e) {
  var onMouseOver = this.props.onMouseOver;

  this.setState({
    mouseOver: true,
    decorator: this.decorator({ mouseOver: true })
  });
  onMouseOver && onMouseOver(e.target.value);
}

function onMouseLeaveHandler(e) {
  var onMouseLeave = this.props.onMouseLeave;

  this.setState({
    mouseOver: false,
    decorator: this.decorator({ mouseOver: false })
  });
  onMouseLeave && onMouseLeave(e.target.value);
}

function onFocusHandler(e) {
  var onFocus = this.props.onFocus;

  var autofill = true;
  if (this.state.value === '') autofill = false;
  this.setState({
    autofill: autofill,
    focus: true,
    decorator: this.decorator({ focus: true })
  });
  onFocus && onFocus(e.target.value);
}

function onBlurHandler(e) {
  var onBlur = this.props.onBlur;

  var autofill = true;
  if (this.state.value === '') autofill = false;
  this.setState({
    autofill: autofill,
    focus: false,
    decorator: this.decorator({ focus: false })
  });
  onBlur && onBlur(e.target.value);
}

function onClickHandler(e) {
  var onClick = this.props.onClick;

  this.input.current.focus();
  onClick && onClick(e.target.value);
}

function onChangeHandler(e) {
  var onChange = this.props.onChange;

  onChange && onChange(e.target.value);
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.decorator = decorator;
function decorator(options) {
  var values = _extends({}, function (_ref) {
    var autofill = _ref.autofill,
        focus = _ref.focus,
        mouseOver = _ref.mouseOver;
    return { autofill: autofill, focus: focus, mouseOver: mouseOver };
  }(this.state), options);
  var autofill = values.autofill,
      focus = values.focus,
      mouseOver = values.mouseOver;

  var className = '';
  if (autofill) className += ' ' + this.autofillClass;
  if (focus) className += ' ' + this.focusClass;
  if (mouseOver) className += ' ' + this.hoverClass;
  return className;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onKeyDownHandler = onKeyDownHandler;
exports.onChangeHandler = onChangeHandler;
function onKeyDownHandler(e) {
  var onKeyDown = this.props.onKeyDown;

  onKeyDown && onKeyDown(e.target.value);
}

function onChangeHandler(e) {
  var onChange = this.props.onChange;

  if (this.match && !e.target.value.match(this.match)) {
    this.input.current.value = this.input.current.value.slice(0, -1);
  }
  onChange && onChange(e.target.value);
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _input = __webpack_require__(1);

var _input2 = _interopRequireDefault(_input);

var _handlers = __webpack_require__(11);

var handlers = _interopRequireWildcard(_handlers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ManagedTextarea = function (_ManagedInput) {
  _inherits(ManagedTextarea, _ManagedInput);

  function ManagedTextarea(props) {
    _classCallCheck(this, ManagedTextarea);

    var _this = _possibleConstructorReturn(this, (ManagedTextarea.__proto__ || Object.getPrototypeOf(ManagedTextarea)).call(this, props));

    _this.containerClass = _this.classNames.container || 'managed-input textarea';
    _this.counterClass = _this.classNames.counter || 'counter';
    _this.onChangeHandler = handlers.onChangeHandler.bind(_this);
    _this.state = _extends({}, _this.state, {
      counter: 0
    });
    return _this;
  }

  _createClass(ManagedTextarea, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          display = _props.display,
          value = _props.value,
          disabled = _props.disabled,
          label = _props.label,
          counterLimit = _props.counterLimit,
          children = _props.children,
          error = _props.error;
      var _state = this.state,
          decorator = _state.decorator,
          counter = _state.counter;


      return _react2.default.createElement(
        'div',
        {
          style: { display: display },
          className: this.containerClass + decorator,
          onMouseOver: this.onMouseOverHandler,
          onMouseLeave: this.onMouseLeaveHandler,
          onClick: this.onClickHandler },
        _react2.default.createElement(
          'div',
          { className: this.labelClass + decorator },
          label
        ),
        _react2.default.createElement('textarea', {
          ref: this.input,
          disabled: disabled,
          id: this.id,
          className: this.inputClass + decorator,
          value: value,
          onFocus: this.onFocusHandler,
          onBlur: this.onBlurHandler,
          onChange: this.onChangeHandler }),
        _react2.default.createElement(
          'div',
          {
            className: this.counterClass + decorator },
          counter,
          ' / ',
          counterLimit
        ),
        children,
        _react2.default.createElement(
          'div',
          { className: this.errorContainerClass + decorator },
          error
        )
      );
    }
  }]);

  return ManagedTextarea;
}(_input2.default);

exports.default = ManagedTextarea;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onChangeHandler = onChangeHandler;
function onChangeHandler(e) {
  var _props = this.props,
      counterLimit = _props.counterLimit,
      onChange = _props.onChange;

  var valueLength = e.target.value.length;
  if (valueLength <= counterLimit) {
    this.setState({ counter: valueLength });
    onChange(e.target.value);
  } else {
    this.input.current.value = this.input.current.value.slice(0, -1);
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _input = __webpack_require__(1);

var _input2 = _interopRequireDefault(_input);

var _handlers = __webpack_require__(13);

var handlers = _interopRequireWildcard(_handlers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ManagedSelect = function (_ManagedInput) {
  _inherits(ManagedSelect, _ManagedInput);

  function ManagedSelect(props) {
    _classCallCheck(this, ManagedSelect);

    var _this = _possibleConstructorReturn(this, (ManagedSelect.__proto__ || Object.getPrototypeOf(ManagedSelect)).call(this, props));

    _this.options = _react2.default.createRef();
    _this.containerClass = _this.classNames.container || 'managed-input select';
    _this.optionsClass = _this.classNames.options || 'options';
    _this.optionClass = _this.classNames.option || 'option';
    _this.markClass = _this.classNames.mark || 'mark';
    _this.onClickHandler = handlers.onClickHandler.bind(_this);
    _this.onKeyDownHandler = handlers.onKeyDownHandler.bind(_this);
    _this.onBlurHandler = handlers.onBlurHandler.bind(_this);
    _this.onSelectHandler = handlers.onSelectHandler.bind(_this);
    _this.onOptionMouseOver = handlers.onOptionMouseOver.bind(_this);
    _this.onFocusCoverZIndex = _this.props.onFocusCoverZIndex || 2;
    _this.disableOnFocusCover = _this.props.disableOnFocusCover;
    _this.disableSelectOptions = _this.props.disableSelectOptions;
    _this.state = _extends({}, _this.state, {
      preSelected: 0
    });
    return _this;
  }

  _createClass(ManagedSelect, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          display = _props.display,
          value = _props.value,
          options = _props.options,
          error = _props.error,
          children = _props.children,
          label = _props.label;

      var decorator = '' + this.state.decorator + (value !== '' ? ' value' : '') + (error ? ' error' : '');

      return _react2.default.createElement(
        'div',
        {
          style: { display: display },
          className: this.containerClass + decorator },
        _react2.default.createElement(
          'div',
          {
            onMouseOver: this.onMouseOverHandler,
            onMouseLeave: this.onMouseLeaveHandler },
          _react2.default.createElement(
            'div',
            { onClick: this.onClickHandler },
            _react2.default.createElement(
              'div',
              { className: this.labelClass + decorator },
              label
            ),
            _react2.default.createElement(
              'div',
              { className: this.inputClass + decorator },
              (options.find(function (option) {
                return option.value === value;
              }) || {}).text,
              _react2.default.createElement('div', { className: this.markClass + decorator })
            )
          ),
          this.state.focus && this.isMobile && !this.disableOnFocusCover && _react2.default.createElement('div', {
            onClick: function onClick() {
              return _this2.onBlurHandler(undefined, undefined, true);
            },
            style: { position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, zIndex: this.onFocusCoverZIndex } }),
          this.state.focus && !this.disableSelectOptions && _react2.default.createElement(
            'div',
            {
              style: { zIndex: 999 },
              ref: this.options,
              className: this.optionsClass + decorator },
            options.map(function (option, index) {
              return _react2.default.createElement(
                'div',
                {
                  key: 'key-proxy-' + option.value + '-' + index,
                  onMouseOver: function onMouseOver() {
                    return _this2.onOptionMouseOver(index);
                  },
                  onClick: function onClick() {
                    return _this2.onSelectHandler(option);
                  },
                  className: _this2.optionClass + decorator + ('' + (_this2.state.preSelected === index ? ' preselected' : '')) },
                option.text
              );
            })
          ),
          _react2.default.createElement(
            'select',
            {
              ref: this.input,
              id: this.id,
              value: value,
              readOnly: true,
              style: { position: 'absolute', left: -10000 },
              disabled: this.state.disabled,
              onFocus: this.onFocusHandler,
              onKeyDown: this.onKeyDownHandler,
              onBlur: this.onBlurHandler },
            options.map(function (option, index) {
              return _react2.default.createElement(
                'option',
                {
                  key: 'key-original-' + option.value + '-' + index,
                  value: option.value },
                option.value
              );
            })
          )
        ),
        children,
        _react2.default.createElement(
          'div',
          { className: this.errorContainerClass + decorator },
          error
        )
      );
    }
  }]);

  return ManagedSelect;
}(_input2.default);

exports.default = ManagedSelect;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onKeyDownHandler = onKeyDownHandler;
exports.onClickHandler = onClickHandler;
exports.onOptionMouseOver = onOptionMouseOver;
exports.onBlurHandler = onBlurHandler;
exports.onSelectHandler = onSelectHandler;
function onKeyDownHandler(e) {
  var _props = this.props,
      onSelect = _props.onSelect,
      onKeyDown = _props.onKeyDown;

  var keyCode = e.keyCode;
  if (keyCode === 38 || keyCode === 40) {
    e.preventDefault();
    var preSelected = computePreSelected.call(this, keyCode);
    this.options.current.scrollTop = computeScroll.call(this, preSelected, keyCode);
    this.setState({ preSelected: preSelected });
  }
  if (keyCode === 13) {
    var option = this.props.options[this.state.preSelected];
    this.setState({
      focus: false,
      mouseOver: false
    });
    onSelect(option);
  }
  if (keyCode === 9) {
    this.onBlurHandler(e, true);
  }
  onKeyDown && onKeyDown(e.keyCode);
}

function onClickHandler(e) {
  var _props2 = this.props,
      onFocus = _props2.onFocus,
      onClick = _props2.onClick;

  if (this.isMobile()) {
    var autofill = true;
    if (this.props.value === '') {
      autofill = false;
    }
    this.setState({
      autofill: autofill,
      focus: true,
      decorator: this.decorator({ focus: true })
    });
    onFocus && onFocus(e.target.value);
  } else {
    this.input.current.focus();
  }
  onClick && onClick(e.target.value);
}

function onOptionMouseOver(index) {
  this.setState({ preSelected: index });
}

function onBlurHandler(e, tabDown, isMobile) {
  var onBlur = this.props.onBlur;

  if (this.state.mouseOver === false || tabDown === true || isMobile) {
    var value = void 0;
    if (e && e.target) value = e.target.value;
    onBlur && onBlur(value);
    this.setState({
      focus: false,
      mouseOver: false,
      decorator: this.decorator({ focus: false, mouseOver: false })
    });
  }
}

function onSelectHandler(option) {
  var onSelect = this.props.onSelect;

  var autofill = true;
  if (option.value === '') autofill = false;
  this.setState({
    autofill: autofill,
    focus: false,
    mouseOver: false,
    decorator: this.decorator({ focus: false, mouseOver: false, value: option.value })
  });
  onSelect(option);
}

function computePreSelected(keyCode) {
  var preSelected = this.state.preSelected;
  if (keyCode == 40) {
    if (preSelected < this.props.options.length - 1) {
      return preSelected + 1;
    } else {
      return 0;
    }
  } else {
    if (preSelected > 0) {
      return preSelected - 1;
    } else {
      return this.props.options.length - 1;
    }
  }
}

function computeScroll(preSelectedIndex, keyCode) {
  var options = this.options.current;
  var optionsHeight = options.offsetHeight;
  var optionsScroll = options.scrollTop;
  var preSelected = options.children[preSelectedIndex];
  var preSelectedHeight = preSelected.offsetHeight;
  var preSelectedOffset = preSelected.offsetTop;
  switch (preSelectedIndex) {
    case 0:
      return 0;
    case this.props.options.length - 1:
      return options.scrollHeight;
    default:
      if (keyCode === 38 && preSelectedOffset < optionsScroll) {
        return preSelectedOffset;
      }
      if (keyCode === 40 && preSelectedOffset + preSelectedHeight > optionsScroll + optionsHeight) {
        var diff = (preSelectedOffset + preSelectedHeight - optionsHeight) % preSelectedHeight - preSelectedHeight;
        return preSelectedOffset - optionsHeight + preSelectedHeight - diff;
      }
      return this.options.current.scrollTop;
  }
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _input = __webpack_require__(1);

var _input2 = _interopRequireDefault(_input);

var _handlers = __webpack_require__(15);

var handlers = _interopRequireWildcard(_handlers);

var _decorator = __webpack_require__(16);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ManagedRadio = function (_ManagedInput) {
  _inherits(ManagedRadio, _ManagedInput);

  function ManagedRadio(props) {
    _classCallCheck(this, ManagedRadio);

    var _this = _possibleConstructorReturn(this, (ManagedRadio.__proto__ || Object.getPrototypeOf(ManagedRadio)).call(this, props));

    _this.input = [];
    _this.containerClass = _this.classNames.container || 'managed-input radio';
    _this.radioContainerClass = _this.classNames.radioContainerClass || 'container';
    _this.checkedClass = _this.classNames.checked || 'checked';
    _this.tickClass = _this.classNames.tick || 'tick';
    _this.onMouseOverHandler = handlers.onMouseOverHandler.bind(_this);
    _this.onMouseLeaveHandler = handlers.onMouseLeaveHandler.bind(_this);
    _this.onFocusHandler = handlers.onFocusHandler.bind(_this);
    _this.onBlurHandler = handlers.onBlurHandler.bind(_this);
    _this.onKeyDownHandler = handlers.onKeyDownHandler.bind(_this);
    _this.onClickHandler = handlers.onClickHandler.bind(_this);
    _this.decorator = _decorator.decorator.bind(_this);
    return _this;
  }

  _createClass(ManagedRadio, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          display = _props.display,
          name = _props.name,
          radios = _props.radios,
          checked = _props.checked,
          children = _props.children;
      var decorator = this.state.decorator;


      return _react2.default.createElement(
        'div',
        { style: { display: display } },
        radios.map(function (radio, index) {
          return _react2.default.createElement(
            'div',
            {
              className: '' + _this2.containerClass + (radio.value === checked ? ' checked' : '') + (decorator[index] ? decorator[index] : ''),
              key: radio.key || 'radio-' + _this2.name + '-' + index,
              onClick: function onClick() {
                return _this2.onClickHandler(radio.value, index);
              } },
            _react2.default.createElement(
              'div',
              {
                className: '' + _this2.inputClass + (radio.value === checked ? ' checked' : '') + (decorator[index] ? decorator[index] : ''),
                onMouseOver: function onMouseOver(e) {
                  return _this2.onMouseOverHandler(e, index);
                },
                onMouseLeave: function onMouseLeave(e) {
                  return _this2.onMouseLeaveHandler(e, index);
                } },
              radio.value === checked && _react2.default.createElement('div', { className: '' + _this2.tickClass + (decorator[index] ? decorator[index] : '') })
            ),
            _react2.default.createElement('input', {
              name: name,
              ref: _this2.input[index] = _react2.default.createRef(),
              id: radio.id,
              type: 'radio',
              style: { position: 'absolute', left: -10000 },
              value: radio.value,
              checked: radio.value === checked,
              onFocus: function onFocus(e) {
                return _this2.onFocusHandler(e, index);
              },
              onBlur: function onBlur(e) {
                return _this2.onBlurHandler(e, index);
              },
              onKeyDown: _this2.onKeyDownHandler,
              onChange: function onChange(e) {
                return _this2.onChangeHandler(e);
              } }),
            _react2.default.createElement(
              'label',
              {
                className: '' + _this2.labelClass + (radio.value === checked ? ' checked' : '') + (decorator[index] ? decorator[index] : ''),
                onMouseOver: function onMouseOver(e) {
                  return _this2.onMouseOverHandler(e, index);
                },
                onMouseLeave: function onMouseLeave(e) {
                  return _this2.onMouseLeaveHandler(e, index);
                } },
              radio.label
            ),
            _react2.default.createElement('div', { style: { clear: 'both' } })
          );
        }),
        _react2.default.createElement('div', { style: { clear: 'both' } }),
        children
      );
    }
  }]);

  return ManagedRadio;
}(_input2.default);

exports.default = ManagedRadio;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onMouseOverHandler = onMouseOverHandler;
exports.onMouseLeaveHandler = onMouseLeaveHandler;
exports.onFocusHandler = onFocusHandler;
exports.onBlurHandler = onBlurHandler;
exports.onKeyDownHandler = onKeyDownHandler;
exports.onClickHandler = onClickHandler;
function onMouseOverHandler(e, index) {
  var onMouseOver = this.props.onMouseOver;
  var decorator = this.decorator;

  var mouseOver = [].concat(this.state.mouseOver);
  mouseOver[index] = true;
  this.setState({
    mouseOver: mouseOver,
    decorator: decorator({ mouseOver: mouseOver })
  });
  onMouseOver && onMouseOver(e.target.value);
}

function onMouseLeaveHandler(e, index) {
  var onMouseLeave = this.props.onMouseLeave;
  var decorator = this.decorator;

  var mouseOver = [].concat(this.state.mouseOver);
  mouseOver[index] = false;
  this.setState({
    mouseOver: mouseOver,
    decorator: decorator({ mouseOver: mouseOver })
  });
  onMouseLeave && onMouseLeave(e.target.value);
}

function onFocusHandler(e, index) {
  var onFocus = this.props.onFocus;
  var decorator = this.decorator;

  var focus = [].concat(this.state.focus);
  focus[index] = true;
  this.setState({
    focus: focus,
    decorator: decorator({ focus: focus })
  });
  onFocus && onFocus(e.target.value);
}

function onBlurHandler(e, index) {
  var onBlur = this.props.onBlur;
  var decorator = this.decorator;

  var focus = [].concat(this.state.focus);
  focus[index] = false;
  this.setState({
    focus: focus,
    decorator: decorator({ focus: focus })
  });
  onBlur && onBlur(e.target.value);
}

function onKeyDownHandler(e) {
  if ([37, 38, 39, 40].includes(e.keyCode)) e.preventDefault();else if (e.keyCode === 9) this.onBlurHandler(e, true);
}

function onClickHandler(value, index) {
  var onClick = this.props.onClick;

  var input = this.input && this.input[index] && this.input[index].current;
  if (!input) return;
  input.focus();
  onClick(value);
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.decorator = decorator;
function decorator(options) {
  var _this = this;

  var decorator = {};
  var values = _extends({}, function (_ref) {
    var focus = _ref.focus,
        mouseOver = _ref.mouseOver;
    return { focus: focus, mouseOver: mouseOver };
  }(this.state), options);
  var focus = values.focus,
      mouseOver = values.mouseOver;
  var radios = this.props.radios;

  radios.map(function (_, index) {
    var className = '';
    if (focus[index]) className += ' ' + _this.focusClass;
    if (mouseOver[index]) className += ' ' + _this.hoverClass;
    decorator[index] = className;
  });
  return decorator;
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _input = __webpack_require__(1);

var _input2 = _interopRequireDefault(_input);

var _handlers = __webpack_require__(18);

var handlers = _interopRequireWildcard(_handlers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ManagedCheckbox = function (_ManagedInput) {
  _inherits(ManagedCheckbox, _ManagedInput);

  function ManagedCheckbox(props) {
    _classCallCheck(this, ManagedCheckbox);

    var _this = _possibleConstructorReturn(this, (ManagedCheckbox.__proto__ || Object.getPrototypeOf(ManagedCheckbox)).call(this, props));

    _this.containerClass = _this.classNames.container || 'managed-input checkbox';
    _this.checkboxContainerClass = _this.classNames.checkboxContainerClass || 'container';
    _this.tickClass = _this.classNames.tick || 'tick';
    _this.checkedClass = _this.classNames.checked || 'checked';
    _this.onClickHandler = handlers.onClickHandler.bind(_this);
    return _this;
  }

  _createClass(ManagedCheckbox, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          display = _props.display,
          checked = _props.checked,
          label = _props.label,
          children = _props.children;

      var decorator = '' + this.state.decorator + (checked ? ' value' : '');
      return _react2.default.createElement(
        'div',
        {
          style: { display: display },
          className: this.containerClass + decorator },
        _react2.default.createElement(
          'div',
          {
            className: this.inputClass + decorator,
            onMouseOver: this.onMouseOverHandler,
            onMouseLeave: this.onMouseLeaveHandler,
            onClick: this.onClickHandler },
          checked && _react2.default.createElement('div', { className: this.tickClass + decorator })
        ),
        _react2.default.createElement('input', {
          ref: this.input,
          type: 'checkbox',
          id: this.id,
          style: { position: 'absolute', left: -10000 },
          checked: checked,
          onFocus: this.onFocusHandler,
          onBlur: this.onBlurHandler,
          onChange: this.onClickHandler }),
        _react2.default.createElement(
          'div',
          {
            onMouseOver: this.onMouseOverHandler,
            onMouseLeave: this.onMouseLeaveHandler,
            onClick: this.onClickHandler,
            className: this.labelClass + decorator },
          label
        ),
        _react2.default.createElement('div', { style: { clear: 'both' } }),
        children
      );
    }
  }]);

  return ManagedCheckbox;
}(_input2.default);

exports.default = ManagedCheckbox;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onClickHandler = onClickHandler;
function onClickHandler() {
  var _props = this.props,
      onClick = _props.onClick,
      checked = _props.checked;

  this.input.current.focus();
  onClick(!checked);
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _input = __webpack_require__(1);

var _input2 = _interopRequireDefault(_input);

var _handlers = __webpack_require__(20);

var handlers = _interopRequireWildcard(_handlers);

var _decorator = __webpack_require__(21);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ManagedMultipleCheckbox = function (_ManagedInput) {
  _inherits(ManagedMultipleCheckbox, _ManagedInput);

  function ManagedMultipleCheckbox(props) {
    _classCallCheck(this, ManagedMultipleCheckbox);

    var _this = _possibleConstructorReturn(this, (ManagedMultipleCheckbox.__proto__ || Object.getPrototypeOf(ManagedMultipleCheckbox)).call(this, props));

    _this.input = {};
    _this.containerClass = _this.classNames.container || 'managed-input checkbox';
    _this.checkboxContainerClass = _this.classNames.checkboxContainerClass || 'container';
    _this.tickClass = _this.classNames.tick || 'tick';
    _this.checkedClass = _this.classNames.checked || 'checked';
    _this.onMouseOverHandler = handlers.onMouseOverHandler.bind(_this);
    _this.onMouseLeaveHandler = handlers.onMouseLeaveHandler.bind(_this);
    _this.onFocusHandler = handlers.onFocusHandler.bind(_this);
    _this.onBlurHandler = handlers.onBlurHandler.bind(_this);
    _this.onClickHandler = handlers.onClickHandler.bind(_this);
    _this.onKeyDownHandler = handlers.onKeyDownHandler.bind(_this);
    _this.decorator = _decorator.decorator.bind(_this);
    _this.state = _extends({}, _this.state, {
      mouseOver: {},
      focus: {},
      decorator: {}
    });
    return _this;
  }

  _createClass(ManagedMultipleCheckbox, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          display = _props.display,
          checkboxes = _props.checkboxes,
          children = _props.children;
      var decorator = this.state.decorator;

      return _react2.default.createElement(
        'div',
        {
          style: { display: display } },
        checkboxes.map(function (checkbox) {
          return _react2.default.createElement(
            'div',
            {
              className: '' + _this2.containerClass + (checkbox.checked ? ' checked' : '') + (decorator[checkbox.ref] ? decorator[checkbox.ref] : ''),
              key: 'multiple-checkbox-' + checkbox.ref },
            _react2.default.createElement(
              'div',
              {
                className: '' + _this2.inputClass + (checkbox.checked ? ' checked' : '') + (decorator[checkbox.ref] ? decorator[checkbox.ref] : ''),
                onMouseOver: function onMouseOver(e) {
                  return _this2.onMouseOverHandler(e, checkbox.ref);
                },
                onMouseLeave: function onMouseLeave(e) {
                  return _this2.onMouseLeaveHandler(e, checkbox.ref);
                },
                onClick: function onClick() {
                  return _this2.onClickHandler(checkbox.ref);
                } },
              checkbox.checked && _react2.default.createElement('div', _defineProperty({
                className: _this2.tickClass + _this2.state.decorator[checkbox.ref]
              }, 'className', _this2.tickClass + ' ' + (decorator[checkbox.ref] ? decorator[checkbox.ref] : '') + ' checked'))
            ),
            _react2.default.createElement('input', {
              onFocus: function onFocus(e) {
                return _this2.onFocusHandler(e, checkbox.ref);
              },
              onBlur: function onBlur(e) {
                return _this2.onBlurHandler(e, checkbox.ref);
              },
              style: { position: 'absolute', left: -10000 },
              ref: _this2.input[checkbox.ref] = _react2.default.createRef(),
              type: 'checkbox',
              checked: checkbox.checked,
              onKeyDown: function onKeyDown(e) {
                return _this2.onKeyDownHandler(e, checkbox.ref);
              },
              onChange: function onChange() {
                return null;
              } }),
            _react2.default.createElement(
              'div',
              {
                onMouseOver: function onMouseOver(e) {
                  return _this2.onMouseOverHandler(e, checkbox.ref);
                },
                onMouseLeave: function onMouseLeave(e) {
                  return _this2.onMouseLeaveHandler(e, checkbox.ref);
                },
                onClick: function onClick() {
                  return _this2.onClickHandler(checkbox.ref);
                },
                className: '' + _this2.labelClass + (checkbox.checked ? ' checked' : '') + (decorator[checkbox.ref] ? decorator[checkbox.ref] : '') },
              checkbox.label
            ),
            _react2.default.createElement('div', { style: { clear: 'both' } })
          );
        }),
        _react2.default.createElement('div', { style: { clear: 'both' } }),
        children
      );
    }
  }]);

  return ManagedMultipleCheckbox;
}(_input2.default);

exports.default = ManagedMultipleCheckbox;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.onMouseOverHandler = onMouseOverHandler;
exports.onMouseLeaveHandler = onMouseLeaveHandler;
exports.onFocusHandler = onFocusHandler;
exports.onBlurHandler = onBlurHandler;
exports.onClickHandler = onClickHandler;
exports.onKeyDownHandler = onKeyDownHandler;
function onMouseOverHandler(e, ref) {
  var onMouseOver = this.props.onMouseOver;
  var decorator = this.decorator;

  var mouseOver = _extends({}, this.state.mouseOver);
  mouseOver[ref] = true;
  this.setState({
    mouseOver: mouseOver,
    decorator: decorator({ mouseOver: mouseOver })
  });
  onMouseOver && onMouseOver(e.target.value, ref);
}

function onMouseLeaveHandler(e, ref) {
  var onMouseLeave = this.props.onMouseLeave;
  var decorator = this.decorator;

  var mouseOver = _extends({}, this.state.mouseOver);
  mouseOver[ref] = false;
  this.setState({
    mouseOver: mouseOver,
    decorator: decorator({ mouseOver: mouseOver })
  });
  onMouseLeave && onMouseLeave(e.target.value, ref);
}

function onFocusHandler(e, ref) {
  var onFocus = this.props.onFocus;
  var decorator = this.decorator;

  var focus = _extends({}, this.state.focus);
  focus[ref] = true;
  this.setState({
    focus: focus,
    decorator: decorator({ focus: focus })
  });
  onFocus && onFocus(e.target.value, ref);
}

function onBlurHandler(e, ref) {
  var onBlur = this.props.onBlur;
  var decorator = this.decorator;

  var focus = _extends({}, this.state.focus);
  focus[ref] = false;
  this.setState({
    focus: focus,
    decorator: decorator({ focus: focus })
  });
  onBlur && onBlur(e.target.value, ref);
}

function onClickHandler(ref) {
  var onClick = this.props.onClick;

  var input = this.input[ref].current;
  input.focus();
  var checked = !input.checked;
  onClick && onClick(checked, ref);
}

function onKeyDownHandler(e, ref) {
  if (e.keyCode === 32) this.onClickHandler(ref);
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.decorator = decorator;
function decorator(options) {
  var _this = this;

  var decorator = {};
  var values = _extends({}, function (_ref) {
    var focus = _ref.focus,
        mouseOver = _ref.mouseOver;
    return { focus: focus, mouseOver: mouseOver };
  }(this.state), options);
  var focus = values.focus,
      mouseOver = values.mouseOver;
  var checkboxes = this.props.checkboxes;

  checkboxes.map(function (checkbox) {
    var className = '';
    if (focus[checkbox.ref]) className += ' ' + _this.focusClass;
    if (mouseOver[checkbox.ref]) className += ' ' + _this.hoverClass;
    decorator[checkbox.ref] = className;
  });
  return decorator;
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _input = __webpack_require__(1);

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ManagedButton = function (_ManagedInput) {
  _inherits(ManagedButton, _ManagedInput);

  function ManagedButton(props) {
    _classCallCheck(this, ManagedButton);

    var _this = _possibleConstructorReturn(this, (ManagedButton.__proto__ || Object.getPrototypeOf(ManagedButton)).call(this, props));

    _this.containerClass = _this.classNames.container || 'managed-input button';
    return _this;
  }

  _createClass(ManagedButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          display = _props.display,
          disabled = _props.disabled,
          label = _props.label,
          children = _props.children;
      var decorator = this.state.decorator;


      return _react2.default.createElement(
        'div',
        {
          style: { display: display },
          className: this.containerClass + decorator },
        _react2.default.createElement(
          'button',
          {
            ref: this.input,
            id: this.id,
            className: this.inputClass + decorator,
            disabled: disabled,
            onMouseOver: this.onMouseOverHandler,
            onMouseLeave: this.onMouseLeaveHandler,
            onFocus: this.onFocusHandler,
            onBlur: this.onBlurHandler,
            onClick: this.onClickHandler },
          label
        ),
        children
      );
    }
  }]);

  return ManagedButton;
}(_input2.default);

exports.default = ManagedButton;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _input = __webpack_require__(1);

var _input2 = _interopRequireDefault(_input);

var _lifecycle = __webpack_require__(24);

var _decorator = __webpack_require__(25);

var _handlers = __webpack_require__(26);

var handlers = _interopRequireWildcard(_handlers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ManagedPagination = function (_ManagedInput) {
  _inherits(ManagedPagination, _ManagedInput);

  function ManagedPagination(props) {
    _classCallCheck(this, ManagedPagination);

    var _this = _possibleConstructorReturn(this, (ManagedPagination.__proto__ || Object.getPrototypeOf(ManagedPagination)).call(this, props));

    _this.containerClass = _this.classNames.container || 'managed-input pagination';
    _this.currentClass = _this.classNames.current || 'current';
    _this.arrowClass = _this.classNames.arrow || 'arrow';
    _this.decorator = _decorator.decorator.bind(_this);
    _this.componentDidMount = _lifecycle.componentDidMount;
    _this.componentDidUpdate = _lifecycle.componentDidUpdate;
    _this.onMouseOverHandler = handlers.onMouseOverHandler.bind(_this);
    _this.onMouseLeaveHandler = handlers.onMouseLeaveHandler.bind(_this);
    _this.onFocusHandler = handlers.onFocusHandler.bind(_this);
    _this.onBlurHandler = handlers.onBlurHandler.bind(_this);
    _this.onClickHandler = handlers.onClickHandler.bind(_this);
    _this.state = _extends({}, _this.state, {
      buttons: [],
      mouseOver: {},
      focus: {},
      decorator: []
    });
    _this.jsxProvider = _this.jsxProvider.bind(_this);
    _this.showButton = _this.showButton.bind(_this);
    _this.edgeHandler = _this.edgeHandler.bind(_this);
    return _this;
  }

  _createClass(ManagedPagination, [{
    key: 'jsxProvider',
    value: function jsxProvider(button) {
      if (button === 0) return '<';else if (button === this.state.buttons.length - 1) return '>';else return button;
    }
  }, {
    key: 'showButton',
    value: function showButton(button) {
      if (this.state.buttons.length < 4) return false;
      return true;
    }
  }, {
    key: 'edgeHandler',
    value: function edgeHandler(button) {
      if (button === 0 && this.props.current === 1) return 'hidden';
      if (button === this.state.buttons.length - 1 && this.props.current === this.state.buttons.length - 2) return 'hidden';
      return 'visible';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          display = _props.display,
          current = _props.current,
          children = _props.children;
      var _state = this.state,
          buttons = _state.buttons,
          decorator = _state.decorator;


      return _react2.default.createElement(
        'div',
        {
          style: { display: display },
          className: this.containerClass },
        buttons.map(function (button, index) {
          return _this2.showButton(button) && _react2.default.createElement(
            'button',
            {
              style: { visibility: _this2.edgeHandler(button) },
              key: 'paginationButtoNo' + button,
              className: '' + _this2.inputClass + (current === index ? ' current' : '') + (decorator[button] ? decorator[button] : ''),
              onMouseOver: function onMouseOver() {
                return _this2.onMouseOverHandler(button);
              },
              onMouseLeave: function onMouseLeave() {
                return _this2.onMouseLeaveHandler(button);
              },
              onFocus: function onFocus() {
                return _this2.onFocusHandler(button);
              },
              onBlur: function onBlur() {
                return _this2.onBlurHandler(button);
              },
              onClick: function onClick() {
                return _this2.onClickHandler(button);
              } },
            _this2.jsxProvider(button)
          );
        }),
        children
      );
    }
  }]);

  return ManagedPagination;
}(_input2.default);

exports.default = ManagedPagination;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.componentDidMount = componentDidMount;
exports.componentDidUpdate = componentDidUpdate;
function componentDidMount() {
  computeButtons.call(this);
}

function componentDidUpdate(prevProps) {
  if (prevProps.resultsPerPage !== this.props.resultsPerPage || prevProps.resultAmount !== this.props.resultAmount) {
    computeButtons.call(this);
  }
}

function computeButtons() {
  this.setState({
    buttons: createButtonsArray(Math.ceil(this.props.resultAmount / this.props.resultsPerPage))
  });
}

function createButtonsArray(limit) {
  var buttonsArray = [];
  for (var i = 0; i < limit + 2; i++) {
    buttonsArray.push(i);
  }
  return buttonsArray;
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.decorator = decorator;
function decorator(options) {
  var _this = this;

  var decorator = [];
  var values = _extends({}, function (_ref) {
    var focus = _ref.focus,
        mouseOver = _ref.mouseOver;
    return { focus: focus, mouseOver: mouseOver };
  }(this.state), options);
  var focus = values.focus,
      mouseOver = values.mouseOver;
  var buttons = this.state.buttons;

  [0].concat(buttons).map(function (button) {
    var className = '';
    if (focus[button]) className += ' ' + _this.focusClass;
    if (mouseOver[button]) className += ' ' + _this.hoverClass;
    decorator[button] = className;
  });
  return decorator;
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.onMouseOverHandler = onMouseOverHandler;
exports.onMouseLeaveHandler = onMouseLeaveHandler;
exports.onFocusHandler = onFocusHandler;
exports.onBlurHandler = onBlurHandler;
exports.onClickHandler = onClickHandler;
function onMouseOverHandler(button) {
  var onMouseOver = this.props.onMouseOver;

  var mouseOver = _extends({}, this.state.mouseOver);
  mouseOver[button] = true;
  this.setState({
    mouseOver: mouseOver,
    decorator: this.decorator({ mouseOver: mouseOver })
  });
  onMouseOver && onMouseOver(button);
}

function onMouseLeaveHandler(button) {
  var onMouseLeave = this.props.onMouseLeave;

  var mouseOver = _extends({}, this.state.mouseOver);
  mouseOver[button] = false;
  this.setState({
    mouseOver: mouseOver,
    decorator: this.decorator({ mouseOver: mouseOver })
  });
  onMouseLeave && onMouseLeave(button);
}

function onFocusHandler(button) {
  var onFocus = this.props.onFocus;

  var focus = _extends({}, this.state.focus);
  focus[button] = true;
  this.setState({
    focus: focus,
    decorator: this.decorator({ focus: focus })
  });
  onFocus && onFocus(button);
}

function onBlurHandler(button) {
  var onBlur = this.props.onBlur;

  var focus = _extends({}, this.state.focus);
  focus[button] = false;
  this.setState({
    focus: focus,
    decorator: this.decorator({ focus: focus })
  });
  onBlur && onBlur(button);
}

function onClickHandler(button) {
  var onClick = this.props.onClick;

  var current = void 0;
  if (button === 0) current = this.props.current - 1;else if (button === this.state.buttons.length - 1) current = this.props.current + 1;else current = button;
  onClick(current);
}

/***/ })
/******/ ]);