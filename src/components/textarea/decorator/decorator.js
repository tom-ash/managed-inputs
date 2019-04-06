export function decorator() {
  let className = ''
  if (this.input.value) {
    className += ' ' + this.valueClass
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