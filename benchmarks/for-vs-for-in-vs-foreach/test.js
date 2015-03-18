var arr = [];
var length = 1000000;
for (var i = 0, l = length; i < l; i ++) {
  arr.push(i);
}

console.time('for');
for (var i = 0, l = arr.length; i < l; i ++) {
  arr[i]++;
}
console.timeEnd('for');

console.time('for-in');
for (var i in arr) {
  arr[i]++;
}
console.timeEnd('for-in');

console.time('forEach');
arr.forEach(function(elem, i) {
  arr[i]++;
});
console.timeEnd('forEach');
