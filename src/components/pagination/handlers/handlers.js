export function onMouseOverHandler(button) {
  let mouseOver = {...this.state.mouseOver}
  mouseOver[button] = true
  this.setState({ mouseOver: mouseOver })
  this.props.manager('onMouseOver', button)
}

export function onMouseLeaveHandler(button) {
  let mouseOver = {...this.state.mouseOver}
  mouseOver[button] = false
  this.setState({ mouseOver: mouseOver })
  this.props.manager('onMouseOver', button)
}

export function onFocusHandler(button) {
  let focus = {...this.state.focus}
  focus[button] = true
  this.setState({ focus: focus })
  this.props.manager('onFocus', button)
}

export function onBlurHandler(button) {
  let focus = {...this.state.focus}
  focus[button] = false
  this.setState({ focus: focus })
  this.props.manager('onFocus', button)
}

export function onClickHandler(button) {
  if (button === 0 || button === this.state.buttons.length - 1) {
    let current
    if (button === 0) {
      current = this.state.current - 1
    } else {
      current = this.state.current + 1
    }
    this.props.manager('onClick', current)
    return
  }
  this.props.manager('onClick', button)
}
