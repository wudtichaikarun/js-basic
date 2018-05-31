function mapForEach(arr, fn) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(
      fn(arr[i])
    )
  };

  return newArr;
}

var arr1 = [1, 2, 3];
console.log('arr1: ', arr1);

// Create function on the fly
var arr2 = mapForEach(arr1, function(itme) {
  return itme * 2;
});
console.log('arr2: ', arr2);

// Create function on the fly
var arr3 = mapForEach(arr1, function(itme) {
  return itme > 2;
});
console.log('arr3: ', arr3);

// Function Expression: 
var checkPastLimit = function(limiter, item) {
  return item > limiter;
}

// invoke function and use .bind() for preset paramiter limiter
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1))
console.log('arr4: ', arr4)

/* Function Expression:
  preset paramiter limiter and don't want to use .bind() when invoke function 
*/
var simpleCheckPastLimit = function(limiter) {
  return function(limiter, item) {
    return item > limiter;
  }.bind(this, limiter)
}
// invoke function
var arr5 = mapForEach(arr1, simpleCheckPastLimit(2))
console.log('arr5: ', arr5)