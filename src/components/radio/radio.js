import React from 'react'
import ManagedInput from '../input/input'
import * as handlers from './handlers/handlers'
import { decorator } from './decorator/decorator'

export default class ManagedRadio extends ManagedInput {
  constructor(props) {
    super(props)
    this.input = []
    this.name = this.props.manager('name')
    this.radios = this.props.manager('radios')
    this.containerClass = this.classNames.container || 'managed-input radio'
    this.radioContainerClass = this.classNames.radioContainerClass || 'container'
    this.tickClass = this.classNames.tick || 'tick'
    this.stateKeysToDerive = [...this.stateKeysToDerive, 'checked']
    this.stateKeysToUpdate = [...this.stateKeysToUpdate, 'checked']
    this.onMouseOverHandler = handlers.onMouseOverHandler.bind(this)
    this.onMouseLeaveHandler = handlers.onMouseLeaveHandler.bind(this)
    this.onFocusHandler = handlers.onFocusHandler.bind(this)
    this.onBlurHandler = handlers.onBlurHandler.bind(this)
    this.onKeyDownHandler = handlers.onKeyDownHandler.bind(this)
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
      <div style={{ display: this.state.display }}>
        {
        this.radios.map((radio, index) => (
        <div
        className={this.containerClass + this.state.decorator[index]}
        key={radio.key || `radio-${this.name}-${index}`}>
          <div
          className={this.inputClass + this.state.decorator[index]}
          onMouseOver={(e) => this.onMouseOverHandler(e, index)}
          onMouseLeave={(e) => this.onMouseLeaveHandler(e, index)}
          onClick={() => this.onClickHandler(radio.value, index)}>
            {
            radio.value === this.state.checked &&
            <div className={this.tickClass + this.state.decorator[index]} />
            }
          </div>
          <input
          name={this.name}
          ref={this.input[index] = React.createRef()}
          id={radio.id}
          type='radio'
          style={{ position: 'absolute', left: -10000 }}
          value={radio.value}
          checked={radio.value === this.state.checked}
          onFocus={(e) => this.onFocusHandler(e, index)}
          onBlur={(e) => this.onBlurHandler(e, index)}
          onKeyDown={this.onKeyDownHandler}
          onChange={(e) => this.onChangeHandler(e)} />
          <label
          className={this.labelClass + this.state.decorator[index]}
          onMouseOver={(e) => this.onMouseOverHandler(e, index)}
          onMouseLeave={(e) => this.onMouseLeaveHandler(e, index)}
          onClick={() => this.onClickHandler(radio.value, index)}>
            {radio.label}
          </label>
          <div style={{ clear: 'both' }} />
        </div>
        ))
        }
        <div style={{ clear: 'both' }} />
      </div>
    )
  }
}
