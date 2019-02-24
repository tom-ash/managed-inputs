export default function selectManagerFactory() {
  return (aspect, aspects) => {
    switch(aspect) {
      case 'id':
        return aspects.id
      case 'display':
        return aspects.display === undefined ? 'block' : aspects.display
      case 'disabled':
        return aspects.disabled === undefined ? false : aspects.disabled
      case 'styles':
        return aspects.styles === undefined ? {} : aspects.styles
      case 'value':
        return aspects.value === undefined ? null : aspects.value
      case 'label':
        return aspects.label === undefined ? '' : aspects.label
      case 'options':
        return aspects.options
      case 'optionKey':
        return aspects.optionKey
      case 'optionValue':
        return aspects.optionValue
      case 'optionDecorate':
        return aspects.optionDecorate
      case 'setValue':
        aspects.setValue === undefined ? emptyFunction() : aspects.setValue()
        break
      case 'onSelect':
        aspects.onSelect()
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

function emptyFunction() {
  return () => {
    null
  }
}
