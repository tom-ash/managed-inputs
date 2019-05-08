export function onKeyDownHandler(e) {
  const keyCode = e.keyCode
  if (keyCode === 38 || keyCode === 40) {
    e.preventDefault()
    const preSelected = computePreSelected.call(this, keyCode)
    this.options.current.scrollTop = computeScroll.call(this, preSelected, keyCode)
    this.setState({ preSelected: preSelected })
  }
  if (keyCode === 13) {
    const option = this.state.options[this.state.preSelected]
    this.setState({
      focus: false,
      mouseOver: false
    })
    this.props.manager('onSelect', option)
  }
  if (keyCode === 9) {
    this.onBlurHandler(e, true)
  }
}

export function onClickHandler(e) {
  if (this.isMobile()) {
    let autofill = true
    if (this.state.value === '') { autofill = false }
    this.setState({
      autofill: autofill,
      focus: true
    })
    this.props.manager('onFocus', e.target.value)
  } else {
    this.input.current.focus()
  }
  this.props.manager('onClick', e.target.value)
}

export function onOptionMouseOver(index) {
  this.setState({ preSelected: index })
}

export function onBlurHandler(e, tabDown, isMobile) {
  if (this.state.mouseOver === false || tabDown === true || isMobile) {
    if (e && e.target) { this.props.manager('onBlur', e.target.value) }
    this.setState({
      focus: false,
      mouseOver: false
    })
  }
}

export function onSelectHandler(option) {
  let autofill = true
  if (option.value === '') { autofill = false }
  this.setState({
    autofill: autofill,
    focus: false,
    mouseOver: false
  })
  this.props.manager('onSelect', option)
}

function computePreSelected(keyCode) {
  let preSelected = this.state.preSelected
  if (keyCode == 40) {
    if (preSelected < this.state.options.length - 1) {
      return preSelected + 1
    } else {
      return 0
    }
  } else {
    if (preSelected > 0) {
      return preSelected - 1
    } else {
      return this.state.options.length - 1
    }
  }
}

function computeScroll(preSelectedIndex, keyCode) {
  const options = this.options.current
  const optionsHeight = options.offsetHeight
  const optionsScroll = options.scrollTop
  const preSelected = options.children[preSelectedIndex]
  const preSelectedHeight = preSelected.offsetHeight
  const preSelectedOffset = preSelected.offsetTop
  switch (preSelectedIndex) {
    case 0:
      return 0
    case this.state.options.length - 1:
      return options.scrollHeight
    default:
      if (keyCode === 38 && preSelectedOffset < optionsScroll) {
        return preSelectedOffset
      }
      if (keyCode === 40 && preSelectedOffset + preSelectedHeight > optionsScroll + optionsHeight) {
        const diff = ((preSelectedOffset + preSelectedHeight - optionsHeight) % preSelectedHeight) - preSelectedHeight
        return preSelectedOffset - optionsHeight + preSelectedHeight - diff
      }
      return this.options.current.scrollTop
  }
}
