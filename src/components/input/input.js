import React from 'react'
import * as handlers from './handlers/handlers'
import { decorator } from './decorator/decorator'

export default class ManagedInput extends React.Component {
  constructor(props) {
    super(props)
    this.input = React.createRef()
    this.controlled = this.props.controlled
    this.id = this.props.id
    this.classNames = this.props.classNames || {}
    this.inputClass = this.classNames.input || 'input'
    this.labelClass = this.classNames.label || 'label'
    this.valueClass = this.classNames.value || 'value'
    this.autofillClass = this.classNames.value || 'autofill'
    this.focusClass = this.classNames.focus || 'focus'
    this.hoverClass = this.classNames.hover || 'hover'
    this.errorClass = this.classNames.error || 'error'
    this.errorContainerClass = this.classNames.error || 'error-container'
    this.onMouseOverHandler = handlers.onMouseOverHandler.bind(this)
    this.onMouseLeaveHandler = handlers.onMouseLeaveHandler.bind(this)
    this.onFocusHandler = handlers.onFocusHandler.bind(this)
    this.onBlurHandler = handlers.onBlurHandler.bind(this)
    this.onChangeHandler = handlers.onChangeHandler.bind(this)
    this.onClickHandler = handlers.onClickHandler.bind(this)
    this.decorator = decorator.bind(this)
    this.state={
      mouseOver: false,
      autofill: true,
      focus: false,
      decorator: ''
    }
  }

  isMobile() {
    return /Android|BlackBerry|IEMobile|Opera Mini|iPad|iPhone|iPod|webOS/i.test(navigator.userAgent)
  }
}
