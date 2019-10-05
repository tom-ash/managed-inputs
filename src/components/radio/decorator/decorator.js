export function decorator(options) {
  let decorator = {}
  const values = {
    ...(({ focus, mouseOver }) => ({ focus, mouseOver }))(this.state),
    ...options
  }
  const { focus, mouseOver } = values
  const { radios } = this.props
  radios.map((_, index) => {
    let className = ''
    if (focus[index]) className += ' ' + this.focusClass
    if (mouseOver[index]) className += ' ' + this.hoverClass
    decorator[index] = className
  })
  return decorator
}