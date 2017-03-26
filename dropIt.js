function dropElements(arr, func) {
  // Drop them elements.
  var n = 0;
  while (func(arr[n]) !== true) {
      arr.splice(n, 1);
  }
 return arr;
}

dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})
