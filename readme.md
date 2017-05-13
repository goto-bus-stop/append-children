# append-children

Append children to a DOM element.

## Install

With npm do:

```
npm install --save append-children
```

## Usage

```js
var appendChildren = require('append-children')
var element = document.createElement('div')

// append a single thing
appendChildren(element, document.createElement('p'))

// append multiple things
appendChildren(element, [
  // other DOM elements
  document.createElement('span'),
  // strings and friends
  'hello world',
  123,
  /regexes/gi,
  new Date(),
  // nested arrays of things to append
  [[[someOtherElement()]]]
])

function someOtherElement() {
  var hello = document.createElement('span')
  appendChildren(hello, 'hello')
  var world = document.createElement('strong')
  appendChildren(world, 'world')
  return [hello, ' ', world]
}
```

## API

### appendChildren(element, child)

Append a DOM element `child` to another DOM element `element`.

### appendChildren(element, str)

Append a string `str` to a DOM element `element`.
A Text node will be created to contain the string.
RegExps, Dates and Numbers are converted to a string using `toString()`.

### appendChildren(element, arr)

Append multiple things to a DOM element `element`.
`arr` can be an array of any of the things accepted by the other forms.

## License

[MIT](./LICENSE)
