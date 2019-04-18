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
    _this.focusClass = _this.classNames.focus || 'focus';
    _this.hoverClass = _this.classNames.hover || 'hover';
    _this.errorClass = _this.classNames.error || 'error';
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
      animation: 'none',
      mouseOver: false,
      focus: false,
      decorator: ''
    };
    return _this;
  }

  _createClass(ManagedInput, null, [{
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
exports.managerAgent = exports.ManagedMultipleCheckbox = exports.ManagedCheckbox = exports.ManagedButton = exports.ManagedRadio = exports.ManagedTextarea = exports.ManagedSelect = exports.ManagedText = undefined;

var _text = __webpack_require__(3);

var _text2 = _interopRequireDefault(_text);

var _textarea = __webpack_require__(7);

var _textarea2 = _interopRequireDefault(_textarea);

var _select = __webpack_require__(9);

var _select2 = _interopRequireDefault(_select);

var _radio = __webpack_require__(11);

var _radio2 = _interopRequireDefault(_radio);

var _checkbox = __webpack_require__(14);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _multipleCheckbox = __webpack_require__(17);

var _multipleCheckbox2 = _interopRequireDefault(_multipleCheckbox);

var _button = __webpack_require__(20);

var _button2 = _interopRequireDefault(_button);

var _managerAgent = __webpack_require__(22);

var _managerAgent2 = _interopRequireDefault(_managerAgent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ManagedText = _text2.default;
exports.ManagedSelect = _select2.default;
exports.ManagedTextarea = _textarea2.default;
exports.ManagedRadio = _radio2.default;
exports.ManagedButton = _button2.default;
exports.ManagedCheckbox = _checkbox2.default;
exports.ManagedMultipleCheckbox = _multipleCheckbox2.default;
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
    _this.autoComplete = props.manager('autoComplete');
    _this.containerClass = _this.classNames.container || 'managed-input text';
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
          {
            style: { animation: this.state.animation },
            className: this.labelClass + this.state.decorator },
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
          onBlur: this.onBlurHandler,
          onChange: this.onChangeHandler }),
        _react2.default.createElement(
          'div',
          { className: this.errorClass + this.state.decorator },
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
  this.setState({
    focus: true,
    animation: undefined
  });
  this.props.manager('onFocus', e.target.value);
}

function onBlurHandler(e) {
  this.setState({ focus: false });
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _input = __webpack_require__(1);

var _input2 = _interopRequireDefault(_input);

var _handlers = __webpack_require__(8);

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
          {
            style: { animation: this.state.animation },
            className: this.labelClass + this.state.decorator },
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
/* 8 */
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
/* 9 */
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

var _handlers = __webpack_require__(10);

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

    _this.containerClass = _this.classNames.container || 'managed-input select';
    _this.optionsClass = _this.classNames.options || 'options';
    _this.optionClass = _this.classNames.option || 'option';
    _this.markClass = _this.classNames.mark || 'mark';
    _this.stateKeysToDerive = [].concat(_toConsumableArray(_this.stateKeysToDerive), ['options']);
    _this.stateKeysToUpdate = [].concat(_toConsumableArray(_this.stateKeysToUpdate), ['options', 'preSelected']);
    _this.onKeyDownHandler = handlers.onKeyDownHandler.bind(_this);
    _this.onBlurHandler = handlers.onBlurHandler.bind(_this);
    _this.onSelectHandler = handlers.onSelectHandler.bind(_this);
    _this.onOptionMouseOver = handlers.onOptionMouseOver.bind(_this);
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
              {
                style: { animation: this.state.animation },
                className: this.labelClass + this.state.decorator },
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
          this.state.focus && _react2.default.createElement(
            'div',
            {
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
                option.text
              );
            })
          )
        ),
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onKeyDownHandler = onKeyDownHandler;
exports.onOptionMouseOver = onOptionMouseOver;
exports.onBlurHandler = onBlurHandler;
exports.onSelectHandler = onSelectHandler;
function onKeyDownHandler(e) {
  if (e.keyCode === 38 || e.keyCode === 40) {
    e.preventDefault();
    var preSelected = this.state.preSelected;
    if (e.keyCode == 40) {
      if (preSelected < this.state.options.length - 1) {
        preSelected += 1;
      } else {
        preSelected = 0;
      }
    } else {
      if (preSelected > 0) {
        preSelected -= 1;
      } else {
        preSelected = this.state.options.length - 1;
      }
    }
    this.setState({ preSelected: preSelected });
  }
  if (e.keyCode === 13) {
    var option = this.state.options[this.state.preSelected];
    this.setState({
      focus: false,
      mouseOver: false
    });
    this.props.manager('onSelect', option);
  }
  if (e.keyCode === 9) {
    this.onBlurHandler(e, true);
  }
}

function onOptionMouseOver(index) {
  this.setState({ preSelected: index });
}

function onBlurHandler(e, tabDown) {
  if (this.state.mouseOver === false || tabDown === true) {
    if (e && e.target) {
      this.props.manager('onBlur', e.target.value);
    }
    this.setState({ focus: false });
  }
}

function onSelectHandler(option) {
  this.setState({
    focus: false,
    mouseOver: false
  });
  this.props.manager('onSelect', option);
}

/***/ }),
/* 11 */
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

var _handlers = __webpack_require__(12);

var handlers = _interopRequireWildcard(_handlers);

var _decorator = __webpack_require__(13);

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
              key: radio.key || 'radio-' + _this2.name + '-' + index },
            _react2.default.createElement(
              'div',
              {
                className: _this2.inputClass + _this2.state.decorator[index],
                onMouseOver: function onMouseOver(e) {
                  return _this2.onMouseOverHandler(e, index);
                },
                onMouseLeave: function onMouseLeave(e) {
                  return _this2.onMouseLeaveHandler(e, index);
                },
                onClick: function onClick() {
                  return _this2.onClickHandler(radio.value, index);
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
                },
                onClick: function onClick() {
                  return _this2.onClickHandler(radio.value, index);
                } },
              radio.label
            ),
            _react2.default.createElement('div', { style: { clear: 'both' } })
          );
        }),
        _react2.default.createElement('div', { style: { clear: 'both' } })
      );
    }
  }]);

  return ManagedRadio;
}(_input2.default);

exports.default = ManagedRadio;

/***/ }),
/* 12 */
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
/* 13 */
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
/* 14 */
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

var _handlers = __webpack_require__(15);

var handlers = _interopRequireWildcard(_handlers);

var _decorator = __webpack_require__(16);

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
            className: this.labelClass + this.state.decorator },
          this.state.label
        ),
        _react2.default.createElement('div', { style: { clear: 'both' } })
      );
    }
  }]);

  return ManagedCheckbox;
}(_input2.default);

exports.default = ManagedCheckbox;

/***/ }),
/* 15 */
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
/* 16 */
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
/* 17 */
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

var _handlers = __webpack_require__(18);

var handlers = _interopRequireWildcard(_handlers);

var _decorator = __webpack_require__(19);

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
        _react2.default.createElement('div', { style: { clear: 'both' } })
      );
    }
  }]);

  return ManagedMultipleCheckbox;
}(_input2.default);

exports.default = ManagedMultipleCheckbox;

/***/ }),
/* 18 */
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
/* 19 */
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
/* 20 */
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

var _decorator = __webpack_require__(21);

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
        )
      );
    }
  }]);

  return ManagedButton;
}(_input2.default);

exports.default = ManagedButton;

/***/ }),
/* 21 */
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = managerAgent;
function managerAgent(aspect, aspects) {
  switch (aspect) {
    case 'value':
      return aspects.value || '';
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
    case 'onChange':
      return aspects.onChange && aspects.onChange();
    case 'onSelect':
      return aspects.onSelect && aspects.onSelect();
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
    default:
      break;
  }
}

/***/ })
/******/ ]);