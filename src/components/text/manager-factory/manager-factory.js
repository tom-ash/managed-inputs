export default function textManagerFactory() {
  return (aspect, aspects) => {
    switch(aspect) {
      case 'id':
        return aspects.id
      case 'type':
        return aspects.type || 'text'
      case 'controlled':
        return aspects.controlled === undefined ? true : false
      case 'display':
        return aspects.display || 'block'
      case 'disabled':
        return aspects.disabled || false
      case 'classNames':
        return aspects.classNames || {}
      case 'value':
        return aspects.value || ''
      case 'label':
        return aspects.label || ''
      case 'autoComplete':
        return aspects.autoComplete || ''
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
      case 'onChange':
        return aspects.onChange && aspects.onChange()
      case 'setValue':
        return aspects.setValue && aspects.setValue()
      case 'validate':
        return aspects.validate && aspects.validate()
      case 'error':
        return aspects.error
      case 'flag':
        return aspects.flag
      default:
        break
    }
  }
}
