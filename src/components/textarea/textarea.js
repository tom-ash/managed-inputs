import React from 'react'
import ManagedInput from '../input/input'
import * as handlers from './handlers/handlers'

export default class ManagedTextarea extends ManagedInput {
  constructor(props) {
    super(props)
    this.containerClass = this.classNames.container || 'managed-input textarea'
    this.counterClass = this.classNames.counter || 'counter'
    this.onChangeHandler = handlers.onChangeHandler.bind(this)
    this.state = {
      ...this.state,
      counter: 0
    }
  }

  render() {
    const { display, value, disabled, label, counterLimit, children, error } = this.props 
    const { decorator, counter } = this.state

    return (
      <div
      style={{ display }}
      className={this.containerClass + decorator}
      onMouseOver={this.onMouseOverHandler}
      onMouseLeave={this.onMouseLeaveHandler}
      onClick={this.onClickHandler}>
        <div className={this.labelClass + decorator}>
          {label}
        </div>
        <textarea
        ref={this.input}
        disabled = {disabled}
        id={this.id}
        className={this.inputClass + decorator}
        value={value}
        onFocus={this.onFocusHandler}
        onBlur={this.onBlurHandler}
        onChange={this.onChangeHandler} />
        <div
        className={this.counterClass + decorator}>
          {counter} / {counterLimit}
        </div>
        {children}
        <div className={this.errorContainerClass + decorator}>
          {error}
        </div>
      </div>
    )
  }
}
