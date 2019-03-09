function steamrollArray(arr) {
  let result = [];
  while( arr.length) {
    let e = arr.shift();
    walkarray(e, result);
  }
  return result;
}

function walkarray(element, arrOut) {
  if (!Array.isArray(element)) {
    arrOut.push(element);
  } else {
    for(let i = 0; i < element.length; i++) {
      let nextElement = element[i]; //.shift();
      walkarray(nextElement, arrOut);
    }
  }
}

//steamrollArray([1, [2], [3, [[4]]]]);

console.log(steamrollArray([[["a"]], [["b"]]])); // should return ["a", "b"].
console.log(steamrollArray([1, [2], [3, [[4]]]])); // should return [1, 2, 3, 4].
console.log(steamrollArray([1, [], [3, [[4]]]])); // should return [1, 3, 4].
console.log(steamrollArray([1, {}, [3, [[4]]]])); // should return [1, {}, 3, 4].
