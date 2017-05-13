require('jsdom-global')()
var test = require('tape')
var appendChildren = require('./')

test('other elements', function (t) {
  var el = document.createElement('div')
  appendChildren(el, document.createElement('span'))
  t.equal(el.outerHTML, '<div><span></span></div>')
  t.end()
})

test('text nodes', function (t) {
  var el = document.createElement('div')
  appendChildren(el, 'hello')
  t.equal(el.firstChild.nodeType, Node.TEXT_NODE)
  t.equal(el.firstChild.nodeValue, 'hello')
  appendChildren(el, ' world')
  t.equal(el.childNodes.length, 1, 'collapsed subsequent text nodes')
  t.equal(el.firstChild.nodeValue, 'hello world')

  appendChildren(el, document.createElement('br'))
  appendChildren(el, 'bye')
  t.equal(el.childNodes.length, 3, 'did not collapse separate text nodes')
  t.equal(el.lastChild.nodeType, Node.TEXT_NODE)
  t.equal(el.lastChild.nodeValue, 'bye')
  t.end()
})

test('things that can be stringified', function (t) {
  var el = document.createElement('div')
  appendChildren(el, 123)
  appendChildren(el, /abc/gi)
  t.equal(el.textContent, '123/abc/gi')
  t.end()
})


