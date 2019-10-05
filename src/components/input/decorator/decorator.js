export function decorator(options) {
  const values = {
    ...(({ autofill, focus, mouseOver }) => ({ autofill, focus, mouseOver }))(this.state),
    ...options
  }
  const { autofill, focus, mouseOver } = values
  let className = ''
  if (autofill) className += ' ' + this.autofillClass
  if (focus) className += ' ' + this.focusClass
  if (mouseOver) className += ' ' + this.hoverClass
  return className
}