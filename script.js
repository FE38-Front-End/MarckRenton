class Car {
  constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsuming = 10) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacity = fuelCapacity;
    this.fuelConsuming = fuelConsuming;
  }

  getFullName() {
    return this.name + ' ' + this.model;
  }

  getAge() {
    return this.year;
  }

  changeColor(color) {
    if (color === this.color) {
      console.log(`Цвет ${color} совпадает`);
    } else {
      console.log(`Цвет ${this.color} изменился на ${color}`);
    }
  }
//метод реализует расчёт оставшегося топлива до зоправки, время,км
  calculateWay(fuel = 9, kilometers = 60) {
    if (fuel < 10) {
      console.log('Нужно на заправку');
    }
    let time = (kilometers / this.maxSpeed).toFixed(2);
    time.split('.');
    console.log(`Вам осталось ехать ${time[0]}ч. ${time[2]}${time[3]} мин.`);
    let refueling = Math.ceil(this.fuelCapacity / kilometers);
    if (refueling === 2 || refueling === 3 || refueling === 4) {
      console.log(`Вам нужно дозаправиться ${refueling} разa`);
    } else
      console.log(`Вам нужно дозаправиться ${refueling} раз`);
  }
}

let year = new Date().getFullYear();
const myCar = new Car('Roza', 'Mazda', year, 'Blue', 40);
// console.log(myCar);
// console.log(myCar.getFullName());
// console.log(myCar.getAge());
// console.log(myCar.changeColor('Yellow'));
console.log(myCar.calculateWay());

//наследуюсь от Car и создаю класс Опель
//добавляю уникальное всойство- люк
//метот create => если true, то возвращает объект, если false=> просит создать люк
class Opel extends Car {
  constructor(name, model, year, color, maxSpeed, luke) {
    super(name, model, year, color, maxSpeed);
    this.luke = luke;
  }

  create() {
    if (this.luke) {
      return this
    } else return 'Создайте люк!'
  }
}
////наследуюсь от Car и создаю класс Опель
const myOpel = new Opel('Dakota', 'Opel', 2000, 'Yellow', 200, false);
// console.log(myOpel);
// console.log(myOpel.create());


//наследуюсь от Car и создаю класс Reno
//метот create выводить сообщение о продаже мошины
class Reno extends Car {
  constructor(name, model, year, color, maxSpeed, headlights) {
    super(name, model, year, color, maxSpeed);
    this.headlights = headlights;
  }
  create() {
    console.log(`Продам машину ${this.model}, ${this.year} года выпуска, максимальной скоростью ${this.maxSpeed} км/ч`);
  }
}

const myReno = new Reno('Idaho', 'Reno', 1998, 'White', 130, true);
// console.log(myReno);
// console.log(myReno.create());


//наследуюсь от Car и создаю класс Daf
//метот create в зависимости от года выпуска машины определяет есть ли в ней климатконтроль

class Daf extends Car {
  constructor(name, model, year, color, maxSpeed, climateControl) {
    super(name, model, year, color, maxSpeed);
    this.climateControl = climateControl;
  }

  create() {
    if (this.year >=1998) {
      return this.climateControl=true
    } else {
      return this.climateControl=false
    }

  }
}

const myDaf = new Daf('Nevada', 'Daf', 1997, 'Black', 120, false);
// console.log(myDaf);
// console.log(myDaf.create());
