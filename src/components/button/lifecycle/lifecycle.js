const STATE_KEYS_TO_DERIVE = [
  'display',
  'disabled',
  'label',
  'flag'
]

const STATE_KEYS_TO_UPDATE = STATE_KEYS_TO_DERIVE.concat([
  'mouseOver',
  'focus',
  'decorator'
])

export function componentDidMount() {
  this.input = document.getElementById(this.id)
  this.decorator()
}

export function getDerivedStateFromProps(nextProps, prevState) {
  let returnObject = {}
  STATE_KEYS_TO_DERIVE.map((element) => {
    if (JSON.stringify(nextProps.manager(element)) !== JSON.stringify(prevState[element])) {
      returnObject[element] = nextProps.manager(element)
    }
  })
  return returnObject
}

export function shouldComponentUpdate(_, nextState) {
  let outcome = false
  STATE_KEYS_TO_UPDATE.map((element) => {
    if (JSON.stringify(this.state[element]) !== JSON.stringify(nextState[element])) {
      outcome = true
    }
  })
  return outcome
}

export function componentDidUpdate() {
  this.decorator()
}