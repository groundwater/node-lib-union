'use strict';

function Union() {
  this.stack = {};
}

Union.prototype.pop = function () {
  this.stack = Object.getPrototypeOf(this.stack);
};

Union.prototype.push = function () {
  this.stack = Object.create(this.stack);
};

Union.prototype.set = function (key, val) {
  this.stack[key] = val;
};

Union.prototype.del = function (key) {
  delete this.stack[key];
};

Union.prototype.get = function (key) {
  return this.stack[key];
};

function key(object, bucket) {
  if (object === null) return bucket;

  Object.keys(object).forEach(function(item){
    if (bucket.indexOf(item) == -1) {
      bucket.push(item);
    }
  });

  return key(Object.getPrototypeOf(object), bucket);
}

Union.prototype.keys = function () {
  return key(this.stack, []);
};

Union.New = function () {
  return Object.defineProperty(new Union(), '$', {value: this});
};

function inject(deps) {
  return Object.create(Union, deps);
}

function defaults() {
  return {

  };
}

module.exports = function INIT(deps) {
  return inject(deps || defaults());
};
