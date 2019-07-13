import React from 'react'
import ManagedInput from '../input/input'
import * as handlers from './handlers/handlers'

export default class ManagedText extends ManagedInput {
  constructor(props) {
    super(props)
    this.type = this.props.manager('type')
    this.autoComplete = props.manager('autoComplete')
    this.match = props.manager('match')
    this.containerClass = this.classNames.container || 'managed-input text'
    this.onKeyDownHandler = handlers.onKeyDownHandler.bind(this)
    this.onChangeHandler = handlers.onChangeHandler.bind(this)
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
        ref={this.input}
        type={this.type}
        disabled = {this.state.disabled}
        id={this.id}
        className={this.inputClass + this.state.decorator}
        autoComplete = {this.autoComplete}
        value={this.controlled ? this.state.value : undefined}
        onFocus={this.onFocusHandler}
        onKeyDown={this.onKeyDownHandler}
        onBlur={this.onBlurHandler}
        onChange={this.onChangeHandler} />
        <div className={this.errorContainerClass + this.state.decorator}>
          {this.state.error}
        </div>
      </div>
    )
  }
}
