export function onMouseOverHandler() {
  this.setState({ mouseOver: true })
}

export function onMouseLeaveHandler() {
  this.setState({ mouseOver: false })
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
  this.inputElement.focus()
  const checked = !this.state.checked
  if (this.controlled === false) {
    this.setState({ checked: checked })
    const checkbox = document.getElementById(this.id)
    checkbox.checked = checked
  }
  this.props.manager('onClick', checked)
}