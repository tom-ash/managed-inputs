const STATE_KEYS_TO_DERIVE = [ 'label', 'disabled', 'error', 'flag' ]

const STATE_KEYS_TO_UPDATE = STATE_KEYS_TO_DERIVE.concat([
  'display', 'buttonClass'
])

export function componentDidMount() {
  this.button = document.getElementById(this.id)
}

export function getDerivedStateFromProps(nextProps, prevState) {
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
    if (this.props[element] !== nextProps[element]) {
      shouldIt = true
    }
  })
  return shouldIt
}