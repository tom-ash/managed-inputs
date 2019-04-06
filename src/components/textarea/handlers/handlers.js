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
  this.input.focus()
  this.props.manager('onClick', e.target.value)
}

export function onChangeHandler(e) {
  const valueLength = e.target.value.length
  if (valueLength <= this.state.counterLimit) {
    this.setState({ counter: valueLength })
    this.props.manager('onChange', e.target.value)
    this.forceUpdate()
  } else {
    this.input.value = this.input.value.slice(0, -1)
  }
}
