export function onMouseOverHandler(e) {
  const { onMouseOver } = this.props
  this.setState({
    mouseOver: true,
    decorator: this.decorator({ mouseOver: true })
  })
  onMouseOver && onMouseOver(e.target.value)
}

export function onMouseLeaveHandler(e) {
  const { onMouseLeave } = this.props
  this.setState({
    mouseOver: false,
    decorator: this.decorator({ mouseOver: false })
  })
  onMouseLeave && onMouseLeave(e.target.value)
}

export function onFocusHandler(e) {
  const { onFocus } = this.props
  let autofill = true
  if (this.state.value === '') autofill = false
  this.setState({
    autofill,
    focus: true,
    decorator: this.decorator({ focus: true })
  })
  onFocus && onFocus(e.target.value)
}

export function onBlurHandler(e) {
  const { onBlur } =  this.props
  let autofill = true
  if (this.state.value === '') autofill = false
  this.setState({
    autofill,
    focus: false,
    decorator: this.decorator({ focus: false })
  })
  onBlur && onBlur(e.target.value)
}

export function onClickHandler(e) {
  if (e) e.preventDefault()
  const { onClick } = this.props
  this.input.current.focus()
  onClick && onClick(e.target.value)
}

export function onChangeHandler(e) {
  const { onChange } = this.props
  onChange && onChange(e.target.value)
}
