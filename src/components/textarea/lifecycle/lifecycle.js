const STATE_KEYS_TO_DERIVE = [ 'disabled',
                               'value',
                               'label',     
                               'styles',                          
                               'counterLimit',
                               'error',
                               'flag' ]

const STATE_KEYS_TO_UPDATE = STATE_KEYS_TO_DERIVE.concat([ 'textareaClass',
                                                           'labelClass',
                                                           'counterClass' ])

export function componentDidMount() {
  this.textarea = document.getElementById(this.id) 
  this.label = document.getElementById(this.labelId)
  this.container = document.getElementById(this.containerId)
  this.counter = document.getElementById(this.counterId)
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
  let updateComponent = false
  STATE_KEYS_TO_UPDATE.map((element) => {
    if (this.state[element] !== nextState[element]) {
      updateComponent = true
    }
  })
  return updateComponent
}
