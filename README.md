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

<ManagedText manager={/*manager function*/} />
<ManagedSelect manager={/*manager function*/} />
```

To construct a manager for a Managed Input:
```
/*text*/
import { textManagerFactory } from 'managed-inputs'

function /*manager name*/(aspect, value) {
  return textManagerFactory(aspect, value, aspects)
}

/*select*/
import { selectManagerFactory } from 'managed-inputs'

function /*manager name*/(aspect, value) {
  return selectManagerFactory(aspect, value, aspects)
}
```

The `aspects` parameter for a Managed Input accepts the following:
```
/*text*/
{
  id: /*string*/,
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
```