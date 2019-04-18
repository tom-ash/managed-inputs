export function onMouseOverHandler(e, index) {
  let mouseOver = [].concat(this.state.mouseOver)
  mouseOver[index] = true
  this.setState({ mouseOver: mouseOver })
  this.props.manager('onMouseOver', e.target.value)
}

export function onMouseLeaveHandler(e, index) {
  let mouseOver = [].concat(this.state.mouseOver)
  mouseOver[index] = false
  this.setState({ mouseOver: mouseOver })
  this.props.manager('onMouseLeave', e.target.value)
}

export function onFocusHandler(e, index) {
  let focus = [].concat(this.state.focus)
  focus[index] = true
  this.setState({ focus: focus })
  this.props.manager('onFocus', e.target.value)
}

export function onBlurHandler(e, index) {
  let focus = [].concat(this.state.focus)
  focus[index] = false
  this.setState({ focus: focus })
  this.props.manager('onBlur', e.target.value)
}

export function onKeyDownHandler(e) {
  if ([37, 38, 39, 40].includes(e.keyCode)) {
    e.preventDefault()
  }
  if (e.keyCode === 9) {
    this.onBlurHandler(e, true)
  }
}

export function onClickHandler(value, index) {
  const input = this.input && this.input[index] && this.input[index].current
  if (!input) return
  input.focus()
  this.props.manager('onClick', value)
}