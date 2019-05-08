export function componentDidMount() {
  computeButtons.call(this)
  this.decorator()
}

export function componentDidUpdate(prevProps, prevState) {  
  if (prevState.resultsPerPage !== this.state.resultsPerPage || prevState.resultAmount !== this.state.resultAmount) {
    computeButtons.call(this)
  }
  this.decorator()
}

function computeButtons() {
  this.setState({
    buttons: createButtonsArray(Math.ceil(this.state.resultAmount / this.state.resultsPerPage))
  })
}

function createButtonsArray(limit) {
  let buttonsArray = []
  for (let i = 0; i < limit + 2; i++) {
    buttonsArray.push(i)
  }
  return buttonsArray
}