export default function selectManagerFactory() {
  return (aspect, aspects) => {
    switch(aspect) {
      case 'id':
        return aspects.id
      case 'controlled':
        return aspects.controlled || true
      case 'display':
        return aspects.display || 'block'
      case 'disabled':
        return aspects.disabled || false
      case 'classNames':
        return aspects.classNames || {}
      case 'value':
        return aspects.value
      case 'label':
        return aspects.label || ''
      case 'options':
        return aspects.options
      case 'optionKey':
        return aspects.optionKey
      case 'optionValue':
        return aspects.optionValue
      case 'optionDecorate':
        return aspects.optionDecorate
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
      case 'onSelect':
        return aspects.onSelect && aspects.onSelect()
      case 'error':
        return aspects.error || ''
      case 'flag':
        return aspects.flag || null
      default:
        break
    }
  }
}
