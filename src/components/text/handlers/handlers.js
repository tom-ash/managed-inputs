export function onKeyDownHandler(e) {
  this.props.manager('onKeyDown', e.target.value, e)
}

export function onChangeHandler(e) {
  if (this.match && !e.target.value.match(this.match)) {
    this.input.current.value = this.input.current.value.slice(0, -1)
  }
  this.props.manager('onChange', e.target.value)
}
