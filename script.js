const b = prompt('Ширина');
const h = prompt('Высота');
const a = prompt('Длина');
const d = prompt('Диам');


let sum = a * b
let SPipe = Math.PI * Math.pow(d / 2, 2);
let n = Math.floor(sum / SPipe) * h
alert(`В контейнер поместится${n} метров трубы`)