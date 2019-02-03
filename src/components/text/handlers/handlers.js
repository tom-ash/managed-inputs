export function onMouseOverHandler() {
  let inputClass
  if (this.inputElement !== document.activeElement && this.inputElement.value === '') {
    inputClass = this.styles.inputWithoutValue
    if (!this.state.disabled) {
      inputClass += ' ' + this.styles.inputWithoutValueMouseOver
    }
    this.setState({
      inputClass: inputClass
    })
  }
}

export function onFocusHandler() {
  let inputClass
  let labelClass
  if (this.props.manager('disabled')) { return }
  inputClass = this.styles.inputWithoutValue + ' ' + this.styles.inputWithoutValueFocus
  labelClass = this.styles.labelWithValue
  this.setState({
    inputClass: inputClass,
    labelClass: labelClass
  })
  this.inputElement.focus()
}

export function onChangeHandler(e) {
  this.props.manager('onChange', e.target.value);
}

export function onMouseLeaveHandler() {
  let inputClass
  if (this.inputElement !== document.activeElement && this.inputElement.value === '') {
    inputClass = this.styles.inputWithoutValue
    this.setState({
      inputClass: inputClass
    })
  }
}

export function onBlurHandler(e) {
  let inputClass
  inputClass = this.styles.inputWithoutValue
  if (this.inputElement.value.length < 1) {
    this.setState({
      inputClass: inputClass,
      labelClass: this.styles.labelWithoutValue
    })
  } else {
    inputClass += ' ' + this.styles.inputWithValue
    this.setState({
      inputClass: inputClass,
      labelClass: this.styles.labelWithValue
    })
  }
  this.props.manager('onBlur', e.target.value)
}