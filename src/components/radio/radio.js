import React from 'react'
import ManagedInput from '../input/input'
import * as handlers from './handlers/handlers'
import { decorator } from './decorator/decorator'

export default class ManagedRadio extends ManagedInput {
  constructor(props) {
    super(props)
    this.input = []
    this.containerClass = this.classNames.container || 'managed-input radio'
    this.radioContainerClass = this.classNames.radioContainerClass || 'container'
    this.checkedClass = this.classNames.checked || 'checked'
    this.tickClass = this.classNames.tick || 'tick'
    this.onMouseOverHandler = handlers.onMouseOverHandler.bind(this)
    this.onMouseLeaveHandler = handlers.onMouseLeaveHandler.bind(this)
    this.onFocusHandler = handlers.onFocusHandler.bind(this)
    this.onBlurHandler = handlers.onBlurHandler.bind(this)
    this.onKeyDownHandler = handlers.onKeyDownHandler.bind(this)
    this.onClickHandler = handlers.onClickHandler.bind(this)
    this.decorator = decorator.bind(this)
  }

  render() {
    const { display, name, radios, checked, children } = this.props
    const { decorator } = this.state

    return (
      <div style={{ display }}>
        {
        radios.map((radio, index) => (
        <div
        className={`${this.containerClass}${radio.value === checked ? ' checked' : ''}${decorator[index] ? decorator[index] : ''}`}
        key={radio.key || `radio-${this.name}-${index}`}
        onClick={() => this.onClickHandler(radio.value, index)}>
          <div
          className={`${this.inputClass}${radio.value === checked ? ' checked' : ''}${decorator[index] ? decorator[index] : ''}`}
          onMouseOver={(e) => this.onMouseOverHandler(e, index)}
          onMouseLeave={(e) => this.onMouseLeaveHandler(e, index)}>
            {
            radio.value === checked &&
            <div className={`${this.tickClass}${decorator[index] ? decorator[index] : ''}`} />
            }
          </div>
          <input
          name={name}
          ref={this.input[index] = React.createRef()}
          id={radio.id}
          type='radio'
          style={{ position: 'absolute', left: -10000 }}
          value={radio.value}
          checked={radio.value === checked}
          onFocus={(e) => this.onFocusHandler(e, index)}
          onBlur={(e) => this.onBlurHandler(e, index)}
          onKeyDown={this.onKeyDownHandler}
          onChange={(e) => this.onChangeHandler(e)} />
          <label
          className={`${this.labelClass}${radio.value === checked ? ' checked' : ''}${decorator[index] ? decorator[index] : ''}`}
          onMouseOver={(e) => this.onMouseOverHandler(e, index)}
          onMouseLeave={(e) => this.onMouseLeaveHandler(e, index)}>
            {radio.label}
          </label>
          <div style={{ clear: 'both' }} />
        </div>
        ))
        }
        <div style={{ clear: 'both' }} />
        {children}
      </div>
    )
  }
}
