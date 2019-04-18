export function componentDidMount() {
  this.decorator()
}

export function getDerivedStateFromProps(nextProps, prevState) {
  let returnObject = {}
  
  prevState.stateKeysToDerive.map((element) => {
    if (JSON.stringify(nextProps.manager(element)) !== JSON.stringify(prevState[element])) {
      returnObject[element] = nextProps.manager(element)
    }
  })
  return returnObject
}

export function shouldComponentUpdate(_, nextState) {
  let outcome = false
  this.stateKeysToUpdate.map((element) => {
    if (JSON.stringify(this.state[element]) !== JSON.stringify(nextState[element])) {
      outcome = true
    }
  })
  return outcome
}

export function componentDidUpdate() {
  this.decorator()
}