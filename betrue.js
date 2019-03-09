function truthCheck(collection, pre) {
  let first = collection.map(obj => {
    let bval = true;
    if (pre in obj){
      let keys = Object.keys(obj);
      if(Boolean(obj[pre]) !== true)
        bval = false;
    } else {
      bval = false;
    }
    return bval;
  });
  console.log(first);
  for (let i = 0; i < first.length; i++){
    if(first[i] === false)
      return false;
  }
  return true;
}

console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex")); // should return true.
console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex")); // should return false.
console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male", "age": 0 }, { "user": "Dipsy", "sex": "male", "age": 3 }, { "user": "Laa-Laa", "sex": "female", "age": 5 }, { "user": "Po", "sex": "female", "age": 4 }], "age")); // should return false.
console.log(truthCheck([{ "name": "Pete", "onBoat": true }, { "name": "Repeat", "onBoat": true }, { "name": "FastFoward", "onBoat": null }], "onBoat")); // should return false
console.log(truthCheck([{ "name": "Pete", "onBoat": true }, { "name": "Repeat", "onBoat": true, "alias": "Repete" }, { "name": "FastFoward", "onBoat": true }], "onBoat")); // should return true
console.log(truthCheck([{ "single": "yes" }], "single")); // should return true
console.log(truthCheck([{ "single": "" }, { "single": "double" }], "single")); // should return false
console.log(truthCheck([{ "single": "double" }, { "single": undefined }], "single")); // should return false
console.log(truthCheck([{ "single": "double" }, { "single": NaN }], "single")); // should return false
