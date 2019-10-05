export function onMouseOverHandler(button) {
  const { onMouseOver } = this.props
  let mouseOver = { ...this.state.mouseOver }
  mouseOver[button] = true
  this.setState({
    mouseOver,
    decorator: this.decorator({ mouseOver })
  })
  onMouseOver && onMouseOver(button)
}

export function onMouseLeaveHandler(button) {
  const { onMouseLeave } = this.props
  let mouseOver = { ...this.state.mouseOver }
  mouseOver[button] = false
  this.setState({
    mouseOver,
    decorator: this.decorator({ mouseOver })
  })
  onMouseLeave && onMouseLeave(button)
}

export function onFocusHandler(button) {
  const { onFocus } = this.props
  let focus = { ...this.state.focus }
  focus[button] = true
  this.setState({
    focus,
    decorator: this.decorator({ focus })
  })
  onFocus && onFocus(button)
}

export function onBlurHandler(button) {
  const { onBlur } = this.props
  let focus = { ...this.state.focus }
  focus[button] = false
  this.setState({
    focus,
    decorator: this.decorator({ focus })
  })
  onBlur && onBlur(button)
}

export function onClickHandler(button) {
  const { onClick } = this.props
  let current
  if (button === 0) current = this.props.current - 1
  else if (button === this.state.buttons.length - 1) current = this.props.current + 1
  else current = button
  onClick(current)
}
