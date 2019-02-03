import React from 'react'
import * as lifecycle from './lifecycle/lifecycle'
import * as handlers from './handlers/handlers'
import './styles/styles.css'

export default class ManagedSelect extends React.Component {
  constructor(props) {
    super(props)
    this.id = this.props.manager('id')
    this.containerId = this.id + '-container'
    this.proxyId = this.id + '-proxy'
    this.labelId = this.id + '-label'
    this.optionsId = this.id + '-options'
    this.styles = this.props.manager('styles')
    this.componentDidMount = lifecycle.componentDidMount
    this.shouldComponentUpdate = lifecycle.shouldComponentUpdate
    this.onMouseOverHandler = handlers.onMouseOverHandler.bind(this)
    this.onClickHandler = handlers.onClickHandler.bind(this)
    this.onFocusHandler = handlers.onFocusHandler.bind(this)
    this.onSelectHandler = handlers.onSelectHandler.bind(this)
    this.onKeyDownHandler = handlers.onKeyDownHandler.bind(this)
    this.onMouseLeaveHandler = handlers.onMouseLeaveHandler.bind(this)
    this.onUnfocusHandler = handlers.onUnfocusHandler.bind(this)
    this.state = {
      disabled: this.props.manager('disabled'),
      focused: false,
      value: this.props.manager('value'),
      label: this.props.manager('label'),
      options:  this.props.manager('options'),
      flag: this.props.manager('flag'),
      error: this.props.manager('error'),
      proxyClass: this.styles.proxyUnselected,
      labelClass: this.styles.labelUnselected + ' ' + 'animation-none',
      optionsClass: 'display-none'
    }
  }

  static getDerivedStateFromProps(nextProps, prevstate) {
    return lifecycle.getDerivedStateFromProps(nextProps, prevstate)
  }

  render() {
    return (
      <div
      id={ this.containerId }
      className={ this.state.disabled ?  this.styles.disabled : this.styles.active}>
        {this.state.focused &&
        <div>
          <div
          id={this.optionsId}
          className={this.state.optionsClass}>
            <div
            onClick={() => this.onSelectHandler(null)}
            className={this.styles.option}/>
            {this.state.options.map((option) => (
            <div
            key={this.props.manager('optionKey', option)}
            onClick={() => this.onSelectHandler(option)}
            className={this.styles.option}>
              {this.props.manager('optionDecorate', option)}
            </div>))}
          </div>
          <div
          onClick={() => this.onUnfocusHandler()}
          className='detached-select-js-options-background'/>
        </div>}
        <div
        id={this.labelId}
        className={this.state.labelClass}
        onMouseOver={() => this.onMouseOverHandler()}
        onMouseLeave={() => this.onMouseLeaveHandler()}
        onClick={() => this.onClickHandler()}>
          {this.state.label}
        </div>
        <div
        className={this.styles.mark}
        onMouseLeave={() => this.onMouseLeaveHandler()}
        onClick={() => this.onClickHandler()}/>
        <div
        id={this.proxyId}
        className={this.state.proxyClass}
        onMouseOver={() => this.onMouseOverHandler()}
        onMouseLeave={() => this.onMouseLeaveHandler()}
        onClick={() => this.onFocusHandler()}>
          {this.props.manager('optionDecorate', this.state.value)}
        </div>
        <select 
        style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, opacity: 0, zIndex: -1 }}
        className='detached-select-js-select'
        onKeyDown={(e) => this.onKeyDownHandler(e)}
        disabled={this.state.disabled}
        onFocus={() => this.onFocusHandler()}
        defaultValue={null}
        id={this.id}>
          <option
          key={'nullKey'}
          value={null}/>
          {this.state.options.map((option) => (
          <option
          key={this.props.manager('optionKey', option + 'originalSelect')}
          value={this.props.manager('optionValue', option)}>
            {this.props.manager('optionDecorate', option)}
          </option>))}
        </select>
        <div
        className={this.styles.error}>
          {this.state.error}
        </div>
      </div>
    )
  }
}