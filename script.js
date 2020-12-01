const width = prompt('Ширина');
const height = prompt('Высота');
const length = prompt('Длина');
const diameter = prompt('Диам');


let sum = length * width;
let SPipe = Math.PI * Math.pow(diameter / 2, 2);
let meter = Math.floor(sum / SPipe) * height;
alert(`В контейнер поместится${meter} метров трубы`);