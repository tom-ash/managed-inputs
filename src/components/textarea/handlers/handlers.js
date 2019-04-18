export function onChangeHandler(e) {
  const valueLength = e.target.value.length
  if (valueLength <= this.state.counterLimit) {
    this.setState({ counter: valueLength })
    this.props.manager('onChange', e.target.value)
    this.forceUpdate()
  } else {
    this.input.current.value = this.input.current.value.slice(0, -1)
  }
}
