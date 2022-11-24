// ----------------------Užduotys--------------------------
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];

console.group('1. Padauginti masyvo narius iš 2 ir išsaugoti naujame masyve');
console.log('---');
{
  function mulArrBy2(number) {
    return number * 2;
  }

  const doubleNumber = numbers.map(mulArrBy2);

  console.log({
    numbers,
    result: doubleNumber
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('2. Pakelti masyvo narius kvadratu ir išsaugoti naujame masyve');
console.log('---');
{
  function powerArrBy2(number) {
    return number ** 2;
  }

  const powerOf2Number = numbers.map(powerArrBy2);

  console.log({
    numbers,
    result: powerOf2Number
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('3. Padauginti masyvo narius iš jų index\'o (vietos masyve) ir išsaugoti naujame masyve');
console.log('---');
{
  function mulArrElementsByIndex(number, i) {
    return number * i;
  }

  const numberMultipliedByIndex = numbers.map(mulArrElementsByIndex);

  console.log({
    numbers,
    result: numberMultipliedByIndex
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('4. Atrinkti tiktai teigimų elementų masyvą');
console.log('---');
{
  function filterPositives(number) {
    return number > 0;
  }

  const positiveNumbers = numbers.filter(filterPositives);
  console.log({
    numbers,
    result: positiveNumbers
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('5. Atrinkti tiktai neigiamų elementų masyvą');
console.log('---');
{
  function filterNegatives(number) {
    return number < 0;
  }

  const negativeNumbers = numbers.filter(filterNegatives);
  console.log({
    numbers,
    result: negativeNumbers
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('6. Atrinkti tiktai lyginių skaičių masyvą');
console.log('---');
{
  function filterEquals(number) {
    return number % 2 === 0;
  }

  const equalNumbers = numbers.filter(filterEquals);
  console.log({
    numbers,
    result: equalNumbers
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('7. Atrinkti tiktai nelyginių skaičių masyvą');
console.log('---');
{
  function filterOdds(number) {
    return number % 2 === 1 || number % 2 === -1;
  }

  const oddNumbers = numbers.filter(filterOdds);
  console.log({
    numbers,
    result: oddNumbers
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group("8. Visas neigiamas vertes masyve padaryti teigiamomis ir išsaugoti į naują masyvą");
{
  function arrAbsoluteValues(number) {
    return number = number > 0 ? number : number * -1;
  }

  const noNegativeNumbers = numbers.map(arrAbsoluteValues);
  console.log({
    numbers,
    result: noNegativeNumbers
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('9. Pakelti visas masyvo reikšmes laipsniu \'index\' ir išsaugoti naujame masyve');
console.log('---');
{
  function powArrElementsByIndex(number, i) {
    return number ** i;
  }

  const numberPowerByIndex = numbers.map(powArrElementsByIndex);

  console.log({
    numbers,
    result: numberPowerByIndex
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('10. Atrinkti tik natūralių skaičių masyvą');
console.log('---');
{
  function filterNaturals(number) {
    return number > 0 && (number % 2 === 0 || number % 2 === 1)
  }

  const naturalNumbers = numbers.filter(filterNaturals);

  console.log({
    numbers,
    result: naturalNumbers
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių ir išsaugoti naujame masyve');
console.log('---');
{
  function absArrElements(number) {
    const remainder = number % 1;
    const whole = number - remainder;

    if (remainder <= -0.5) return whole - 1;
    else if (remainder >= 0.5) return whole + 1;
      
    return whole;
  }

  const wholeNumbers = numbers.map(absArrElements);

  console.log({
    numbers,
    result: wholeNumbers
  });
 
}
console.log('---');
console.groupEnd()

console.group('12. Atrinkti kas antrą elementą');
console.log('---');
{
  function filterEverySecondElement(_, i) {
    return i % 2 === 0;
  }

  const everySecondElement = numbers.filter(filterEverySecondElement);

  console.log({
    numbers,
    result: everySecondElement
  });
}
console.log('---');
console.groupEnd();

console.group('13. Atrinkti kas penktą elementą');
console.log('---');
{
  function filterEveryFifth(_, i) {
    return i === 0 || i % 5 === 0;
  }

  const everySecondFifth = numbers.filter(filterEveryFifth);
  
  console.log({
    numbers,
    result: everySecondFifth
  });
}
console.log('---');
console.groupEnd();


console.group('14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)');
console.log('---');
{
  function printArr(number, i) {
    console.log (`[${i}] => ${number}`);
  }
  numbers.map(printArr);
 
  console.log({numbers});
}
console.log('---');
console.groupEnd();

console.group('15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą');
console.log('---');
{
  function sumArrReducer(prevSum, number) {
    return prevSum + number;
  }

  const sumArr = numbers.reduce(sumArrReducer);

  console.log({
    numbers,
    result: sumArr
  });
}
console.log('---');
console.groupEnd()

console.group('16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį');
console.log('---');
{
  function avgArrReducer(prevSum, number) {
    return prevSum + number;
  }

  const avgArr = numbers.reduce(avgArrReducer) / numbers.length;

  console.log({
    numbers,
    result: avgArr
  });
}
console.log('---');
console.groupEnd()

console.group('17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.');
console.log('---');
{

  function arrMaxReducer(previousLargestNumber, currentLargestNumber) {
    return (currentLargestNumber > previousLargestNumber) ? currentLargestNumber : previousLargestNumber;
  }

  const arrMax = numbers.reduce(arrMaxReducer);

  console.log({
    numbers,
    result: arrMax
  });
}
console.log('---');
console.groupEnd()

console.group('18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.');
console.log('---');
{
  function arrMinReducer(previousSmallestNumber, currentSmallestNumber) {
    return (currentSmallestNumber < previousSmallestNumber) ? currentSmallestNumber : previousSmallestNumber;
  }

  const arrMin = numbers.reduce(arrMinReducer);

  console.log({
    numbers,
    result: arrMin
  });
}
console.log('---');
console.groupEnd();