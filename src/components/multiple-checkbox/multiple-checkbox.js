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
    this.onMouseOverHandler = handlers.onMouseOverHandler.bind(this)
    this.onMouseLeaveHandler = handlers.onMouseLeaveHandler.bind(this)
    this.onFocusHandler = handlers.onFocusHandler.bind(this)
    this.onBlurHandler = handlers.onBlurHandler.bind(this)
    this.onClickHandler = handlers.onClickHandler.bind(this)
    this.onKeyDownHandler = handlers.onKeyDownHandler.bind(this)
    this.decorator = decorator.bind(this)
    this.state = {
      ...this.state,
      mouseOver: {},
      focus: {},
      decorator: {}
    }
  }

  render() {
    const { display, checkboxes, children } = this.props
    const { decorator } = this.state
    return (
      <div
      style={{ display }}>
        {
        checkboxes.map(checkbox => (
          <div
          className={`${this.containerClass}${checkbox.checked ? ' checked' : ''}${decorator[checkbox.ref] ? decorator[checkbox.ref] : ''}`}
          key={`multiple-checkbox-${checkbox.ref}`}>
            <div
            className={`${this.inputClass}${checkbox.checked ? ' checked' : ''}${decorator[checkbox.ref] ? decorator[checkbox.ref] : ''}`}
            onMouseOver={(e) => this.onMouseOverHandler(e, checkbox.ref)}
            onMouseLeave={(e) => this.onMouseLeaveHandler(e, checkbox.ref)}
            onClick={() => this.onClickHandler(checkbox.ref)}>
              {
              checkbox.checked &&
              <div
              className={this.tickClass + this.state.decorator[checkbox.ref]}
              className={`${this.tickClass} ${decorator[checkbox.ref] ? decorator[checkbox.ref] : ''} checked`}
              />
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
            onChange={() => null} />
            <div
            onMouseOver={(e) => this.onMouseOverHandler(e, checkbox.ref)}
            onMouseLeave={(e) => this.onMouseLeaveHandler(e, checkbox.ref)}
            onClick={() => this.onClickHandler(checkbox.ref)}
            className={`${this.labelClass}${checkbox.checked ? ' checked' : ''}${decorator[checkbox.ref] ? decorator[checkbox.ref] : ''}`} >
              {checkbox.label}
            </div>
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
