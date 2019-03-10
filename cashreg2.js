function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;
  let changeCalc = changeDue;
  let status = "Unknown";
  let cidOrig = cid.map(arr => {
    return arr.slice();
  });

  let result = [];
  let change = [
    ["PENNY", 0.00],
    ["NICKEL", 0.00],
    ["DIME", 0.00],
    ["QUARTER", 0.00],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ]
  let baseValue = [0.01, 0.05, 0.10, 0.25, 1.00, 5.00, 10.00, 20.00, 100.0];

  let cidTotal = cid.reduce((sum, obj) => sum=sum+obj[1],0.0);
  console.log("cidTotal = ", cidTotal);
  cidTotal = +cidTotal.toFixed(2);
  console.log("cidTotal = ", cidTotal);

  for(let i = cid.length-1; i >= 0; i--) {
    if (changeCalc >= baseValue[i]){
      while (changeCalc >= baseValue[i] && cid[i][1] > 0.001) {
        change[i][1] = change[i][1] + baseValue[i];
        change[i][1] = +change[i][1].toFixed(2);
        changeCalc = changeCalc - baseValue[i];
        changeCalc = +changeCalc.toFixed(2);
        cid[i][1] = cid[i][1] - baseValue[i];
        cid[i][1] = +cid[i][1].toFixed(2);
      }
    }
  }

  let filteredChange = [];
  for (let i = 0; i < change.length; i++) {
    if (change[i][1] > 0) {
      filteredChange.push(change[i]);
    }
  }

  if (changeCalc > 0.01){
    status = 'INSUFFICIENT_FUNDS';
  } else {
    if(changeDue == cidTotal) {
      status = 'CLOSED';
      result = cidOrig;
    } else {
      status = 'OPEN';
      result = filteredChange.reverse();
    }
  }

  return { "status": status, "change": result };
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); // should return { status: "OPEN", change: [["QUARTER", 0.5]] }

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); //) should return { status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]] }.

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // should return { status: "INSUFFICIENT_FUNDS", change: [] }.

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // should return { status: "INSUFFICIENT_FUNDS", change: [] }.

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // should return { status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]] }.
