export function onMouseOverHandler(e, ref) {
  let mouseOver = {...this.state.mouseOver}
  mouseOver[ref] = true
  this.setState({ mouseOver: mouseOver })
  this.props.manager('onMouseOver', e.target.value, ref)
}

export function onMouseLeaveHandler(e, ref) {
  let mouseOver = {...this.state.mouseOver}
  mouseOver[ref] = false
  this.setState({ mouseOver: mouseOver })
  this.props.manager('onMouseLeave', e.target.value, ref)
}

export function onFocusHandler(e, ref) {
  let focus = {...this.state.focus}
  focus[ref] = true
  this.setState({ focus: focus })
  this.props.manager('onFocus', e.target.value, ref)
}

export function onBlurHandler(e, ref) {
  let focus = {...this.state.focus}
  focus[ref] = false
  this.setState({ focus: focus })
  this.props.manager('onBlur', e.target.value, ref)
}

export function onClickHandler(ref) {
  const input = this.input[ref].current
  input.focus()
  const checked = !input.checked
  this.props.manager('onClick', checked, ref)
}

export function onKeyDownHandler(e, ref) {
  if (e.keyCode === 32) {
    this.onClickHandler(ref)
  }
}