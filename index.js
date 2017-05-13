module.exports = function appendChildren(el, children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      appendChildren(el, children[i])
    }
    return
  }
  if (typeof children === 'number' || typeof children === 'boolean' ||
      children instanceof Date || children instanceof RegExp) {
    children = children + ''
  }
  if (typeof children === 'string') {
    if (el.lastChild && el.lastChild.nodeType === 3 /* Node.TEXT_NODE */) {
      el.lastChild.nodeValue += children
    } else {
      children = document.createTextNode(children)
    }
  }
  if (children && children.nodeType) {
    el.appendChild(children)
  }
}
