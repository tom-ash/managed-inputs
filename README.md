# Managed Inputs
`Divide and conquer` - military maxim.

Managed Inputs is a React add-on library which aims (among other things) to implement the rule of `separation of concerns` with regards to a JSX 'DOM'. It extracts all logic regarding a given input from the JSX to a separate `manager` function which then can be put in a separate file. For example, for a Managed Text the only thing left in the JSX is:
```
<ManagedText manager={fooBarManager} />
```
All the logic regarding the input is transferred to a manager function which may take the following form:
```
function fooBarManager(aspect, value) {
  return managerAgent(aspect, {
    value: this.state.fooBar,
    label: 'fooBar',
    onChange: () => this.setState({ fooBar: value })
  })
}
```

Furthermore Managed Inputs come with built-in functionality like labelling, CSS classing, counting and error handling out of the box. For example, when an error is transmitted to a Managed Input all its elements get CSS class `error`.

Managed Inputs include Text, Textarea, Select, Radio, Checkbox, Multiple Checkbox and Button.

## Managers
Managers are functions which manage all aspects of a given Managed Input. Each Managed Input has one and only one manager.

A manager communicates with its input through a `managerAgent` function which accepts two parameters: `aspect` and `aspects`. The `aspects` parameter is an object which keys correspond to relevant aspects of the input.

The `aspects` parameter of all Managed Inputs accepts the following:
* `display`: string (default: `block`)
* `classNames`: object
* `onMouseOver`: function
* `onMouseLeave`: function
* `onFocus`: function
* `onBlur`: function
* `onClick`: function
* `validate`: function

The `aspects` parameter of all Managed Inputs but Button accepts also:
* `error`: string or JSX

The `aspects` parameter of all Managed Inputs but Radio and Multiple Checkbox accepts also:
* `id`: string
* `disabled`: boolean (default: `false`)
* `label`: string or JSX

The `aspects` parameter of Managed Inputs but Button and Select accepts also:
* `onChange`: function

The `aspects` parameter of the Managed Text and Managed Textarea accepts also:
* `controlled`: boolean (default: `true`)
* `setValue`: function

The `aspects` parameter of all Managed Inputs but Button, Checkbox and Multiple Checkbox accepts also:
* `value`: string

The `aspects` parameter of the Managed Text accepts also the following:
* `type`: string (default: `text`)
* `autoComplete`: string

The `aspects` parameter of the Managed Textarea accepts also the following:
* `counterLimit`: integer

The `aspects` parameter of the Managed Select accepts also the following:
* `options`: array of which each element is like the following object `{ value: string, text: string }`
* `onSelect`: function

The `aspects` parameter of Managed Checkbox and Radio accepts also the following:
* `checked` - boolean (default `false`)

The `aspects` parameter of Managed Multiple Checkbox accepts also the following:
* `checkboxes`: array of which each element is like the following object `{ ref: string, checked: boolean, label: string }`

The `aspects` parameter of Managed Radio accepts also the following:
* `name`: string
* `radios`: array of which each element is like the following object `{ value: string, label: string }`

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

