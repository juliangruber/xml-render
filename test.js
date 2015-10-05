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

