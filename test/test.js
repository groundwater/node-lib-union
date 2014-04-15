var test = require('tap').test
var mock = require('nodemock')

test("set and get a value", function(t){
  var union = require('../index.js')().New()

  union.set('a', 'b')
  t.equals(union.get('a'), 'b')

  t.end()
})

test("push an object on the stack", function(t){
  var union = require('../index.js')().New()

  union.push()
  union.set('a', 'b')
  t.equals(union.get('a'), 'b')

  t.end()
})

test("push", function(t){
  var union = require('../index.js')().New()

  union.push()
  union.set('a', 'b')
  t.equals(union.get('a'), 'b')

  t.end()
})

test("pop a push", function(t){
  var union = require('../index.js')().New()

  union.set('a', 'a')
  union.push()
  union.set('a', 'b')
  union.pop()
  t.equals(union.get('a'), 'a')

  t.end()
})

test("get keys", function(t){
  var union = require('../index.js')().New()

  union.set('a', 'a')
  union.push()
  union.set('b', 'b')

  t.deepEquals(union.keys(), ['b', 'a'])

  t.end()
})

test("del a key", function(t){
  var union = require('../index.js')().New()

  union.set('a', 'a')
  union.del('a')

  t.deepEquals(union.keys(), [])
  t.equals(union.get('a'), undefined)

  t.end()
})

test("del a key with push", function(t){
  var union = require('../index.js')().New()

  union.set('a', 'a')
  union.push()
  union.del('a')

  t.deepEquals(union.keys(), ['a'])
  t.equals(union.get('a'), 'a')

  t.end()
})

test("del a key with push and pop", function(t){
  var union = require('../index.js')().New()

  union.set('a', 'a')
  union.push()
  union.del('a')
  union.pop()

  t.deepEquals(union.keys(), ['a'])
  t.equals(union.get('a'), 'a')

  t.end()
})

test("block keys with tombstone", function(t){
  var union = require('../index.js')().New()

  union.set('a', 'a')
  union.push()
  union.set('a', undefined)

  t.deepEquals(union.keys(), ['a'])
  t.equals(union.get('a'), undefined)

  t.end()
})
