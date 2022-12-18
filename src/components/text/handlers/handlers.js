export function onKeyDownHandler(e) {
  const { onEnter, onTab, onKeyDown } = this.props

  if (e.key === 'Enter' && onEnter) {
    return onEnter(e)
  }

  if (e.key === 'Tab' && onTab) {
    return onTab(e)
  }

  onKeyDown && onKeyDown(e.target.value, e)
}

export function onChangeHandler(e) {
  const { onChange } = this.props
  if (this.match && !e.target.value.match(this.match)) {
    this.input.current.value = this.input.current.value.slice(0, -1)
  }
  onChange && onChange(e.target.value)
}
