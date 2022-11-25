// ----------------------Užduotys--------------------------
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];

console.group('4. Atrinkti tiktai teigimų elementų masyvą');
console.log('---');

{
  function filterPositives(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i += 1) {
      let element = arr[i];
      if (element > 0) result[result.length] = element;
      }
      
    return result;
  }

  console.log({
    numbers,
    result: filterPositives(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();
