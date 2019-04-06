const STATE_KEYS_TO_DERIVE = [ 
  'disabled',
  'checked',
  'label',
  'error',
  'flag'
]

const STATE_KEYS_TO_UPDATE = STATE_KEYS_TO_DERIVE.concat([
  'mouseOver',
  'focus',
  'decorator'
])

export function componentDidMount() {
  this.inputElement = document.getElementById(this.id)
  this.decorator()
}

export function getDerivedStateFromProps(nextProps, prevState){
  let returnObject = {}
  STATE_KEYS_TO_DERIVE.map((element) => {
    if (nextProps.manager(element) !== prevState[element]) {
      returnObject[element] = nextProps.manager(element)
    }
  })
  return returnObject
}

export function shouldComponentUpdate(_, nextState) {
  let outcome = false
  STATE_KEYS_TO_UPDATE.map((element) => {
    if (this.state[element] !== nextState[element]) {
      outcome = true
    }
  })
  return outcome
}

export function componentDidUpdate() {
  this.decorator()
}