import React from "react"
import * as lifecycle from './lifecycle/lifecycle'
import * as handlers from './handlers/handlers'
import { decorator } from './decorator/decorator'

export default class ManagedText extends React.Component {
  constructor(props) {
    super(props)
    this.controlled = this.props.manager('controlled')
    this.id = this.props.manager('id')
    this.type = this.props.manager('type')
    this.autoComplete = props.manager('autoComplete')
    this.classNames = this.props.manager('classNames')
    this.containerClass = this.classNames.container || 'managed-input text'
    this.inputClass = this.classNames.input || 'input'
    this.labelClass = this.classNames.label || 'label'
    this.valueClass = this.classNames.value || 'value'
    this.focusClass = this.classNames.focus || 'focus'
    this.hoverClass = this.classNames.hover || 'hover'
    this.errorContainerClass = this.classNames.errorContainer || 'error-container'
    this.errorClass = this.classNames.error || 'error'
    this.componentDidMount = lifecycle.componentDidMount
    this.shouldComponentUpdate = lifecycle.shouldComponentUpdate
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.onMouseOverHandler = handlers.onMouseOverHandler.bind(this)
    this.onMouseLeaveHandler = handlers.onMouseLeaveHandler.bind(this)
    this.onFocusHandler = handlers.onFocusHandler.bind(this)
    this.onBlurHandler = handlers.onBlurHandler.bind(this)
    this.onChangeHandler = handlers.onChangeHandler.bind(this)
    this.onClickHandler = handlers.onClickHandler.bind(this)
    this.decorator = decorator.bind(this)
    this.state={
      display: this.props.manager('display'),
      disabled: this.props.manager('disabled'),
      value: this.props.manager('value'),
      label: this.props.manager('label'),
      error: this.props.manager('error'),
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
      className={this.containerClass + this.state.decorator}
      onMouseOver={this.onMouseOverHandler}
      onMouseLeave={this.onMouseLeaveHandler}
      onClick={this.onClickHandler}>
        <div className={this.labelClass + this.state.decorator}>
          {this.state.label}
        </div>
        <input
        id={this.id}
        className={this.inputClass + this.state.decorator}
        type={this.type}
        disabled = {this.state.disabled}
        autoComplete = {this.autoComplete}
        value={this.controlled ? this.state.value : undefined}
        onFocus={this.onFocusHandler}
        onBlur={this.onBlurHandler}
        onChange={this.onChangeHandler} />
        <div className={this.errorContainerClass + this.state.decorator}>
          {this.state.error}
        </div>
      </div>
    )
  }
}
