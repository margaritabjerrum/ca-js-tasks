const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false
  }
];
console.groupCollapsed('1. Atspausdinkite visus žmones eilutėmis');
/*
  <name> <surname> - <sex> <age> <income> <married> <hasCar>
  pvz.: 
    Jonas Jonaitis - male 26 1200 false false

  <name> <surname>: is <sex> of age <age>. Earns <income> is <married> and <hasCar>;
  pvz.: 
    Jonas Jonaitis - is male of age 26. Earns 1200$ is not married has no car.
*/
{
  function printAllPeopleInRows(allPeople) {
    let isMarried = '';
    if (allPeople.married === true) {
      isMarried = 'Married' 
      } else {
        isMarried = 'Not Married'
      }

    let doesHasCar = '';
    if (allPeople.hasCar === true) {
      doesHasCar = 'Has a car' 
      } else {
        doesHasCar = 'Does not have a car'
      }
    
    console.log(allPeople.name + ' ' + allPeople.surname + ': ' + allPeople.sex + ', Age: ' + allPeople.age + ', Income: ' + allPeople.income + '$, ' + isMarried + ', ' + doesHasCar + '.')
  }

  people.forEach(printAllPeopleInRows)
}
console.groupEnd();

console.groupCollapsed('2. Atpausdinkite visus žmonių varus ir pavardes, atskirtus brūkšneliu');
{
  function printAllPeopleNamesWithDash(allPeople) {
    console.log(allPeople.name + ' - ' + allPeople.surname)
  }

  people.forEach(printAllPeopleNamesWithDash);


}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą');
{
  function printNameSurnameAndMaritalStatus(allPeople) {
    let isMarried = '';
    if (allPeople.married === true) {
      isMarried = 'Married' 
      } else {
        isMarried = 'Not Married'
      }
    console.log(`${allPeople.name} ${allPeople.surname}: ${isMarried}`)
  }

  people.forEach(printNameSurnameAndMaritalStatus);
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  function createArrayWithSexAndIncome(person) {
    return {
      sex : person.sex,
      income : person.income
    }
  }

  const arrayWithSexAndIncome = people.map(createArrayWithSexAndIncome);

  console.table(arrayWithSexAndIncome);

}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  function createArrayWithNameSurnameAndSex(person) {
    return {
      name : person.name,
      surname : person.surname,
      sex : person.sex      
    }
  }

  const arrayWithNameSurnameAndSex = people.map(createArrayWithNameSurnameAndSex);

  console.table(arrayWithNameSurnameAndSex);
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
  function printAllMale(person) {
    return person.sex === 'male';
  }

  const allMale = people.filter(printAllMale);

  console.table(allMale);

}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
  function printAllFemale(person) {
    return person.sex === 'female';
  }

  const allFemale = people.filter(printAllFemale);

  console.table(allFemale);
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  function selectAllPeopleThatHasCar(person) {

    return person.hasCar;
  }

  const allPeopleThatHasCar = people.filter(selectAllPeopleThatHasCar);

  function printFullnameOfPeopleThatHasCar(person){
    return {
     fullname : `${person.name} ${person.surname}`
    }
  }

  const fullnameOfPeopleThatHasCar = allPeopleThatHasCar.map(printFullnameOfPeopleThatHasCar);

  console.table(fullnameOfPeopleThatHasCar);
}

console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  function printAllMarried(person) {
    return person.married;
  }

  const allMarried = people.filter(printAllMarried);

  console.table(allMarried);
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  function filterDrivingFemale(person) {
    return person.sex === 'female' && person.hasCar;
  }

  const femaleThatDrives = people.filter(filterDrivingFemale);

  console.table(`{female : ${femaleThatDrives.length}}`);
}  
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  function changeIncomeToSalary(person) {
    return {
      name : person.name,
      surname : person.surname,
      sex : person.sex,
      age: person.age,
      salary: person.income,
      married: person.married,
      hasCar: person.hasCar
    }
  }

  const incomeReplacedWithSalary = people.map(changeIncomeToSalary);
  console.table(incomeReplacedWithSalary);
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą iš objektų, kuriuose nebūtų lyties, vardo ir pavardės');
{
  function createArrayWithAnonymousPeopleAndNoSex(person) {
    return {
      age: person.age,
      income: person.income,
      married: person.married,
      hasCar: person.hasCar
    }
  }

  const anonymousPeopleAndNoSex = people.map(createArrayWithAnonymousPeopleAndNoSex);
  console.table(anonymousPeopleAndNoSex);
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą  iš objektų, kuriuose "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  function replacePersonCredentialsToFullname(person) {
    return {
      fullname: `${person.name} ${person.surname}`,
      sex: person.sex,
      age: person.age,
      income: person.income,
      married: person.married,
      hasCar: person.hasCar
    }
  }

  const formattedPeople = people.map(replacePersonCredentialsToFullname);
  console.table(formattedPeople);
}

console.groupEnd();
