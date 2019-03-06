function fearNotLetter(str) {
  let letter = undefined;
  for(let i = 1; i < str.length; i++) {
    let diff = str.charCodeAt(i) - str.charCodeAt(i-1);
    if(diff > 1) {
      letter = String.fromCharCode(str.charCodeAt(i - 1)+1);
    }
  }
  return letter;
}

console.log(fearNotLetter("abce")); // should return "d".
console.log(fearNotLetter("abcdefghjklmno")); // should return "i".
console.log(fearNotLetter("stvwx")); // should return "u".
console.log(fearNotLetter("bcdf")); // should return "e".
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // should return undefined.
