let textareaClass = ''
let labelClass = ''
let counterClass = ''

export function onMouseOverHandler() {
  if (this.state.disabled) return
  if (this.textarea !== document.activeElement && this.textarea.value === '') {
    textareaClass = this.styles.textareaWithoutValue + ' ' + this.styles.textareaWithoutValueMouseOver
    this.setState({
      textareaClass: textareaClass
    })
  }
}

export function onMouseLeaveHandler() {
  if (this.state.disabled) return
  if (this.textarea !== document.activeElement && this.textarea.value === '') {
    textareaClass = this.styles.textareaWithoutValue
    this.setState({
      textareaClass: textareaClass
    })
  }
}

export function onClickHandler() {
  this.textarea.focus()
}

export function onFocusHandler() {
  labelClass = this.styles.labelWithoutValueFocus
  textareaClass = this.styles.textareaWithoutValue + ' ' + this.styles.textareaWithoutValueFocus
  counterClass = this.styles.counterWithoutValueFocus
  this.setState({
    labelClass: labelClass,
    textareaClass: textareaClass,
    counterClass: counterClass
  })
}

export function onBlurHandler() {
  if (this.textarea.value === '') {
    textareaClass = this.styles.textareaWithoutValue
    labelClass = this.styles.labelWithoutValue
    counterClass = this.styles.counterWithoutValue
  } else {
    textareaClass = this.styles.textareaWithoutValue + ' ' + this.styles.textareaWithValue
    labelClass = this.styles.labelWithoutValueFocus + ' ' + this.styles.labelWithValue
    counterClass = this.styles.counterWithoutValueFocus + ' ' + this.styles.counterWithValue
  }
  this.setState({
    labelClass: labelClass,
    textareaClass: textareaClass,
    counterClass: counterClass
  })
}

export function onChangeHandler() {
  let value = this.textarea.value
  let valueLength = value.length
  if (valueLength <= this.state.counterLimit) {
    this.setState({ charactersUsed: valueLength })
    this.props.manager('onChange', value)
  } else {
    this.textarea.value = this.textarea.value.slice(0, -1)
  }
}
