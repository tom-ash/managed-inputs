import React from 'react'
import * as lifecycle from './lifecycle/lifecycle'
import * as handlers from './handlers/handlers'
import { decorator } from './decorator/decorator'

export default class ManagedCheckbox extends React.Component {
  constructor(props) {
    super(props)
    this.id = this.props.manager('id')
    this.controlled = this.props.manager('controlled')
    this.classNames = this.props.manager('classNames')
    this.containerClass = this.classNames.container || 'managed-input checkbox'
    this.checkboxContainerClass = this.classNames.checkboxContainerClass || 'container'
    this.inputClass = this.classNames.input || 'input'
    this.labelClass = this.classNames.label || 'label'
    this.tickClass = this.classNames.tick || 'tick'
    this.errorContainerClass = this.classNames.errorContainer || 'error-container'
    this.checkedClass = this.classNames.checked || 'checked'
    this.focusClass = this.classNames.focus || 'focus'
    this.hoverClass = this.classNames.hover || 'hover'
    this.errorClass = this.classNames.error || 'error'
    this.componentDidMount = lifecycle.componentDidMount
    this.shouldComponentUpdate = lifecycle.shouldComponentUpdate
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.onMouseOverHandler = handlers.onMouseOverHandler.bind(this)
    this.onMouseLeaveHandler = handlers.onMouseLeaveHandler.bind(this)
    this.onFocusHandler = handlers.onFocusHandler.bind(this)
    this.onBlurHandler = handlers.onBlurHandler.bind(this)
    this.onClickHandler = handlers.onClickHandler.bind(this)
    this.decorator = decorator.bind(this)
    this.state = {
      display: this.props.manager('display'),
      disabled: this.props.manager('disabled'),
      checked: this.props.manager('checked'),
      label: this.props.manager('label'),
      error: this.props.manager('error'),
      flag: this.props.manager('flag'),
      mouseOver: false,
      focus: false,
      decorator: ''
    }
  }

  render() {
    return (
      <div
      style={{ display: this.state.display }}
      className={this.containerClass + this.state.decorator}>
        <div
        className={this.inputClass + this.state.decorator}
        onMouseOver={this.onMouseOverHandler}
        onMouseLeave={this.onMouseLeaveHandler}
        onClick={this.onClickHandler}>
          {
          this.state.checked &&
          <div className={this.tickClass + this.state.decorator} />
          }
        </div>
        <input
        type='checkbox'
        id={this.id}
        style={{ position: 'absolute', left: -10000 }}
        value={this.controlled ? this.state.value : undefined}
        onFocus={this.onFocusHandler}
        onBlur={this.onBlurHandler}
        onChange={this.onClickHandler} />
        <div
        onMouseOver={this.onMouseOverHandler}
        onMouseLeave={this.onMouseLeaveHandler}
        className={this.labelClass + this.state.decorator}>
          {this.state.label}
        </div>
        <div style={{ clear: 'both' }} />
      </div>
    )
  }
}
