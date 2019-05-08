import React from 'react'
import ManagedInput from '../input/input'
import * as handlers from './handlers/handlers'

export default class ManagedTextarea extends ManagedInput {
  constructor(props) {
    super(props)
    this.containerClass = this.classNames.container || 'managed-input textarea'
    this.counterClass = this.classNames.counter || 'counter'
    this.stateKeysToDerive = [...this.stateKeysToDerive, 'counterLimit']
    this.stateKeysToUpdate = [...this.stateKeysToUpdate, 'counterLimit', 'counter']
    this.onChangeHandler = handlers.onChangeHandler.bind(this)
    this.state = {
      ...this.state,
      stateKeysToDerive: this.stateKeysToDerive,
      counterLimit: this.props.manager('counterLimit'),
      counter: 0
    }
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
        <textarea
        ref={this.input}
        disabled = {this.state.disabled}
        id={this.id}
        className={this.inputClass + this.state.decorator}
        value={this.controlled ? this.state.value : undefined}
        onFocus={this.onFocusHandler}
        onBlur={this.onBlurHandler}
        onChange={this.onChangeHandler} />
        <div
        className={this.counterClass + this.state.decorator}>
          {this.state.counter} / {this.state.counterLimit}
        </div>
        <div className={this.errorContainerClass + this.state.decorator}>
          {this.state.error}
        </div>
      </div>
    )
  }
}
