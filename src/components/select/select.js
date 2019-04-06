import React from 'react'
import * as lifecycle from './lifecycle/lifecycle'
import * as handlers from './handlers/handlers'
import { decorator } from './decorator/decorator'

export default class ManagedSelect extends React.Component {
  constructor(props) {
    super(props)
    this.id = this.props.manager('id')
    this.classNames = this.props.manager('classNames')
    this.containerClass = this.classNames.container || 'managed-input select'
    this.inputClass = this.classNames.input || 'input'
    this.labelClass = this.classNames.label || 'label'
    this.optionsClass = this.classNames.options || 'options'
    this.optionClass = this.classNames.option || 'option'
    this.markClass = this.classNames.mark || 'mark'
    this.errorContainerClass = this.classNames.errorContainer || 'error-container'
    this.valueClass = this.classNames.value || 'value'
    this.focusClass = this.classNames.focus || 'focus'
    this.hoverClass = this.classNames.hover || 'hover'
    this.errorClass = this.classNames.error || 'error'
    this.componentDidMount = lifecycle.componentDidMount
    this.shouldComponentUpdate = lifecycle.shouldComponentUpdate
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.onMouseOverHandler = handlers.onMouseOverHandler.bind(this)
    this.onClickHandler = handlers.onClickHandler.bind(this)
    this.onKeyDownHandler = handlers.onKeyDownHandler.bind(this)
    this.onFocusHandler = handlers.onFocusHandler.bind(this)
    this.onSelectHandler = handlers.onSelectHandler.bind(this)
    this.onMouseLeaveHandler = handlers.onMouseLeaveHandler.bind(this)
    this.onBlurHandler = handlers.onBlurHandler.bind(this)
    this.decorator = decorator.bind(this)
    this.state = {
      display: this.props.manager('display'),
      disabled: this.props.manager('disabled'),
      value: this.props.manager('value'),
      label: this.props.manager('label'),
      error: this.props.manager('error'),
      options:  this.props.manager('options'),
      flag: this.props.manager('flag'),
      mouseOver: false,
      focus: false,
      decorator: ''
    }
  }

  static getDerivedStateFromProps(nextProps, prevstate) {
    return lifecycle.getDerivedStateFromProps(nextProps, prevstate)
  }

  render() {
    return (
      <div
      style={{ display: this.state.display }}
      className={this.containerClass + this.state.decorator}>
        <div
        onMouseOver={this.onMouseOverHandler}
        onMouseLeave={this.onMouseLeaveHandler}>
          <div onClick={this.onClickHandler}>
            <div className={this.labelClass + this.state.decorator}>
              {this.state.label}
            </div>
            <div className={this.inputClass + this.state.decorator}>
              {this.props.manager('optionDecorate', this.state.value)}
              <div className={this.markClass + this.state.decorator} />
            </div>
          </div>
          {
          this.state.focus &&
          <div
          className={this.optionsClass + this.state.decorator}>
            {
            this.state.options.map((option) => (
            <div
            key={this.props.manager('optionKey', option)}
            onClick={() => this.onSelectHandler(option)}
            className={this.optionClass + this.state.decorator}>
              {this.props.manager('optionDecorate', option)}
            </div>))
            }
          </div>
          }
          <select 
          id={this.id}
          value={this.state.value}
          readOnly={true}
          style={{ position: 'absolute', left: -10000 }}
          disabled={this.state.disabled}
          onFocus={this.onFocusHandler}
          onKeyDown={this.onKeyDownHandler}
          onBlur={this.onBlurHandler}>
            {
            this.state.options.map((option) => (
            <option
            key={this.props.manager('optionKey', option + 'originalSelect')}
            value={this.props.manager('optionValue', option)}>
              {this.props.manager('optionDecorate', option)}
            </option>))
            }
          </select>
        </div>
        <div className={this.errorContainerClass + this.state.decorator}>
          {this.state.error}
        </div>
      </div>
    )
  }
}