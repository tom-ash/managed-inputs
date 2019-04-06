export default function checkboxManagerFactory() {
  return (aspect, aspects) => {
    switch(aspect) {
      case 'id':
        return aspects.id
      case 'controlled':
        return aspects.controlled === undefined ? true : false
      case 'display':
        return aspects.display || 'block'
      case 'disabled':
        return aspects.disabled || undefined
      case 'classNames':
        return aspects.classNames || {}
      case 'label':
        return aspects.label || ''
      case 'checked':
        return aspects.checked || false
      case 'onMouseOver':
        return aspects.onMouseOver && aspects.onMouseOver()
      case 'onMouseLeave':
        return aspects.onMouseLeave && aspects.onMouseLeave()
      case 'onClick':
        return aspects.onClick && aspects.onClick()
      case 'onFocus':
        return aspects.onFocus && aspects.onFocus()
      case 'onBlur':
        return aspects.onBlur && aspects.onBlur()
      case 'onChange':
        return aspects.onChange && aspects.onChange()
      case 'validate':
        return aspects.validate()
      case 'setValue':
        return aspects.setValue()
      case 'error':
        return aspects.error || ''
      case 'flag':
        return aspects.flag || null
      default:
        break
    }
  }
}
