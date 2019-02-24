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
exports.buttonManagerFactory = exports.ManagedButton = exports.selectManagerFactory = exports.ManagedSelect = exports.textManagerFactory = exports.ManagedText = undefined;

var _text = __webpack_require__(2);

var _text2 = _interopRequireDefault(_text);

var _managerFactory = __webpack_require__(5);

var _managerFactory2 = _interopRequireDefault(_managerFactory);

var _select = __webpack_require__(6);

var _select2 = _interopRequireDefault(_select);

var _managerFactory3 = __webpack_require__(9);

var _managerFactory4 = _interopRequireDefault(_managerFactory3);

var _button = __webpack_require__(10);

var _button2 = _interopRequireDefault(_button);

var _managerFactory5 = __webpack_require__(13);

var _managerFactory6 = _interopRequireDefault(_managerFactory5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ManagedText = _text2.default;
exports.textManagerFactory = _managerFactory2.default;
exports.ManagedSelect = _select2.default;
exports.selectManagerFactory = _managerFactory4.default;
exports.ManagedButton = _button2.default;
exports.buttonManagerFactory = _managerFactory6.default;

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
              return _this2.onFocusHandler();
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
    _this.onKeyDownHandler = handlers.onKeyDownHandler.bind(_this);
    _this.onFocusHandler = handlers.onFocusHandler.bind(_this);
    _this.onSelectHandler = handlers.onSelectHandler.bind(_this);
    _this.onMouseLeaveHandler = handlers.onMouseLeaveHandler.bind(_this);
    _this.onBlurHandler = handlers.onBlurHandler.bind(_this);
    _this.state = {
      disabled: _this.props.manager('disabled'),
      focused: false,
      value: _this.props.manager('value'),
      label: _this.props.manager('label'),
      options: _this.props.manager('options'),
      optionsHovered: false,
      flag: _this.props.manager('flag'),
      error: _this.props.manager('error'),
      proxyClass: _this.styles.proxyUnselected,
      labelClass: _this.styles.labelUnselected,
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
          {
            onMouseOver: function onMouseOver() {
              return _this2.setState({ optionsHovered: true });
            },
            onMouseLeave: function onMouseLeave() {
              return _this2.setState({ optionsHovered: false });
            } },
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
          )
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
              return _this2.onClickHandler();
            } },
          this.props.manager('optionDecorate', this.state.value)
        ),
        _react2.default.createElement(
          'select',
          {
            style: { border: 'none', height: 0, width: 0, zIndex: -999, outline: 'none', appearance: 'none' },
            disabled: this.state.disabled,
            onFocus: function onFocus() {
              return _this2.onFocusHandler();
            },
            onKeyDown: function onKeyDown(e) {
              return _this2.onKeyDownHandler(e);
            },
            onBlur: this.onBlurHandler,
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
          { className: this.styles.error },
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
  var _this = this;

  this.selectElement = document.getElementById(this.id);
  this.proxyUnselectedElement = document.getElementById(this.proxyId);
  this.labelElement = document.getElementById(this.labelId);
  this.options = document.getElementById(this.optionsId);
  this.selectElement.addEventListener('blur', function () {
    _this.onBlurHandler();
  });
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
  var _this2 = this;

  var someValue = false;
  STATE_KEYS_TO_UPDATE.map(function (element) {
    if (_this2.state[element] !== nextState[element]) {
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
exports.onSelectHandler = onSelectHandler;
exports.onMouseLeaveHandler = onMouseLeaveHandler;
exports.onKeyDownHandler = onKeyDownHandler;
exports.onBlurHandler = onBlurHandler;
exports.onFocusHandler = onFocusHandler;
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
  this.onFocusHandler();
}

function onSelectHandler(option) {
  var proxyClass = void 0;
  var labelClass = void 0;
  proxyClass = this.styles.proxyUnselected;
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
    labelClass: labelClass,
    optionsHovered: false
  });
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

function onKeyDownHandler(e) {
  if (e.keyCode === 38 || e.keyCode === 40) {
    e.preventDefault();
  }
  if (e.keyCode === 9) {
    this.onBlurHandler(e, true);
  }
}

function onBlurHandler(e, tabDown) {
  if (this.state.optionsHovered === false || tabDown === true) {
    var proxyClass = void 0;
    var labelClass = void 0;
    proxyClass = this.styles.proxyUnselected;
    labelClass = this.styles.labelUnselected;
    if (this.state.value !== null) {
      proxyClass += ' ' + this.styles.proxySelected;
      labelClass = this.styles.labelSelected;
    }
    this.setState({
      labelClass: labelClass,
      proxyClass: proxyClass,
      focused: false
    });
  }
}

function onFocusHandler() {
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

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _handlers = __webpack_require__(11);

var handlers = _interopRequireWildcard(_handlers);

var _lifecycle = __webpack_require__(12);

var lifecycle = _interopRequireWildcard(_lifecycle);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ManagedButton = function (_React$Component) {
  _inherits(ManagedButton, _React$Component);

  function ManagedButton(props) {
    _classCallCheck(this, ManagedButton);

    var _this = _possibleConstructorReturn(this, (ManagedButton.__proto__ || Object.getPrototypeOf(ManagedButton)).call(this, props));

    _this.id = _this.props.manager('id');
    _this.componentDidMount = lifecycle.componentDidMount;
    _this.shouldComponentUpdate = lifecycle.shouldComponentUpdate;
    _this.onMouseOverHandler = handlers.onMouseOverHandler.bind(_this);
    _this.onClickHandler = handlers.onClickHandler.bind(_this);
    _this.onMouseLeaveHandler = handlers.onMouseLeaveHandler.bind(_this);
    _this.styles = _this.props.manager('styles');
    _this.state = {
      disabled: _this.props.manager('disabled'),
      flag: _this.props.manager('flag'),
      buttonClass: _this.styles.button
    };
    return _this;
  }

  _createClass(ManagedButton, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          style: { display: this.props.manager('display') },
          className: this.state.disabled ? this.styles.disabled : this.styles.active },
        _react2.default.createElement(
          'button',
          {
            id: this.id,
            className: this.state.buttonClass,
            disabled: this.props.manager('disabled'),
            onMouseOver: this.onMouseOverHandler,
            onClick: this.onClickHandler,
            onMouseLeave: this.onMouseLeaveHandler },
          this.props.manager('label')
        ),
        _react2.default.createElement(
          'div',
          { className: this.styles.error },
          this.props.manager('error')
        )
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevstate) {
      return lifecycle.getDerivedStateFromProps(nextProps, prevstate);
    }
  }]);

  return ManagedButton;
}(_react2.default.Component);

exports.default = ManagedButton;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onMouseOverHandler = onMouseOverHandler;
exports.onClickHandler = onClickHandler;
exports.onMouseLeaveHandler = onMouseLeaveHandler;
function onMouseOverHandler() {
  this.props.manager('onMouseOver');
}

function onClickHandler() {
  this.props.manager('onClick');
}

function onMouseLeaveHandler() {
  this.props.manager('onMouseLeave');
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.componentDidMount = componentDidMount;
exports.getDerivedStateFromProps = getDerivedStateFromProps;
exports.shouldComponentUpdate = shouldComponentUpdate;
var STATE_KEYS_TO_DERIVE = ['label', 'disabled', 'error', 'flag'];

var STATE_KEYS_TO_UPDATE = STATE_KEYS_TO_DERIVE.concat(['display', 'buttonClass']);

function componentDidMount() {
  this.button = document.getElementById(this.id);
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
    if (_this.props[element] !== nextProps[element]) {
      shouldIt = true;
    }
  });
  return shouldIt;
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buttonManagerFactory;
function buttonManagerFactory() {
  return function (aspect, aspects) {
    switch (aspect) {
      case 'id':
        return aspects.id;
      case 'display':
        return aspects.display === undefined ? 'block' : aspects.display;
      case 'disabled':
        return aspects.disabled === undefined ? false : aspects.disabled;
      case 'styles':
        return aspects.styles === undefined ? {} : aspects.styles;
      case 'label':
        return aspects.label;
      case 'onMouseOver':
        if (aspects.onMouseOver === undefined) return;
        aspects.onMouseOver();
        break;
      case 'onClick':
        aspects.onClick();
        break;
      case 'onMouseLeave':
        if (aspects.onMouseLeave === undefined) return;
        aspects.onMouseLeave();
        break;
      case 'error':
        return aspects.error === undefined ? '' : aspects.error;
      case 'flag':
        aspects.flag === undefined ? null : aspects.flag;
        break;
      default:
        break;
    }
  };
}

/***/ })
/******/ ]);