import React from "react"
import * as handlers from './handlers/handlers'
import * as lifecycle from './lifecycle/lifecycle'
import { decorator } from './decorator/decorator'

export default class ManagedButton extends React.Component {
  constructor(props) {
    super(props)
    this.id = this.props.manager('id')
    this.classNames = this.props.manager('classNames')
    this.containerClass = this.classNames.container || 'managed-input button'
    this.inputClass = this.classNames.input || 'input'
    this.focusClass = this.classNames.focus || 'focus'
    this.hoverClass = this.classNames.hover || 'hover'
    this.componentDidMount = lifecycle.componentDidMount
    this.shouldComponentUpdate = lifecycle.shouldComponentUpdate
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.onMouseOverHandler = handlers.onMouseOverHandler.bind(this)
    this.onMouseLeaveHandler = handlers.onMouseLeaveHandler.bind(this)
    this.onFocusHandler = handlers.onFocusHandler.bind(this)
    this.onBlurHandler = handlers.onBlurHandler.bind(this)
    this.onClickHandler = handlers.onClickHandler.bind(this)
    this.decorator = decorator.bind(this)
    this.state={
      display: this.props.manager('display'),
      disabled: this.props.manager('disabled'),
      label: this.props.manager('label'),
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
        <button
        id={this.id}
        className={this.inputClass + this.state.decorator}
        disabled={this.state.disabled}
        onMouseOver={this.onMouseOverHandler}
        onMouseLeave={this.onMouseLeaveHandler}
        onFocus={this.onFocusHandler}
        onBlur={this.onBlurHandler}
        onClick={this.onClickHandler}>
          {this.state.label}
        </button>
      </div>
    )
  }
}
