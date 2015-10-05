var test = require('tape');
var render = require('./');

test('tagOpen', function(t){
  t.equal(render.tagOpen({ name: 'foo' }), '<foo>');
  t.equal(render.tagOpen({
    name: 'foo',
    attributes: {
      bar: 'baz',
      beep: 'boop'
    }
  }), '<foo bar="baz" beep="boop">');
  t.end();
});

test('declaration', function(t){
  t.equal(render.declaration({ name: 'foo' }), '<?foo?>');
  t.equal(render.declaration({
    name: 'foo',
    attributes: {
      bar: 'baz',
      beep: 'boop'
    }
  }), '<?foo bar="baz" beep="boop"?>');
  t.end();
});

test('attributes', function(t){
  t.equal(render.attributes({ attributes: {} }), '');
  t.equal(render.attributes({
    attributes: {
      bar :'baz'
    }
  }), 'bar="baz"');
  t.equal(render.attributes({
    attributes: {
      bar :'baz',
      beep: 'boop'
    }
  }), 'bar="baz" beep="boop"');
  t.end();
});

test('tagClose', function(t){
  t.equal(render.tagClose({ name: 'foo' }), '</foo>');
  t.end();
});

test('leaf', function(t){
  t.equal(render.leaf({ name: 'foo', content: 'bar' }), '<foo>bar</foo>');
  t.equal(render.leaf({
    name: 'foo',
    content: 'bar',
    attributes: {
      beep: 'boop'
    }
  }), '<foo beep="boop">bar</foo>');
  t.end();
});

test('node', function(t){
  t.equal(render.node({ name: 'foo', content: 'bar' }), '<foo>bar</foo>');
  t.equal(render.node({
    name: 'foo',
    content: 'bar',
    attributes: {
      beep: 'boop'
    }
  }), '<foo beep="boop">bar</foo>');
  t.equal(render.node({
    name: 'foo',
    attributes: {
      beep: 'boop'
    },
    children: [
      { name: 'heavy', content: 'metal' }
    ]
  }), '<foo beep="boop">\n\t<heavy>metal</heavy>\n</foo>');
  t.equal(render.node({
    name: 'foo',
    attributes: {
      beep: 'boop'
    },
    children: [{
      name: 'love',
      children: [{ name: 'jazz', content: 'pop' }]
    }]
  }), '<foo beep="boop">\n\t<love>\n\t\t<jazz>pop</jazz>\n\t</love>\n</foo>');
  t.end();
});

