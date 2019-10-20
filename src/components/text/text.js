import React from 'react'
import PropTypes from 'prop-types';
import ManagedInput from '../input/input'
import * as handlers from './handlers/handlers'

export default class ManagedText extends ManagedInput {
  constructor(props) {
    super(props)
    this.input = React.createRef()
    this.type = this.props.type
    this.autoComplete = this.props.autoComplete
    this.match = this.props.match
    this.containerClass = this.classNames.container || 'managed-input text'
    this.onKeyDownHandler = handlers.onKeyDownHandler.bind(this)
    this.onChangeHandler = handlers.onChangeHandler.bind(this)
  }

  render() {
    const {
      controlled,
      display,
      disabled,
      value,
      label,
      children,
      error
    } = this.props

    const decorator = `${this.state.decorator}${error ? ' error' : ''}${this.input.current && (this.input.current.value || value) ? ' value' : ''}`

    return (
      <div
        style={{ display }}
        className={this.containerClass + decorator}
        onMouseOver={this.onMouseOverHandler}
        onMouseLeave={this.onMouseLeaveHandler}
        onClick={this.onClickHandler}
      >
        <div className={this.labelClass + decorator}>
          {label}
        </div>
        <input
          ref={this.input}
          type={this.type}
          disabled = {disabled}
          id={this.id}
          className={`${this.inputClass}${decorator}`}
          autoComplete = {this.autoComplete}
          value={controlled ? value : undefined}
          onFocus={this.onFocusHandler}
          onKeyDown={this.onKeyDownHandler}
          onBlur={this.onBlurHandler}
          onChange={this.onChangeHandler}
        />
        {children}
        <div className={this.errorContainerClass + decorator}>
          {error}
        </div>
      </div>
    )
  }
}

ManagedText.propTypes = {
  controlled: PropTypes.bool
}

ManagedText.defaultProps = {
  controlled: true
}
