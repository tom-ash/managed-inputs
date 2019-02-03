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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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
exports.selectManagerFactory = exports.ManagedSelect = exports.textManagerFactory = exports.ManagedText = undefined;

var _text = __webpack_require__(2);

var _text2 = _interopRequireDefault(_text);

var _managerFactory = __webpack_require__(5);

var _managerFactory2 = _interopRequireDefault(_managerFactory);

var _select = __webpack_require__(6);

var _select2 = _interopRequireDefault(_select);

var _managerFactory3 = __webpack_require__(11);

var _managerFactory4 = _interopRequireDefault(_managerFactory3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ManagedText = _text2.default;
exports.textManagerFactory = _managerFactory2.default;
exports.ManagedSelect = _select2.default;
exports.selectManagerFactory = _managerFactory4.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _handlers = __webpack_require__(3);

var handlers = _interopRequireWildcard(_handlers);

var _lifecycle = __webpack_require__(4);

var lifecycle = _interopRequireWildcard(_lifecycle);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ManagedText = function (_React$Component) {
  _inherits(ManagedText, _React$Component);

  function ManagedText(props) {
    _classCallCheck(this, ManagedText);

    var _this = _possibleConstructorReturn(this, (ManagedText.__proto__ || Object.getPrototypeOf(ManagedText)).call(this, props));

    _this.id = _this.props.manager('id');
    _this.labelId = _this.id + '-label';
    _this.detached = _this.props.manager('detached');
    _this.componentDidMount = lifecycle.componentDidMount;
    _this.shouldComponentUpdate = lifecycle.shouldComponentUpdate;
    _this.onMouseOverHandler = handlers.onMouseOverHandler.bind(_this);
    _this.onMouseLeaveHandler = handlers.onMouseLeaveHandler.bind(_this);
    _this.onFocusHandler = handlers.onFocusHandler.bind(_this);
    _this.onChangeHandler = handlers.onChangeHandler.bind(_this);
    _this.onBlurHandler = handlers.onBlurHandler.bind(_this);
    _this.styles = _this.props.manager('styles');
    _this.state = {
      disabled: _this.props.manager('disabled'),
      focused: false,
      value: _this.props.manager('value'),
      label: _this.props.manager('label'),
      error: _this.props.manager('error'),
      flag: _this.props.manager('flag'),
      inputClass: _this.styles.inputWithoutValue,
      labelClass: _this.styles.labelWithoutValue + ' ' + 'animation-none'
    };
    return _this;
  }

  _createClass(ManagedText, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        {
          className: this.state.disabled ? this.styles.disabled : this.styles.active },
        _react2.default.createElement('input', {
          id: this.id,
          className: this.state.inputClass,
          type: this.props.manager('type'),
          disabled: this.props.manager('disabled'),
          autoComplete: this.props.manager('autoComplete'),
          value: this.detached ? undefined : this.state.value,
          onMouseOver: function onMouseOver() {
            return _this2.onMouseOverHandler();
          },
          onMouseLeave: function onMouseLeave() {
            return _this2.onMouseLeaveHandler();
          },
          onFocus: function onFocus() {
            return _this2.onFocusHandler();
          },
          onChange: function onChange(e) {
            return _this2.onChangeHandler(e);
          },
          onBlur: function onBlur(e) {
            return _this2.onBlurHandler(e);
          } }),
        _react2.default.createElement(
          'div',
          {
            id: this.labelId,
            className: this.state.labelClass,
            onMouseOver: function onMouseOver() {
              return _this2.onMouseOverHandler();
            },
            onClick: function onClick() {
              return _this2.handler('onFocus');
            } },
          this.state.label
        ),
        _react2.default.createElement(
          'div',
          {
            className: this.styles.error },
          this.state.error
        )
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevstate) {
      return lifecycle.getDerivedStateFromProps(nextProps, prevstate);
    }
  }]);

  return ManagedText;
}(_react2.default.Component);

exports.default = ManagedText;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onMouseOverHandler = onMouseOverHandler;
exports.onFocusHandler = onFocusHandler;
exports.onChangeHandler = onChangeHandler;
exports.onMouseLeaveHandler = onMouseLeaveHandler;
exports.onBlurHandler = onBlurHandler;
function onMouseOverHandler() {
  var inputClass = void 0;
  if (this.inputElement !== document.activeElement && this.inputElement.value === '') {
    inputClass = this.styles.inputWithoutValue;
    if (!this.state.disabled) {
      inputClass += ' ' + this.styles.inputWithoutValueMouseOver;
    }
    this.setState({
      inputClass: inputClass
    });
  }
}

function onFocusHandler() {
  var inputClass = void 0;
  var labelClass = void 0;
  if (this.props.manager('disabled')) {
    return;
  }
  inputClass = this.styles.inputWithoutValue + ' ' + this.styles.inputWithoutValueFocus;
  labelClass = this.styles.labelWithValue;
  this.setState({
    inputClass: inputClass,
    labelClass: labelClass
  });
  this.inputElement.focus();
}

function onChangeHandler(e) {
  this.props.manager('onChange', e.target.value);
}

function onMouseLeaveHandler() {
  var inputClass = void 0;
  if (this.inputElement !== document.activeElement && this.inputElement.value === '') {
    inputClass = this.styles.inputWithoutValue;
    this.setState({
      inputClass: inputClass
    });
  }
}

function onBlurHandler(e) {
  var inputClass = void 0;
  inputClass = this.styles.inputWithoutValue;
  if (this.inputElement.value.length < 1) {
    this.setState({
      inputClass: inputClass,
      labelClass: this.styles.labelWithoutValue
    });
  } else {
    inputClass += ' ' + this.styles.inputWithValue;
    this.setState({
      inputClass: inputClass,
      labelClass: this.styles.labelWithValue
    });
  }
  this.props.manager('onBlur', e.target.value);
}

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
var STATE_KEYS_TO_DERIVE = ['value', 'label', 'disabled', 'error', 'flag'];

var STATE_KEYS_TO_UPDATE = STATE_KEYS_TO_DERIVE.concat(['inputClass', 'labelClass']);

function componentDidMount() {
  this.inputElement = document.getElementById(this.id);
  this.labelElement = document.getElementById(this.labelId);
}

function getDerivedStateFromProps(nextProps, prevState) {
  var returnObject = {};
  STATE_KEYS_TO_DERIVE.map(function (element) {
    if (nextProps.manager(element) != prevState[element]) {
      returnObject[element] = nextProps.manager(element);
    }
  });
  return returnObject;
}

function shouldComponentUpdate(nextProps, nextState) {
  var _this = this;

  var shouldIt = false;
  STATE_KEYS_TO_UPDATE.map(function (element) {
    if (_this.state[element] !== nextState[element]) {
      shouldIt = true;
    }
  });
  return shouldIt;
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = textManagerFactory;
function textManagerFactory() {
  return function (aspect, value, inputFieldData) {
    switch (aspect) {
      case 'id':
        return inputFieldData.id;
      case 'styles':
        return inputFieldData.styles === undefined ? {} : inputFieldData.styles;
      case 'value':
        return inputFieldData.value === undefined || inputFieldData.value === null ? '' : inputFieldData.value;
      case 'label':
        return inputFieldData.label;
      case 'type':
        return inputFieldData.type === undefined ? 'text' : inputFieldData.type;
      case 'disabled':
        return inputFieldData.disabled === undefined ? false : inputFieldData.disabled;
      case 'detached':
        return inputFieldData.detached;
      case 'autoComplete':
        return inputFieldData.autoComplete === undefined ? '' : inputFieldData.autoComplete;
      case 'onChange':
        inputFieldData.onChange();
        break;
      case 'setValue':
        inputFieldData.setValue === undefined ? emptyFunction() : inputFieldData.setValue();
        break;
      case 'onBlur':
        inputFieldData.onBlur === undefined ? null : inputFieldData.onBlur();
        break;
      case 'validate':
        return inputFieldData.validate === undefined ? null : inputFieldData.validate();
      case 'error':
        return inputFieldData.error === undefined ? '' : inputFieldData.error;
      case 'flag':
        inputFieldData.flag === undefined ? null : inputFieldData.flag;
        break;
      default:
        break;
    }
  };
}

function emptyFunction() {
  return function () {
    null;
  };
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lifecycle = __webpack_require__(7);

var lifecycle = _interopRequireWildcard(_lifecycle);

var _handlers = __webpack_require__(8);

var handlers = _interopRequireWildcard(_handlers);

__webpack_require__(9);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ManagedSelect = function (_React$Component) {
  _inherits(ManagedSelect, _React$Component);

  function ManagedSelect(props) {
    _classCallCheck(this, ManagedSelect);

    var _this = _possibleConstructorReturn(this, (ManagedSelect.__proto__ || Object.getPrototypeOf(ManagedSelect)).call(this, props));

    _this.id = _this.props.manager('id');
    _this.containerId = _this.id + '-container';
    _this.proxyId = _this.id + '-proxy';
    _this.labelId = _this.id + '-label';
    _this.optionsId = _this.id + '-options';
    _this.styles = _this.props.manager('styles');
    _this.componentDidMount = lifecycle.componentDidMount;
    _this.shouldComponentUpdate = lifecycle.shouldComponentUpdate;
    _this.onMouseOverHandler = handlers.onMouseOverHandler.bind(_this);
    _this.onClickHandler = handlers.onClickHandler.bind(_this);
    _this.onFocusHandler = handlers.onFocusHandler.bind(_this);
    _this.onSelectHandler = handlers.onSelectHandler.bind(_this);
    _this.onKeyDownHandler = handlers.onKeyDownHandler.bind(_this);
    _this.onMouseLeaveHandler = handlers.onMouseLeaveHandler.bind(_this);
    _this.onUnfocusHandler = handlers.onUnfocusHandler.bind(_this);
    _this.state = {
      disabled: _this.props.manager('disabled'),
      focused: false,

      value: _this.props.manager('value'),
      label: _this.props.manager('label'),
      options: _this.props.manager('options'),
      flag: _this.props.manager('flag'),
      error: _this.props.manager('error'),
      proxyClass: _this.styles.proxyUnselected,
      labelClass: _this.styles.labelUnselected + ' ' + 'animation-none',
      optionsClass: 'display-none'
    };
    return _this;
  }

  _createClass(ManagedSelect, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        {
          id: this.containerId,
          className: this.state.disabled ? this.styles.disabled : this.styles.active },
        this.state.focused && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            {
              id: this.optionsId,
              className: this.state.optionsClass },
            _react2.default.createElement('div', {
              onClick: function onClick() {
                return _this2.onSelectHandler(null);
              },
              className: this.styles.option }),
            this.state.options.map(function (option) {
              return _react2.default.createElement(
                'div',
                {
                  key: _this2.props.manager('optionKey', option),
                  onClick: function onClick() {
                    return _this2.onSelectHandler(option);
                  },
                  className: _this2.styles.option },
                _this2.props.manager('optionDecorate', option)
              );
            })
          ),
          _react2.default.createElement('div', {
            onClick: function onClick() {
              return _this2.onUnfocusHandler();
            },
            className: 'detached-select-js-options-background' })
        ),
        _react2.default.createElement(
          'div',
          {
            id: this.labelId,
            className: this.state.labelClass,
            onMouseOver: function onMouseOver() {
              return _this2.onMouseOverHandler();
            },
            onMouseLeave: function onMouseLeave() {
              return _this2.onMouseLeaveHandler();
            },
            onClick: function onClick() {
              return _this2.onClickHandler();
            } },
          this.state.label
        ),
        _react2.default.createElement('div', {
          className: this.styles.mark,
          onMouseLeave: function onMouseLeave() {
            return _this2.onMouseLeaveHandler();
          },
          onClick: function onClick() {
            return _this2.onClickHandler();
          } }),
        _react2.default.createElement(
          'div',
          {
            id: this.proxyId,
            className: this.state.proxyClass,
            onMouseOver: function onMouseOver() {
              return _this2.onMouseOverHandler();
            },
            onMouseLeave: function onMouseLeave() {
              return _this2.onMouseLeaveHandler();
            },
            onClick: function onClick() {
              return _this2.onFocusHandler();
            } },
          this.props.manager('optionDecorate', this.state.value)
        ),
        _react2.default.createElement(
          'select',
          {
            style: { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, opacity: 0, zIndex: -1 },
            className: 'detached-select-js-select',
            onKeyDown: function onKeyDown(e) {
              return _this2.onKeyDownHandler(e);
            },
            disabled: this.state.disabled,
            onFocus: function onFocus() {
              return _this2.onFocusHandler();
            },
            defaultValue: null,
            id: this.id },
          _react2.default.createElement('option', {
            key: 'nullKey',
            value: null }),
          this.state.options.map(function (option) {
            return _react2.default.createElement(
              'option',
              {
                key: _this2.props.manager('optionKey', option + 'originalSelect'),
                value: _this2.props.manager('optionValue', option) },
              _this2.props.manager('optionDecorate', option)
            );
          })
        ),
        _react2.default.createElement(
          'div',
          {
            className: this.styles.error },
          this.state.error
        )
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevstate) {
      return lifecycle.getDerivedStateFromProps(nextProps, prevstate);
    }
  }]);

  return ManagedSelect;
}(_react2.default.Component);

exports.default = ManagedSelect;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.componentDidMount = componentDidMount;
exports.getDerivedStateFromProps = getDerivedStateFromProps;
exports.shouldComponentUpdate = shouldComponentUpdate;
var STATE_KEYS_TO_DERIVE = ['disabled', 'value', 'label', 'options', 'flag', 'error'];

var STATE_KEYS_TO_UPDATE = STATE_KEYS_TO_DERIVE.concat(['focused', 'proxyClass', 'labelClass', 'optionsClass']);

function componentDidMount() {
  this.selectElement = document.getElementById(this.id);
  this.proxyUnselectedElement = document.getElementById(this.proxyId);
  this.labelElement = document.getElementById(this.labelId);
  this.options = document.getElementById(this.optionsId);
}

function getDerivedStateFromProps(nextProps, prevState) {
  var returnObject = {};
  STATE_KEYS_TO_DERIVE.map(function (element) {
    if (nextProps.manager(element) != prevState[element]) {
      returnObject[element] = nextProps.manager(element);
    }
  });
  return returnObject;
}

function shouldComponentUpdate(nextProps, nextState) {
  var _this = this;

  var someValue = false;
  STATE_KEYS_TO_UPDATE.map(function (element) {
    if (_this.state[element] !== nextState[element]) {
      someValue = true;
    }
  });
  return someValue;
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onMouseOverHandler = onMouseOverHandler;
exports.onClickHandler = onClickHandler;
exports.onFocusHandler = onFocusHandler;
exports.onSelectHandler = onSelectHandler;
exports.onKeyDownHandler = onKeyDownHandler;
exports.onMouseLeaveHandler = onMouseLeaveHandler;
exports.onUnfocusHandler = onUnfocusHandler;
function onMouseOverHandler() {
  var proxyClass = void 0;
  if (!this.state.focused) {
    proxyClass = this.styles.proxyUnselected;
    if (this.state.value === null) {
      proxyClass += ' ' + this.styles.proxyUnselectedMouseOver;
    } else {
      proxyClass += ' ' + this.styles.proxySelected;
    }
    this.setState({ proxyClass: proxyClass });
  }
}

function onClickHandler() {
  isMobile() ? handleFocus.call(this) : this.selectElement.focus();
}

function onFocusHandler() {
  handleFocus.call(this);
}

function onSelectHandler(option) {
  var proxyClass = void 0;
  var labelClass = void 0;
  var optionsClass = void 0;
  proxyClass = this.styles.proxyUnselected;
  optionsClass = this.styles.options;
  if (option === null) {
    labelClass = this.styles.labelUnselected;
  } else {
    proxyClass += ' ' + this.styles.proxySelected;
    labelClass = this.styles.labelSelected;
  }
  this.selectElement.value = option;
  this.props.manager('onSelect', option);
  this.setState({
    focused: false,
    proxyClass: proxyClass,
    labelClass: labelClass
  });
}

function onKeyDownHandler(e) {
  if (e.keyCode === 9) {
    this.handler('unfocusSelect');
  }
}

function onMouseLeaveHandler() {
  var proxyClass = void 0;
  if (!this.state.focused) {
    proxyClass = this.styles.proxyUnselected;
    if (this.state.value !== null) {
      proxyClass += ' ' + this.styles.proxySelected;
    }
    this.setState({ proxyClass: proxyClass });
  }
}

function onUnfocusHandler() {
  var proxyClass = void 0;
  var labelClass = void 0;
  proxyClass = this.styles.proxyUnselected;
  if (this.state.value === null) {
    labelClass = this.styles.labelUnselected;
  } else {
    proxyClass += ' ' + this.styles.proxySelected;
    labelClass = this.styles.labelSelected;
  }
  this.setState({
    labelClass: labelClass,
    proxyClass: proxyClass,
    focused: false
  });
}

function handleFocus() {
  var proxyClass = void 0;
  var labelClass = void 0;
  var optionsClass = void 0;
  labelClass = this.styles.labelSelected;
  optionsClass = this.styles.options;
  proxyClass = this.styles.proxyUnselected + ' ' + this.styles.proxyUnselectedFocus;
  this.setState({
    labelClass: labelClass,
    proxyClass: proxyClass,
    optionsClass: optionsClass,
    focused: true
  });
}

function isMobile() {
  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  );
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "  .detached-select-js-options-background {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 998;\r\n    cursor: default;\r\n  }\r\n\r\n  .animation-none {\r\n    animation-name: none !important;\r\n  }", ""]);

// exports


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = selectManagerFactory;
function selectManagerFactory() {
  return function (aspect, option, aspects) {
    switch (aspect) {
      case 'id':
        return aspects.id;
      case 'styles':
        return aspects.styles === undefined ? {} : aspects.styles;
      case 'disabled':
        return aspects.disabled === undefined ? false : aspects.disabled;
      case 'value':
        return aspects.value === undefined ? null : aspects.value;
      case 'label':
        return aspects.label === undefined ? '' : aspects.label;
      case 'options':
        return aspects.options;
      case 'optionKey':
        return aspects.optionKey;
      case 'optionValue':
        return aspects.optionValue;
      case 'optionDecorate':
        return aspects.optionDecorate;
      case 'setValue':
        aspects.setValue === undefined ? emptyFunction() : aspects.setValue();
        break;
      case 'onSelect':
        aspects.onSelect();
        break;
      case 'error':
        return aspects.error === undefined ? '' : aspects.error;
      case 'flag':
        return aspects.flag === undefined ? null : aspects.flag;
      default:
        break;
    }
  };
}

function emptyFunction() {
  return function () {
    null;
  };
}

/***/ })
/******/ ]);