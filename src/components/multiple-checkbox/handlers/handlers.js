export function onMouseOverHandler(e, ref) {
  const { onMouseOver } = this.props
  const { decorator } = this
  let mouseOver = { ...this.state.mouseOver }
  mouseOver[ref] = true
  this.setState({
    mouseOver,
    decorator: decorator({ mouseOver })
  })
  onMouseOver && onMouseOver(e.target.value, ref)
}

export function onMouseLeaveHandler(e, ref) {
  const { onMouseLeave } = this.props
  const { decorator } = this
  let mouseOver = { ...this.state.mouseOver }
  mouseOver[ref] = false
  this.setState({
    mouseOver,
    decorator: decorator({ mouseOver })
  })
  onMouseLeave && onMouseLeave(e.target.value, ref)
}

export function onFocusHandler(e, ref) {
  const { onFocus } = this.props
  const { decorator } = this
  let focus = { ...this.state.focus }
  focus[ref] = true
  this.setState({
    focus,
    decorator: decorator({ focus })
  })
  onFocus && onFocus(e.target.value, ref)
}

export function onBlurHandler(e, ref) {
  const { onBlur } = this.props
  const { decorator } = this
  let focus = {...this.state.focus}
  focus[ref] = false
  this.setState({
    focus,
    decorator: decorator({ focus })
  })
  onBlur && onBlur(e.target.value, ref)
}

export function onClickHandler(ref) {
  const { onClick } = this.props
  const input = this.input[ref].current
  input.focus()
  const checked = !input.checked
  onClick && onClick(checked, ref)
}

export function onKeyDownHandler(e, ref) {
  if (e.keyCode === 32) this.onClickHandler(ref)
}