export function onMouseOverHandler() {
  let proxyClass
  if (!this.state.focused) {
    proxyClass = this.styles.proxyUnselected
    if (this.state.value === null) {
      proxyClass += ' ' + this.styles.proxyUnselectedMouseOver
    } else {
      proxyClass += ' ' + this.styles.proxySelected
    }
    this.setState ({ proxyClass: proxyClass })
  }
}

export function onClickHandler() {
  isMobile() ? handleFocus.call(this) : this.selectElement.focus()
  this.onFocusHandler()
}

export function onSelectHandler(option) {
  let proxyClass
  let labelClass
  proxyClass = this.styles.proxyUnselected
  if (option === null) {
    labelClass = this.styles.labelUnselected
  } else {
    proxyClass += ' ' + this.styles.proxySelected
    labelClass = this.styles.labelSelected
  }
  this.selectElement.value = option
  this.props.manager('onSelect', option)
  this.setState({
    focused: false,
    proxyClass: proxyClass,
    labelClass: labelClass,
    optionsHovered: false
  })
}

export function onMouseLeaveHandler() {
  let proxyClass
  if (!this.state.focused) {
    proxyClass = this.styles.proxyUnselected
    if (this.state.value !== null) {
      proxyClass += ' ' + this.styles.proxySelected
    }
    this.setState ({ proxyClass: proxyClass })
  }
}

export function onKeyDownHandler(e) {
  if (e.keyCode === 38 || e.keyCode === 40) {
    e.preventDefault()
  }
  if (e.keyCode === 9) {
    this.onBlurHandler(e, true)
  }
}

export function onBlurHandler(e, tabDown) {
  if (this.state.optionsHovered === false || tabDown === true) {
    let proxyClass
    let labelClass
    proxyClass = this.styles.proxyUnselected
    labelClass = this.styles.labelUnselected
    if (this.state.value !== null) {
      proxyClass += ' ' + this.styles.proxySelected
      labelClass = this.styles.labelSelected
    }
    this.setState({
      labelClass: labelClass,
      proxyClass: proxyClass,
      focused: false
    })
  }
}

export function onFocusHandler() {
  let proxyClass
  let labelClass
  let optionsClass
  labelClass = this.styles.labelSelected
  optionsClass = this.styles.options
  proxyClass = this.styles.proxyUnselected + ' ' + this.styles.proxyUnselectedFocus
  this.setState({
    labelClass: labelClass,
    proxyClass,
    optionsClass: optionsClass,
    focused: true
  })
}

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}