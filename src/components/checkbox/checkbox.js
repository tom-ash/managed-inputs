import React from 'react'
import * as handlers from './functions/handlers'

export default class ManagedCheckbox extends React.Component {
  constructor(props) {
    super(props)
    this.id = this.props.manager('id')
    this.detached = this.props.manager('detached')
    this.onClickHandler = handlers.onClickHandler.bind(this)
    this.state={
      disabled: this.props.manager('disabled'),
      styles: this.props.manager('styles'),
      checked: this.props.manager('checked'),
      label: this.props.manager('label'),
      error: this.props.manager('error'),
      flag: this.props.manager('flag')
    }
  }

  render() {
    return (
      <div className={this.state.disabled ? this.state.styles.disabled : this.state.styles.active}>
        <div className={this.state.styles.checkboxContainer}>
          <input
          type='checkbox'
          id={this.id}
          disabled={this.state.disabled}
          readOnly={true}
          style={{ display: 'none' }}
          checked={this.detached ? undefined : this.state.checked} />
          <div
          className={this.state.styles.checkbox}
          onClick={this.onClickHandler}>
            {
            this.state.checked &&
            <div className={this.state.styles.tick} />
            }
          </div>
        </div>
        <div className={this.state.styles.labelContainer}>
          <div className={this.state.styles.label}>
            {this.state.label}
          </div>
        </div>
        <div style={{ clear: 'both' }} />
      </div>
    )
  }
}
