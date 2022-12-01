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
  // ... code
}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
  // ... code
}
console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
  // ... code
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
