import React from 'react'
import * as lifecycle from './lifecycle/lifecycle'
import * as handlers from './handlers/handlers'
import { decorator } from './decorator/decorator'

export default class ManagedInput extends React.Component {
  constructor(props) {
    super(props)
    this.input = React.createRef()
    this.controlled = this.props.manager('controlled')
    this.id = this.props.manager('id')
    this.classNames = this.props.manager('classNames')
    this.inputClass = this.classNames.input || 'input'
    this.labelClass = this.classNames.label || 'label'
    this.valueClass = this.classNames.value || 'value'
    this.focusClass = this.classNames.focus || 'focus'
    this.hoverClass = this.classNames.hover || 'hover'
    this.errorClass = this.classNames.error || 'error'
    this.componentDidMount = lifecycle.componentDidMount
    this.shouldComponentUpdate = lifecycle.shouldComponentUpdate
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.onMouseOverHandler = handlers.onMouseOverHandler.bind(this)
    this.onMouseLeaveHandler = handlers.onMouseLeaveHandler.bind(this)
    this.onFocusHandler = handlers.onFocusHandler.bind(this)
    this.onBlurHandler = handlers.onBlurHandler.bind(this)
    this.onChangeHandler = handlers.onChangeHandler.bind(this)
    this.onClickHandler = handlers.onClickHandler.bind(this)
    this.decorator = decorator.bind(this)
    this.stateKeysToDerive = ['display', 'disabled', 'value', 'label', 'error']
    this.stateKeysToUpdate = this.stateKeysToDerive.concat([ 'mouseOver', 'focus', 'decorator'])
    this.state={
      stateKeysToDerive: this.stateKeysToDerive,
      display: this.props.manager('display'),
      disabled: this.props.manager('disabled'),
      value: this.props.manager('value'),
      label: this.props.manager('label'),
      error: this.props.manager('error'),
      animation: 'none',
      mouseOver: false,
      focus: false,
      decorator: ''
    }
  }

  static getDerivedStateFromProps(nextProps, prevstate) {
    return lifecycle.getDerivedStateFromProps(nextProps, prevstate)
  }
}
