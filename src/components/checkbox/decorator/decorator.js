export function decorator() {
  let className = ''
  if (this.inputElement.checked) {
    className += ' ' + this.checkedClass
  }
  if (this.state.focus) {
    className += ' ' + this.focusClass
  }
  if (this.state.mouseOver) {
    className += ' ' + this.hoverClass
  }
  if (this.state.error) {
    className += ' ' + this.errorClass
  }
  this.setState({
    decorator: className
  })
}