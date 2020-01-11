import React from 'react'
import ManagedInput from '../input/input'

export default class ManagedLink extends ManagedInput {
  constructor(props) {
    super(props)
    this.containerClass = this.classNames.container || 'managed-input link'
  }

  render() {
    const {
      display,
      disabled,
      href,
      hrefLang,
      target,
      title,
      download,
      label,
      children
    } = this.props
    const { decorator } = this.state

    return (
      <div
        style={{ display }}
        className={this.containerClass + decorator}
      >
        <a
          ref={this.input}
          id={this.id}
          className={this.inputClass + decorator}
          disabled={disabled}
          href={href}
          hrefLang={hrefLang}
          target={target}
          title={title}
          download={download}
          onMouseOver={this.onMouseOverHandler}
          onMouseLeave={this.onMouseLeaveHandler}
          onFocus={this.onFocusHandler}
          onBlur={this.onBlurHandler}
          onClick={this.onClickHandler}
        >
          {label}
        </a>
        {children}
      </div>
    )
  }
}
