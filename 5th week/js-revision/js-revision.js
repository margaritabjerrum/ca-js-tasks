/*
------------------------------------ 1 Dalis ------------------------------------ 
1. Sukurti objektų(žmonių) masyvą su 8 elementais, kuriame būtų:
  - name
  - surname
  - age
  - height
  - weight
  - sex
2. Panaudojant array.forEach:
  - Atspausdinti kiekvieną elementą
  - Atspausdinti kiekvieno elemento pilną vardą
  - Atspausdinti kiekvieno elemento kūno masės indeksą
3. Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones:
  - kurių vardas ilgesnis nei 6 simboliai
  - kurių svoris didesnis nei 80kg
  - kurie aukštesni nei 185cm
4. Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti
  - ūgius
  - svorius
  - ūgius, svorius ir amžius : [{height, weight, age}, ...]
  - KMI indeksus
  - KMI indeksus ir amžius
5. Panaudojant array.reduce suskaičiuoti ir po to atspausdinti
  - svorių vidurkį
  - ūgio vidurkį
------------------------------------ 2 Dalis ------------------------------------ 
0. Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą:
    Person klasėje:    
    - sukurti vidinį metodą: getBMI();     // suskaičiuoja kūno masės indeksą
    - sukurti vidinį metodą: toString();   // atspausdina žmogų su esamom savybėm
1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg 
2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5
3. Atrinkti vaikus, su antsvoriu (KMI > 30)
4. Atrinkti pensininkus, su antsvoriu (KMI > 30)
5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]

------------------------------------ 3 Dalis -------------------------------------
Peržiūrėti video: 
https://www.youtube.com/watch?v=JaMCxVWtW58

Geras Žaidimas pasitreniravimui:
  https://www.typing.com/student/game/tommyq

Rekomenduoju pasikartoti greitasias komandas
*/

let people;

console.log(`--------------PART 1--------------`)
console.group('1. Sukurti objektų(žmonių) masyvą su 8 elementais, kuriame būtų:')
/*
- name
- surname
- age
- height
- weight
- sex
*/
{
  people = [
    {name: 'Betty', surname: 'Humper', age: 18, height: 168, weight: 90, sex: 'female'},
    {name: 'Buster', surname: 'Cherry', age: 25, height: 175, weight: 70, sex: 'male'},
    {name: 'Dixon', surname: 'Woody', age: 30, height: 200, weight: 110, sex: 'male'},
    {name: 'Eaton', surname: 'Beaver', age: 35, height: 182, weight: 85, sex: 'male'},
    {name: 'Amandala', surname: 'Lick', age: 22, height: 175, weight: 62, sex: 'female'},
    {name: 'Anita', surname: 'Head', age: 45, height: 170, weight: 53, sex: 'female'},
    {name: 'Ivanalona', surname: 'Tinkle', age: 37, height: 162, weight: 43, sex: 'female'},
    {name: 'Phil', surname: 'Freak', age: 65, height: 186, weight: 97, sex: 'male'},
  ]

  console.table(people);
}
console.groupEnd()

console.group('2. Panaudojant array.forEach:')
/*
- Atspausdinti kiekvieną elementą
- Atspausdinti kiekvieno elemento pilną vardą
- Atspausdinti kiekvieno elemento kūno masės indeksą
*/
{

  people.forEach(person => console.log(person));

  people.forEach(person => console.log(person.name, person.surname));

  people.forEach(person => console.log(Math.round(person.weight / ((person.height/100) ** 2))));

}
console.groupEnd()

console.group('3. Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones:')
/*
  - kurių vardas ilgesnis nei 6 simboliai
  - kurių svoris didesnis nei 80kg
  - kurie aukštesni nei 185cm
*/
{
 const peopleWithLongName = people.filter(({ name }) => name.length > 6);
 console.table(peopleWithLongName);

 const peopleHeavierThan80 = people.filter(({ weight }) => weight > 80);
 console.table(peopleHeavierThan80);

 const peopleTallerThan185 = people.filter(({ height }) => height > 185);
 console.table(peopleTallerThan185);
}
console.groupEnd()

console.group('4. Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti')
/*
  - ūgius
  - svorius
  - ūgius, svorius ir amžius : [{height, weight, age}, ...]
  - KMI indeksus
  - KMI indeksus ir amžius
*/
{

}
console.groupEnd()

console.group('5. Panaudojant array.reduce suskaičiuoti ir po to atspausdinti')
/*
  - svorių vidurkį
  - ūgio vidurkį
*/
{

}
console.groupEnd()

console.log(`--------------PART 2--------------`)
console.group('0. Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą:')
/*
    Person klasėje:    
    - sukurti vidinį metodą: getBMI();     // suskaičiuoja kūno masės indeksą
    - sukurti vidinį metodą: toString();   // atspausdina žmogų su esamom savybėm
*/
{

}
console.groupEnd()

console.group('1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg ')
{

}
console.groupEnd()

console.group('2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5')
{

}
console.groupEnd()

console.group('3. Atrinkti vaikus, su antsvoriu (KMI > 30)')
{

}
console.groupEnd()

console.group('4. Atrinkti pensininkus, su antsvoriu (KMI > 30)')
{

}
console.groupEnd()

console.group('5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]')
{

}
console.groupEnd()