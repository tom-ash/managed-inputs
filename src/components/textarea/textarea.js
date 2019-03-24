import React from 'react'
import * as lifecycle from './lifecycle/lifecycle'
import * as handlers from './handlers/handlers'

export default class ManagedTextarea extends React.Component {
  constructor(props) {
    super(props)
    this.id = this.props.manager('id')
    this.labelId = this.id + '-label'
    this.containerId = this.id + '-container'
    this.counterId = this.id + '-counter'
    this.styles = this.props.manager('styles')
    this.componentDidMount = lifecycle.componentDidMount
    this.shouldComponentUpdate = lifecycle.shouldComponentUpdate
    this.onMouseOverHandler = handlers.onMouseOverHandler.bind(this)
    this.onMouseLeaveHandler = handlers.onMouseLeaveHandler.bind(this)
    this.onClickHandler = handlers.onClickHandler.bind(this)
    this.onFocusHandler = handlers.onFocusHandler.bind(this)
    this.onBlurHandler = handlers.onBlurHandler.bind(this)
    this.onChangeHandler = handlers.onChangeHandler.bind(this)
    this.state = {
      disabled: false,
      value: this.props.manager('value'),
      label: this.props.manager('label'),
      charactersUsed: 0,
      counterLimit: this.props.manager('counterLimit'),
      textareaClass: this.styles.textareaWithoutValue,
      labelClass: this.styles.labelWithoutValue,
      counterClass: this.styles.counterWithoutValue
    }
  }

  static getDerivedStateFromProps(nextProps, prevstate) {
    return lifecycle.getDerivedStateFromProps(nextProps, prevstate)
  }

  render() { 
    return (
      <div
      id={this.containerId}
      className={ this.state.disabled ? this.styles.disabled : this.styles.active}>
        <textarea
        id={this.id}
        className={this.state.textareaClass}
        value={this.state.value}
        onClick={this.onClickHandler}
        onMouseOver={this.onMouseOverHandler}
        onMouseLeave={this.onMouseLeaveHandler}
        onFocus={this.onFocusHandler}
        onBlur = {this.onBlurHandler}
        onChange={this.onChangeHandler} />
        <div
        id={this.labelId}
        className={this.state.labelClass}
        onClick={this.onClickHandler}
        onMouseOver={this.onMouseOverHandler}
        onMouseLeave={this.onMouseLeaveHandler}>
          {this.state.label}
        </div>
        <div
        id={this.counterId}
        className={this.state.counterClass}>
          {this.state.charactersUsed} / {this.state.counterLimit}
        </div>
      </div>
    )
  }
}
