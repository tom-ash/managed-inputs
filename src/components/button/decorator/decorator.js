export function decorator() {
  let className = ''
  if (this.state.focus) {
    className += ' ' + this.focusClass
  }
  if (this.state.mouseOver) {
    className += ' ' + this.hoverClass
  }
  this.setState({
    decorator: className
  })
}