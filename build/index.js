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
exports.textareaManagerFactory = exports.ManagedTextarea = exports.checkboxManagerFactory = exports.ManagedCheckbox = exports.buttonManagerFactory = exports.ManagedButton = exports.selectManagerFactory = exports.ManagedSelect = exports.textManagerFactory = exports.ManagedText = undefined;

var _text = __webpack_require__(2);

var _text2 = _interopRequireDefault(_text);

var _managerFactory = __webpack_require__(6);

var _managerFactory2 = _interopRequireDefault(_managerFactory);

var _select = __webpack_require__(7);

var _select2 = _interopRequireDefault(_select);

var _managerFactory3 = __webpack_require__(11);

var _managerFactory4 = _interopRequireDefault(_managerFactory3);

var _button = __webpack_require__(12);

var _button2 = _interopRequireDefault(_button);

var _managerFactory5 = __webpack_require__(16);

var _managerFactory6 = _interopRequireDefault(_managerFactory5);

var _checkbox = __webpack_require__(17);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _managerFactory7 = __webpack_require__(21);

var _managerFactory8 = _interopRequireDefault(_managerFactory7);

var _textarea = __webpack_require__(22);

var _textarea2 = _interopRequireDefault(_textarea);

var _managerFactory9 = __webpack_require__(26);

var _managerFactory10 = _interopRequireDefault(_managerFactory9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ManagedText = _text2.default;
exports.textManagerFactory = _managerFactory2.default;
exports.ManagedSelect = _select2.default;
exports.selectManagerFactory = _managerFactory4.default;
exports.ManagedButton = _button2.default;
exports.buttonManagerFactory = _managerFactory6.default;
exports.ManagedCheckbox = _checkbox2.default;
exports.checkboxManagerFactory = _managerFactory8.default;
exports.ManagedTextarea = _textarea2.default;
exports.textareaManagerFactory = _managerFactory10.default;

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

var _lifecycle = __webpack_require__(3);

var lifecycle = _interopRequireWildcard(_lifecycle);

var _handlers = __webpack_require__(4);

var handlers = _interopRequireWildcard(_handlers);

var _decorator = __webpack_require__(5);

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

    _this.controlled = _this.props.manager('controlled');
    _this.id = _this.props.manager('id');
    _this.type = _this.props.manager('type');
    _this.autoComplete = props.manager('autoComplete');
    _this.classNames = _this.props.manager('classNames');
    _this.containerClass = _this.classNames.container || 'managed-input text';
    _this.inputClass = _this.classNames.input || 'input';
    _this.labelClass = _this.classNames.label || 'label';
    _this.valueClass = _this.classNames.value || 'value';
    _this.focusClass = _this.classNames.focus || 'focus';
    _this.hoverClass = _this.classNames.hover || 'hover';
    _this.errorContainerClass = _this.classNames.errorContainer || 'error-container';
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
    _this.state = {
      display: _this.props.manager('display'),
      disabled: _this.props.manager('disabled'),
      value: _this.props.manager('value'),
      label: _this.props.manager('label'),
      error: _this.props.manager('error'),
      flag: _this.props.manager('flag'),
      mouseOver: false,
      focus: false,
      decorator: ''
    };
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
          id: this.id,
          className: this.inputClass + this.state.decorator,
          type: this.type,
          disabled: this.state.disabled,
          autoComplete: this.autoComplete,
          value: this.controlled ? this.state.value : undefined,
          onFocus: this.onFocusHandler,
          onBlur: this.onBlurHandler,
          onChange: this.onChangeHandler }),
        _react2.default.createElement(
          'div',
          { className: this.errorContainerClass + this.state.decorator },
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
exports.componentDidMount = componentDidMount;
exports.getDerivedStateFromProps = getDerivedStateFromProps;
exports.shouldComponentUpdate = shouldComponentUpdate;
exports.componentDidUpdate = componentDidUpdate;
var STATE_KEYS_TO_DERIVE = ['display', 'value', 'label', 'disabled', 'className', 'error', 'flag'];

var STATE_KEYS_TO_UPDATE = STATE_KEYS_TO_DERIVE.concat(['mouseOver', 'focus', 'decorator']);

function componentDidMount() {
  this.inputElement = document.getElementById(this.id);
  this.decorator();
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

function shouldComponentUpdate(_, nextState) {
  var _this = this;

  var outcome = false;
  STATE_KEYS_TO_UPDATE.map(function (element) {
    if (_this.state[element] !== nextState[element]) {
      outcome = true;
    }
  });
  return outcome;
}

function componentDidUpdate() {
  this.decorator();
}

/***/ }),
/* 4 */
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
  this.setState({ focus: true });
  this.props.manager('onFocus', e.target.value);
}

function onBlurHandler(e) {
  this.setState({ focus: false });
  this.props.manager('onBlur', e.target.value);
}

function onClickHandler(e) {
  this.inputElement.focus();
  this.props.manager('onClick', e.target.value);
}

function onChangeHandler(e) {
  this.forceUpdate();
  this.props.manager('onChange', e.target.value);
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decorator = decorator;
function decorator() {
  var className = '';
  if (this.inputElement && this.inputElement.value) {
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = textManagerFactory;
function textManagerFactory() {
  return function (aspect, aspects) {
    switch (aspect) {
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
      case 'value':
        return aspects.value || '';
      case 'label':
        return aspects.label || '';
      case 'autoComplete':
        return aspects.autoComplete || '';
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
      case 'setValue':
        return aspects.setValue && aspects.setValue();
      case 'validate':
        return aspects.validate && aspects.validate();
      case 'error':
        return aspects.error;
      case 'flag':
        return aspects.flag;
      default:
        break;
    }
  };
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lifecycle = __webpack_require__(8);

var lifecycle = _interopRequireWildcard(_lifecycle);

var _handlers = __webpack_require__(9);

var handlers = _interopRequireWildcard(_handlers);

var _decorator = __webpack_require__(10);

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
    _this.classNames = _this.props.manager('classNames');
    _this.containerClass = _this.classNames.container || 'managed-input select';
    _this.inputClass = _this.classNames.input || 'input';
    _this.labelClass = _this.classNames.label || 'label';
    _this.optionsClass = _this.classNames.options || 'options';
    _this.optionClass = _this.classNames.option || 'option';
    _this.markClass = _this.classNames.mark || 'mark';
    _this.errorContainerClass = _this.classNames.errorContainer || 'error-container';
    _this.valueClass = _this.classNames.value || 'value';
    _this.focusClass = _this.classNames.focus || 'focus';
    _this.hoverClass = _this.classNames.hover || 'hover';
    _this.errorClass = _this.classNames.error || 'error';
    _this.componentDidMount = lifecycle.componentDidMount;
    _this.shouldComponentUpdate = lifecycle.shouldComponentUpdate;
    _this.componentDidUpdate = lifecycle.componentDidUpdate;
    _this.onMouseOverHandler = handlers.onMouseOverHandler.bind(_this);
    _this.onClickHandler = handlers.onClickHandler.bind(_this);
    _this.onKeyDownHandler = handlers.onKeyDownHandler.bind(_this);
    _this.onFocusHandler = handlers.onFocusHandler.bind(_this);
    _this.onSelectHandler = handlers.onSelectHandler.bind(_this);
    _this.onMouseLeaveHandler = handlers.onMouseLeaveHandler.bind(_this);
    _this.onBlurHandler = handlers.onBlurHandler.bind(_this);
    _this.decorator = _decorator.decorator.bind(_this);
    _this.state = {
      display: _this.props.manager('display'),
      disabled: _this.props.manager('disabled'),
      value: _this.props.manager('value'),
      label: _this.props.manager('label'),
      error: _this.props.manager('error'),
      options: _this.props.manager('options'),
      flag: _this.props.manager('flag'),
      mouseOver: false,
      focus: false,
      decorator: ''
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
              this.props.manager('optionDecorate', this.state.value),
              _react2.default.createElement('div', { className: this.markClass + this.state.decorator })
            )
          ),
          this.state.focus && _react2.default.createElement(
            'div',
            {
              className: this.optionsClass + this.state.decorator },
            this.state.options.map(function (option) {
              return _react2.default.createElement(
                'div',
                {
                  key: _this2.props.manager('optionKey', option),
                  onClick: function onClick() {
                    return _this2.onSelectHandler(option);
                  },
                  className: _this2.optionClass + _this2.state.decorator },
                _this2.props.manager('optionDecorate', option)
              );
            })
          ),
          _react2.default.createElement(
            'select',
            {
              id: this.id,
              value: this.state.value,
              readOnly: true,
              style: { position: 'absolute', left: -10000 },
              disabled: this.state.disabled,
              onFocus: this.onFocusHandler,
              onKeyDown: this.onKeyDownHandler,
              onBlur: this.onBlurHandler },
            this.state.options.map(function (option) {
              return _react2.default.createElement(
                'option',
                {
                  key: _this2.props.manager('optionKey', option + 'originalSelect'),
                  value: _this2.props.manager('optionValue', option) },
                _this2.props.manager('optionDecorate', option)
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.componentDidMount = componentDidMount;
exports.getDerivedStateFromProps = getDerivedStateFromProps;
exports.shouldComponentUpdate = shouldComponentUpdate;
exports.componentDidUpdate = componentDidUpdate;
var STATE_KEYS_TO_DERIVE = ['display', 'disabled', 'value', 'label', 'options', 'error', 'flag'];

var STATE_KEYS_TO_UPDATE = STATE_KEYS_TO_DERIVE.concat(['mouseOver', 'focus', 'decorator']);

function componentDidMount() {
  this.input = document.getElementById(this.id);
  this.decorator();
}

function getDerivedStateFromProps(nextProps, prevState) {
  var returnObject = {};
  STATE_KEYS_TO_DERIVE.map(function (element) {
    if (JSON.stringify(nextProps.manager(element)) !== JSON.stringify(prevState[element])) {
      returnObject[element] = nextProps.manager(element);
    }
  });
  return returnObject;
}

function shouldComponentUpdate(_, nextState) {
  var _this = this;

  var outcome = false;
  STATE_KEYS_TO_UPDATE.map(function (element) {
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
/* 9 */
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
exports.onKeyDownHandler = onKeyDownHandler;
exports.onSelectHandler = onSelectHandler;
function onMouseOverHandler(e) {
  this.setState({ mouseOver: true });
  this.props.manager('onMouseOver', e.target.value);
}

function onMouseLeaveHandler(e) {
  this.setState({ mouseOver: false });
  this.props.manager('onMouseLeave', e.target.value);
}

function onFocusHandler(e) {
  this.setState({ focus: true });
  this.props.manager('onFocus', e.target.value);
}

function onBlurHandler(e, tabDown) {
  if (this.state.mouseOver === false || tabDown === true) {
    if (e && e.target) {
      this.props.manager('onBlur', e.target.value);
    }
    this.setState({ focus: false });
  }
}

function onClickHandler(e) {
  this.input.focus();
  this.props.manager('onClick', e.target.value);
}

function onKeyDownHandler(e) {
  if (e.keyCode === 38 || e.keyCode === 40) {
    e.preventDefault();
  }
  if (e.keyCode === 9) {
    this.onBlurHandler(e, true);
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decorator = decorator;
function decorator() {
  var className = '';
  if (this.state.value) {
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = selectManagerFactory;
function selectManagerFactory() {
  return function (aspect, aspects) {
    switch (aspect) {
      case 'id':
        return aspects.id;
      case 'controlled':
        return aspects.controlled || true;
      case 'display':
        return aspects.display || 'block';
      case 'disabled':
        return aspects.disabled || false;
      case 'classNames':
        return aspects.classNames || {};
      case 'value':
        return aspects.value;
      case 'label':
        return aspects.label || '';
      case 'options':
        return aspects.options;
      case 'optionKey':
        return aspects.optionKey;
      case 'optionValue':
        return aspects.optionValue;
      case 'optionDecorate':
        return aspects.optionDecorate;
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
      case 'onSelect':
        return aspects.onSelect && aspects.onSelect();
      case 'error':
        return aspects.error || '';
      case 'flag':
        return aspects.flag || null;
      default:
        break;
    }
  };
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _handlers = __webpack_require__(13);

var handlers = _interopRequireWildcard(_handlers);

var _lifecycle = __webpack_require__(14);

var lifecycle = _interopRequireWildcard(_lifecycle);

var _decorator = __webpack_require__(15);

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
    _this.classNames = _this.props.manager('classNames');
    _this.containerClass = _this.classNames.container || 'managed-input button';
    _this.inputClass = _this.classNames.input || 'input';
    _this.focusClass = _this.classNames.focus || 'focus';
    _this.hoverClass = _this.classNames.hover || 'hover';
    _this.componentDidMount = lifecycle.componentDidMount;
    _this.shouldComponentUpdate = lifecycle.shouldComponentUpdate;
    _this.componentDidUpdate = lifecycle.componentDidUpdate;
    _this.onMouseOverHandler = handlers.onMouseOverHandler.bind(_this);
    _this.onMouseLeaveHandler = handlers.onMouseLeaveHandler.bind(_this);
    _this.onFocusHandler = handlers.onFocusHandler.bind(_this);
    _this.onBlurHandler = handlers.onBlurHandler.bind(_this);
    _this.onClickHandler = handlers.onClickHandler.bind(_this);
    _this.decorator = _decorator.decorator.bind(_this);
    _this.state = {
      display: _this.props.manager('display'),
      disabled: _this.props.manager('disabled'),
      label: _this.props.manager('label'),
      flag: _this.props.manager('flag'),
      mouseOver: false,
      focus: false,
      decorator: ''
    };
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
exports.onClickHandler = onClickHandler;
function onMouseOverHandler() {
  this.setState({ mouseOver: true });
  this.props.manager('onMouseOver');
}

function onMouseLeaveHandler() {
  this.setState({ mouseOver: false });
  this.props.manager('onMouseLeave');
}

function onFocusHandler(e) {
  this.setState({ focus: true });
  this.props.manager('onFocus', e.target.value);
}

function onBlurHandler(e) {
  this.setState({ focus: false });
  this.props.manager('onBlur', e.target.value);
}

function onClickHandler() {
  this.props.manager('onClick');
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.componentDidMount = componentDidMount;
exports.getDerivedStateFromProps = getDerivedStateFromProps;
exports.shouldComponentUpdate = shouldComponentUpdate;
exports.componentDidUpdate = componentDidUpdate;
var STATE_KEYS_TO_DERIVE = ['display', 'disabled', 'label', 'flag'];

var STATE_KEYS_TO_UPDATE = STATE_KEYS_TO_DERIVE.concat(['mouseOver', 'focus', 'decorator']);

function componentDidMount() {
  this.input = document.getElementById(this.id);
  this.decorator();
}

function getDerivedStateFromProps(nextProps, prevState) {
  var returnObject = {};
  STATE_KEYS_TO_DERIVE.map(function (element) {
    if (JSON.stringify(nextProps.manager(element)) !== JSON.stringify(prevState[element])) {
      returnObject[element] = nextProps.manager(element);
    }
  });
  return returnObject;
}

function shouldComponentUpdate(_, nextState) {
  var _this = this;

  var outcome = false;
  STATE_KEYS_TO_UPDATE.map(function (element) {
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
/* 15 */
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
/* 16 */
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
        return aspects.display || 'block';
      case 'disabled':
        return aspects.disabled || false;
      case 'classNames':
        return aspects.classNames || {};
      case 'label':
        return aspects.label;
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
      case 'flag':
        return aspects.flag || null;
      default:
        break;
    }
  };
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

var _lifecycle = __webpack_require__(18);

var lifecycle = _interopRequireWildcard(_lifecycle);

var _handlers = __webpack_require__(19);

var handlers = _interopRequireWildcard(_handlers);

var _decorator = __webpack_require__(20);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ManagedCheckbox = function (_React$Component) {
  _inherits(ManagedCheckbox, _React$Component);

  function ManagedCheckbox(props) {
    _classCallCheck(this, ManagedCheckbox);

    var _this = _possibleConstructorReturn(this, (ManagedCheckbox.__proto__ || Object.getPrototypeOf(ManagedCheckbox)).call(this, props));

    _this.id = _this.props.manager('id');
    _this.controlled = _this.props.manager('controlled');
    _this.classNames = _this.props.manager('classNames');
    _this.containerClass = _this.classNames.container || 'managed-input checkbox';
    _this.checkboxContainerClass = _this.classNames.checkboxContainerClass || 'container';
    _this.inputClass = _this.classNames.input || 'input';
    _this.labelClass = _this.classNames.label || 'label';
    _this.tickClass = _this.classNames.tick || 'tick';
    _this.errorContainerClass = _this.classNames.errorContainer || 'error-container';
    _this.checkedClass = _this.classNames.checked || 'checked';
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
    _this.onClickHandler = handlers.onClickHandler.bind(_this);
    _this.decorator = _decorator.decorator.bind(_this);
    _this.state = {
      display: _this.props.manager('display'),
      disabled: _this.props.manager('disabled'),
      checked: _this.props.manager('checked'),
      label: _this.props.manager('label'),
      error: _this.props.manager('error'),
      flag: _this.props.manager('flag'),
      mouseOver: false,
      focus: false,
      decorator: ''
    };
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
          type: 'checkbox',
          id: this.id,
          style: { position: 'absolute', left: -10000 },
          value: this.controlled ? this.state.value : undefined,
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
}(_react2.default.Component);

exports.default = ManagedCheckbox;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.componentDidMount = componentDidMount;
exports.getDerivedStateFromProps = getDerivedStateFromProps;
exports.shouldComponentUpdate = shouldComponentUpdate;
exports.componentDidUpdate = componentDidUpdate;
var STATE_KEYS_TO_DERIVE = ['disabled', 'checked', 'label', 'error', 'flag'];

var STATE_KEYS_TO_UPDATE = STATE_KEYS_TO_DERIVE.concat(['mouseOver', 'focus', 'decorator']);

function componentDidMount() {
  this.inputElement = document.getElementById(this.id);
  this.decorator();
}

function getDerivedStateFromProps(nextProps, prevState) {
  var returnObject = {};
  STATE_KEYS_TO_DERIVE.map(function (element) {
    if (nextProps.manager(element) !== prevState[element]) {
      returnObject[element] = nextProps.manager(element);
    }
  });
  return returnObject;
}

function shouldComponentUpdate(_, nextState) {
  var _this = this;

  var outcome = false;
  STATE_KEYS_TO_UPDATE.map(function (element) {
    if (_this.state[element] !== nextState[element]) {
      outcome = true;
    }
  });
  return outcome;
}

function componentDidUpdate() {
  this.decorator();
}

/***/ }),
/* 19 */
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
function onMouseOverHandler() {
  this.setState({ mouseOver: true });
}

function onMouseLeaveHandler() {
  this.setState({ mouseOver: false });
}

function onFocusHandler(e) {
  this.setState({ focus: true });
  this.props.manager('onFocus', e.target.value);
}

function onBlurHandler(e) {
  this.setState({ focus: false });
  this.props.manager('onBlur', e.target.value);
}

function onClickHandler() {
  this.inputElement.focus();
  var checked = !this.state.checked;
  if (this.controlled === false) {
    this.setState({ checked: checked });
    var checkbox = document.getElementById(this.id);
    checkbox.checked = checked;
  }
  this.props.manager('onClick', checked);
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
  var className = '';
  if (this.inputElement.checked) {
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkboxManagerFactory;
function checkboxManagerFactory() {
  return function (aspect, aspects) {
    switch (aspect) {
      case 'id':
        return aspects.id;
      case 'controlled':
        return aspects.controlled === undefined ? true : false;
      case 'display':
        return aspects.display || 'block';
      case 'disabled':
        return aspects.disabled || undefined;
      case 'classNames':
        return aspects.classNames || {};
      case 'label':
        return aspects.label || '';
      case 'checked':
        return aspects.checked || false;
      case 'onMouseOver':
        return aspects.onMouseOver && aspects.onMouseOver();
      case 'onMouseLeave':
        return aspects.onMouseLeave && aspects.onMouseLeave();
      case 'onClick':
        return aspects.onClick && aspects.onClick();
      case 'onFocus':
        return aspects.onFocus && aspects.onFocus();
      case 'onBlur':
        return aspects.onBlur && aspects.onBlur();
      case 'onChange':
        return aspects.onChange && aspects.onChange();
      case 'validate':
        return aspects.validate();
      case 'setValue':
        return aspects.setValue();
      case 'error':
        return aspects.error || '';
      case 'flag':
        return aspects.flag || null;
      default:
        break;
    }
  };
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

var _lifecycle = __webpack_require__(23);

var lifecycle = _interopRequireWildcard(_lifecycle);

var _handlers = __webpack_require__(24);

var handlers = _interopRequireWildcard(_handlers);

var _decorator = __webpack_require__(25);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ManagedTextarea = function (_React$Component) {
  _inherits(ManagedTextarea, _React$Component);

  function ManagedTextarea(props) {
    _classCallCheck(this, ManagedTextarea);

    var _this = _possibleConstructorReturn(this, (ManagedTextarea.__proto__ || Object.getPrototypeOf(ManagedTextarea)).call(this, props));

    _this.id = _this.props.manager('id');
    _this.controlled = _this.props.manager('controlled');
    _this.classNames = _this.props.manager('classNames');
    _this.containerClass = _this.classNames.container || 'managed-input textarea';
    _this.inputClass = _this.classNames.input || 'input';
    _this.labelClass = _this.classNames.label || 'label';
    _this.counterClass = _this.classNames.counter || 'counter';
    _this.valueClass = _this.classNames.value || 'value';
    _this.focusClass = _this.classNames.focus || 'focus';
    _this.hoverClass = _this.classNames.hover || 'hover';
    _this.errorContainerClass = _this.classNames.errorContainer || 'error-container';
    _this.errorClass = _this.classNames.error || 'error';
    _this.componentDidMount = lifecycle.componentDidMount;
    _this.shouldComponentUpdate = lifecycle.shouldComponentUpdate;
    _this.componentDidUpdate = lifecycle.componentDidUpdate;
    _this.onMouseOverHandler = handlers.onMouseOverHandler.bind(_this);
    _this.onMouseLeaveHandler = handlers.onMouseLeaveHandler.bind(_this);
    _this.onFocusHandler = handlers.onFocusHandler.bind(_this);
    _this.onBlurHandler = handlers.onBlurHandler.bind(_this);
    _this.onClickHandler = handlers.onClickHandler.bind(_this);
    _this.onChangeHandler = handlers.onChangeHandler.bind(_this);
    _this.decorator = _decorator.decorator.bind(_this);
    _this.state = {
      display: _this.props.manager('display'),
      disabled: _this.props.manager('disabled'),
      value: _this.props.manager('value'),
      label: _this.props.manager('label'),
      error: _this.props.manager('error'),
      counterLimit: _this.props.manager('counterLimit'),
      counter: 0,
      mouseOver: false,
      focus: false,
      decorator: ''
    };
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
          id: this.id,
          disabled: this.state.disabled,
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
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevstate) {
      return lifecycle.getDerivedStateFromProps(nextProps, prevstate);
    }
  }]);

  return ManagedTextarea;
}(_react2.default.Component);

exports.default = ManagedTextarea;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.componentDidMount = componentDidMount;
exports.getDerivedStateFromProps = getDerivedStateFromProps;
exports.shouldComponentUpdate = shouldComponentUpdate;
exports.componentDidUpdate = componentDidUpdate;
var STATE_KEYS_TO_DERIVE = ['disabled', 'value', 'label', 'styles', 'counterLimit', 'error', 'flag'];

var STATE_KEYS_TO_UPDATE = STATE_KEYS_TO_DERIVE.concat(['counter', 'mouseOver', 'focus', 'decorator']);

function componentDidMount() {
  this.input = document.getElementById(this.id);
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

function shouldComponentUpdate(_, nextState) {
  var _this = this;

  var outcome = false;
  STATE_KEYS_TO_UPDATE.map(function (element) {
    if (_this.state[element] !== nextState[element]) {
      outcome = true;
    }
  });
  return outcome;
}

function componentDidUpdate() {
  this.decorator();
}

/***/ }),
/* 24 */
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
  this.setState({ focus: true });
  this.props.manager('onFocus', e.target.value);
}

function onBlurHandler(e) {
  this.setState({ focus: false });
  this.props.manager('onBlur', e.target.value);
}

function onClickHandler(e) {
  this.input.focus();
  this.props.manager('onClick', e.target.value);
}

function onChangeHandler(e) {
  var valueLength = e.target.value.length;
  if (valueLength <= this.state.counterLimit) {
    this.setState({ counter: valueLength });
    this.props.manager('onChange', e.target.value);
    this.forceUpdate();
  } else {
    this.input.value = this.input.value.slice(0, -1);
  }
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
  var className = '';
  if (this.input.value) {
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = textareaManagerFactory;
function textareaManagerFactory() {
  return function (aspect, aspects) {
    switch (aspect) {
      case 'id':
        return aspects.id;
      case 'controlled':
        return aspects.controlled === undefined ? true : false;
      case 'display':
        return aspects.display || 'block';
      case 'disabled':
        return aspects.disabled || false;
      case 'classNames':
        return aspects.classNames || {};
      case 'value':
        return aspects.value || '';
      case 'label':
        return aspects.label;
      case 'counterLimit':
        return aspects.counterLimit;
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
      case 'setValue':
        return aspects.setValue();
      case 'error':
        return aspects.error;
      case 'flag':
        return aspects.flag || null;
      default:
        break;
    }
  };
}

/***/ })
/******/ ]);