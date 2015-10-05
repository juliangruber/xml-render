
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
  attributes: {
    bar: 'baz',
    beep: 'boop'
  }
});
// => <?xml bar="baz" beep="boop"?>

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

render.document({
  declaration: {
    attributes: { foo: 'bar' }
  },
  root: { name: 'beep', content: 'boop' }    
})
// => <?xml foo="bar"?>
      <beep>boop</beep>
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
### .document(node)

## License

  MIT

