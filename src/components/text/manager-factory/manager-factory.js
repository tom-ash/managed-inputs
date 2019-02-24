export default function textManagerFactory() {
  return (aspect, aspects) => {
    switch(aspect) {
      case 'id':
        return aspects.id
      case 'display':
        return aspects.display === undefined ? 'block' : aspects.display
      case 'styles':
        return aspects.styles === undefined ? {} : aspects.styles
      case 'value':
        return ((aspects.value === undefined) || (aspects.value === null)) ? '' : aspects.value
      case 'label':
        return aspects.label
      case 'type':
        return aspects.type === undefined ? 'text' : aspects.type
      case 'disabled':
        return aspects.disabled === undefined ? false : aspects.disabled
      case 'detached':
        return aspects.detached
      case 'autoComplete':
        return aspects.autoComplete === undefined ? '' : aspects.autoComplete
      case 'onChange':
        aspects.onChange()
        break
      case 'setValue':
        aspects.setValue === undefined ? emptyFunction() : aspects.setValue()
        break
      case 'onBlur':
        aspects.onBlur === undefined ? null : aspects.onBlur()
        break
      case 'validate':
        return aspects.validate === undefined ? null : aspects.validate()
      case 'error':
        return aspects.error === undefined ? '' : aspects.error
      case 'flag':
        aspects.flag === undefined ? null : aspects.flag
        break
      default:
        break
    }
  }
}

function emptyFunction() {
  return () => {
    null
  }
}

