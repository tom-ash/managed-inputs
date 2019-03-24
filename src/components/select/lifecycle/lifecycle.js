const STATE_KEYS_TO_DERIVE = [
  'display',
  'disabled',
  'value',
  'label',
  'options',
  'flag',
  'error'
]

const STATE_KEYS_TO_UPDATE = STATE_KEYS_TO_DERIVE.concat([
  'focused',
  'proxyClass',
  'labelClass',
  'optionsClass'
])

export function componentDidMount() {
  this.selectElement = document.getElementById(this.id)
  this.proxyUnselectedElement = document.getElementById(this.proxyId)
  this.label = document.getElementById(this.labelId)
  this.options = document.getElementById(this.optionsId)
  this.selectElement.addEventListener('blur', () => {
    this.onBlurHandler()
  })
}

export function getDerivedStateFromProps(nextProps, prevState){
  let returnObject = {}
  STATE_KEYS_TO_DERIVE.map((element) => {
    if (nextProps.manager(element) != prevState[element]) {
      returnObject[element] = nextProps.manager(element)
    }
  })
  return returnObject
}

export function shouldComponentUpdate(nextProps, nextState) {
  let someValue = false
  STATE_KEYS_TO_UPDATE.map((element) => {
    if (this.state[element] !== nextState[element]) {
      someValue = true
    }
  })
  return someValue
}

