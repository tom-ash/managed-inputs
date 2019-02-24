export default function buttonManagerFactory() {
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
      case 'label':
        return aspects.label
      case 'onMouseOver':
        if (aspects.onMouseOver === undefined) return
        aspects.onMouseOver()
        break
      case 'onClick':
        aspects.onClick()
        break
      case 'onMouseLeave':
        if (aspects.onMouseLeave === undefined) return
        aspects.onMouseLeave()
        break
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
