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
  
  drinks.forEach((e) => {
    console.log(`${e.name} ${e.price}`);
  });

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

    console.log('maxPossibleScore:', maxPossibleScore);
  
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

{
  function maximumScore(tileHand) {
    const score1 = tileHand[0].score;
    const score2 = tileHand[1].score;
    const score3 = tileHand[2].score;
    const score4 = tileHand[3].score;
    const score5 = tileHand[4].score;
    const score6 = tileHand[5].score;
    const score7 = tileHand[6].score;
  
    const maxScore = score1 + score2 + score3 + score4 + score5 + score6 + score7
  
   console.log('maxScore:', maxScore);
  
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
  
    console.log(whatNeedsToBeRepaid);
  
  }
  
  calculateDifference({ "baseball bat": 20 }, 5); // ➞ 15
  
  calculateDifference({ skate: 10, painting: 20 }, 19); // ➞ 11
  
  calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400); // ➞ 1
  
  calculateDifference({ cat: 200, dog: 200, pot: 100 }, 400); // ➞ 100
}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{

}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{

}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{

}
console.groupEnd();
