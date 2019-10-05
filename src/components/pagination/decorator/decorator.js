export function decorator(options) {
  let decorator = []
  const values = {
    ...(({ focus, mouseOver }) => ({ focus, mouseOver }))(this.state),
    ...options
  }
  const { focus, mouseOver } = values
  const { buttons } = this.state;
  [0].concat(buttons).map(button => {
    let className = ''
    if (focus[button]) className += ' ' + this.focusClass
    if (mouseOver[button]) className += ' ' + this.hoverClass
    decorator[button] = className
  })
  return decorator
}