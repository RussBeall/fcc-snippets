function rot13(str) { // LBH QVQ VG!
  let work = str.split('');
  work = work.map(char => {
    return char.charCodeAt();
  });
  let result = work.map(val => {
    if (val >= 65) {
      val = val - 13;
      if (val < 65) {
        val += 26;
      }
    }
    return String.fromCharCode(val);
  }).join('');
  return result;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC")); // should decode to FREE CODE CAMP
console.log(rot13("SERR CVMMN!")); // should decode to FREE PIZZA!
console.log(rot13("SERR YBIR?")); // should decode to FREE LOVE ?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
