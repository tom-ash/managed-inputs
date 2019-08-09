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

var _lifecycle = __webpack_require__(4);

var lifecycle = _interopRequireWildcard(_lifecycle);

var _handlers = __webpack_require__(5);

var handlers = _interopRequireWildcard(_handlers);

var _decorator = __webpack_require__(6);

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
    _this.controlled = _this.props.manager('controlled');
    _this.id = _this.props.manager('id');
    _this.classNames = _this.props.manager('classNames');
    _this.inputClass = _this.classNames.input || 'input';
    _this.labelClass = _this.classNames.label || 'label';
    _this.valueClass = _this.classNames.value || 'value';
    _this.autofillClass = _this.classNames.value || 'autofill';
    _this.focusClass = _this.classNames.focus || 'focus';
    _this.hoverClass = _this.classNames.hover || 'hover';
    _this.errorClass = _this.classNames.error || 'error';
    _this.errorContainerClass = _this.classNames.error || 'error-container';
    _this.componentDidMount = lifecycle.componentDidMount;
    _this.shouldComponentUpdate = lifecycle.shouldComponentUpdate;
    _this.componentDidUpdate = lifecycle.componentDidUpdate;
    _this.onMouseOverHandler = handlers.onMouseOverHandler.bind(_this);
    _this.onMouseLeaveHandler = handlers.onMouseLeaveHandler.bind(_this);
    _this.onFocusHandler = handlers.onFocusHandler.bind(_this);
    _this.onBlurHandler = handlers.onBlurHandler.bind(_this);
    _this.onChangeHandler = handlers.onChangeHandler.bind(_this);
    _this.onClickHandler = handlers.onClickHandler.bind(_this);
    _this.decorator = _decorator.decorator.bind(_this);
    _this.stateKeysToDerive = ['display', 'disabled', 'value', 'label', 'error'];
    _this.stateKeysToUpdate = _this.stateKeysToDerive.concat(['mouseOver', 'focus', 'decorator']);
    _this.state = {
      stateKeysToDerive: _this.stateKeysToDerive,
      display: _this.props.manager('display'),
      disabled: _this.props.manager('disabled'),
      value: _this.props.manager('value'),
      label: _this.props.manager('label'),
      error: _this.props.manager('error'),
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
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevstate) {
      return lifecycle.getDerivedStateFromProps(nextProps, prevstate);
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
exports.managerAgent = exports.ManagedPagination = exports.ManagedMultipleCheckbox = exports.ManagedCheckbox = exports.ManagedButton = exports.ManagedRadio = exports.ManagedTextarea = exports.ManagedSelect = exports.ManagedText = undefined;

var _text = __webpack_require__(3);

var _text2 = _interopRequireDefault(_text);

var _textarea = __webpack_require__(8);

var _textarea2 = _interopRequireDefault(_textarea);

var _select = __webpack_require__(10);

var _select2 = _interopRequireDefault(_select);

var _radio = __webpack_require__(12);

var _radio2 = _interopRequireDefault(_radio);

var _checkbox = __webpack_require__(15);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _multipleCheckbox = __webpack_require__(18);

var _multipleCheckbox2 = _interopRequireDefault(_multipleCheckbox);

var _button = __webpack_require__(21);

var _button2 = _interopRequireDefault(_button);

var _pagination = __webpack_require__(23);

var _pagination2 = _interopRequireDefault(_pagination);

var _managerAgent = __webpack_require__(27);

var _managerAgent2 = _interopRequireDefault(_managerAgent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ManagedText = _text2.default;
exports.ManagedSelect = _select2.default;
exports.ManagedTextarea = _textarea2.default;
exports.ManagedRadio = _radio2.default;
exports.ManagedButton = _button2.default;
exports.ManagedCheckbox = _checkbox2.default;
exports.ManagedMultipleCheckbox = _multipleCheckbox2.default;
exports.ManagedPagination = _pagination2.default;
exports.managerAgent = _managerAgent2.default;

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

var _input = __webpack_require__(1);

var _input2 = _interopRequireDefault(_input);

var _handlers = __webpack_require__(7);

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

    _this.type = _this.props.manager('type');
    _this.autoComplete = _this.props.manager('autoComplete');
    _this.match = _this.props.manager('match');
    _this.containerClass = _this.classNames.container || 'managed-input text';
    _this.onKeyDownHandler = handlers.onKeyDownHandler.bind(_this);
    _this.onChangeHandler = handlers.onChangeHandler.bind(_this);
    return _this;
  }

  _createClass(ManagedText, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          style: { display: this.state.display },
          className: this.containerClass + this.state.decorator,
          onMouseOver: this.onMouseOverHandler,
          onMouseLeave: this.onMouseLeaveHandler,
          onClick: this.onClickHandler },
        _react2.default.createElement(
          'div',
          { className: this.labelClass + this.state.decorator },
          this.state.label
        ),
        _react2.default.createElement('input', {
          ref: this.input,
          type: this.type,
          disabled: this.state.disabled,
          id: this.id,
          className: this.inputClass + this.state.decorator,
          autoComplete: this.autoComplete,
          value: this.controlled ? this.state.value : undefined,
          onFocus: this.onFocusHandler,
          onKeyDown: this.onKeyDownHandler,
          onBlur: this.onBlurHandler,
          onChange: this.onChangeHandler }),
        this.props.manager('children'),
        _react2.default.createElement(
          'div',
          { className: this.errorContainerClass + this.state.decorator },
          this.state.error
        )
      );
    }
  }]);

  return ManagedText;
}(_input2.default);

exports.default = ManagedText;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.componentDidMount = componentDidMount;
exports.getDerivedStateFromProps = getDerivedStateFromProps;
exports.shouldComponentUpdate = shouldComponentUpdate;
exports.componentDidUpdate = componentDidUpdate;
function componentDidMount() {
  this.decorator();
}

function getDerivedStateFromProps(nextProps, prevState) {
  var returnObject = {};

  prevState.stateKeysToDerive.map(function (element) {
    if (JSON.stringify(nextProps.manager(element)) !== JSON.stringify(prevState[element])) {
      returnObject[element] = nextProps.manager(element);
    }
  });
  return returnObject;
}

function shouldComponentUpdate(_, nextState) {
  var _this = this;

  var outcome = false;
  this.stateKeysToUpdate.map(function (element) {
    if (JSON.stringify(_this.state[element]) !== JSON.stringify(nextState[element])) {
      outcome = true;
    }
  });
  return outcome;
}

function componentDidUpdate() {
  this.decorator();
}

/***/ }),
/* 5 */
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
  this.setState({ mouseOver: true });
  this.props.manager('onMouseOver', e.target.value);
}

function onMouseLeaveHandler(e) {
  this.setState({ mouseOver: false });
  this.props.manager('onMouseLeave', e.target.value);
}

function onFocusHandler(e) {
  var autofill = true;
  if (this.state.value === '') {
    autofill = false;
  }
  this.setState({
    autofill: autofill,
    focus: true
  });
  this.props.manager('onFocus', e.target.value);
}

function onBlurHandler(e) {
  var autofill = true;
  if (this.state.value === '') {
    autofill = false;
  }
  this.setState({
    autofill: autofill,
    focus: false
  });
  this.props.manager('onBlur', e.target.value);
}

function onClickHandler(e) {
  this.input.current.focus();
  this.props.manager('onClick', e.target.value);
}

function onChangeHandler(e) {
  this.forceUpdate();
  this.props.manager('onChange', e.target.value);
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decorator = decorator;
function decorator() {
  var className = '';
  if (this.input.current.value) {
    className += ' ' + this.valueClass;
  }
  if (this.state.autofill) {
    className += ' ' + this.autofillClass;
  }
  if (this.state.focus) {
    className += ' ' + this.focusClass;
  }
  if (this.state.mouseOver) {
    className += ' ' + this.hoverClass;
  }
  if (this.state.error) {
    className += ' ' + this.errorClass;
  }
  this.setState({
    decorator: className
  });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onKeyDownHandler = onKeyDownHandler;
exports.onChangeHandler = onChangeHandler;
function onKeyDownHandler(e) {
  this.props.manager('onKeyDown', e.target.value, e);
}

function onChangeHandler(e) {
  if (this.match && !e.target.value.match(this.match)) {
    this.input.current.value = this.input.current.value.slice(0, -1);
  }
  this.props.manager('onChange', e.target.value);
}

/***/ }),
/* 8 */
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

var _handlers = __webpack_require__(9);

var handlers = _interopRequireWildcard(_handlers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
    _this.stateKeysToDerive = [].concat(_toConsumableArray(_this.stateKeysToDerive), ['counterLimit']);
    _this.stateKeysToUpdate = [].concat(_toConsumableArray(_this.stateKeysToUpdate), ['counterLimit', 'counter']);
    _this.onChangeHandler = handlers.onChangeHandler.bind(_this);
    _this.state = _extends({}, _this.state, {
      stateKeysToDerive: _this.stateKeysToDerive,
      counterLimit: _this.props.manager('counterLimit'),
      counter: 0
    });
    return _this;
  }

  _createClass(ManagedTextarea, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          style: { display: this.state.display },
          className: this.containerClass + this.state.decorator,
          onMouseOver: this.onMouseOverHandler,
          onMouseLeave: this.onMouseLeaveHandler,
          onClick: this.onClickHandler },
        _react2.default.createElement(
          'div',
          { className: this.labelClass + this.state.decorator },
          this.state.label
        ),
        _react2.default.createElement('textarea', {
          ref: this.input,
          disabled: this.state.disabled,
          id: this.id,
          className: this.inputClass + this.state.decorator,
          value: this.controlled ? this.state.value : undefined,
          onFocus: this.onFocusHandler,
          onBlur: this.onBlurHandler,
          onChange: this.onChangeHandler }),
        _react2.default.createElement(
          'div',
          {
            className: this.counterClass + this.state.decorator },
          this.state.counter,
          ' / ',
          this.state.counterLimit
        ),
        this.props.manager('children'),
        _react2.default.createElement(
          'div',
          { className: this.errorContainerClass + this.state.decorator },
          this.state.error
        )
      );
    }
  }]);

  return ManagedTextarea;
}(_input2.default);

exports.default = ManagedTextarea;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onChangeHandler = onChangeHandler;
function onChangeHandler(e) {
  var valueLength = e.target.value.length;
  if (valueLength <= this.state.counterLimit) {
    this.setState({ counter: valueLength });
    this.props.manager('onChange', e.target.value);
    this.forceUpdate();
  } else {
    this.input.current.value = this.input.current.value.slice(0, -1);
  }
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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
    _this.stateKeysToDerive = [].concat(_toConsumableArray(_this.stateKeysToDerive), ['options']);
    _this.stateKeysToUpdate = [].concat(_toConsumableArray(_this.stateKeysToUpdate), ['options', 'preSelected']);
    _this.onClickHandler = handlers.onClickHandler.bind(_this);
    _this.onKeyDownHandler = handlers.onKeyDownHandler.bind(_this);
    _this.onBlurHandler = handlers.onBlurHandler.bind(_this);
    _this.onSelectHandler = handlers.onSelectHandler.bind(_this);
    _this.onOptionMouseOver = handlers.onOptionMouseOver.bind(_this);
    _this.onFocusCoverZIndex = _this.props.manager('onFocusCoverZIndex') || 2;
    _this.disableOnFocusCover = _this.props.manager('disableOnFocusCover');
    _this.disableSelectOptions = _this.props.manager('disableSelectOptions');
    _this.state = _extends({}, _this.state, {
      stateKeysToDerive: _this.stateKeysToDerive,
      options: _this.props.manager('options'),
      preSelected: 0
    });
    return _this;
  }

  _createClass(ManagedSelect, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        {
          style: { display: this.state.display },
          className: this.containerClass + this.state.decorator },
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
              { className: this.labelClass + this.state.decorator },
              this.state.label
            ),
            _react2.default.createElement(
              'div',
              { className: this.inputClass + this.state.decorator },
              this.state.options.find(function (option) {
                return option.value === _this2.state.value;
              }).text,
              _react2.default.createElement('div', { className: this.markClass + this.state.decorator })
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
              className: this.optionsClass + this.state.decorator },
            this.state.options.map(function (option, index) {
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
                  className: _this2.optionClass + _this2.state.decorator + ('' + (_this2.state.preSelected === index ? ' preselected' : '')) },
                option.text
              );
            })
          ),
          _react2.default.createElement(
            'select',
            {
              ref: this.input,
              id: this.id,
              value: this.state.value,
              readOnly: true,
              style: { position: 'absolute', left: -10000 },
              disabled: this.state.disabled,
              onFocus: this.onFocusHandler,
              onKeyDown: this.onKeyDownHandler,
              onBlur: this.onBlurHandler },
            this.state.options.map(function (option, index) {
              return _react2.default.createElement(
                'option',
                {
                  key: 'key-original-' + option.value + '-' + index,
                  value: option.value },
                JSON.stringify(option.text)
              );
            })
          )
        ),
        this.props.manager('children'),
        _react2.default.createElement(
          'div',
          { className: this.errorContainerClass + this.state.decorator },
          this.state.error
        )
      );
    }
  }]);

  return ManagedSelect;
}(_input2.default);

exports.default = ManagedSelect;

/***/ }),
/* 11 */
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
  var keyCode = e.keyCode;
  if (keyCode === 38 || keyCode === 40) {
    e.preventDefault();
    var preSelected = computePreSelected.call(this, keyCode);
    this.options.current.scrollTop = computeScroll.call(this, preSelected, keyCode);
    this.setState({ preSelected: preSelected });
  }
  if (keyCode === 13) {
    var option = this.state.options[this.state.preSelected];
    this.setState({
      focus: false,
      mouseOver: false
    });
    this.props.manager('onSelect', option);
  }
  if (keyCode === 9) {
    this.onBlurHandler(e, true);
  }
  this.props.manager('onKeyDown', undefined, e.keyCode);
}

function onClickHandler(e) {
  if (this.isMobile()) {
    var autofill = true;
    if (this.state.value === '') {
      autofill = false;
    }
    this.setState({
      autofill: autofill,
      focus: true
    });
    this.props.manager('onFocus', e.target.value);
  } else {
    this.input.current.focus();
  }
  this.props.manager('onClick', e.target.value);
}

function onOptionMouseOver(index) {
  this.setState({ preSelected: index });
}

function onBlurHandler(e, tabDown, isMobile) {
  if (this.state.mouseOver === false || tabDown === true || isMobile) {
    var value = void 0;
    if (e && e.target) value = e.target.value;
    this.props.manager('onBlur', value);
    this.setState({ focus: false, mouseOver: false });
  }
}

function onSelectHandler(option) {
  var autofill = true;
  if (option.value === '') {
    autofill = false;
  }
  this.setState({
    autofill: autofill,
    focus: false,
    mouseOver: false
  });
  this.props.manager('onSelect', option);
}

function computePreSelected(keyCode) {
  var preSelected = this.state.preSelected;
  if (keyCode == 40) {
    if (preSelected < this.state.options.length - 1) {
      return preSelected + 1;
    } else {
      return 0;
    }
  } else {
    if (preSelected > 0) {
      return preSelected - 1;
    } else {
      return this.state.options.length - 1;
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
    case this.state.options.length - 1:
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

var _decorator = __webpack_require__(14);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ManagedRadio = function (_ManagedInput) {
  _inherits(ManagedRadio, _ManagedInput);

  function ManagedRadio(props) {
    _classCallCheck(this, ManagedRadio);

    var _this = _possibleConstructorReturn(this, (ManagedRadio.__proto__ || Object.getPrototypeOf(ManagedRadio)).call(this, props));

    _this.input = [];
    _this.name = _this.props.manager('name');
    _this.radios = _this.props.manager('radios');
    _this.containerClass = _this.classNames.container || 'managed-input radio';
    _this.radioContainerClass = _this.classNames.radioContainerClass || 'container';
    _this.checkedClass = _this.classNames.checked || 'checked';
    _this.tickClass = _this.classNames.tick || 'tick';
    _this.stateKeysToDerive = [].concat(_toConsumableArray(_this.stateKeysToDerive), ['checked']);
    _this.stateKeysToUpdate = [].concat(_toConsumableArray(_this.stateKeysToUpdate), ['checked']);
    _this.onMouseOverHandler = handlers.onMouseOverHandler.bind(_this);
    _this.onMouseLeaveHandler = handlers.onMouseLeaveHandler.bind(_this);
    _this.onFocusHandler = handlers.onFocusHandler.bind(_this);
    _this.onBlurHandler = handlers.onBlurHandler.bind(_this);
    _this.onKeyDownHandler = handlers.onKeyDownHandler.bind(_this);
    _this.onClickHandler = handlers.onClickHandler.bind(_this);
    _this.decorator = _decorator.decorator.bind(_this);
    _this.state = _extends({}, _this.state, {
      stateKeysToDerive: _this.stateKeysToDerive,
      checked: _this.props.manager('checked')
    });
    return _this;
  }

  _createClass(ManagedRadio, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { style: { display: this.state.display } },
        this.radios.map(function (radio, index) {
          return _react2.default.createElement(
            'div',
            {
              className: _this2.containerClass + _this2.state.decorator[index],
              key: radio.key || 'radio-' + _this2.name + '-' + index,
              onClick: function onClick() {
                return _this2.onClickHandler(radio.value, index);
              } },
            _react2.default.createElement(
              'div',
              {
                className: _this2.inputClass + _this2.state.decorator[index],
                onMouseOver: function onMouseOver(e) {
                  return _this2.onMouseOverHandler(e, index);
                },
                onMouseLeave: function onMouseLeave(e) {
                  return _this2.onMouseLeaveHandler(e, index);
                } },
              radio.value === _this2.state.checked && _react2.default.createElement('div', { className: _this2.tickClass + _this2.state.decorator[index] })
            ),
            _react2.default.createElement('input', {
              name: _this2.name,
              ref: _this2.input[index] = _react2.default.createRef(),
              id: radio.id,
              type: 'radio',
              style: { position: 'absolute', left: -10000 },
              value: radio.value,
              checked: radio.value === _this2.state.checked,
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
                className: _this2.labelClass + _this2.state.decorator[index],
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
        this.props.manager('children')
      );
    }
  }]);

  return ManagedRadio;
}(_input2.default);

exports.default = ManagedRadio;

/***/ }),
/* 13 */
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
  var mouseOver = [].concat(this.state.mouseOver);
  mouseOver[index] = true;
  this.setState({ mouseOver: mouseOver });
  this.props.manager('onMouseOver', e.target.value);
}

function onMouseLeaveHandler(e, index) {
  var mouseOver = [].concat(this.state.mouseOver);
  mouseOver[index] = false;
  this.setState({ mouseOver: mouseOver });
  this.props.manager('onMouseLeave', e.target.value);
}

function onFocusHandler(e, index) {
  var focus = [].concat(this.state.focus);
  focus[index] = true;
  this.setState({ focus: focus });
  this.props.manager('onFocus', e.target.value);
}

function onBlurHandler(e, index) {
  var focus = [].concat(this.state.focus);
  focus[index] = false;
  this.setState({ focus: focus });
  this.props.manager('onBlur', e.target.value);
}

function onKeyDownHandler(e) {
  if ([37, 38, 39, 40].includes(e.keyCode)) {
    e.preventDefault();
  }
  if (e.keyCode === 9) {
    this.onBlurHandler(e, true);
  }
}

function onClickHandler(value, index) {
  var input = this.input && this.input[index] && this.input[index].current;
  if (!input) return;
  input.focus();
  this.props.manager('onClick', value);
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decorator = decorator;
function decorator() {
  var _this = this;

  var decorator = [];
  this.radios.map(function (radio, index) {
    var className = '';
    if (_this.input && _this.input[index] && _this.input[index].current.checked) {
      className += ' ' + _this.checkedClass;
    }
    if (_this.state.focus[index]) {
      className += ' ' + _this.focusClass;
    }
    if (_this.state.mouseOver[index]) {
      className += ' ' + _this.hoverClass;
    }
    if (_this.state.error[index]) {
      className += ' ' + _this.errorClass;
    }
    decorator[index] = className;
  });
  this.setState({ decorator: decorator });
}

/***/ }),
/* 15 */
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

var _handlers = __webpack_require__(16);

var handlers = _interopRequireWildcard(_handlers);

var _decorator = __webpack_require__(17);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
    _this.stateKeysToDerive = [].concat(_toConsumableArray(_this.stateKeysToDerive), ['checked']);
    _this.stateKeysToUpdate = [].concat(_toConsumableArray(_this.stateKeysToUpdate), ['checked']);
    _this.onClickHandler = handlers.onClickHandler.bind(_this);
    _this.decorator = _decorator.decorator.bind(_this);
    _this.state = _extends({}, _this.state, {
      stateKeysToDerive: _this.stateKeysToDerive,
      checked: _this.props.manager('checked')
    });
    return _this;
  }

  _createClass(ManagedCheckbox, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          style: { display: this.state.display },
          className: this.containerClass + this.state.decorator },
        _react2.default.createElement(
          'div',
          {
            className: this.inputClass + this.state.decorator,
            onMouseOver: this.onMouseOverHandler,
            onMouseLeave: this.onMouseLeaveHandler,
            onClick: this.onClickHandler },
          this.state.checked && _react2.default.createElement('div', { className: this.tickClass + this.state.decorator })
        ),
        _react2.default.createElement('input', {
          ref: this.input,
          type: 'checkbox',
          id: this.id,
          style: { position: 'absolute', left: -10000 },
          checked: this.state.checked,
          onFocus: this.onFocusHandler,
          onBlur: this.onBlurHandler,
          onChange: this.onClickHandler }),
        _react2.default.createElement(
          'div',
          {
            onMouseOver: this.onMouseOverHandler,
            onMouseLeave: this.onMouseLeaveHandler,
            onClick: this.onClickHandler,
            className: this.labelClass + this.state.decorator },
          this.state.label
        ),
        _react2.default.createElement('div', { style: { clear: 'both' } }),
        this.props.manager('children')
      );
    }
  }]);

  return ManagedCheckbox;
}(_input2.default);

exports.default = ManagedCheckbox;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onClickHandler = onClickHandler;
function onClickHandler() {
  this.input.current.focus();
  this.props.manager('onClick', !this.state.checked);
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decorator = decorator;
function decorator() {
  var className = '';
  if (this.input.current.checked) {
    className += ' ' + this.checkedClass;
  }
  if (this.state.focus) {
    className += ' ' + this.focusClass;
  }
  if (this.state.mouseOver) {
    className += ' ' + this.hoverClass;
  }
  if (this.state.error) {
    className += ' ' + this.errorClass;
  }
  this.setState({
    decorator: className
  });
}

/***/ }),
/* 18 */
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

var _handlers = __webpack_require__(19);

var handlers = _interopRequireWildcard(_handlers);

var _decorator = __webpack_require__(20);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
    _this.stateKeysToDerive = [].concat(_toConsumableArray(_this.stateKeysToDerive), ['checkboxes']);
    _this.stateKeysToUpdate = [].concat(_toConsumableArray(_this.stateKeysToUpdate), ['checkboxes']);
    _this.onMouseOverHandler = handlers.onMouseOverHandler.bind(_this);
    _this.onMouseLeaveHandler = handlers.onMouseLeaveHandler.bind(_this);
    _this.onFocusHandler = handlers.onFocusHandler.bind(_this);
    _this.onBlurHandler = handlers.onBlurHandler.bind(_this);
    _this.onClickHandler = handlers.onClickHandler.bind(_this);
    _this.onKeyDownHandler = handlers.onKeyDownHandler.bind(_this);
    _this.decorator = _decorator.decorator.bind(_this);
    _this.state = _extends({}, _this.state, {
      stateKeysToDerive: _this.stateKeysToDerive,
      checkboxes: _this.props.manager('checkboxes'),
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

      return _react2.default.createElement(
        'div',
        {
          style: { display: this.state.display } },
        this.state.checkboxes.map(function (checkbox) {
          return _react2.default.createElement(
            'div',
            {
              className: _this2.containerClass + _this2.state.decorator[checkbox.ref],
              key: 'multiple-checkbox-' + checkbox.ref },
            _react2.default.createElement(
              'div',
              {
                className: _this2.inputClass + _this2.state.decorator[checkbox.ref],
                onMouseOver: function onMouseOver(e) {
                  return _this2.onMouseOverHandler(e, checkbox.ref);
                },
                onMouseLeave: function onMouseLeave(e) {
                  return _this2.onMouseLeaveHandler(e, checkbox.ref);
                },
                onClick: function onClick() {
                  return _this2.onClickHandler(checkbox.ref);
                } },
              checkbox.checked && _react2.default.createElement('div', { className: _this2.tickClass + _this2.state.decorator[checkbox.ref] })
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
              onChange: function onChange() {} }),
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
                className: _this2.labelClass + _this2.state.decorator[checkbox.ref] },
              checkbox.label
            ),
            _react2.default.createElement('div', { style: { clear: 'both' } })
          );
        }),
        _react2.default.createElement('div', { style: { clear: 'both' } }),
        this.props.manager('children')
      );
    }
  }]);

  return ManagedMultipleCheckbox;
}(_input2.default);

exports.default = ManagedMultipleCheckbox;

/***/ }),
/* 19 */
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
  var mouseOver = _extends({}, this.state.mouseOver);
  mouseOver[ref] = true;
  this.setState({ mouseOver: mouseOver });
  this.props.manager('onMouseOver', e.target.value, ref);
}

function onMouseLeaveHandler(e, ref) {
  var mouseOver = _extends({}, this.state.mouseOver);
  mouseOver[ref] = false;
  this.setState({ mouseOver: mouseOver });
  this.props.manager('onMouseLeave', e.target.value, ref);
}

function onFocusHandler(e, ref) {
  var focus = _extends({}, this.state.focus);
  focus[ref] = true;
  this.setState({ focus: focus });
  this.props.manager('onFocus', e.target.value, ref);
}

function onBlurHandler(e, ref) {
  var focus = _extends({}, this.state.focus);
  focus[ref] = false;
  this.setState({ focus: focus });
  this.props.manager('onBlur', e.target.value, ref);
}

function onClickHandler(ref) {
  var input = this.input[ref].current;
  input.focus();
  var checked = !input.checked;
  this.props.manager('onClick', checked, ref);
}

function onKeyDownHandler(e, ref) {
  if (e.keyCode === 32) {
    this.onClickHandler(ref);
  }
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decorator = decorator;
function decorator() {
  var _this = this;

  var decorator = {};
  var className = void 0;
  this.state.checkboxes.map(function (checkbox) {
    className = '';
    if (_this.input && _this.input[checkbox.ref] && _this.input[checkbox.ref].current.checked) {
      className += ' ' + _this.checkedClass;
    }
    if (_this.state.focus[checkbox.ref]) {
      className += ' ' + _this.focusClass;
    }
    if (_this.state.mouseOver[checkbox.ref]) {
      className += ' ' + _this.hoverClass;
    }
    decorator[checkbox.ref] = className;
  });
  this.setState({ decorator: decorator });
}

/***/ }),
/* 21 */
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

var _decorator = __webpack_require__(22);

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
    _this.decorator = _decorator.decorator.bind(_this);
    return _this;
  }

  _createClass(ManagedButton, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          style: { display: this.state.display },
          className: this.containerClass + this.state.decorator },
        _react2.default.createElement(
          'button',
          {
            ref: this.input,
            id: this.id,
            className: this.inputClass + this.state.decorator,
            disabled: this.state.disabled,
            onMouseOver: this.onMouseOverHandler,
            onMouseLeave: this.onMouseLeaveHandler,
            onFocus: this.onFocusHandler,
            onBlur: this.onBlurHandler,
            onClick: this.onClickHandler },
          this.state.label
        ),
        this.props.manager('children')
      );
    }
  }]);

  return ManagedButton;
}(_input2.default);

exports.default = ManagedButton;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decorator = decorator;
function decorator() {
  var className = '';
  if (this.state.focus) {
    className += ' ' + this.focusClass;
  }
  if (this.state.mouseOver) {
    className += ' ' + this.hoverClass;
  }
  this.setState({
    decorator: className
  });
}

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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
    _this.stateKeysToDerive = [].concat(_toConsumableArray(_this.stateKeysToDerive), ['resultsPerPage', 'resultAmount', 'current']);
    _this.stateKeysToUpdate = [].concat(_toConsumableArray(_this.stateKeysToUpdate), ['resultsPerPage', 'resultAmount', 'buttons', 'current']);
    _this.onMouseOverHandler = handlers.onMouseOverHandler.bind(_this);
    _this.onMouseLeaveHandler = handlers.onMouseLeaveHandler.bind(_this);
    _this.onFocusHandler = handlers.onFocusHandler.bind(_this);
    _this.onBlurHandler = handlers.onBlurHandler.bind(_this);
    _this.onClickHandler = handlers.onClickHandler.bind(_this);
    _this.state = _extends({}, _this.state, {
      stateKeysToDerive: _this.stateKeysToDerive,
      resultsPerPage: _this.props.manager('resultsPerPage'),
      resultAmount: _this.props.manager('resultAmount'),
      buttons: [],
      current: _this.props.manager('current'),
      mouseOver: {},
      focus: {},
      decorator: {}
    });
    _this.jsxProvider = _this.jsxProvider.bind(_this);
    _this.showButton = _this.showButton.bind(_this);
    _this.edgeHandler = _this.edgeHandler.bind(_this);
    return _this;
  }

  _createClass(ManagedPagination, [{
    key: 'jsxProvider',
    value: function jsxProvider(button) {
      if (button === 0) {
        return '<';
      } else if (button === this.state.buttons.length - 1) {
        return '>';
      } else {
        return button;
      }
    }
  }, {
    key: 'showButton',
    value: function showButton(button) {
      if (this.state.buttons.length == 2 || this.state.buttons.length == 3) return false;
      return true;
    }
  }, {
    key: 'edgeHandler',
    value: function edgeHandler(button) {
      if (button === 0 && this.state.current === 1) return 'hidden';
      if (button === this.state.buttons.length - 1 && this.state.current === this.state.buttons.length - 2) return 'hidden';
      return 'visible';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        {
          style: { display: this.state.display },
          className: this.containerClass },
        this.state.buttons.map(function (button) {
          return _this2.showButton(button) && _react2.default.createElement(
            'button',
            {
              style: { visibility: _this2.edgeHandler(button) },
              key: 'paginationButtoNo' + button,
              className: _this2.inputClass + _this2.state.decorator[button],
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
        this.props.manager('children')
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
  this.decorator();
}

function componentDidUpdate(prevProps, prevState) {
  if (prevState.resultsPerPage !== this.state.resultsPerPage || prevState.resultAmount !== this.state.resultAmount) {
    computeButtons.call(this);
  }
  this.decorator();
}

function computeButtons() {
  this.setState({
    buttons: createButtonsArray(Math.ceil(this.state.resultAmount / this.state.resultsPerPage))
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
exports.decorator = decorator;
function decorator() {
  var _this = this;

  var decorator = {};
  var className = void 0;
  [0].concat(this.state.buttons).map(function (button) {
    className = '';
    if (_this.state.focus[button]) {
      className += ' ' + _this.focusClass;
    }
    if (_this.state.mouseOver[button]) {
      className += ' ' + _this.hoverClass;
    }
    if (_this.state.current === button) {
      className += ' ' + _this.currentClass;
    }
    decorator[button] = className;
  });
  this.setState({ decorator: decorator });
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
  var mouseOver = _extends({}, this.state.mouseOver);
  mouseOver[button] = true;
  this.setState({ mouseOver: mouseOver });
  this.props.manager('onMouseOver', button);
}

function onMouseLeaveHandler(button) {
  var mouseOver = _extends({}, this.state.mouseOver);
  mouseOver[button] = false;
  this.setState({ mouseOver: mouseOver });
  this.props.manager('onMouseOver', button);
}

function onFocusHandler(button) {
  var focus = _extends({}, this.state.focus);
  focus[button] = true;
  this.setState({ focus: focus });
  this.props.manager('onFocus', button);
}

function onBlurHandler(button) {
  var focus = _extends({}, this.state.focus);
  focus[button] = false;
  this.setState({ focus: focus });
  this.props.manager('onFocus', button);
}

function onClickHandler(button) {
  if (button === 0 || button === this.state.buttons.length - 1) {
    var current = void 0;
    if (button === 0) {
      current = this.state.current - 1;
    } else {
      current = this.state.current + 1;
    }
    this.props.manager('onClick', current);
    return;
  }
  this.props.manager('onClick', button);
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = managerAgent;
function managerAgent(aspect, aspects) {
  switch (aspect) {
    case 'value':
      return aspects.value === undefined ? '' : aspects.value;
    case 'match':
      return aspects.match;
    case 'checked':
      return aspects.checked || false;
    case 'onMouseOver':
      return aspects.onMouseOver && aspects.onMouseOver();
    case 'onMouseLeave':
      return aspects.onMouseLeave && aspects.onMouseLeave();
    case 'onFocus':
      return aspects.onFocus && aspects.onFocus();
    case 'onBlur':
      return aspects.onBlur && aspects.onBlur();
    case 'onClick':
      return aspects.onClick && aspects.onClick();
    case 'onKeyDown':
      return aspects.onKeyDown && aspects.onKeyDown();
    case 'onChange':
      return aspects.onChange && aspects.onChange();
    case 'onSelect':
      return aspects.onSelect && aspects.onSelect();
    case 'children':
      return aspects.children;
    case 'error':
      return aspects.error || '';
    case 'options':
      return aspects.options;
    case 'checkboxes':
      return aspects.checkboxes;
    case 'radios':
      return aspects.radios;
    case 'label':
      return aspects.label || '';
    case 'id':
      return aspects.id;
    case 'type':
      return aspects.type || 'text';
    case 'controlled':
      return aspects.controlled === undefined ? true : false;
    case 'display':
      return aspects.display || 'block';
    case 'disabled':
      return aspects.disabled || false;
    case 'classNames':
      return aspects.classNames || {};
    case 'autoComplete':
      return aspects.autoComplete || '';
    case 'counterLimit':
      return aspects.counterLimit;
    case 'name':
      return aspects.name;
    case 'setValue':
      return aspects.setValue && aspects.setValue();
    case 'validate':
      return aspects.validate && aspects.validate();
    case 'current':
      return aspects.current;
    case 'resultsPerPage':
      return aspects.resultsPerPage;
    case 'resultAmount':
      return aspects.resultAmount;
    case 'disableOnFocusCover':
      return aspects.disableOnFocusCover;
    case 'disableSelectOptions':
      return aspects.disableSelectOptions;
    case 'onFocusCoverZIndex':
      return aspects.onFocusCoverZIndex;
    default:
      break;
  }
}

/***/ })
/******/ ]);