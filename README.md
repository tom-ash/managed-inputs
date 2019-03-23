# Managed Inputs
Single source managed inputs for React.

To add Managed Inputs to a React project:
```
npm install --save managed-inputs
```
and then
```
import { ManagedText } from 'managed-inputs'
import { ManagedSelect } from 'managed-inputs'
import { ManagedButton } from 'managed-inputs'
import { ManagedCheckbox } from 'managed-inputs'

<ManagedText manager={/*manager function*/} />
<ManagedSelect manager={/*manager function*/} />
<ManagedButton manager={/*manager function*/} />
<ManagedCheckbox manager={/*manager function*/} />
```

To construct a manager for a Managed Input bind the manager to a React class component and then:
```
/*text*/
import { textManagerFactory } from 'managed-inputs'

function /*manager name*/(aspect, value) {
  return textManagerFactory.call(this)(aspect, aspects)
}

/*select*/
import { selectManagerFactory } from 'managed-inputs'

function /*manager name*/(aspect, value) {
  return selectManagerFactory.call(this)(aspect, aspects)
}

/*button*/
import { buttonManagerFactory } from 'managed-inputs'

function /*manager name*/(aspect, value) {
  return buttonManagerFactory.call(this)(aspect, aspects)
}

/*checkbox*/
import { checkboxManagerFactory } from 'managed-inputs'

function /*manager name*/(aspect, value) {
  return checkboxManagerFactory.call(this)(aspect, aspects)
}
```

The `aspects` parameter for a Managed Input accepts the following:
```
/*text*/
{
  id: /*string*/,
  display: /*"block" or "none"*/,
  styles: /*object*/,
  value: /*string*/,
  label: /*string*/,
  type: /*string*/,
  disabled: /*boolean*/,
  detached: /*boolean*/,
  autoComplete: /*string*/,
  onChange: /*function*/,
  setValue: /*function*/,
  onBlur: /*function*/,
  validate: /*function*/,
  error: /*string*/,
  flag: /*string, number, boolean*/
}

/*select*/
{
  id: /*string*/,
  display: /*"block" or "none"*/,
  styles: /*object*/,
  disabled: /*boolean*/,
  value: /*string*/,
  label: /*string*/,
  options: /*array*/,
  optionKey: /*function*/,
  optionValue: /*string, number*/,
  optionDecorate: /*function*/,
  setValue: /*function*/,
  onSelect: /*function*/,
  error: /*string*/,
  flag: /*string, number, boolean*/
}

/*button*/
{
  id: /*string*/,
  display: /*"block" or "none"*/,
  disabled: /*boolean*/,
  styles: /*object*/,
  onMouseOver: /*function*/,
  onClick: /*function*/,
  onMouseLeave: /*function*/,
  label: /*string*/,
  error: /*string*/,
  flag: /*string, number, boolean*/
}

/*checkbox*/
{
  id: /*string*/,
  detached: /*boolean*/,
  disabled: /*boolean*/,
  styles: /*object*/,
  label: /*string*/,
  checked: /*boolean*/,
  onClick: /*function*/,
  validate: /*function*/,
  setValue: /*function*/,
  error: /*string*/,
  flag: /*string, number, boolean*/,
}
```

The styles property for a Managed Input accepts the following:
```
/*text*/
{
  active: /*css class*/,
  disabled: /*css class*/,
  inputWithoutValue: /*css class*/,
  inputWithoutValueMouseOver: /*css class*/,
  inputWithoutValueFocus: /*css class*/,
  inputWithValue: /*css class*/,
  labelWithoutValue: /*css class*/,
  labelWithvalue: /*css class*/,
  error: /*css class*/,
}

/*select*/
{
  active: /*css class*/,
  disabled: /*css class*/,
  proxyUnselected: /*css class*/,
  proxyUnselectedMouseOver: /*css class*/,
  proxyUnselectedFocus: /*css class*/,
  proxySelected: /*css class*/,
  labelUnselected: /*css class*/,
  labelSelected: /*css class*/,
  options: /*css class*/,
  option: /*css class*/,
  mark: /*css class*/,
  error: /*css class*/,
}

/*button*/
{
  buttonClass: /*css class*/
}

/*checkbox*/
{
  active: /*css class*/,
  disabled: /*css class*/,
  checkboxContainer: /*css class*/,
  checkbox: /*css class*/,
  tick: /*css class*/,
  labelContainer: /*css class*/,
  label: /*css class*/,
}
```