export function onMouseOverHandler() {
  this.setState({ mouseOver: true })
  this.props.manager('onMouseOver')
}

export function onMouseLeaveHandler() {
  this.setState({ mouseOver: false })
  this.props.manager('onMouseLeave')
}

export function onFocusHandler(e) {
  this.setState({ focus: true })
  this.props.manager('onFocus', e.target.value)
}

export function onBlurHandler(e) {
  this.setState({ focus: false })
  this.props.manager('onBlur', e.target.value)
}

export function onClickHandler() {
  this.props.manager('onClick')
}