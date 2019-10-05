import React from 'react'
import ManagedInput from '../input/input'
import * as handlers from './handlers/handlers'

export default class ManagedCheckbox extends ManagedInput {
  constructor(props) {
    super(props)
    this.containerClass = this.classNames.container || 'managed-input checkbox'
    this.checkboxContainerClass = this.classNames.checkboxContainerClass || 'container'
    this.tickClass = this.classNames.tick || 'tick'
    this.checkedClass = this.classNames.checked || 'checked'
    this.onClickHandler = handlers.onClickHandler.bind(this)
  }

  render() {
    const { display, checked, label, children } = this.props
    const decorator = `${this.state.decorator}${checked ? ' value' : ''}`
    return (
      <div
      style={{ display }}
      className={this.containerClass + decorator}>
        <div
        className={this.inputClass + decorator}
        onMouseOver={this.onMouseOverHandler}
        onMouseLeave={this.onMouseLeaveHandler}
        onClick={this.onClickHandler}>
          {
          checked &&
          <div className={this.tickClass + decorator} />
          }
        </div>
        <input
        ref={this.input}
        type='checkbox'
        id={this.id}
        style={{ position: 'absolute', left: -10000 }}
        checked={checked}
        onFocus={this.onFocusHandler}
        onBlur={this.onBlurHandler}
        onChange={this.onClickHandler} />
        <div
        onMouseOver={this.onMouseOverHandler}
        onMouseLeave={this.onMouseLeaveHandler}
        onClick={this.onClickHandler}
        className={this.labelClass + decorator}>
          {label}
        </div>
        <div style={{ clear: 'both' }} />
        {children}
      </div>
    )
  }
}
