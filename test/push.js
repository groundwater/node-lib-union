var test = require('tap').test
var mock = require('nodemock')

test("push a custom object", function(t){
  var union = require('../index.js')().New()

  var x = {};
  union.push(x)
  union.set('a', 'A')

  t.equals(x['a'], 'A')

  t.end()
})

test("pop a custom object", function(t){
  var union = require('../index.js')().New()

  var x = {};
  union.set('b', 'B')
  union.push(x)
  union.set('a', 'A')

  x = union.pop()
  t.equals(x['a'], 'A')
  t.equals(x['b'], undefined)
  t.end()
})
