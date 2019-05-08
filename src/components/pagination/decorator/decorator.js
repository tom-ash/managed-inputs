export function decorator() {
  let decorator = {}
  let className;
  [0].concat(this.state.buttons).map(button => {
    className = ''
    if (this.state.focus[button]) {
      className += ' ' + this.focusClass
    }
    if (this.state.mouseOver[button]) {
      className += ' ' + this.hoverClass
    }
    if (this.state.current === button) {
      className += ' ' + this.currentClass
    }
    decorator[button] = className
  })
  this.setState({ decorator: decorator })
}