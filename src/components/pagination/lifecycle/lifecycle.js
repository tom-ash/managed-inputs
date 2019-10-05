export function componentDidMount() {
  computeButtons.call(this)
}

export function componentDidUpdate(prevProps) {  
  if (prevProps.resultsPerPage !== this.props.resultsPerPage || prevProps.resultAmount !== this.props.resultAmount) {
    computeButtons.call(this)
  }
}

function computeButtons() {
  this.setState({
    buttons: createButtonsArray(Math.ceil(this.props.resultAmount / this.props.resultsPerPage))
  })
}

function createButtonsArray(limit) {
  let buttonsArray = []
  for (let i = 0; i < limit + 2; i++) {
    buttonsArray.push(i)
  }
  return buttonsArray
}