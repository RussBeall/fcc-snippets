function smallestCommons(arr) {
  let min = 0, max = 0;
  if (arr[0] < arr[1]){
    min = arr[0];
    max = arr[1];
  } else {
    min = arr[1];
    max = arr[0];
  }
  let arrVals = [];
  for (let i = min; i <= max; i++) {
    arrVals.push(i);
  }

  let lcm = arrVals[0];
  for (let j = 1; j < arrVals.length; j++) {
    lcm = (lcm * arrVals[j]) / (gcd(lcm, arrVals[j]));
  }
  return lcm;
}

function gcd(x,y) {
  let temp = 0;
  while (x != 0) {
    temp = x;
    x = y % x;
    y = temp;
  }
  return y;
}

console.log(smallestCommons([1, 5])); // should return 60.
console.log(smallestCommons([5, 1])); // should return 60.
console.log(smallestCommons([2, 10])); // should return 2520.
console.log(smallestCommons([1, 13])); // should return 360360.
console.log(smallestCommons([23, 18])); // should return 6056820.
