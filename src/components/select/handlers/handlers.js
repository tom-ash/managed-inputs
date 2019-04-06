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

export function onBlurHandler(e, tabDown) {
  if (this.state.mouseOver === false || tabDown === true) {
    if (e && e.target) { this.props.manager('onBlur', e.target.value) }
    this.setState({ focus: false })
  }
}

export function onClickHandler(e) {
  this.input.focus()
  this.props.manager('onClick', e.target.value)
}

export function onKeyDownHandler(e) {
  if (e.keyCode === 38 || e.keyCode === 40) {
    e.preventDefault()
  }
  if (e.keyCode === 9) {
    this.onBlurHandler(e, true)
  }
}

export function onSelectHandler(option) {
  this.setState({
    focus: false,
    mouseOver: false
  })
  this.props.manager('onSelect', option)
}