export default function textareaManagerFactory() {
  return (aspect, aspects) => {
    switch(aspect) {
      case 'id':
        return aspects.id
      case 'disabled':
        return aspects.disabled === undefined ? false : aspects.disabled
      case 'styles':
        return aspects.styles === undefined ? {} : aspects.styles
      case 'value':
        return aspects.value === undefined || aspects.value === null ? '' : aspects.value  
      case 'label':
        return aspects.label
      case 'counterLimit':
        return aspects.counterLimit
      case 'onChange':
        aspects.onChange()
        break;
      case 'setValue':
        aspects.setValue === undefined ? emptyFunction() : aspects.setValue()
        break;
      case 'error':
        return aspects.error === undefined ? '' : aspects.error
      case 'flag':
        return aspects.flag === undefined ? null : aspects.flag
      default:
        break;
    }
  }
}
