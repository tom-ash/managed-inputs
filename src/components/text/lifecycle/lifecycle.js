const STATE_KEYS_TO_DERIVE = [ 'value', 'label', 'disabled', 'error', 'flag']

const STATE_KEYS_TO_UPDATE = STATE_KEYS_TO_DERIVE.concat([
  'inputClass', 'labelClass'
])

export function componentDidMount() {
  this.inputElement = document.getElementById(this.id)
  this.labelElement = document.getElementById(this.labelId)
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
  let shouldIt = false
  STATE_KEYS_TO_UPDATE.map((element) => {
    if (this.state[element] !== nextState[element]) {
        shouldIt = true
    }
  })
  return shouldIt
}