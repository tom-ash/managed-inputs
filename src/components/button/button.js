import React from "react"
import * as handlers from './handlers/handlers'
import * as lifecycle from './lifecycle/lifecycle'

export default class ManagedButton extends React.Component {
  constructor(props) {
    super(props)
    this.id = this.props.manager('id')
    this.componentDidMount = lifecycle.componentDidMount
    this.shouldComponentUpdate = lifecycle.shouldComponentUpdate
    this.onMouseOverHandler = handlers.onMouseOverHandler.bind(this)
    this.onClickHandler = handlers.onClickHandler.bind(this)
    this.onMouseLeaveHandler = handlers.onMouseLeaveHandler.bind(this)
    this.styles = this.props.manager('styles')
    this.state={
      display: this.props.manager('display'),
      disabled: this.props.manager('disabled'),
      flag: this.props.manager('flag'),
      buttonClass: this.styles.button
    }
  }

  static getDerivedStateFromProps(nextProps, prevstate) {
    return lifecycle.getDerivedStateFromProps(nextProps, prevstate)
  }

  render() {
    return (
      <div
      style={{ display: this.state.display }}
      className={this.state.disabled ? this.styles.disabled : this.styles.active}>
        <button
        id={this.id}
        className={this.state.buttonClass}
        disabled={this.props.manager('disabled')}
        onMouseOver={this.onMouseOverHandler}
        onClick={this.onClickHandler}
        onMouseLeave={this.onMouseLeaveHandler}>
          {this.props.manager('label')}
        </button>
        <div className={this.styles.error}>
          {this.props.manager('error')}
        </div>
      </div>
    )
  }
}
