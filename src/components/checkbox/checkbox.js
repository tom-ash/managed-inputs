import React from 'react'
import ManagedInput from '../input/input'
import * as handlers from './handlers/handlers'
import { decorator } from './decorator/decorator'

export default class ManagedCheckbox extends ManagedInput {
  constructor(props) {
    super(props)
    this.containerClass = this.classNames.container || 'managed-input checkbox'
    this.checkboxContainerClass = this.classNames.checkboxContainerClass || 'container'
    this.tickClass = this.classNames.tick || 'tick'
    this.checkedClass = this.classNames.checked || 'checked'
    this.stateKeysToDerive = [...this.stateKeysToDerive, 'checked']
    this.stateKeysToUpdate = [...this.stateKeysToUpdate, 'checked']
    this.onClickHandler = handlers.onClickHandler.bind(this)
    this.decorator = decorator.bind(this)
    this.state = {
      ...this.state,
      stateKeysToDerive: this.stateKeysToDerive,
      checked: this.props.manager('checked')
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
        ref={this.input}
        type='checkbox'
        id={this.id}
        style={{ position: 'absolute', left: -10000 }}
        checked={this.state.checked}
        onFocus={this.onFocusHandler}
        onBlur={this.onBlurHandler}
        onChange={this.onClickHandler} />
        <div
        onMouseOver={this.onMouseOverHandler}
        onMouseLeave={this.onMouseLeaveHandler}
        onClick={this.onClickHandler}
        className={this.labelClass + this.state.decorator}>
          {this.state.label}
        </div>
        <div style={{ clear: 'both' }} />
        {this.props.manager('children')}
      </div>
    )
  }
}
