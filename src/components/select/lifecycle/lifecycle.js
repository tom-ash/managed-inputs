export function componentDidUpdate(prevProps, prevState) {
  const { value: prevValue } = prevProps
  const { disableBlurOnValue, value } = this.props
  const { focus } = this.state

  if (prevValue !== value && !disableBlurOnValue && focus) {
    let autofill = true
    if (value === '') autofill = false
    this.setState({
      autofill,
      focus: false,
      mouseOver: false,
      decorator: this.decorator({ focus: false, mouseOver: false, value })
    })
  }
}
