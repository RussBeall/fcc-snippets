function uniteUnique(...arrays) {
  var args = []; // Empty array, at first.
  for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i])
  } // Now 'args' is an array that holds your arguments.
  let result = [];
  args.forEach(vector => {
    vector.forEach( value => {
      if(result.length > 0) {
        if(result.indexOf(value) < 0) {
          result.push(value);
        }
      } else {
        result.push(value);
      }
    });
  });
  return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // should return [1, 3, 2, 5, 4].
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])); // should return [1, 3, 2, [5], [4]].
console.log(uniteUnique([1, 2, 3], [5, 2, 1])); // should return [1, 2, 3, 5].
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); // should return [1, 2, 3, 5, 4, 6, 7, 8].
