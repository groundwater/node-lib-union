# union objects

## usage

```javascript
var Union = require('lib-union')()

var union = Union.New();

// place default values
union.set('name', 'bob')
union.set('age', 20)

// insert a new writable layer
union.push()
union.set('name', 'tom')

// get values
union.get('name') // tom

// remove top layer
union.pop()
union.get('name') // bob
```
