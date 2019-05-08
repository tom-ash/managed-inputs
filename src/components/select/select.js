import React from 'react'
import ManagedInput from '../input/input'
import * as handlers from './handlers/handlers'

export default class ManagedSelect extends ManagedInput {
  constructor(props) {
    super(props)
    this.options = React.createRef()
    this.containerClass = this.classNames.container || 'managed-input select'
    this.optionsClass = this.classNames.options || 'options'
    this.optionClass = this.classNames.option || 'option'
    this.markClass = this.classNames.mark || 'mark'
    this.stateKeysToDerive = [...this.stateKeysToDerive, 'options']
    this.stateKeysToUpdate = [...this.stateKeysToUpdate, 'options', 'preSelected']
    this.onClickHandler = handlers.onClickHandler.bind(this)
    this.onKeyDownHandler = handlers.onKeyDownHandler.bind(this)
    this.onBlurHandler = handlers.onBlurHandler.bind(this)
    this.onSelectHandler = handlers.onSelectHandler.bind(this)
    this.onOptionMouseOver = handlers.onOptionMouseOver.bind(this)
    this.state = {
      ...this.state,
      stateKeysToDerive: this.stateKeysToDerive,
      options: this.props.manager('options'),
      preSelected: 0
    }
  }

  render() {
    return (
      <div
      style={{ display: this.state.display }}
      className={this.containerClass + this.state.decorator}>
        <div
        onMouseOver={this.onMouseOverHandler}
        onMouseLeave={this.onMouseLeaveHandler}>
          <div onClick={this.onClickHandler}>
            <div className={this.labelClass + this.state.decorator}>
              {this.state.label}
            </div>
            <div className={this.inputClass + this.state.decorator}>
              {this.state.options.find(option => (option.value === this.state.value)).text}
              <div className={this.markClass + this.state.decorator} />
            </div>
          </div>
          {
          this.state.focus && this.isMobile &&
          <div
          onClick={() => this.onBlurHandler(undefined, undefined, true)}
          style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, zIndex: 998 }}>
          </div>
          }
          {
          this.state.focus &&
          <div
          style={{ zIndex: 999 }}
          ref={this.options}
          className={this.optionsClass + this.state.decorator}>
            {
            this.state.options.map((option, index) => (
            <div
            key={`key-proxy-${option.value}-${index}`}
            onMouseOver={() => this.onOptionMouseOver(index)}
            onClick={() => this.onSelectHandler(option)}
            className={this.optionClass + this.state.decorator + `${this.state.preSelected === index ? ' preselected' : ''}`}>
              {option.text}
            </div>))
            }
          </div>
          }
          <select
          ref={this.input}
          id={this.id}
          value={this.state.value}
          readOnly={true}
          style={{ position: 'absolute', left: -10000 }}
          disabled={this.state.disabled}
          onFocus={this.onFocusHandler}
          onKeyDown={this.onKeyDownHandler}
          onBlur={this.onBlurHandler}>
            {
            this.state.options.map((option, index) => (
            <option
            key={`key-original-${option.value}-${index}`}
            value={option.value}>
              {JSON.stringify(option.text)}
            </option>))
            }
          </select>
        </div>
        <div className={this.errorContainerClass + this.state.decorator}>
          {this.state.error}
        </div>
      </div>
    )
  }
}