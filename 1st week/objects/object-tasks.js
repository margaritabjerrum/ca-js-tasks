console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
  drinks = [
    {name: "lemonade", price: 50},
    {name: "aplle", price: 100},
    {name: "lime", price: 10},
    {name: "pear", price: 25},
    {name: "orange", price: 70},
  ];
  
  function sortDrinkByPrice(a, b) {
    const priceA = a.price;
    const priceB = b.price;
  
    let comparison = 0;
    if (priceA > priceB) {
      comparison = 1;
    } else if (priceA < priceB) {
      comparison = -1;
    }
    return comparison;
  }
  
  drinks.sort(sortDrinkByPrice);

  console.log(drinks.sort(sortDrinkByPrice));
}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
  function addName(obj, name, value) {
    let newobj = obj;
    newobj[name] = value;
    console.log(newobj);
    return newobj;
  
  }
    
  addName({}, "Brutus", 300);
  addName({ piano: 500 }, "Brutus", 400);
  addName({ piano: 500, stereo: 300 }, "Caligula", 440);
}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{
  function generation(x, y) {
    const relantionshipTable = {
      '-3f': 'great grandmother',
      '-2f': 'grandmother',
      '-1f': 'mother',
      '0f': 'me!',
      '1f': 'daughter',
      '2f': 'granddaughter',
      '3f': 'great granddaughter',
      '-3m': 'great grandfather',
      '-2m': 'grandfather',
      '-1m': 'father',
      '0m': 'me!',
      '1m': 'son',
      '2m': 'grandson',
      '3m': 'great grandson',
    };
  
    const ancestors = `${x}${y}`;
  
    console.log(relantionshipTable[ancestors]);
    
    return relantionshipTable[ancestors];	
  }
  
  generation(2, "f"); // ➞ "granddaughter"
  
  generation(-3, "m"); // ➞ "great grandfather"
  
  generation(1, "f"); // ➞ "daughter"

  generation(0, 'f'); // ➞ "Me!"
}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{
  function maximumScore(tileHand) {
    let maxPossibleScore = 0;
  
    for (let i = 0; i < tileHand.length; i += 1) {
      maxPossibleScore = maxPossibleScore + tileHand[i].score;
    };

    console.log('Max Possible Score:', maxPossibleScore);
  
  }
  
  maximumScore([
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 }
  ]);
  
  maximumScore([
    { tile: "B", score: 2 },
    { tile: "V", score: 4 },
    { tile: "F", score: 4 },
    { tile: "U", score: 1 },
    { tile: "D", score: 2 },
    { tile: "O", score: 1 },
    { tile: "U", score: 1 }
  ]);
}
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{
  function calculateDifference(objWithValue, valueToSubtract) {

    let objectArray = Object.values(objWithValue);
  
    let totalObjDamage = 0;
  
    for (let i = 0; i < objectArray.length; i++) {
      totalObjDamage = totalObjDamage + objectArray[i];
    }
  
    let whatNeedsToBeRepaid = totalObjDamage - valueToSubtract
  
    console.log('How Much Needs To Be Repaid:', whatNeedsToBeRepaid);
  
  }
  
  calculateDifference({ "baseball bat": 20 }, 5); // ➞ 15
  
  calculateDifference({ skate: 10, painting: 20 }, 19); // ➞ 11
  
  calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400); // ➞ 1
  
  calculateDifference({ cat: 200, dog: 200, pot: 100 }, 400); // ➞ 100
}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{
  function toArray(obj) {

    console.log(Object.entries(obj));
    return Object.entries(obj);
  }

  toArray({ a: 1, b: 2 }); // ➞ [["a", 1], ["b", 2]]

  toArray({ shrimp: 15, tots: 12 }); // ➞ [["shrimp", 15], ["tots", 12]]

  toArray({}); // ➞ []
}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{
  function inkLevels(inks) {
    let inkMaxPages = Object.values(inks);
    let min = Math.min(...inkMaxPages);

    console.log('Max pages that can be printed:', min);
  }

  inkLevels({
    "cyan": 23,
    "magenta": 12,
    "yellow": 10
  })// ➞ 10
  
  inkLevels({
    "cyan": 432,
    "magenta": 543,
    "yellow": 777
  }) // ➞ 432
  
  inkLevels({
    "cyan": 700,
    "magenta": 700,
    "yellow": 0
  }) // ➞ 0
}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{

  function calculateLosses(obj) {
    let valueArray = Object.values(obj);

    let totalValueOfStolenItems = 0;

    for (let i = 0; i < valueArray.length; i += 1) {
      totalValueOfStolenItems = totalValueOfStolenItems + valueArray[i];
    }

    if (totalValueOfStolenItems > 0) {
      console.log('Total Value Of Stolen Items:', totalValueOfStolenItems);
    } else {
      console.log('Lucky you!')
    }
  }
  
  calculateLosses({
    tv: 30,
    skate: 20,
    stereo: 50,
  }); // ➞ 100
  
  calculateLosses ({
    painting: 20000,
  }); // ➞ 20000
  
  calculateLosses ({}); // ➞ "Lucky you!"

}
console.groupEnd();
