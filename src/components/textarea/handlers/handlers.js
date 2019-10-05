export function onChangeHandler(e) {
  const { counterLimit, onChange } = this.props
  const valueLength = e.target.value.length
  if (valueLength <= counterLimit) {
    this.setState({ counter: valueLength })
    onChange(e.target.value)
  } else {
    this.input.current.value = this.input.current.value.slice(0, -1)
  }
}
