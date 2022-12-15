/*
1. Sukurkite klasę Car, kuri turėtų savybes ir priskirtų jas naudojant konstruktorių:
  brand,
  model,
  year,
  color,
  fuelTypes: [] 
  price // eurais

2. Sukurkite masyvą sudarytą iš 8 Car klasės mašinų

3. Klasėje Car sukurkite metodą getFuelType, kuris grąžintų mašinos kurų tipus (fuelTypes)
   kaip 'string'ą atskirtą '/'.

4. Atspausdinkite kiekvieno automobilio pavadinimą ir 3 punktu sukurto metodo rezultatą, pvz:
  Tayota Corola - dysel/electric
  Nisan Bajam - petrol/gas
  Kanagi BaBa - uranus
            ...

5. Atrinkite tik elektrinius automobilius

6. Atrinkite tik benzininius automobilius, naujesnius nei 2016 metai

7. Atrinkite audi tipo automobilius nuo 2012 iki 2016, kurie nėra dyzeliniai  

8. Suskaičiuokite 5 punkte gautų automobilių kainos vidurkį

9. Suskaičiuokite 6 punkte gautų automobilių bendrą vertę

10. Panaudokite pradinį Car objektų masyvą performuoti duomenis į tokių objektų masyvą:
  * brand,
  * model,
  * price, // kaina doleriais [Number]
  * fuelType // kuro tipas kaip string'as. galite naudoti 3 punktu sukurtą metodą
*/

class Car {
  static USDratio = 1.03;

  brand;
  model;
  year;
  color;
  fuelTypes = [];
  price;

  constructor (brand, model, year, color, fuelTypes, price) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.fuelTypes = fuelTypes;
    this.price = price;
  }

  getFuel() {
    let result = '';
    for (let i = 0; i < this.fuelTypes.length; i += 1) {
      if (i + 1 === this.fuelTypes.length){
        result += `${this.fuelTypes[i]}`;
      } else {
        result += `${this.fuelTypes[i]}/`;
      }
    }
    return result;
  }

}

const cars = [
  new Car('Renault', 'Megane', 2014, 'gray', ['diesel'], 7000),
  new Car('Renault', 'Clio', 2018, 'red', ['petrol'], 6000),
  new Car('Chevrolet', 'Bolt', 2012, 'blue', ['electric', 'petrol'], 8000),
  new Car('Toyota', 'Avensis', 2017, 'gray', ['petrol'], 5500),
  new Car('Peugeot', '307', 2001, 'yellow', ['LPG', 'petrol'], 800),
  new Car('Volvo', 'S80', 2004, 'blue', ['petrol'], 2200),
  new Car('VW', 'Sharan', 1998, 'cherry', ['diesel'], 800),
  new Car('Toyota', 'Yaris', 2004, 'black', ['electric'], 2000),
  new Car('Audi', 'a3', 2014, 'black', ['diesel'], 7000),
  new Car('Audi', 'a6', 2013, 'black', ['electric'], 8000),
  new Car('Audi', 'a7', 2015, 'black', ['petrol'], 9000),
]

console.table(cars);

console.log(`-------------------TASK 3-------------------`);

console.log(cars[2].getFuel());

console.log(`-------------------TASK 4-------------------`);

cars.forEach(car => console.log(`${car.brand} ${car.model} - ${car.getFuel()}`));

console.log(`-------------------TASK 5-------------------`);

const electricCars = cars.filter(car => car.getFuel() === 'electric');
console.table(electricCars);

console.log(`-------------------TASK 6-------------------`);

const petrolCarsFrom2016 = cars.filter(car => car.year > 2016 && car.getFuel() === 'petrol');
console.table(petrolCarsFrom2016);

console.log(`-------------------TASK 7-------------------`);

const audiNotDieselCarsFrom2012To2016 = cars.filter(car => car.getFuel() !== 'diesel' && car.year > 2012 && car.year < 2016);
console.table(audiNotDieselCarsFrom2012To2016);

console.log(`-------------------TASK 8-------------------`);

const mapPrices = electricCars.map(car => car.price)
// console.log(mapPrices)

const priceAvg = mapPrices.reduce((prevSum, el) => prevSum + el, 0) / mapPrices.length;
console.log(`Fully electric cars price average: ${Math.round(priceAvg)}`);

console.log(`-------------------TASK 9-------------------`);

const mapPrices2 = petrolCarsFrom2016.map(car => car.price)
// console.log(mapPrices2)

const totalCarsValue = mapPrices2.reduce((prevSum, el) => prevSum + el, 0);
console.log(`Petrol only cars total price: ${totalCarsValue}`);


console.log(`-------------------TASK 10-------------------`);

const formatedCars = cars.map((car) => ({
 
  brand : car.brand,
  model : car.model,
  year : car.year,
  priceUSD : car.price * Car.USDratio,
  fuelType : car.getFuel()
  }
));

console.table(formatedCars);



