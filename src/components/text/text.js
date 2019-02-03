import React from "react";
import * as handlers from './handlers/handlers'
import * as lifecycle from './lifecycle/lifecycle'

export default class ManagedText extends React.Component {
  constructor(props) {
    super(props)
    this.id = this.props.manager('id')
    this.labelId = this.id + '-label'
    this.detached = this.props.manager('detached')
    this.componentDidMount = lifecycle.componentDidMount
    this.shouldComponentUpdate = lifecycle.shouldComponentUpdate
    this.onMouseOverHandler = handlers.onMouseOverHandler.bind(this)
    this.onMouseLeaveHandler = handlers.onMouseLeaveHandler.bind(this)
    this.onFocusHandler = handlers.onFocusHandler.bind(this)
    this.onChangeHandler = handlers.onChangeHandler.bind(this)
    this.onBlurHandler = handlers.onBlurHandler.bind(this)
    this.styles = this.props.manager('styles')
    this.state={
      disabled: this.props.manager('disabled'),
      focused: false,
      value: this.props.manager('value'),
      label: this.props.manager('label'),
      error: this.props.manager('error'),
      flag: this.props.manager('flag'),
      inputClass: this.styles.inputWithoutValue,
      labelClass: this.styles.labelWithoutValue + ' ' + 'animation-none'
    }
  }

  static getDerivedStateFromProps(nextProps, prevstate) {
    return lifecycle.getDerivedStateFromProps(nextProps, prevstate)
  }

  render() {
    return (
      <div
      className={this.state.disabled ? this.styles.disabled : this.styles.active}>
        <input
        id={this.id}
        className={this.state.inputClass}
        type={this.props.manager('type')}
        disabled = {this.props.manager('disabled')}
        autoComplete = {this.props.manager('autoComplete')}
        value={this.detached ? undefined : this.state.value}
        onMouseOver={() => this.onMouseOverHandler()}
        onMouseLeave={() => this.onMouseLeaveHandler()}
        onFocus={() => this.onFocusHandler()}
        onChange={(e) => this.onChangeHandler(e)}
        onBlur={(e) => this.onBlurHandler(e)}/>
        <div
        id={this.labelId}
        className={this.state.labelClass}
        onMouseOver={() => this.onMouseOverHandler()}
        onClick={() => this.handler('onFocus')}>
          {this.state.label}
        </div>
        <div
        className={this.styles.error}>
          {this.state.error}
        </div>
      </div>
    )
  }
}
