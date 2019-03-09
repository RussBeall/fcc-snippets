function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  arr.map(obj => {
    let period = 2.0 * Math.PI * Math.sqrt( Math.pow((6367.4447 + obj.avgAlt),3)/GM );
    obj.orbitalPeriod = Math.round(period);
    delete obj.avgAlt;
  });

  return arr;
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }])); // should return [{ name: "sputnik", orbitalPeriod: 86400 }].
console.log(orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }])); // should return [{ name: "iss", orbitalPeriod: 5557 }, { name: "hubble", orbitalPeriod: 5734 }, { name: "moon", orbitalPeriod: 2377399 }].
