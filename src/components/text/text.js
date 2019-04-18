import React from 'react'
import ManagedInput from '../input/input'

export default class ManagedText extends ManagedInput {
  constructor(props) {
    super(props)
    this.type = this.props.manager('type')
    this.autoComplete = props.manager('autoComplete')
    this.containerClass = this.classNames.container || 'managed-input text'
  }

  render() {
    return (
      <div
      style={{ display: this.state.display }}
      className={this.containerClass + this.state.decorator}
      onMouseOver={this.onMouseOverHandler}
      onMouseLeave={this.onMouseLeaveHandler}
      onClick={this.onClickHandler}>
        <div
        style={{ animation: this.state.animation }}
        className={this.labelClass + this.state.decorator}>
          {this.state.label}
        </div>
        <input
        ref={this.input}
        type={this.type}
        disabled = {this.state.disabled}
        id={this.id}
        className={this.inputClass + this.state.decorator}
        autoComplete = {this.autoComplete}
        value={this.controlled ? this.state.value : undefined}
        onFocus={this.onFocusHandler}
        onBlur={this.onBlurHandler}
        onChange={this.onChangeHandler} />
        <div className={this.errorClass + this.state.decorator}>
          {this.state.error}
        </div>
      </div>
    )
  }
}
