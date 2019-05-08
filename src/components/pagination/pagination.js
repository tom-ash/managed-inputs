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
    this.stateKeysToDerive = [...this.stateKeysToDerive, 'resultsPerPage', 'resultAmount', 'current']
    this.stateKeysToUpdate = [...this.stateKeysToUpdate, 'resultsPerPage', 'resultAmount', 'buttons', 'current']
    this.onMouseOverHandler = handlers.onMouseOverHandler.bind(this)
    this.onMouseLeaveHandler = handlers.onMouseLeaveHandler.bind(this)
    this.onFocusHandler = handlers.onFocusHandler.bind(this)
    this.onBlurHandler = handlers.onBlurHandler.bind(this)
    this.onClickHandler = handlers.onClickHandler.bind(this)
    this.state = {
      ...this.state,
      stateKeysToDerive: this.stateKeysToDerive,
      resultsPerPage: this.props.manager('resultsPerPage'),
      resultAmount: this.props.manager('resultAmount'),
      buttons: [],
      current: this.props.manager('current'),
      mouseOver: {},
      focus: {},
      decorator: {}
    }
    this.jsxProvider = this.jsxProvider.bind(this)
    this.showButton = this.showButton.bind(this)
    this.edgeHandler = this.edgeHandler.bind(this)
  }

  jsxProvider(button) {
    if (button === 0) {
      return '<'
    } else if (button === this.state.buttons.length - 1) {
      return '>'
    } else {
      return button
    }
  }

  showButton(button) {
    if (this.state.buttons.length == 2 || this.state.buttons.length == 3) return false
    return true
  }

  edgeHandler(button) {
    if (button === 0 && this.state.current === 1) return 'hidden'
    if (button === this.state.buttons.length - 1 && this.state.current === this.state.buttons.length - 2) return 'hidden'
    return 'visible'
  }

  render() {
    return (
      <div
      style={{ display: this.state.display }}
      className={this.containerClass}>
        {
        this.state.buttons.map(button => (
        this.showButton(button) &&
        <button
        style = {{ visibility: this.edgeHandler(button) }}
        key={`paginationButtoNo${button}`}
        className={this.inputClass + this.state.decorator[button]}
        onMouseOver={() => this.onMouseOverHandler(button)}
        onMouseLeave={() => this.onMouseLeaveHandler(button)}
        onFocus={() => this.onFocusHandler(button)}
        onBlur={() => this.onBlurHandler(button)}
        onClick={() => this.onClickHandler(button)}>
          {this.jsxProvider(button)}
        </button>
        ))
        }
      </div>
    )
  }
}
