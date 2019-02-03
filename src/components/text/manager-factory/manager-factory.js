export default function textManagerFactory() {
  return (aspect, value, inputFieldData) => {
    switch(aspect) {
      case 'id':
        return inputFieldData.id
      case 'styles':
        return inputFieldData.styles === undefined ? {} : inputFieldData.styles
      case 'value':
        return ((inputFieldData.value === undefined) || (inputFieldData.value === null)) ? '' : inputFieldData.value
      case 'label':
        return inputFieldData.label
      case 'type':
        return inputFieldData.type === undefined ? 'text' : inputFieldData.type
      case 'disabled':
        return inputFieldData.disabled === undefined ? false : inputFieldData.disabled
      case 'detached':
        return inputFieldData.detached
      case 'autoComplete':
        return inputFieldData.autoComplete === undefined ? '' : inputFieldData.autoComplete
      case 'onChange':
        inputFieldData.onChange()
        break;
      case 'setValue':
        inputFieldData.setValue === undefined ? emptyFunction() : inputFieldData.setValue()
        break;
      case 'onBlur':
        inputFieldData.onBlur === undefined ? null : inputFieldData.onBlur()
        break;
      case 'validate':
        return inputFieldData.validate === undefined ? null : inputFieldData.validate()
      case 'error':
        return inputFieldData.error === undefined ? '' : inputFieldData.error
      case 'flag':
        inputFieldData.flag === undefined ? null : inputFieldData.flag
        break;
      default:
        break;
    }
  }
}

function emptyFunction() {
    return () => {
      null;
    }
  }