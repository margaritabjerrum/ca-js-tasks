console.groupCollapsed('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
  class Player {
    name;
    age;
    height;
    weight;

    constructor(name, age, height, weight) {
      this.name = name,
        this.age = age,
        this.height = height,
        this.weight = weight
    }

    getAge() {
      return `${this.name} is age ${this.age}`;
    }

    getHeight() {
      return `${this.name} is ${this.height}cm`;
    }

    getWeight() {
      return `${this.name} weighs ${this.weight}kg`;
    }
  }

  const player1 = new Player('Patrick Mahomes', 24, 188, 104);
  const player2 = new Player('Jimmy Garoppolo', 28, 188, 102);
  const player3 = new Player('Julio Jones', 31, 191, 100);

  console.table(player1);
  console.table(player2);
  console.table(player3);

  console.log('---age---');

  console.log(player1.getAge());
  console.log(player2.getAge());
  console.log(player3.getAge());

  console.log('---height---');

  console.log(player1.getHeight());
  console.log(player2.getHeight());
  console.log(player3.getHeight());

  console.log('---weight---');

  console.log(player1.getWeight());
  console.log(player2.getWeight());
  console.log(player3.getWeight());

}
console.groupEnd();

console.groupCollapsed('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');
{
  class Calculator {
    add(num1, num2) {
      return num1 + num2;
    }

    subtract(num1, num2) {
      return num1 - num2;
    }

    multiply(num1, num2) {
      return num1 * num2;
    }

    divide(num1, num2) {
      return num1 / num2;
    }
  }

  const calculator = new Calculator();
  console.log(calculator)

  const numbers = [10, 5];

  const addResult = calculator.add(...numbers);
  console.log(`addResult of (10, 5): ${addResult}`);

  const subtractResult = calculator.subtract(...numbers);
  console.log(`subtractResult of (10, 5): ${subtractResult}`);

  const multiplyResult = calculator.multiply(...numbers);
  console.log(`multiplyResult of (10, 5): ${multiplyResult}`);

  const divideResult = calculator.divide(...numbers);
  console.log(`divideResult of (10, 5): ${divideResult}`);


}
console.groupEnd();

console.groupCollapsed('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{
  class Employee {
    constructor (firstname, lastname) {
      this.firstname = firstname,
      this.lastname = lastname,
      this.fullname = (`${this.firstname} ${this.lastname}`),
      this.email = `${this.firstname}.${this.lastname}@company.com`.toLowerCase()
    }
  }

  const emp1 = new Employee("John", "Smith");
  const emp2 = new Employee("Mary",  "Sue");
  const emp3 = new Employee("Antony", "Walker");
  const emp4 = new Employee("Joshua", "Senoron");

  console.table(emp1);

  console.table(emp2);

  console.table(emp3);

  console.table(emp4);
}
console.groupEnd();

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    compareAge(other) {
      if (this.age < other.age) {
        return `${other.name} is older than me.`;
      } else if (this.age > other.age) {
        return `${other.name} is younger than me.`;
      } else {
        return `${other.name} is the same age as me.`;
      }
    }
  }

  const p1 = new Person("Samuel", 24);
  const p2 = new Person("Joel", 36);
  const p3 = new Person("Lily", 24);

  console.log(p1.compareAge(p2));

  console.log(p2.compareAge(p1));

  console.log(p1.compareAge(p3));
}
console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{
    class Circle {

    constructor(radius) {
      this.radius = radius
    }

    getArea() {
      return Math.PI * this.radius ** 2;
    }

    getPerimeter() {
      return 2 * Math.PI * this.radius;
    }
  }

  const circle = new Circle(4.44);

  console.log(`Area: ${circle.getArea()}`);
  console.log(`Perimeter: ${circle.getPerimeter()}`);

}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
  class Name {

    constructor(fname, lname) {
      this.fname = fname[0].toUpperCase() + fname.slice(1, fname.length).toLowerCase();
      this.lname = lname[0].toUpperCase() + lname.slice(1, lname.length).toLowerCase();
      this.fullname = `${this.fname} ${this.lname}`;
      this.initials = `${this.fname[0]}.${this.lname[0]}`;
    }
  }

  const a1 = new Name("john", "SMITH");
  const a2 = new Name("sARah", "fRolliE");

  console.log(a1);
  console.log(a2);
}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
  class IceCream {
    constructor(flavor, numSprinkles) {
      this.flavor = flavor;
      this.numSprinkles = numSprinkles;
    }
  }

  function sweetestIcecream(arr) {
    const flavors = {
        'Plain': 0,
        'Vanilla': 5,
        'ChocolateChip': 5,
        'Strawberry': 10,
        'Chocolate': 10
      };

    const totalSweetness =  arr.map(({flavor, numSprinkles}) => flavors[flavor] + numSprinkles);
    return Math.max(...totalSweetness);
  }

  let ice1 = new IceCream("Chocolate", 13);
  let ice2 = new IceCream("Vanilla", 0);
  let ice3 = new IceCream("Strawberry", 7);
  let ice4 = new IceCream("Plain", 18);
  let ice5 = new IceCream("ChocolateChip", 3);
  let ice6 = new IceCream("Chocolate", 23);
  let ice7 = new IceCream("Strawberry", 0);
  let ice8 = new IceCream("Plain", 34);
  let ice9 = new IceCream("Plain", 81);
  let ice10 = new IceCream("Vanilla", 12);

  console.log(sweetestIcecream([ice1, ice2, ice3, ice4, ice5]));
  console.log(sweetestIcecream([ice7, ice10, ice1, ice6, ice8, ice10, ice2, ice2]));
  console.log(sweetestIcecream([ice10, ice10, ice6, ice8, ice4]));
  console.log(sweetestIcecream([ice2, ice10, ice6, ice9, ice7]));
  console.log(sweetestIcecream([ice10, ice6, ice4, ice1, ice7, ice8, ice6]));

}
console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{

  class OnesThreesNines {

    constructor(number) {
      this.number = number;
    }

    get ones() {
      return Math.floor(this.number / 1);
    }

    get threes() {
      return Math.floor(this.number / 3);
    }

    get nines() {
      return Math.floor(this.number / 9);
    }
  }

  const values = [
    new OnesThreesNines (0),
    new OnesThreesNines (1),
    new OnesThreesNines (2),
    new OnesThreesNines (3),
    new OnesThreesNines (4),
    new OnesThreesNines (10),
    new OnesThreesNines (13),
    new OnesThreesNines (15),
    new OnesThreesNines (17),
    new OnesThreesNines (20)
  ];

  const numberOfOnes = values.map((value) => (value.ones));
  const numberOfThrees = values.map((value) => (value.threes));
  const numberOfNines = values.map((value) => (value.nines));

  console.log(numberOfOnes);
  console.log(numberOfThrees);
  console.log(numberOfNines);

}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
  // ... code
}
console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
  // ... code
}
console.groupEnd();
