export function onKeyDownHandler(e) {
  const { onSelect, onKeyDown } = this.props
  const keyCode = e.keyCode
  if (keyCode === 38 || keyCode === 40) {
    e.preventDefault()
    const preSelected = computePreSelected.call(this, keyCode)
    this.options.current.scrollTop = computeScroll.call(this, preSelected, keyCode)
    this.setState({ preSelected: preSelected })
  }
  if (keyCode === 13) {
    const option = this.props.options[this.state.preSelected]
    this.setState({
      focus: false,
      mouseOver: false
    })
    onSelect(option)
  }
  if (keyCode === 9) {
    this.onBlurHandler(e, true)
  }
  onKeyDown && onKeyDown(e.keyCode)
}

export function onClickHandler(e) {
  const { onFocus, onClick } = this.props
  if (this.isMobile()) {
    let autofill = true
    if (this.props.value === '') { autofill = false }
    this.setState({
      autofill: autofill,
      focus: true,
      decorator: this.decorator({ focus: true })
    })
    onFocus && onFocus(e.target.value)
  } else {
    this.input.current.focus()
  }
  onClick && onClick(e.target.value)
}

export function onOptionMouseOver(index) {
  this.setState({ preSelected: index })
}

export function onBlurHandler(e, tabDown, isMobile) {
  const { onBlur } = this.props
  if (this.state.mouseOver === false || tabDown === true || isMobile) {
    let value
    if (e && e.target) value = e.target.value
    onBlur && onBlur(value)
    this.setState({
      focus: false,
      mouseOver: false,
      decorator: this.decorator({ focus: false, mouseOver: false })
    })
  }
}

export function onSelectHandler(option) {
  const { onSelect } = this.props
  let autofill = true
  if (option.value === '') autofill = false
  this.setState({
    autofill: autofill,
    focus: false,
    mouseOver: false,
    decorator: this.decorator({ focus: false, mouseOver: false, value: option.value })
  })
  onSelect(option)
}

function computePreSelected(keyCode) {
  let preSelected = this.state.preSelected
  if (keyCode == 40) {
    if (preSelected < this.props.options.length - 1) {
      return preSelected + 1
    } else {
      return 0
    }
  } else {
    if (preSelected > 0) {
      return preSelected - 1
    } else {
      return this.props.options.length - 1
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
    case this.props.options.length - 1:
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
