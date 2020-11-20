// Функция sequence(start, step) при вызове возвращает функцию-генератор. Каждый вызов генератора возвращает новое число в
// числовой последовательности. start – стартовое число (по умолчанию 0). step – шаг приращения (по умолчанию 1). Пример работы:
//
//  var generator = sequence(10, 3);
// alert(generator()); // 10
// alert(generator()); // 13
// alert(generator()); // 16



function sequence(start = 0, step = 1) {
  start -= step;
  return function () {
    return start += step
  }
}

let generator = sequence(10, 3);
alert(generator()); // 10
alert(generator()); // 13
alert(generator()); // 16

//
// Создайте функцию sum, которая будет возвращать сумму любого количества чисел. Вызываться функция должна вот так
// (обратите внимание на скобки):
//
// x = sum(2)(5)(10);
// alert(x); // выводит 17



function sum(a) {
  const innerSum = function (b) {
    a += b;
    return innerSum;
  }
  innerSum.toString = function () {
  }
  return innerSum;
}
const res = sum(2)(5)(10)(20);
console.log(res.toString());
