# Managed Inputs
Managed Inputs are single function managed inputs for React.

To add Managed Inputs to a React project:
```
npm install --save managed-inputs
```
and then
```
import { ManagedText } from 'managed-inputs'
import { ManagedTextarea } from 'managed-inputs'
import { ManagedSelect } from 'managed-inputs'
import { ManagedCheckbox } from 'managed-inputs'
import { ManagedButton } from 'managed-inputs'

<ManagedText manager={/*manager function*/} />
<ManagedTextarea manager={/*manager function*/} />
<ManagedSelect manager={/*manager function*/} />
<ManagedCheckbox manager={/*manager function*/} />
<ManagedButton manager={/*manager function*/} />
```

## Managers
Managers are functions which manage all aspects of a given Managed Input. Each Managed Input has one and only one manager.

To construct a manager for a Managed Input bind the manager to a React class component and then:

* text
```
import { textManagerFactory } from 'managed-inputs'

function /*manager name*/(aspect, value) {
  return textManagerFactory.call(this)(aspect, aspects)
}
```

* textarea
```
import { textareaManagerFactory } from 'managed-inputs'

function /*manager name*/(aspect, value) {
  return textareaManagerFactory.call(this)(aspect, aspects)
}
```

* checkbox
```
import { checkboxManagerFactory } from 'managed-inputs'

function /*manager name*/(aspect, value) {
  return checkboxManagerFactory.call(this)(aspect, aspects)
}
```

* select
```
import { selectManagerFactory } from 'managed-inputs'

function /*manager name*/(aspect, value) {
  return selectManagerFactory.call(this)(aspect, aspects)
}
```

* button
```
import { buttonManagerFactory } from 'managed-inputs'

function /*manager name*/(aspect, value) {
  return buttonManagerFactory.call(this)(aspect, aspects)
}
```

## Aspects
R - required, O - optional

### Shared
The `aspects` parameter of all Managed Inputs accepts the following:
* `id` - string | R
* `display` - string | default: `block` | O
* `disabled` - boolean | default: `false` | O
* `classNames` - object | default: see below | O
* `label` - string or JSX | default: none | O
* `onMouseOver` - function | default: none | O
* `onMouseLeave` - function | default: none | O
* `onFocus` - function | default: none | O
* `onBlur` - function | default: none | O
* `onClick` - function | default: none | O
* `flag` - string, number or boolean | default: none | O

The `aspects` parameter of all Managed Inputs but Button accepts also:
* `error` - string or JSX | default: none | O

The `aspects` parameter of all Managed Inputs but Button and Select accepts also:
* `controlled` - boolean | default: `true` | O
* `onChange` - function | default: none | O
* `setValue` - function | default: none | O

The `aspects` parameter of all Managed Inputs but Button and Checkbox accepts also:
* `value` - string | default: none | O

The `aspects` parameter of all Managed Inputs but Select and Button accepts also:
* `validate` - function | default: none | O

### Specific
The `aspects` parameter of Managed Text accepts also the following:
* `type` - string | default: `text` | O
* `autoComplete` - string | default: none | O

The `aspects` parameter of Managed Textarea accepts also the following:
* `counterLimit` - integer | default: none | O

The `aspects` parameter of Managed Select accepts also the following:
* `options` - array | R
* `optionKey` - option derived string | R
* `optionValue` - option derived string, number or boolean | R
* `optionDecorate` - option derived string | R
* `onSelect` - function | R

The `aspects` parameter of Managed Checkbox accepts also the following:
* `checked` - boolean | default: `false` | O

## Styles
All Managed Inputs have default CSS classes.

The default CSS classes for containers are (respectively):
* `managed-input text`
* `managed-input textarea`
* `managed-input select`
* `managed-input checkbox`
* `managed-input button`

The default class for `input` is `input` however when Manged Select and Checkbox are concerned the class regards a `div` element which is displayed instead of the original DOM elements (which are always invisible).

CSS classes for `label`, `error container` and `error` are:
* `label`
* `error-container`
* `error`

All elements of the Managed Inputs (i.e. inputs, labels, errors) get the following classes when applicable:
* `value`
* `checked`
* `focus`
* `hover`

All default CSS classes can be overriden using `classNames` property of the `aspects` parameter:
```
className: {
  container: ...,
  input: ...,
  label: ...,
  value: ...,
  focus: ...,
  hover: ...,
  errorContainer: ...,
  error: ...
}
```

Unique CSS classes are:
* Textarea: `counter`
* Select: `options`, `option`, `mark`
* Checkbox: `tick`

