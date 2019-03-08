function pairElement(str) {
  let pairs = [['A','T'],['T','A'],['G','C'],['C','G']];
  let result = [];
  let strArray = str.split('');
  strArray.forEach(element => {
    for (let i = 0; i < pairs.length; i++) {
      if (element == pairs[i][0]){
        result.push(pairs[i]);
        break;
      }
    }
  });
  return result;
}

function pairElement2(str) {
  let pairs = [['A', 'T'], ['T', 'A'], ['G', 'C'], ['C', 'G']];
  let result = [];
  let strArray = str.split('');
  strArray.forEach(element => {
    pairs.forEach(pair => {
      if (element == pair[0]) {
        result.push(pair);
      }
    });
  });
  return result;
}

console.log(pairElement2("GCGT"));
