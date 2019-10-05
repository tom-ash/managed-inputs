export function decorator(options) {
  let decorator = {}
  const values = {
    ...(({ focus, mouseOver }) => ({ focus, mouseOver }))(this.state),
    ...options
  }
  const { focus, mouseOver } = values
  const { checkboxes } = this.props
  checkboxes.map(checkbox => {
    let className = ''
    if (focus[checkbox.ref]) className += ' ' + this.focusClass
    if (mouseOver[checkbox.ref]) className += ' ' + this.hoverClass
    decorator[checkbox.ref] = className
  })
  return decorator
}
