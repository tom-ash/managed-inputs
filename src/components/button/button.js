import React from 'react'
import ManagedInput from '../input/input'

export default class ManagedButton extends ManagedInput {
  constructor(props) {
    super(props)
    this.containerClass = this.classNames.container || 'managed-input button'
  }

  render() {
    const { display, disabled, label, children } = this.props
    const { decorator } = this.state

    return (
      <div
      style={{ display }}
      className={this.containerClass + decorator}>
        <button
        ref={this.input}
        id={this.id}
        className={this.inputClass + decorator}
        disabled={disabled}
        onMouseOver={this.onMouseOverHandler}
        onMouseLeave={this.onMouseLeaveHandler}
        onFocus={this.onFocusHandler}
        onBlur={this.onBlurHandler}
        onClick={this.onClickHandler}>
          {label}
        </button>
        {children}
      </div>
    )
  }
}
