export function onKeyDownHandler(e) {
  const { onKeyDown } = this.props
  onKeyDown && onKeyDown(e.target.value)
}

export function onChangeHandler(e) {
  const { onChange } = this.props
  if (this.match && !e.target.value.match(this.match)) {
    this.input.current.value = this.input.current.value.slice(0, -1)
  }
  onChange && onChange(e.target.value)
}
