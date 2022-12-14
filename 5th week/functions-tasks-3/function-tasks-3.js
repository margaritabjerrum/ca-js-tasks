console.group("1. Sukurkite funkciją, kuri atspausdiną tekstą didžiosiomis raidėmis");
{
    function printCapital(str) {
      return console.log(str.toUpperCase());
    }
    console.log('---');
    console.log("abcd");
    printCapital("abcd");
    console.log("AAAA");
    printCapital("AAAA");
    console.log("aBcD");
    printCapital("aBcD");
    console.log('---');

}
console.groupEnd();
console.log();

console.group("2. Sukurkite funkciją, kuri atspausdina tekstą mažosiomis raidėmis");
{
    function printLower(str) {
      return console.log(str.toLowerCase());
    }
    console.log('---');
    console.log("ABCD");
    printLower("abcd");
    console.log("AAAA");
    printLower("AAAA");
    console.log("aBcD");
    printLower("aBcD");
    console.log('---');
}
console.groupEnd();
console.log();

console.group("3. Sukurkite funkciją, kuri atspausdina pirmojo parametro pirmają raidę");
{
    function printFirstLetter(str) {
      return console.log(str.charAt(0));
    }
    console.log('---');
    console.log("ABCD");
    printFirstLetter("abcd");
    console.log("AAAA");
    printFirstLetter("AAAA");
    console.log("aBcD");
    printFirstLetter("aBcD");
    console.log('---');

}
console.groupEnd();
console.log();

console.group("4. Sukurkite funkciją, kuri atspausdina pirmojo parametro paskutinę raidę");
{
  function printLastLetter(str) {
    return console.log(str.charAt(str.length - 1));
  }
  console.log('---');
  printLastLetter('Labas');
  printLastLetter('Ate');
  printLastLetter('Brieda');
  console.log('---');
}
console.groupEnd();
console.log();

console.group("5. Sukurkite funkciją, kuri atspausdina pirmojo parametro viduriniają raidę");
{
 
  function printMiddleLetter(str) {
    return console.log(str.charAt((str.length - 1) / 2));
  }
  console.log('---');
  printMiddleLetter('Labas');
  printMiddleLetter('Ate');
  printMiddleLetter('Brieda');
  console.log('---');
}

{
  function printMiddleLetter(str) {

    let position;
    let length;
  
    if(str.length % 2 === 1) {
        position = str.length / 2;
        length = 1;
    } else {
        position = str.length / 2 - 1;
        length = 2;
    }
  
    console.log(str.substring(position, position + length));
  }
  
  console.log('---');
  printMiddleLetter('Labas');
  printMiddleLetter('Ate');
  printMiddleLetter('Brieda');
  console.log('---');
}
console.groupEnd();
console.log();

console.group("6. Sukurkite funkciją, kuri grąžina simbolių darinio raidžių skaičių");
{
  function getDoubleLetterCount(str) {
    return str.length;
  }
  console.log('---');
  console.log({
    'labas': getDoubleLetterCount('labas'),
    'kranas': getDoubleLetterCount('kranas'),
    'kebabas': getDoubleLetterCount('kebabas'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("7. Sukurkite funkciją, kuri grąžina simbolių darinio raidžių skaičių padaugintą iš dviejų");
{
  function getDoubleLetterCount(str) {
    return str.length * 2; 
  }
  console.log('---');
  console.log({
    'labas': getDoubleLetterCount('labas'),
    'kranas': getDoubleLetterCount('kranas'),
    'kebabas': getDoubleLetterCount('kebabas'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("8. Sukurkite funkciją, kuri grąžina pirmo ir antro parametro bendrą simbolių skaičių");
{
  function getArgsLetterSum(a, b) {
    return a.length + b.length;
  }
  console.log('---');
  console.log({
    'labas, abc': getArgsLetterSum('labas', 'abc'),
    'kranas, jonas': getArgsLetterSum('kranas', 'jonas'),
    'kebabas, kefyras': getArgsLetterSum('kebabas', 'kefyras'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("9. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 'a' raidė, priešingu atveju <false>");
{
  function containsLetterA(str) {
    return str.includes('a') ? true : false;
  }
  console.log('---');
  console.log({
    'labas': containsLetterA('labas'),
    'kempė': containsLetterA('kempė'),
    'Finakolė': containsLetterA('Finakolė'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("10. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 2 parametru perduoda raidė, priešingu atveju false");
{
  function containsLetter(str, letter) {
    return str.includes(letter) ? true : false;
  }
  console.log('---');
  console.log({
    'labas, a': containsLetter('labas', 'a'),
    'kempė, a': containsLetter('kempė', 'a'),
    'Finakolė, u': containsLetter('Finakolė', 'u'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("11. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių");
{
  function isEvenNumberOfLetters(str) {
    if (str.length % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  console.log('---');
  console.log({
    'labas': isEvenNumberOfLetters('labas'),
    'kempės': isEvenNumberOfLetters('kempės'),
    '123123': isEvenNumberOfLetters('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("12. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje");
{
  function getNumberOfVowels(str) {

    let voweles = 'AaĄąEeĘęĖėIiĮįYyOoUuŲųŪū';

    let numberOfVowels = 0;

    for (let i = 0; i < str.length; i += 1) {
      if (voweles.indexOf(str[i]) >= 0)
       {
        numberOfVowels += 1;
      } else {
        numberOfVowels += 0;
      }
    }
    return numberOfVowels;
  }
  console.log('---');
  console.log({
    'aaaaa': getNumberOfVowels('aaaaa'),
    'sasasasa': getNumberOfVowels('sasasasa'),
    'aeyuioąčė': getNumberOfVowels('aeyuioąčė'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("13. Sukurkite funkciją, kuri grąžina priebalsių kiekį žodyje");
{
  function getNumberOfConsonants(str) {

    let consonants = 'BbCcČčDdFfGgHhJjKkLlMmNnPpRrSsŠšTtVvZzŽžQqWwXx';

    let numberOfVowels = 0;

    for (let i = 0; i < str.length; i += 1) {
      if (consonants.indexOf(str[i]) >= 0)
       {
        numberOfVowels += 1;
      } else {
        numberOfVowels += 0;
      }
    }
    return numberOfVowels;
  }
  console.log('---');
  console.log({
    'aaaaa': getNumberOfConsonants('aaaaa'),
    'sasasasa': getNumberOfConsonants('sasasasa'),
    'aeyuioąčė': getNumberOfConsonants('aeyuioąčė'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("14. Sukurkite funkciją, kuri grąžina <true>, jeigu NĖRA skaimenų");
{
  function isOnlyLetters(str) {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < numbers.length; i += 1) {
      const number = numbers[i];
      if (str.includes(number)) return false;
    }
    return true;
  }

  console.log('---');
  console.log({
    'labas': isOnlyLetters('labas'),
    'kempės': isOnlyLetters('kempės'),
    '123123': isOnlyLetters('123123'),
  })
  console.log('---');
}
{
  const createStringChecker = (symbolsArr) => {
    return (text) => {
     for (let i = 0; i < symbolsArr.length; i++) {
       const symbol = symbolsArr[i];
       if (text.includes(symbol)) return true;
     }

     return false;

   }
 }
}
console.groupEnd();
console.log();

console.group("15. Sukurkite funkciją, kuri grąžina 'a' raidžių kiekį žodyje");
{
  function letterACount(str) {

    const a = 'a';

    let numberOfa = 0;

    for (let i = 0; i < str.length; i += 1) {
      if (a.indexOf(str[i]) >= 0)
       {
        numberOfa += 1;
      } else {
        numberOfa += 0;
      }
    }
    return numberOfa;
  }
  console.log('---');
  console.log({
    'labas': letterACount('labas'),
    'kempės': letterACount('kempės'),
    '123123': letterACount('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("16. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje");
{
  function letterCount(str, searchLetter) {
   
    let numberOfSearchLetter = 0;

    for (let i = 0; i < str.length; i += 1) {
      if (searchLetter.indexOf(str[i]) >= 0)
       {
        numberOfSearchLetter += 1;
      } else {
        numberOfSearchLetter += 0;
      }
    }
    return numberOfSearchLetter;
  }
  console.log('---');
  console.log({
    'labas, a': letterCount('labas', 'a'),
    'kempės, k': letterCount('kempės', 'k'),
    '123123, z': letterCount('123123', 'z'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("17. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) 'a' raidės vietą žodyje");
{
  function indexOfLetterA(str) {
    return str.indexOf('a') >= 0 ? str.indexOf('a') : 'nėra';  
  }

  console.log('---');
  console.log({
    'labas': indexOfLetterA('labas'),
    'kempės': indexOfLetterA('kempės'),
    '123123': indexOfLetterA('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("18. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) vartotojo perduotos raidės vietą žodyje");
{
  function indexOfLetter(str, searchLetter) {
    return str.indexOf(searchLetter) >= 0 ? str.indexOf(searchLetter) : 'nėra';  
  }

  console.log('---');
  console.log({
    'labas, a': indexOfLetter('labas', 'a'),
    'kempės, k': indexOfLetter('kempės', 'k'),
    '123123, z': indexOfLetter('123123', 'z'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("19. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais 'a' raidės pasikartojimais žodyje");
{
  function indexesOfLetterA(str) {

    const arrayOfAindexes = [];

    for (let i = 0; i < str.length; i += 1) {
      if (str[i] === 'a') {
        arrayOfAindexes.push(i)
      }
    }
    return arrayOfAindexes;
  }

  console.log('---');
  console.log({
    'labas': indexesOfLetterA('labas'),
    'kempės': indexesOfLetterA('kempės'),
    '123123': indexesOfLetterA('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("20. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais vartotojo įvestos raidės pasikartojimais žodyje");
{
  function indexesOfLetter(str, searchLetter) {
    
    const arrayOfGivenLetterIndexes = [];

    for (let i = 0; i < str.length; i += 1) {
      if (str[i] === searchLetter) {
        arrayOfGivenLetterIndexes.push(i)
      }
    }
    return arrayOfGivenLetterIndexes;
  }

  console.log('---');
  console.log({
    'labas, a': indexesOfLetter('labas', 'a'),
    'kempės, m': indexesOfLetter('kempės', 'm'),
    '123123, 2': indexesOfLetter('123123', '2'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("21. Sukurkite funkciją, kuri ištrintų pirmą surastą 'a' raidę žodyje ir grąžintų pakeistą žodį");
{
  function removeFirstLetterA(str) {
    const indexOfFirstA = str.indexOf('a');
    if (indexOfFirstA === -1) return str;
    return str.slice(0, indexOfFirstA) + str.slice(indexOfFirstA + 1, str.lenght)
  }
  console.log('---');
  console.log({
    'labas': removeFirstLetterA('labas'),
    'kempiniukas': removeFirstLetterA('kempiniukas'),
    '123123': removeFirstLetterA('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("22. Sukurkite funkciją, kuri ištrintų paskutinę surastą 'a' raidę žodyje ir grąžintų pakeistą žodį");
{
  function removeLastLetterA(str) {
    const indexOfLastA = str.lastIndexOf('a');
    if (indexOfLastA === -1) return str;
    return str.slice(0, indexOfLastA) + str.slice(indexOfLastA + 1, str.lenght)
  }
  console.log('---');
  console.log({
    'labas': removeLastLetterA('labas'),
    'kempiniukas': removeLastLetterA('kempiniukas'),
    '123123': removeLastLetterA('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("23. Sukurkite funkciją, kuri ištrintų visus 'a' raidės pasikartojimus žodyje");
{
  function removeAllOccurencesOfLetterA(str) {
    return str.replaceAll('a', '');
  }
  console.log('---');
  console.log({
    'labas': removeAllOccurencesOfLetterA('labas'),
    'kempiniukas': removeAllOccurencesOfLetterA('kempiniukas'),
    '123123': removeAllOccurencesOfLetterA('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("24. Sukurkite funkciją, kuri ištrintų visus, vartotojo įvestos raidės pasikartojimus žodyje");
{
  function removeAllOccurencesOfLetter(str, letter) {
    return str.replaceAll(letter, '');
  }
  console.log('---');
  console.log({
    'labas, a': removeAllOccurencesOfLetter('labas', 'a'),
    'kempiniukas, i': removeAllOccurencesOfLetter('kempiniukas', 'i'),
    '123123, 3': removeAllOccurencesOfLetter('123123', '3'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

// 25. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.
//  Ši funkcija turi žodyje ištrinti visas raides, kurios perduotos antruoju parametru.
//  Atlikus veiksmus, grąžinti pakeistą žodį
console.group("25. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.");
{
  function filterLetters(str, lettersToRemove) {
    for (let i = 0; i < lettersToRemove.length; i += 1) {
      str = str.replaceAll(lettersToRemove[i], '');      
    }

    return str;
  }
  console.log('---');
  const str = filterLetters('Brangakmienio paveikslas', ['a', 'i']);
  console.log(str);
  console.log('---');
}
console.groupEnd();
console.log();

console.group("26. Sukurkite funkciją, kuri pirmu parametrų priimą sakinį, kiekvieną tarpą pakeičia brūkšneliu ir grąžina pakeistą sakinį");
{
  function replaceSpaceWithDash(str) {
    return str.replaceAll(' ', '-');
  }
  console.log('---');
  console.log({
    'viens du trys': replaceSpaceWithDash('viens du trys'),
    'as tave myliu': replaceSpaceWithDash('as tave myliu'),
    'Bairis seniuk': replaceSpaceWithDash('Bairis seniuk'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("27. Sukurkite funkciją, kuri pirmu parametru priima sakinį, ir kiekvieno žodžio pirmają raidę padaro didžiąja");
{
  function capitalize(str) {
    str = str[0].toUpperCase() + str.slice(1, str.lenght);
    for (let i = 0; i < str.length; i += 1) {
      if (str[i] === ' ') 
      str = str.slice(0, i + 1) + str[i + 1].toUpperCase() + str.slice(i + 2, str.lenght)
    }
    return str;
  }
  console.log('---');
  console.log({
    'viens du trys': capitalize('viens du trys'),
    'as tave myliu': capitalize('as tave myliu'),
    'Bairis seniuk': capitalize('Bairis seniuk'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("28. Sukurkite funkciją, kuri atspausdina žodį atvirkščiai 'abc' -> 'cba'");
{
  function strReverse(str) {
    let reverseStr = '';
    for (let i = str.length - 1; i >= 0; i -= 1) {
      reverseStr += str[i];
    }
    return reverseStr;
  }
  console.log('---');
  console.log({
  'viens du trys': strReverse('viens du trys'),
  'as tave myliu': strReverse('as tave myliu'),
  'Bairis seniuk': strReverse('Bairis seniuk'),
  });
  console.log('---');
}
console.groupEnd();
console.log();


// 29. Sukurkite funkciją, kuri grąžina <true>, jeigu žodis yra palindromas (taip pat skaitosi iš abiejų pusių)
//  mama -> false
//  mamam -> true
//  123321 -> true
//  123456 -> false
console.group("29. Sukurkite funkciją, kuri grąžina <true>, jeigu žodis yra palindromas (taip pat skaitosi iš abiejų pusių)");
{

  function isPalyndrome(str) {
    let reverseStr = '';
    for (let i = str.length - 1; i >= 0; i -= 1) {
      reverseStr += str[i];
    }
   
    if (str === reverseStr) return true;
    return false;
  }

  console.log('---');
  console.log({
    'mama': isPalyndrome('mama'),
    'mamam': isPalyndrome('mamam'),
    '123321': isPalyndrome('123321'),
    '123456': isPalyndrome('123456'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

// 30. Sukurkite funkciją, kuri taiso pastraipos klaidas:
//  Pirma sakinio raidė didžioji
//  Po skiriamojo ženklo tarpas, o prieš skiriamajį ženklą nėra tarpo (skiriamieji ženklai: .,!?)
//  Bet kokį kiekį tapų pakeičia vienu tarpu
//    mėgstu pieną , bet medų nelabai.labanakt. -> Mėgstu pieną, bet medų nelabai. Labanakt.
console.group("30. Sukurkite funkciją, kuri taiso pastraipos klaidas");
{
  const capitalizeFirstLetter = (word) => word[0].toUpperCase() + word.slice(1);

  const fixParagraph = (paragraph) => paragraph
    .split(/([.?!])/)
    .slice(0, -1)
    .map((sentence) => sentence.trim())
    .map(capitalizeFirstLetter)
    .join('')
    .replaceAll(/\s+/g, ' ')
    .replaceAll(' ,', ',')
    .replaceAll(/([.?!,])([^\s])/g, '$1 $2')
    .replace('jonas', 'Jonas');

  const paragraph = '    labas , as jonas . Tave      vadina Kęstu? Taip ir žinojau  !    ';
  const fixedParagraph = fixParagraph(paragraph);
  console.log(paragraph);
  console.log(fixedParagraph);
  console.log('---');
  
}
console.groupEnd();
console.log();

// 31. Sukurkite funkciją, kuri pirmu parametru priima sakinį ir sudeda atskirus sakinio žodžius į masyvą:
//  labas, aš esu grybas -> ['labas', 'aš', 'esu', 'grybas']
console.group("31. Sukurkite funkciją, kuri pirmu parametru priima sakinį ir sudeda atskirus sakinio žodžius į masyvą");
{

  function splitSentence(sentence) {
   return sentence.split(' ');
  }

  console.log('---');
  console.log({
    'Labas aš Jonas': splitSentence('Labas aš Jonas'),
    'Kėgliai yra gerai': splitSentence('Kėgliai yra gerai'),
  })
  console.log('---');
}
console.groupEnd();
console.log();


// 32. Sukurkite funkciją, kuri pirmu parametru priimą <string>'ą, o antruoju skiriklį
//  Ši funkcija turi grąžinti masyvą sudarytą iš atskirtų dalių:
//  explode('Man patinka sniegas', ' ');  -> ['man', 'patinka', 'sniegas'];  
//  explode('home/about/13', '/');        -> ['home', 'about', '13'];  
console.group("32. Sukurkite funkciją, kuri pirmu parametru priimą <string>'ą, o antruoju skiriklį");
{
  function explode(str, separator) {
    return str.split(separator);
  }
  console.log('---');
  console.log({
    "'Man patinka sniegas', ' '": explode('Man patinka sniegas', ' '),
    "'home/about/13', '/'": explode('home/about/13', '/'),
  })
  console.log('---');
}
console.groupEnd();
console.log();
