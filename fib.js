function sumFibs(num) {
  let i = 0;
  let fibarray = [];
  let fib2back = 0;
  fibarray.push(fib2back);
  //console.log(fib2back);
  if( num == 0)
    return fib2back;
  let fib1back = 1;
  fibarray.push(fib1back);
  //console.log(fib1back);
  if( num == 1)
    return fib1back;
  i++;
  let fibnum = fib2back + fib1back;
  fibarray.push(fibnum);
  //console.log(fibnum);
  i++
  while (i < num) {
    fib2back = fib1back;
    fib1back = fibnum;
    fibnum = fib2back + fib1back;
    fibarray.push(fibnum);
    i++;
    //console.log(fibnum);
  }
  //process the array
  let sum = 0;
  for( let j = 0; j < fibarray.length; j++) {
    if(fibarray[j]%2 == 1 && fibarray[j] <= num){
      sum += fibarray[j];
    }
  }
  return sum;
}

console.log(sumFibs(4));

console.log(sumFibs(1)); // should return a number.
console.log(sumFibs(1000)); // should return 1785.
console.log(sumFibs(4000000)); // should return 4613732.
console.log(sumFibs(75024)); // should return 60696.
console.log(sumFibs(4)); // should return 5.
console.log(sumFibs(75025)); // should return 135721.
