function emptyFunction() {
  return () => {}
}

export default function checkboxManagerFactory() {
  return (aspect, aspects) => {
    switch(aspect) {
      case 'id':
        return aspects.id
      case 'detached':
        return aspects.detached === undefined ? false : aspects.detached
      case 'disabled':
        return aspects.disabled === undefined ? false : aspects.disabled
      case 'styles':
        return aspects.styles === undefined ? {} : aspects.styles
      case 'label':
        return aspects.label === undefined ? '' : aspects.label
      case 'checked':
        return aspects.checked === undefined ? false : aspects.checked
      case 'onClick':
        aspects.onClick()
        break
      case 'validate':
        return aspects.validate()
      case 'setValue':
        aspects.setValue === undefined ? emptyFunction() : aspects.setValue()
        break
      case 'error':
        return aspects.error === undefined ? '' : aspects.error
      case 'flag':
        return aspects.flag === undefined ? null : aspects.flag
      default:
        break
    }
  }
}
