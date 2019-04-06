export default function buttonManagerFactory() {
  return (aspect, aspects) => {
    switch(aspect) {
      case 'id':
        return aspects.id
      case 'display':
        return aspects.display || 'block'
      case 'disabled':
        return aspects.disabled || false
      case 'classNames':
        return aspects.classNames || {}
      case 'label':
        return aspects.label
      case 'onMouseOver':
        return aspects.onMouseOver && aspects.onMouseOver()
      case 'onMouseLeave':
        return aspects.onMouseLeave && aspects.onMouseLeave()
      case 'onFocus':
        return aspects.onFocus && aspects.onFocus()
      case 'onBlur':
        return aspects.onBlur && aspects.onBlur()
      case 'onClick':
        return aspects.onClick && aspects.onClick()
      case 'flag':
        return aspects.flag || null
      default:
        break
    }
  }
}