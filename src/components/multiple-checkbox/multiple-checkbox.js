import React from 'react'
import ManagedInput from '../input/input'
import * as handlers from './handlers/handlers'
import { decorator } from './decorator/decorator'

export default class ManagedMultipleCheckbox extends ManagedInput {
  constructor(props) {
    super(props)
    this.input = {}
    this.containerClass = this.classNames.container || 'managed-input checkbox'
    this.checkboxContainerClass = this.classNames.checkboxContainerClass || 'container'
    this.tickClass = this.classNames.tick || 'tick'
    this.checkedClass = this.classNames.checked || 'checked'
    this.stateKeysToDerive = [...this.stateKeysToDerive, 'checkboxes']
    this.stateKeysToUpdate = [...this.stateKeysToUpdate, 'checkboxes']
    this.onMouseOverHandler = handlers.onMouseOverHandler.bind(this)
    this.onMouseLeaveHandler = handlers.onMouseLeaveHandler.bind(this)
    this.onFocusHandler = handlers.onFocusHandler.bind(this)
    this.onBlurHandler = handlers.onBlurHandler.bind(this)
    this.onClickHandler = handlers.onClickHandler.bind(this)
    this.onKeyDownHandler = handlers.onKeyDownHandler.bind(this)
    this.decorator = decorator.bind(this)
    this.state = {
      ...this.state,
      stateKeysToDerive: this.stateKeysToDerive,
      checkboxes: this.props.manager('checkboxes'),
      mouseOver: {},
      focus: {},
      decorator: {}
    }
  }

  render() {
    return (
      <div
      style={{ display: this.state.display }}>
        {
        this.state.checkboxes.map(checkbox => (
          <div
          className={this.containerClass + this.state.decorator[checkbox.ref]}
          key={`multiple-checkbox-${checkbox.ref}`}>
            <div
            className={this.inputClass + this.state.decorator[checkbox.ref]}
            onMouseOver={(e) => this.onMouseOverHandler(e, checkbox.ref)}
            onMouseLeave={(e) => this.onMouseLeaveHandler(e, checkbox.ref)}
            onClick={() => this.onClickHandler(checkbox.ref)}>
              {
              checkbox.checked &&
              <div className={this.tickClass + this.state.decorator[checkbox.ref]} />
              }
            </div>
            <input
            onFocus={(e) => this.onFocusHandler(e, checkbox.ref)}
            onBlur={(e) => this.onBlurHandler(e, checkbox.ref)}
            style={{ position: 'absolute', left: -10000 }}
            ref={this.input[checkbox.ref] = React.createRef()}
            type='checkbox'
            checked={checkbox.checked}
            onKeyDown={(e) => this.onKeyDownHandler(e, checkbox.ref)}
            onChange={() => {}} />
            <div
            onMouseOver={(e) => this.onMouseOverHandler(e, checkbox.ref)}
            onMouseLeave={(e) => this.onMouseLeaveHandler(e, checkbox.ref)}
            onClick={() => this.onClickHandler(checkbox.ref)}
            className={this.labelClass + this.state.decorator[checkbox.ref]}>
              {checkbox.label}
            </div>
            <div style={{ clear: 'both' }} />
          </div>
        ))
        }
        <div style={{ clear: 'both' }} />
        {this.props.manager('children')}
      </div>
    )
  }
}
