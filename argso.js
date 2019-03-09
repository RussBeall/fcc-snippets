function addTogether() {
  if( arguments.length === 1){
    let a = arguments[0];
    if(typeof a != 'number')
      return undefined;
    function addInner(b) {
      if(typeof b !== 'number')
        return undefined;
      else
        return a + b;
    }
    return addInner;
  } else {
    if ((typeof arguments[0] === 'number') && (typeof arguments[1] === 'number')) {
      return arguments[0] + arguments[1];
    } else {
      return undefined;
    }
  }
}


console.log(addTogether(2, 3)); // should return 5.
console.log(addTogether(2)(3)); // should return 5.
console.log(addTogether("http://bit.ly/IqT6zt")); // should return undefined.
console.log(addTogether(2, "3")); // should return undefined.
console.log(addTogether(2)([3])); // should return undefined.
