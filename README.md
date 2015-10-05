
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

render.leaf({
  name: 'foo',
  content: 'bar',
  attributes: {
    beep: 'boop'
  }
});
// => <foo beep="boop">bar</foo>

render.node({
  name: 'foo',
  attributes: { beep: 'boop' },
  children: [{
    name: 'love',
    children: [{ name: 'jazz', content: 'pop' }]
  }]
});
// => <foo beep="boop">
        <love>
          <jazz>pop</jazz>
        </love>
      </foo>
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
### .leaf(node)
### .node(node)

## License

  MIT

