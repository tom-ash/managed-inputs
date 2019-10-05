# Managed Inputs
`Divide and conquer` - military maxim.

Managed Inputs is a React add-on library which includes built-in `out of the box` functionalities, such as labelling, CSS classing, validating, error handling and value shape imposing. For example, when an error is transmitted to a Managed Input ALL its elements get CSS class `error`.

Managed Inputs aim to implement the rule of `separation of concerns` with regards to a JSX 'DOM'. It advocates the pattern of extraction of all the logic regarding a given input from the JSX to a separate `manager` function. For example, for a Managed Text the only thing left in the JSX should be:
```
<ManagedText {...fooBarManager()} />
```
All the logic regarding the input should be transferred to a manager function which may take the following form:
```
function fooBarManager() {
  return {
    value: this.state.fooBar,
    label: 'fooBar',
    onChange: (value) => this.setState({ fooBar: value })
  }
}
```

Managed Inputs include Text, Textarea, Select, Radio, Checkbox, Multiple Checkbox, Button and Pagination.

## Managers
Managers are functions which should manage all aspects of a given Managed Input.

All Managed Inputs accept the following parameters:
* `display`: string (default: `block`)
* `classNames`: object
* `onMouseOver`: function
* `onMouseLeave`: function
* `onFocus`: function
* `onBlur`: function
* `onClick`: function
* `validate`: function

The Text, Select and Textarea accept also:
* `error`: string or JSX

All Managed Inputs but Radio and Multiple Checkbox accept also:
* `id`: string
* `disabled`: boolean (default: `false`)
* `label`: string or JSX

All Managed Inputs but Button and Select accept also:
* `onChange`: function

Managed Text accepts also:
* `controlled`: boolean (default: `true`)
* `type`: string (default: `text`)
* `autoComplete`: string

All Managed Inputs but Button, Checkbox and Multiple Checkbox accept also:
* `value`: string

Managed Textarea accepts also:
* `counterLimit`: integer

Managed Select accepts also:
* `options`: array of which each element is like the following object:
  `{ value: string, text: string }`
* `onSelect`: function

Managed Checkbox and Radio accept also:
* `checked` - boolean (default `false`)

Managed Multiple Checkbox accept also:
* `checkboxes`: array of which each element is like the following object:
  `{ ref: string, checked: boolean, label: string }`

Managed Radio accept also:
* `name`: string
* `radios`: array of which each element is like the following object:
  `{ value: string, label: string }`

## Styles
All Managed Inputs have default CSS classes.

The default CSS classes for containers are (respectively):
* `managed-input text`
* `managed-input textarea`
* `managed-input select`
* `managed-input radio`
* `managed-input checkbox`
* `managed-input button`

The default class for `input` is `input` however when Managed Select, Radio, Checkbox and Multiple Checkbox are concerned the class regards a `div` element which is displayed instead of the original DOM elements <u>which are always invisible</u>.

CSS classes for `label` and `error` are:
* `label`
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
  error: ...
}
```

Unique CSS classes are:
* Textarea: `counter`
* Select: `options`, `option`, `preselected`, `mark`
* Checkbox, Multiple Checkbox and Radio: `tick`
