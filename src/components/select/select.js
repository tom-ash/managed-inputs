import React from 'react'
import ManagedInput from '../input/input'
import FocusCover from './components/focus-cover'
import * as handlers from './handlers/handlers'
import { componentDidUpdate } from './lifecycle/lifecycle'

export default class ManagedSelect extends ManagedInput {
  constructor(props) {
    super(props)
    this.options = React.createRef()
    this.containerClass = this.classNames.container || 'managed-input select'
    this.optionsClass = this.classNames.options || 'options'
    this.optionClass = this.classNames.option || 'option'
    this.markClass = this.classNames.mark || 'mark'
    this.componentDidUpdate = componentDidUpdate
    this.onClickHandler = handlers.onClickHandler.bind(this)
    this.onKeyDownHandler = handlers.onKeyDownHandler.bind(this)
    this.onBlurHandler = handlers.onBlurHandler.bind(this)
    this.onFocusCoverClickHandler = handlers.onFocusCoverClickHandler.bind(this)
    this.onSelectHandler = handlers.onSelectHandler.bind(this)
    this.onOptionMouseOver = handlers.onOptionMouseOver.bind(this)
    this.onFocusCoverZIndex = this.props.onFocusCoverZIndex || 2
    this.disableOnFocusCover = this.props.disableOnFocusCover
    this.disableSelectOptions = this.props.disableSelectOptions
    this.state = {
      ...this.state,
      preSelected: 0
    }
  }

  render() {
    const { display, value, options, error, children, label } = this.props
    const decorator = `${this.state.decorator}${value !== '' ? ' value' : ''}${error ? ' error' : ''}`

    return (
      <div
        style={{ display }}
        className={this.containerClass + decorator}
      >
        <div
          onMouseOver={this.onMouseOverHandler}
          onMouseLeave={this.onMouseLeaveHandler}
        >
          <div onClick={this.onClickHandler}>
            <div className={this.labelClass + decorator}>
              {label}
            </div>
            <div className={this.inputClass + decorator}>
              {(options.find(option => (option.value === value)) || {}).text}
              <div className={this.markClass + decorator} />
            </div>
          </div>
          {
          (this.state.focus && !this.disableOnFocusCover) &&
          <FocusCover>
            <div
              onClick={this.onFocusCoverClickHandler}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: this.onFocusCoverZIndex
              }}
            />
          </FocusCover>
          }
          {
          this.state.focus && !this.disableSelectOptions &&
          <div
            style={{ zIndex: 999 }}
            ref={this.options}
            className={this.optionsClass + decorator}
          >
            {
            options.map((option, index) => (
            <div
              key={`key-proxy-${option.value}-${index}`}
              onMouseOver={() => this.onOptionMouseOver(index)}
              onClick={() => this.onSelectHandler(option)}
              className={this.optionClass + decorator + `${this.state.preSelected === index ? ' preselected' : ''}`}
            >
              {option.text}
            </div>))
            }
          </div>
          }
          <select
            ref={this.input}
            id={this.id}
            value={value}
            readOnly={true}
            style={{ position: 'absolute', left: -10000 }}
            disabled={this.state.disabled}
            onFocus={this.onFocusHandler}
            onKeyDown={this.onKeyDownHandler}
            onBlur={this.onBlurHandler}
          >
            {
            options.map((option, index) => (
              <option
                key={`key-original-${option.value}-${index}`}
                value={option.value}
              >
                {option.value}
              </option>))
            }
          </select>
        </div>
        {children}
        <div className={this.errorContainerClass + decorator}>
          {error}
        </div>
      </div>
    )
  }
}
