Promise vs Callback
===================

## Environment

```
> process.versions
{ http_parser: '2.4',
  node: '1.0.4',
  v8: '4.1.0.12',
  uv: '1.2.1',
  zlib: '1.2.8',
  ares: '1.10.0-DEV',
  modules: '42',
  openssl: '1.0.1k' }
```

## Results

### Promise
```
$ time iojs promise.js
{ rss: 14286848, heapTotal: 9799680, heapUsed: 3744464 }
{ rss: 302981120, heapTotal: 290247680, heapUsed: 261997592 }

real    0m2.318s
user    0m2.048s
sys     0m0.256s
```

### Callback
```
$ time iojs callback.js
{ rss: 14278656, heapTotal: 9799680, heapUsed: 3744392 }
{ rss: 137953280, heapTotal: 127214080, heapUsed: 108066208 }

real    0m0.401s
user    0m0.288s
sys     0m0.100s
```
