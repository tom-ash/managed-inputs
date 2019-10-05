import React from 'react'
import ManagedInput from '../input/input'
import { componentDidMount, componentDidUpdate } from './lifecycle/lifecycle'
import { decorator } from './decorator/decorator'
import * as handlers from './handlers/handlers'

export default class ManagedPagination extends ManagedInput {
  constructor(props) {
    super(props)
    this.containerClass = this.classNames.container || 'managed-input pagination'
    this.currentClass = this.classNames.current || 'current'
    this.arrowClass = this.classNames.arrow || 'arrow'
    this.decorator = decorator.bind(this)
    this.componentDidMount = componentDidMount
    this.componentDidUpdate = componentDidUpdate
    this.onMouseOverHandler = handlers.onMouseOverHandler.bind(this)
    this.onMouseLeaveHandler = handlers.onMouseLeaveHandler.bind(this)
    this.onFocusHandler = handlers.onFocusHandler.bind(this)
    this.onBlurHandler = handlers.onBlurHandler.bind(this)
    this.onClickHandler = handlers.onClickHandler.bind(this)
    this.state = {
      ...this.state,
      buttons: [],
      mouseOver: {},
      focus: {},
      decorator: []
    }
    this.jsxProvider = this.jsxProvider.bind(this)
    this.showButton = this.showButton.bind(this)
    this.edgeHandler = this.edgeHandler.bind(this)
  }

  jsxProvider(button) {
    if (button === 0) return '<'
    else if (button === this.state.buttons.length - 1) return '>'
    else return button
  }

  showButton(button) {
    if (this.state.buttons.length < 4) return false
    return true
  }

  edgeHandler(button) {
    if (button === 0 && this.props.current === 1) return 'hidden'
    if (button === this.state.buttons.length - 1 && this.props.current === this.state.buttons.length - 2) return 'hidden'
    return 'visible'
  }

  render() {
    const { display, current, children } = this.props
    const { buttons, decorator } = this.state

    return (
      <div
      style={{ display }}
      className={this.containerClass}>
        {
        buttons.map((button, index) => (
          this.showButton(button) &&
          <button
          style = {{ visibility: this.edgeHandler(button) }}
          key={`paginationButtoNo${button}`}
          className={`${this.inputClass}${current === index ? ' current' : ''}${decorator[button] ? decorator[button] : ''}`}
          onMouseOver={() => this.onMouseOverHandler(button)}
          onMouseLeave={() => this.onMouseLeaveHandler(button)}
          onFocus={() => this.onFocusHandler(button)}
          onBlur={() => this.onBlurHandler(button)}
          onClick={() => this.onClickHandler(button)}>
            {this.jsxProvider(button)}
          </button>
        ))
        }
        {children}
      </div>
    )
  }
}
