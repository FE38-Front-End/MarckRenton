let screen = document.querySelector('.screen');//кнопка экрана
let equally = document.querySelector('.equally');//кнопка равно
let clear = document.querySelector('.clear');// кнопка сброса

let sign = document.querySelectorAll('.sign');//получаю знаки
let number = document.querySelectorAll('.number');//получаю цифры

let currentNumber = "";//текущще вводимое число
let pastNumber = "";//переменная используется для использованного числа (в памяти)
let resultNum; // в переменную записываю результат математической операции
let operator; //переменная для работы с математическими операторами

// функция присваивает новое значение старому значению для возможности производить над ним операции
let performOperation = function () {
  pastNumber = currentNumber;
  currentNumber = "";
  operator = this.getAttribute('data-sign');
};
//цикл для работы с операторами, по клику на конкретный элемент запускаем функцию
for (let i = 0; i < sign.length; i++) {
  sign[i].onclick = performOperation;
}

//получаем знаяеня и добавляем значения в экран
let addValueToScreen = function () {
  currentNumber += this.getAttribute('data-number');
  screen.innerHTML = currentNumber;
};
//цикл для работы с числами, по клику на конкретный элемент запускаем функцию
for (let i = 0; i < number.length; i++) {
  number[i].onclick = addValueToScreen;
}

//чоищаем значения, а на экран выводим 0
let clearScreen = ()=> {
  pastNumber = "";
  currentNumber = "";
  screen.innerHTML = "0";
}
//вешаю событие для очищения экрана
clear.onclick = clearScreen;

//перевожу значения из строк в числа
//в switch передаю оператор, по нажатию на который, выполняются математические операции
//записываю результат операции в переменную и вывожу этот результат на экран
//обнуляю значения
let displayNum = ()=> {
  pastNumber = parseFloat(pastNumber);
  currentNumber = parseFloat(currentNumber);

  switch (operator) {
    case "-":
      resultNum = pastNumber - currentNumber;
      break;

    case "+":
      resultNum = pastNumber + currentNumber;
      break;

    case "/":
      resultNum= Math.ceil((pastNumber / currentNumber)*100)/100;//округление
      break;

    case "*":
      resultNum = pastNumber * currentNumber;
      break;

    default:
      resultNum = currentNumber;
  }
  screen.innerHTML = resultNum;

  pastNumber = 0;
  currentNumber = resultNum;
  operator = null;
};

//вешаю событие для запуска функции вычисления
equally.onclick = displayNum;


