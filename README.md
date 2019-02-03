# managed-inputs
Single source managed inputs for React.

To add managed-inputs to a React project:
```
npm install --save managed-inputs
```
and then
```
import { ManagedText } from 'managed-inputs'
import { ManagedSelect } from 'managed-inputs'

<ManagedText manager={/*manager_function*/} />
<ManagedSelect manager={/*manager_function*/} />
```

To construct a manager for a managed input:
```
/*text*/
import { textManagerFactory } from 'managed-inputs'

function /*manager_name*/(aspect, value) {
  return textManagerFactory(action, value, aspectsObject)
}

/*select*/
import { selectManagerFactory } from 'managed-inputs'

function /*manager_name*/(aspect, value) {
  return selectManagerFactory(action, value, aspectsObject)
}
```

The `aspectsObject` for a managed input accept the following:
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

The styles object for a managed input accept the following:
```
/*text*/
{
  active: /*css class as string*/,
  disabled: /*css class as string*/,
  inputWithoutValue: /*css class as string*/,
  inputWithoutValueMouseOver: /*css class as string*/,
  inputWithoutValueFocus: /*css class as string*/,
  inputWithValue: /*css class as string*/,
  labelWithoutValue: /*css class as string*/,
  labelWithvalue: /*css class as string*/,
  error: /*css class as string*/,
}

/*select*/
{
  active: /*css class as string*/,
  disabled: /*css class as string*/,
  proxyUnselected: /*css class as string*/,
  proxyUnselectedMouseOver: /*css class as string*/,
  proxyUnselectedFocus: /*css class as string*/,
  proxySelected: /*css class as string*/,
  labelUnselected: /*css class as string*/,
  labelSelected: /*css class as string*/,
  options: /*css class as string*/,
  option: /*css class as string*/,
  mark: /*css class as string*/,
  error: /*css class as string*/,
}
```