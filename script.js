const data = [
  {
    firstName: 'Ashton',
    lastName: 'Kutcher',
    age: 40
  },
  {
    firstName: 'Bredley',
    lastName: 'Pitt',
    age: 54
  },
  {
    firstName: 'Hannah',
    lastName: 'Dakota',
    age: 24
  }
];

let valuePrompt = prompt('Пользователь, введи свою фамилию!');
let valuePromptRegistr = valuePrompt.slice(0, 1).toUpperCase() + valuePrompt.slice(1).toLowerCase();

let returnAlert = '';
for (let key in data) {
  if (valuePromptRegistr === data[key].lastName) {
    returnAlert = (`User name: ${data[key].firstName} ${data[key].lastName}
User age: ${data[key].age}`);
    break;
  } else {
    returnAlert = ('No results found for your request')
  }
}
alert(returnAlert);

// Задание 1!
//   У нас есть объект, в котором хранятся зарплаты нашей команды:
//   let salaries = {  John: 100,  Ann: 160,  Pete: 130 }
//Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);

// Задание 2!
//
//   Многоквартирный дом характеризуется следующими тремя показателями: этажность (1-25), число подъездов (1-10), количество квартир на лестничной площадке (1-20). Скрипт запрашивает эти показатели и номер квартиры. Выводится номер подъезда и этажа, в котором находится указанная квартира.

let numberFloors = prompt('Введите число этажей от 1-25');
if (numberFloors >= 1 && numberFloors <= 25) {

  let numberEntrances = prompt('Введите количество подъездов от 1-10');
  if (numberEntrances >= 1 && numberEntrances <= 10) {

    let numberApartments = prompt('Введите количество квартир от 1-20');
    if (numberApartments >= 1 && numberApartments <= 20) {

      let apartmentNumber = prompt('Введите номер квартиры');
      apartmentNumber = +apartmentNumber
      if (apartmentNumber) {

        let houseFloor = Math.ceil(apartmentNumber / numberApartments);

        let housePorch = Math.ceil(houseFloor / numberFloors);

        houseFloor -= (housePorch - 1) * numberFloors;
        alert(`Указанная Вами квартира №${apartmentNumber} находится на:
${houseFloor} этаже, в подъезде № ${housePorch}`);
      } else {
        alert('Такой квартиры не существует. Уточните адрес.');
      }
    } else {
      alert('Вы ввели неправильное число квартир! Попробуйте ещё раз.');
    }
  } else {
    alert('Вы ввели неправильное число подъездов! Попробуйте ещё раз.');
  }
} else {
  alert('Вы ввели неправильное число этажей! Попробуйте ещё раз.');
}
