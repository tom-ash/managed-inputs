export function decorator() {
  let decorator = []
  this.radios.map((radio, index) => {
    let className = ''
    if (this.input && this.input[index] && this.input[index].current.checked) {
      className += ' ' + this.checkedClass
    }
    if (this.state.focus[index]) {
      className += ' ' + this.focusClass
    }
    if (this.state.mouseOver[index]) {
      className += ' ' + this.hoverClass
    }
    if (this.state.error[index]) {
      className += ' ' + this.errorClass
    }
    decorator[index] = className
  })
  this.setState({ decorator: decorator })
}