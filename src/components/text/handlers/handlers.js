export function onMouseOverHandler(e) {
  this.setState({ mouseOver: true })
  this.props.manager('onMouseOver', e.target.value)
}

export function onMouseLeaveHandler(e) {
  this.setState({ mouseOver: false })
  this.props.manager('onMouseLeave', e.target.value)
}

export function onFocusHandler(e) {
  this.setState({ focus: true })
  this.props.manager('onFocus', e.target.value)
}

export function onBlurHandler(e) {
  this.setState({ focus: false })
  this.props.manager('onBlur', e.target.value)
}

export function onClickHandler(e) {
  this.inputElement.focus()
  this.props.manager('onClick', e.target.value)
}

export function onChangeHandler(e) {
  this.forceUpdate()
  this.props.manager('onChange', e.target.value)
}