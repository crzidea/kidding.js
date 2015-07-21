# kidding.js
JavaScript is kidding me!


----------

## Float / Double

```js
new Float32Array([0.1]);    // [0.10000000149011612]
new Float64Array([0.1]);    // [0.1]
0.9999999999999999;     // 0.9999999999999999
0.99999999999999999;    // 1
```


----------

## Empty Values

value     | Number(value) / +value | parseInt(value) | 0 == value | 1 > value | typeof value
----------|------------------------|-----------------|------------|-----------|--------------
0         | 0                      | 0               | true       | true      | "number"   
null      | 0                      | NaN             | false      | true      | "object"
undefined | NaN                    | NaN             | false      | false     | "undefined"
false     | 0                      | NaN             | true       | true      | "boolean"
''        | 0                      | NaN             | true       | true      | "string"
[]        | 0                      | NaN             | true       | true      | "object"
{}        | NaN                    | NaN             | false      | false     | "object"


----------

## parseInt(), Number() / +

```js
// Implement toString()
var o = {toString: (function () { return ''; })}
+o              // 0
parseInt(o)     // NaN
+''             // 0
parseInt('')    // NaN
```


----------

## How to call functions of const integer

```js
var a = 4;
a.toString();   // "4"
4.toString();   // Uncaught SyntaxError: Unexpected token ILLEGAL
4..toString();  // "4"
```

WTF


----------

## Keys of object

```js
// Simple
var o = {a: 1};
Object.keys(o);                 // ["a"]

// Object.create()
var o = Object.create({a: 1});
Object.keys(o);                 // []
o.a = 1;
Object.keys(o);                 // ["a"]
delete o.a;
o;                              // Object {a: 1}
Object.keys(o);                 // []
var o2 = Object.create(o);
o2;                             // Object {a: 1}
Object.keys(o2);                // []

// Instance of Function
function O() {this.a = 1;};
var o = new O;
o;                              // O {a: 1}
Object.keys(o);                 // ["a"]
function O() {};
O.prototype.a = 1;
var o = new O;
o;                              // O {a: 1}
Object.keys(o);                 // []

// for-in
for (var key in o) {console.log(key);} // a
```

It seems like that `Object.create()` adds keys to `Object.prototype` and removes the keys after creating the instance.


----------

## NaN

```js
NaN == NaN  // false
typeof NaN  // "number"
```


----------

## Define Variable in Function

```js
var a = 1;
(function () {
  console.log(a); // undefined
  a = 2;
  var a = 3;
  console.log(a); // 3
})();
console.log(a);   // 1
```

```js
(function () { 
  console.log(a); // function a() {}
  return;
  function a() {}
})()
```

```js
(function () { 
  var a = 1; 
  console.log(a); // 1
  return; 
  function a() {}
})()
```


## Constructor, Prototype

```js
function A() { this.a = 0; }
A.prototype.a = 1;
new A();  // A {a: 0}
```


----------

## Create A String with Different Ways

```js
typeof Object('a')                  // "object"
Object('a') instanceof String       // true
Object('a') instanceof Object       // true

typeof (new String('a'))            // "object"
(new String('a')) instanceof String // true
(new String('a')) instanceof Object // true

typeof String('a')                  // "string"
String('a') instanceof Object       // false
String('a') instanceof String       // false

typeof 'a'                          // "string"
'a' instanceof Object               // false
'a' instanceof String               // false

Object('a') + 'b'           // "ab"
typeof (Object('a') + 'b')  // "string"
```


----------

## Type of alert in IE

```js
// IE 10
typeof alert            // "function" 
// IE 9
typeof alert            // "object" 
typeof (function () {}) // "function" 
```


----------

## Promise, Callback

The only reason that I'm not using `Promise` is because of memory usage. You can find a test [here](./benchmarks/promise-vs-callback). I'm not saying `Promise` is bad, it was just a chose.

BTW, I'd like to use `generator` if it could be.


----------

## Misc

- [Optimization killers](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers) - This document will contain advice to avoid writing code that will perform significantly worse than expected.
- [Learning Lua from JS](http://phrogz.net/lua/LearningLua_FromJS.html) - An overview of the similarities and differences between Lua and JS; a great start for JavaScript folks looking to pick up Lua.

