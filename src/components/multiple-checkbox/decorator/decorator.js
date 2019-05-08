export function decorator() {
  let decorator = {}
  let className
  this.state.checkboxes.map((checkbox) => {
    className = ''
    if (this.input && this.input[checkbox.ref] && this.input[checkbox.ref].current.checked) {
      className += ' ' + this.checkedClass
    }
    if (this.state.focus[checkbox.ref]) {
      className += ' ' + this.focusClass
    }
    if (this.state.mouseOver[checkbox.ref]) {
      className += ' ' + this.hoverClass
    }
    decorator[checkbox.ref] = className
  })
  this.setState({ decorator: decorator })
}
