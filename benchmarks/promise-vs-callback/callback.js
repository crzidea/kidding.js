console.log(process.memoryUsage());
var a = [];
for (var i = 0, l = 1048575; i < l; i ++) {
  a.push(function() {
  });
}
console.log(process.memoryUsage());
