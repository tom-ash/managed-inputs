export function onMouseOverHandler(e, index) {
  const { onMouseOver } =  this.props
  const { decorator } = this
  let mouseOver = [].concat(this.state.mouseOver)
  mouseOver[index] = true
  this.setState({
    mouseOver,
    decorator: decorator({ mouseOver })
  })
  onMouseOver && onMouseOver(e.target.value)
}

export function onMouseLeaveHandler(e, index) {
  const { onMouseLeave } = this.props
  const { decorator } = this
  let mouseOver = [].concat(this.state.mouseOver)
  mouseOver[index] = false
  this.setState({
    mouseOver,
    decorator: decorator({ mouseOver })
  })
  onMouseLeave && onMouseLeave(e.target.value)
}

export function onFocusHandler(e, index) {
  const { onFocus } = this.props
  const { decorator } = this
  let focus = [].concat(this.state.focus)
  focus[index] = true
  this.setState({
    focus,
    decorator: decorator({ focus })
  })
  onFocus && onFocus(e.target.value)
}

export function onBlurHandler(e, index) {
  const { onBlur } = this.props
  const { decorator } = this
  let focus = [].concat(this.state.focus)
  focus[index] = false
  this.setState({
    focus,
    decorator: decorator({ focus })
  })
  onBlur && onBlur(e.target.value)
}

export function onKeyDownHandler(e) {
  if ([37, 38, 39, 40].includes(e.keyCode)) e.preventDefault()
  else if (e.keyCode === 9) this.onBlurHandler(e, true)
}

export function onClickHandler(value, index) {
  const { onClick } = this.props
  const input = this.input && this.input[index] && this.input[index].current
  if (!input) return
  input.focus()
  onClick(value)
}