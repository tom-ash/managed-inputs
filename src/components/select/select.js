import React from 'react'
import ManagedInput from '../input/input'
import FocusCover from './components/focus-cover'
import * as handlers from './handlers/handlers'
import { componentDidUpdate } from './lifecycle/lifecycle'

export default class ManagedSelect extends ManagedInput {
  constructor(props) {
    super(props)
    this.input = React.createRef()
    this.visibleInput = React.createRef()
    this.options = React.createRef()
    this.containerClass = this.classNames.container || 'managed-input select'
    this.optionsClass = this.classNames.options || 'options'
    this.optionClass = this.classNames.option || 'option'
    this.markClass = this.classNames.mark || 'mark'
    this.componentDidUpdate = componentDidUpdate
    this.onClickHandler = handlers.onClickHandler.bind(this)
    this.onFocusHandler = handlers.onFocusHandler.bind(this)
    this.onKeyDownHandler = handlers.onKeyDownHandler.bind(this)
    this.onBlurHandler = handlers.onBlurHandler.bind(this)
    this.onFocusCoverClickHandler = handlers.onFocusCoverClickHandler.bind(this)
    this.onSelectHandler = handlers.onSelectHandler.bind(this)
    this.onOptionMouseOver = handlers.onOptionMouseOver.bind(this)
    this.disableSelectOptions = this.props.disableSelectOptions
    this.state = {
      ...this.state,
      preSelected: 0,
      top: 0,
      left: 0,
      width: 0,
      focus: false
    }
  }

  render() {
    const {
      display,
      value,
      label,
      options,
      substituteOptions,
      substituteOptionsContainerClass,
      error,
      children,
      onFocusCoverZIndex
    } = this.props
    const decorator = `${this.state.decorator}${value !== '' ? ' value' : ''}${error ? ' error' : ''}`
    const {
      focus,
      top,
      left,
      width,
      preSelected
    } = this.state

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
            <div
              ref={this.visibleInput}
              className={this.inputClass + decorator}
            >
              {(options.find(option => (option.value === value)) || {}).text}
              <div className={this.markClass + decorator} />
            </div>
          </div>
          {focus &&
          <FocusCover>
            <div
              onClick={this.onFocusCoverClickHandler}
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                left: 0,
                height: document.body.offsetHeight,
                zIndex: onFocusCoverZIndex || 2 }}
            >
              {substituteOptions &&
              <div
                className={substituteOptionsContainerClass}
                style={{ position: 'absolute', top, left, width }}
                onClick={(e) => e.stopPropagation()}
              >
                {substituteOptions}
              </div>
              }
              {focus && !this.disableSelectOptions &&
              <div
                ref={this.options}
                className={this.optionsClass + decorator}
                style={{ position: 'absolute', top, left, width }}
                onClick={(e) => e.stopPropagation()}
              >
                {options.map((option, index) => (
                <div
                  key={`key-proxy-${option.value}-${index}`}
                  onMouseOver={() => this.onOptionMouseOver(index)}
                  onClick={(e) => this.onSelectHandler(e, option)}
                  className={this.optionClass + decorator + `${preSelected === index ? ' preselected' : ''}`}
                >
                  {option.text}
                </div>))}
              </div>}
            </div>
          </FocusCover>
          }
          <select
            ref={this.input}
            id={this.id}
            value={value}
            readOnly={true}
            style={{ position: 'absolute', left: -10000 }}
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
