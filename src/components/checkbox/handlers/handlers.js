export function onClickHandler() {
  const { onClick, checked } = this.props
  this.input.current.focus()
  onClick(!checked)
}