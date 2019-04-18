export function onKeyDownHandler(e) {
  if (e.keyCode === 38 || e.keyCode === 40) {
    e.preventDefault()
    let preSelected = this.state.preSelected
    if (e.keyCode == 40) {
      if (preSelected < this.state.options.length - 1) {
        preSelected += 1
      } else {
        preSelected = 0
      }
    } else {
      if (preSelected > 0) {
        preSelected -= 1
      } else {
        preSelected = this.state.options.length - 1
      }
    }
    this.setState({ preSelected: preSelected })
  }
  if (e.keyCode === 13) {
    const option = this.state.options[this.state.preSelected]
    this.setState({
      focus: false,
      mouseOver: false
    })
    this.props.manager('onSelect', option)
  }
  if (e.keyCode === 9) {
    this.onBlurHandler(e, true)
  }
}

export function onOptionMouseOver(index) {
  this.setState({ preSelected: index })
}

export function onBlurHandler(e, tabDown) {
  if (this.state.mouseOver === false || tabDown === true) {
    if (e && e.target) { this.props.manager('onBlur', e.target.value) }
    this.setState({ focus: false })
  }
}

export function onSelectHandler(option) {
  this.setState({
    focus: false,
    mouseOver: false
  })
  this.props.manager('onSelect', option)
}