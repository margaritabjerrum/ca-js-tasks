console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  // ...sprendimas ir spausdinimas
  function returnFirtsItemFromArray(arr) {
    const firstItemFromArray = arr[0];

    console.log(firstItemFromArray);
  }

  returnFirtsItemFromArray (['liuc', 'begemoc', 'kasaloc']);
  returnFirtsItemFromArray ([1, 5, 7]);
  returnFirtsItemFromArray (['duona', 'pienas', 'morka']);
}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
  // ...sprendimas ir spausdinimas
function removeAndReturnFirstElement(arr) {
  return arr.shift();
}

  const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

  const result = removeAndReturnFirstElement(plants);

  console.log(result);
  console.log(plants);
  
}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  // ...sprendimas ir spausdinimas
  function returnLastItemFromArray(arr) {
    const lastIndexNumber = arr.length - 1;
    const lastItemFromArray = arr[lastIndexNumber];

    return lastItemFromArray;
  }

  const result = returnLastItemFromArray (['liuc', 'begemoc', 'kasaloc', 'duona', 'pienas', 'morka']);

  console.log(result);
}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
  // ...sprendimas ir spausdinimas
  function removeAndReturnLastElement(arr) {
    return arr.pop();
  }
  
    const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
  
    const result = removeAndReturnLastElement(plants);
  
    console.log(result);
    console.log(plants);
    
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
  // ...sprendimas ir spausdinimas
  function elementNumberInArray(arr) {
    const numberOfElements = arr.length;

    return numberOfElements;
  }

  const result = elementNumberInArray (['liuc', 'begemoc', 'kasaloc', 'duona', 'pienas', 'morka']);

  console.log(result);
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  // ...sprendimas ir spausdinimas
  function returnLastItemFromArray(arr) {
    const lastIndexNumber = arr.length - 1;

    console.log(lastIndexNumber);
  }

  returnLastItemFromArray (['liuc', 'begemoc', 'kasaloc', 'duona', 'pienas', 'morka', 'bananai', 'cirkas', 'be', 'pinigu']);
}
console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  // ...sprendimas ir spausdinimas
 function printAllIndexes(arr) {
  for (let  i= 0; i < arr.length; i += 1) {
    arr[i] = console.log(i);
    }
 }

 printAllIndexes (['liuc', 'begemoc', 'kasaloc', 'duona', 'pienas', 'morka', 'bananai', 'cirkas', 'be', 'pinigu']);

}
console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  // ...sprendimas ir spausdinimas
  function printAllValues(arr) {
    for (let i = 0; i < arr.length; i += 1) {
      arr[i] = console.log(arr[i]);
      }
   }

   printAllValues (['liuc', 'begemoc', 'kasaloc', 'duona', 'pienas', 'morka', 'bananai', 'cirkas', 'be', 'pinigu']);
}
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  // ... sprendimas ir spausdinimas
  function printAllIndexesAndValues(arr) {
    for (let i = 0; i < arr.length; i += 1) {
      arr[i] = console.log('[' + i + ']' + ' ' + '=' + '>' + ' ' + arr[i]);
      }
   }

   printAllIndexesAndValues (['liuc', 'begemoc', 'kasaloc', 'duona', 'pienas', 'morka', 'bananai', 'cirkas', 'be', 'pinigu']);
}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  // ...sprendimas ir spausdinimas
  function printAllValues(arr) {
    for (let i = arr.length - 1; i >= 0; i -= 1) {
      arr[i] = console.log(arr[i]);
      }
   }

   printAllValues (['liuc', 'begemoc', 'kasaloc', 'duona', 'pienas', 'morka', 'bananai', 'cirkas', 'be', 'pinigu']);
}
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  // ...sprendimas ir spausdinimas
  function printAllIndexesInRow(arr) {
    let allIndexesInRow = '';
    for (let i = 0; i < arr.length; i += 1) {
      allIndexesInRow = allIndexesInRow + i;
      if (i !== arr.length - 1) {
        allIndexesInRow = allIndexesInRow + ' ';
      }
      }
      console.log(allIndexesInRow);
   }
  
   printAllIndexesInRow (['liuc', 'begemoc', 'kasaloc', 'duona', 'pienas', 'morka', 'bananai', 'cirkas', 'be', 'pinigu']);
}
console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
  // ...sprendimas ir spausdinimas
  function printAllIndexesInRow(arr) {
    let allIndexesInRow = '';
    for (let i = 0; i < arr.length; i += 1) {
      allIndexesInRow = allIndexesInRow + arr[i];
      if (i !== arr.length - 1) {
        allIndexesInRow = allIndexesInRow + ' ';
      }
      }
      console.log(allIndexesInRow);
   }
  
   printAllIndexesInRow (['liuc', 'begemoc', 'kasaloc', 'duona', 'pienas', 'morka', 'bananai', 'cirkas', 'be', 'pinigu']);
}
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ..
{
  // ...sprendimas ir spausdinimas
  function printAllIndexesInRow(arr) {
    let allIndexesInRow = '';
    for (let i = 0; i < arr.length; i += 1) {
      allIndexesInRow = allIndexesInRow + ('[' + i + ']' + '=>' + arr[i]);
      if (i !== arr.length - 1) {
        allIndexesInRow = allIndexesInRow + ' ';
      }
      }
      console.log(allIndexesInRow);
   }
  
   printAllIndexesInRow (['liuc', 'begemoc', 'kasaloc', 'duona', 'pienas', 'morka', 'bananai', 'cirkas', 'be', 'pinigu']);
}
console.groupEnd();
