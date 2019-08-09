import React from 'react'
import ManagedInput from '../input/input'
import { decorator } from './decorator/decorator'

export default class ManagedButton extends ManagedInput {
  constructor(props) {
    super(props)
    this.containerClass = this.classNames.container || 'managed-input button'
    this.decorator = decorator.bind(this)
  }

  render() {
    return (
      <div
      style={{ display: this.state.display }}
      className={this.containerClass + this.state.decorator}>
        <button
        ref={this.input}
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
        {this.props.manager('children')}
      </div>
    )
  }
}
