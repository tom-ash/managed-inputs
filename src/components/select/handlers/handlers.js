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
}

export function onFocusHandler() {
  handleFocus.call(this)
}

export function onSelectHandler(option) {
  let proxyClass
  let labelClass
  let optionsClass
  proxyClass = this.styles.proxyUnselected
  optionsClass = this.styles.options
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
    labelClass: labelClass
  })
}

export function onKeyDownHandler(e) {
  if (e.keyCode === 9) { this.handler('unfocusSelect') }
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

export function onUnfocusHandler() {
  let proxyClass
  let labelClass
  proxyClass = this.styles.proxyUnselected
  if (this.state.value === null) {
    labelClass = this.styles.labelUnselected
  } else {
    proxyClass += ' ' + this.styles.proxySelected
    labelClass = this.styles.labelSelected
  }
  this.setState({
    labelClass: labelClass,
    proxyClass: proxyClass,
    focused: false
  })
}

function handleFocus() {
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