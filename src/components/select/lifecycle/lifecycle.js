export function componentDidUpdate(prevProps) {
  const { value: prevValue } = prevProps
  const { value, disableBlurOnValue, onBlur } = this.props
  const { focus } = this.state

  if (prevValue !== value && !disableBlurOnValue && focus) {
    let autofill = true
    if (value === '') autofill = false
    const focus = false
    const mouseOver = false

    this.setState({
      autofill,
      focus,
      mouseOver,
      decorator: this.decorator({
        value,
        focus,
        mouseOver
      })
    })
    
    onBlur && onBlur(value)
  }
}
