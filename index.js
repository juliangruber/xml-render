var fmt = require('util').format;

exports.tagOpen = function(node){
  return fmt('<%s%s>', node.name, renderAttributes(node));
};

exports.declaration = function(node){
  return fmt('<?xml%s?>', renderAttributes(node));
};

function renderAttributes(node){
  var attr = exports.attributes(node);
  return attr.length ? ' ' + attr : '';
};

exports.attributes = function(node){
  if (!node.attributes) return '';
  var keys = Object.keys(node.attributes);
  if (!keys.length) return '';
  return keys.map(function(key){
    return fmt('%s="%s"', key, node.attributes[key]);
  }).join(' ');
};

exports.tagClose = function(node){
  return fmt('</%s>', node.name);
};

exports.leaf = function(node){
  return exports.tagOpen(node) + node.content + exports.tagClose(node);
};

exports.node = function(node){
  if (node.root) return exports.document(node);
  if (!node.children || !node.children.length) return exports.leaf(node);

  return exports.tagOpen(node) + '\n'
    + node.children.map(function(child){
        return exports.node(child).replace(/^/gm, '\t');
      }).join('\n') + '\n'
    + exports.tagClose(node);
};

exports.document = function(node){
  return exports.declaration(node.declaration) + '\n'
    + exports.node(node.root);
};

