
# xml-render

  Render XML parsed by [xml-parser](https://npmjs.org/package/xml-parser).

## Example

```js
var render = require('xml-render');

render.tagOpen({
  name: 'foo',
  attributes: {
    bar: 'baz',
    beep: 'boop'
  }
});
// => <foo bar="baz" beep="boop">

render.declaration({
  name: 'foo',
  attributes: {
    bar: 'baz',
    beep: 'boop'
  }
});
// => <?foo bar="baz" beep="boop"?>

render.attributes({
  attributes: {
    bar: 'baz',
    beep: 'boop'
  }
});
// => bar="baz" beep="boop"

render.tagClose({
  name: 'foo'
});
// => </foo>
```

## Installation

```bash
$ npm install xml-render
```

## API

### .tagOpen(node)
### .declaration(node)
### .attributes(node)
### .tagClose(node)

## License

  MIT

