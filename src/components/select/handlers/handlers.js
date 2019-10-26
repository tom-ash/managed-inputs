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
      decorator: this.decorator({ focus: true }),
      ...optionsDimensionsProvider.call(this)
    })
    onFocus && onFocus(e.target.value)
  } else {
    this.input.current.focus()
  }
  onClick && onClick(e.target.value)
}

export function onFocusHandler(e) {
  const { onFocus } = this.props
  let autofill = true
  if (this.state.value === '') autofill = false
  const focus = true
  this.setState({
    autofill,
    focus,
    decorator: this.decorator({ focus }),
    ...optionsDimensionsProvider.call(this)
  })
  onFocus && onFocus(e.target.value)
}


export function onOptionMouseOver(index) {
  this.setState({ preSelected: index })
}

export function onBlurHandler(e, tabDown, fromOnCover) {
  const { onBlur } = this.props

  if (tabDown || fromOnCover) {
    let value
    if (e && e.target) value = e.target.value
    const focus = false
    const mouseOver = false

    this.setState({
      focus,
      mouseOver,
      decorator: this.decorator({
        focus,
        mouseOver
      })
    })

    onBlur && onBlur(value)
  }
}

export function onFocusCoverClickHandler() {
  const { onCoverClick } = this.props
  onCoverClick && onCoverClick(value)
  this.onBlurHandler(undefined, undefined, true)
}

export function onSelectHandler(e, option) {
  const { onSelect } = this.props
  let autofill = true
  if (option.value === '') autofill = false
  this.setState({
    autofill,
    focus: false,
    mouseOver: false,
    decorator: this.decorator({ focus: false, mouseOver: false, value: option.value })
  })
  onSelect(option)
}

function computePreSelected(keyCode) {
  const { preSelected } = this.state
  const { options } = this.props

  if (keyCode == 40) {
    if (preSelected < options.length - 1) {
      return preSelected + 1
    } else {
      return 0
    }
  } else {
    if (preSelected > 0) {
      return preSelected - 1
    } else {
      return options.length - 1
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

function optionsDimensionsProvider() {
  const { optionsDimensions } = this.props
  const { current: visibleInput } = this.visibleInput
  const { offsetWidth, offsetHeight } = visibleInput
  const { top: rectTop, left: rectLeft } = visibleInput.getBoundingClientRect()
  const { top: propTop, left: propLeft, width: propWidth } = optionsDimensions || {}
  const { scrollTop } = document.documentElement

  return {
    top: rectTop + scrollTop + offsetHeight + (propTop || 0),
    left: rectLeft + (propLeft || 0),
    width: offsetWidth + (propWidth || 0)
  }
}
