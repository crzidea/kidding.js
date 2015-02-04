# kidding.js
Javascript is kidding me!


----------

## Float / Double

```js
new Float32Array([0.1]);    // [0.10000000149011612]
new Float64Array([0.1]);    // [0.1]
0.9999999999999999;     // 0.9999999999999999
0.99999999999999999;    // 1
```


----------

## 0, null, undefined

```js
Number(null);       // 0
Number(undefined);  // NaN
0 == null;          // false
0 == undefined;     // false
1 > null;           // true
1 > undefined;      // false
typeof null;        // "object"
typeof undefined;   // "undefined"
```


----------

## Object

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
o2                              // Object {a: 1}
Object.keys(o2);                // []

// Instance of Function
function O () {this.a = 1;};
var o = new O;
o;                              // O {a: 1}
Object.keys(o);                 // ["a"]
function O () {};
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
var a = 0;
function b() { console.log(a); var a = 10; }
b();  // undefined
```


## Constructor, Prototype

```js
function A() { this.a = 0; }
A.prototype.a = 1;
new A();  // A {a: 0}
```

----------

## Promise, Callback

The only reason that I'm not using `Promise` is because of memory usage. You can find a test [here](./benchmarks/promise-vs-callback). I'm not saying `Promise` is bad, it was just a chose.

BTW, I'd like to use `generator` if it could be.


----------

## Misc

- [Learning Lua from JS](http://phrogz.net/lua/LearningLua_FromJS.html) - An overview of the similarities and differences between Lua and JS; a great start for JavaScript folks looking to pick up Lua.

