let numbers = [46, 1, 4, 78, 9, 5, 1, 4, 5, 5];
// indeksai:    0  1  2   3  4  5  6  7  8  9
let nouns = ['apple', 'sister', 'hammer', 'sun', 'table', 'sky', 'lake', 'euro', 'like'];
// indeksai:    0       1         2        3       4        5       6       7       8
let helpers = ['in', 'with', 'on', 'my', 'is', 'a', 'the', ' ', 'i', 'have', 'for', 'do not', 'this'];
// indeksai:    0       1     2      3     4    5     6     7     8    9       10      11       12

// Užduotis: Sudarykite šiuos sakinius ir išsaugokite kitamuosiuose:
//    sentence1, sentence2, ... , sentenceN;  N - natūralieji skaičiai.

// 1. my sister is in the lake
let sentence1 = helpers[3] + helpers[7] + nouns[1] + helpers[7] + helpers[4] + helpers[7] + helpers[0] + helpers[7] + helpers[6] + helpers[7] + nouns[6];
//                'my'         ' '        'sister'      ' '          'is'          ' '         'in'          ' '         'the'         ' '       'lake'                                                                               
console.log(sentence1);
// 2. hammer is on the table

let sentence2 = nouns[2] + helpers[7] + helpers[4] + helpers[7] + helpers[2] + helpers[7] + helpers[6] + helpers[7] + nouns[4];

console.log(sentence2);

// 3. sun is in the sky

let sentence3 = nouns[3] + helpers[7] + helpers[4] + helpers[7] + helpers[0] + helpers[7] + helpers[6] + helpers[7] + nouns[5];

console.log(sentence3);

// 4. apple is with my sister

let sentence4 = nouns[0] + helpers[7] + helpers[4] + helpers[7] + helpers[1] + helpers[7] + helpers[3] + helpers[7] +  nouns[1];

console.log(sentence4);

// 5. Papildyti masyvą žodžiais, ir sukurti dar 3 +-logiškus sakinius.
let sentence5 = helpers[3] + helpers[7] + nouns[0] + helpers[7] + helpers[4] + helpers[7] + helpers[2] + helpers[7] + helpers[6] + helpers[7] + nouns[4];

console.log(sentence5);

let sentence6 = nouns[5] + helpers[7] + helpers[4] + helpers[7] + helpers[0] + helpers[7] + helpers[6] + helpers[7] + nouns[6];

console.log(sentence6);

let sentence7 = helpers[8] + helpers[7] + helpers[9] + helpers[7] + numbers[1] + helpers[7] + nouns[7] + helpers[7] + helpers[10] + helpers[7] + nouns[0];

console.log(sentence7);

let sentence8 = helpers[8] + helpers[7] + helpers[11] + helpers[7] + nouns[8] + helpers[7] + helpers[12] + helpers[7] + nouns[6];

console.log(sentence8);