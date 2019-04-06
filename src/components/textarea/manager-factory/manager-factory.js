export default function textareaManagerFactory() {
  return (aspect, aspects) => {
    switch(aspect) {
      case 'id':
        return aspects.id
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
        return aspects.label
      case 'counterLimit':
        return aspects.counterLimit
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
        return aspects.setValue()
      case 'error':
        return aspects.error
      case 'flag':
        return aspects.flag || null
      default:
        break;
    }
  }
}
