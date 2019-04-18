export function onClickHandler() {
  this.input.current.focus()
  this.props.manager('onClick', !this.state.checked)
}