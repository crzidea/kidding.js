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
0 == null;      // false
0 == undefined; // false
1 > null;       // true
1 > undefined;  // false
```
