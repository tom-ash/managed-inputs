export default function managerAgent(aspect, aspects) {
  switch(aspect) {
    case 'value':
      return aspects.value === undefined ? '' : aspects.value
    case 'match':
      return aspects.match
    case 'checked':
      return aspects.checked || false
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
    case 'onKeyDown':
      return aspects.onKeyDown && aspects.onKeyDown()
    case 'onChange':
      return aspects.onChange && aspects.onChange()
    case 'onSelect':
      return aspects.onSelect && aspects.onSelect()
    case 'error':
      return aspects.error || ''
    case 'options':
      return aspects.options
    case 'checkboxes':
      return aspects.checkboxes
    case 'radios':
      return aspects.radios
    case 'label':
      return aspects.label || ''
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
    case 'autoComplete':
      return aspects.autoComplete || ''
    case 'counterLimit':
      return aspects.counterLimit
    case 'name':
      return aspects.name
    case 'setValue':
      return aspects.setValue && aspects.setValue()
    case 'validate':
      return aspects.validate && aspects.validate()
    case 'current':
      return aspects.current
    case 'resultsPerPage':
      return aspects.resultsPerPage
    case 'resultAmount':
      return aspects.resultAmount
    default:
      break
  }
}
