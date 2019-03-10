function convertToRoman(num) {
  let result = "";
  let temp = Math.floor(num/1000);
  let i = 0;
  for( i = 0; i < temp; i++){
    result += "M";
    num -= 1000;
  }

  temp = Math.floor(num / 100);
  if( temp === 9) {
    result += "CM";
    num -= 900;
  } else {
    if (temp >= 5){
      result += "D";
      num -= 500;
      temp -= 5;
      for (i = 0; i < temp; i++) {
        result += "C";
        num -= 100;
      }
    } else {
      if (temp === 4) {
        result += 'CD';
        num -= 400;
      } else {
        for (i = 0; i < temp; i++) {
          result += "C";
          num -= 100;
        }
      }
    }
  }

  temp = Math.floor(num / 10);
  if (temp === 9) {
    result += "XC";
    num -= 90;
  } else {
    if (temp >= 5) {
      result += "L";
      num -= 50;
      temp -= 5;
      for (i = 0; i < temp; i++) {
        result += "X";
        num -= 10;
      }
    } else {
    if (temp === 4) {
      result += 'XL';
      num -= 40;
    } else {
      for (i = 0; i < temp; i++) {
        result += "X";
        num -= 10;
      }
    }
  }
  }

  temp = num;
  if (temp === 9) {
    result += "IX";
    num -= 9;
  } else {
    if (temp >= 5) {
      result += "V";
      temp -= 5;
      for (i = 0; i < temp; i++) {
        result += "I";
        num -= 1;
      }
    } else {
    if(temp === 4){
      result += 'IV';
    } else {
      for (i = 0; i < temp; i++) {
        result += "I";
      }
    }
  }
  }

  return result;
}

console.log(convertToRoman(36), 36);
console.log(convertToRoman(2), 2); // should return "II".
console.log(convertToRoman(3), 3); // should return "III".
console.log(convertToRoman(4), 4); // should return "IV".
console.log(convertToRoman(5), 5); // should return "V".
console.log(convertToRoman(9), 9); // should return "IX".
console.log(convertToRoman(12), 12); // should return "XII".
console.log(convertToRoman(16), 16); // should return "XVI".
console.log(convertToRoman(29), 29); // should return "XXIX".
console.log(convertToRoman(44), 44); // should return "XLIV".
console.log(convertToRoman(45), 45); // should return "XLV"
console.log(convertToRoman(68), 68); // should return "LXVIII"
console.log(convertToRoman(83), 83); // should return "LXXXIII"
console.log(convertToRoman(97), 97); // should return "XCVII"
console.log(convertToRoman(99), 99); // should return "XCIX"
console.log(convertToRoman(400), 400); // should return "CD"
console.log(convertToRoman(500), 500); // should return "D"
console.log(convertToRoman(501), 501); // should return "DI"
console.log(convertToRoman(649), 649); // should return "DCXLIX"
console.log(convertToRoman(798), 798); // should return "DCCXCVIII"
console.log(convertToRoman(891), 891); // should return "DCCCXCI"
console.log(convertToRoman(1000), 1000); // should return "M"
console.log(convertToRoman(1004), 1004); // should return "MIV"
console.log(convertToRoman(1006), 1006); // should return "MVI"
console.log(convertToRoman(1023), 1023); // should return "MXXIII"
console.log(convertToRoman(2014), 2014); // should return "MMXIV"
console.log(convertToRoman(3999), 3999); // should return "MMMCMXCIX"
