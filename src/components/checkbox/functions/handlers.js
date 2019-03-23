export function onClickHandler() {
  const checked = !this.state.checked
  if (this.detached === true) {
    this.setState({ checked: checked })
    const checkbox = document.getElementById(this.id)
    checkbox.checked = checked
  }
  this.props.manager('onClick', checked)
}
