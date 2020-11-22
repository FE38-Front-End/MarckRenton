// Узнать является ли строка палиндромом.Слово палиндром - может читаться справа-налево и слева-направо одинаково. Прим “шалаш”.
let isPalindrome = 'доход';
let reversString='';
for (let i=isPalindrome.length-1; i>=0; i--){
  reversString = reversString + isPalindrome[i];
}
if (isPalindrome===reversString){
  console.log(`Слово ${isPalindrome}- это полиндром.`);
}else {
  console.log(`Слово ${isPalindrome}- не является полиндромом.`);
}

// Задание 2! Массив уникальных случайных цифр.
// Создадим массив для семи элементов;
// Заполним его случайными цифрами от 0 до 10;
// Цифры в массиве не должны повторяться;
// Вывести этот массив в консоль;
// Упорядочить массив;
// Еще раз вывести его в консоль.

let randomArrNumber = [];
for (let i = 0; i < 7; i++) {
  let randomNumber = Math.round(Math.random() * 10);
  randomArrNumber[randomArrNumber.length] = randomNumber;
}
console.log(randomArrNumber);
randomArrNumber.sort(function (a, b) {
  return a-b;
});
console.log(randomArrNumber);

//   Создадим массив с десятью случайными элементами от 0 до 100;
// Напишем инструкцию, которая будет заменять все “0” на строку “zero”;
// Выводим полученный массив в консоль.
//   прим. [12, 53, “2zero”, 18, 22, “1zerozero”, 43, 57, “5zero”, 1];


// заполняем массив случайными значениями.
let arrRandomNumber = [];
for (let i = 0; i < 10; i++) {
  let randomNumber = Math.round(Math.random() * 100);
  arrRandomNumber[arrRandomNumber.length] = randomNumber;
}

for (let i = 0; i < arrRandomNumber.length; i++) {
  //находим все элементы, которые заканчиваются на 0 и отфильтровываем их
  if (arrRandomNumber[i] % 10 === 0) {
    //запоминаем эти элементы
    let numbersEnd0 = arrRandomNumber[i] + ' ';
    //в новой переменной заменяем все ранее отобранные переменные но слово 'zero' и удаляем пробелы
    let replaceZerro = numbersEnd0.replace(/0/gi, 'zero').trim();
    // записываем изменённые переменные вместо ранее отфильтрованных значений
    arrRandomNumber[i] = replaceZerro;
  }
}
// результат выводим в консоль
console.log(arrRandomNumber);



