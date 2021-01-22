// Создать интерфейс для возможности изменять положение
// окружности в пределх периметра квадрата
// Предусмотреть возможность ввода параметров квадрата и окружности
// В случае когда окружность достигла одной из границ квадрата заблокировать
// клавишу для этого направления
// Шаг движения окружности должен быть выбран пользователем
// Предусмотреть валидацию для ввода данных, например нельзя создать окружность большего
// диаметра чем сторона квадрата
// по умолчанию окружность распологать в центре квадрата
//функция делает проверку инпута для вывода квадрата и разблокировку следующей кнопки.
// Задаю значение минимум 50 т.к. меньшее значение получается слишком маленький квадрат
document.querySelector('.btnSquareArea').onclick = () => {
  const btnCircleDiameter = document.querySelector('.btnCircleDiameter');
  let inpSquareArea = +document.querySelector('.inpSquareArea').value;
  if (inpSquareArea.length !== 0 && inpSquareArea <= 49) {
    alert('Вы ввели некорректное значение!');
  } else {
    btnCircleDiameter.disabled = false
    drawSquare(inpSquareArea);
  }
}
//функция делает проверку на площадь круга, задаю значение больше 5 т.к. меньше- не видно. Разблокирует следующую кнопку.
document.querySelector('.btnCircleDiameter').onclick = () => {
  const btnStep = document.querySelector('.btnStep');
  let inpSquareArea = +document.querySelector('.inpSquareArea').value;
  let inpCircleDiameter = +document.querySelector('.inpCircleDiameter').value;
  if (inpSquareArea < inpCircleDiameter) {
    alert('Площадь круга не может быть больше площади квадрата. Введите другое значене!')
    return;
  } else if (inpCircleDiameter === '' || inpCircleDiameter < 5) {
    alert('Вы ввели некорректное значение!');
    return;
  }
  if (inpCircleDiameter !== '') {
    btnStep.disabled = false;
    drawCircle(inpCircleDiameter);
  }
}
//функция отрисовывоет квадрат. Но я бы сделал это в css и addClass
function drawSquare(inpSquareArea) {
  const divSquare = document.querySelector('.square');
  divSquare.style.border = "1px solid black";
  divSquare.style.width = `${inpSquareArea}px`;
  divSquare.style.height = `${inpSquareArea}px`;
  divSquare.style.position = 'relative';
  divSquare.style.overflow = 'hidden';
  divSquare.style.borderRadius = "8px";
}
//функция отрисовывоет круг. Но я бы сделал это в css и addClass
function drawCircle(inpCircleDiameter) {
  const circle = document.querySelector('.circle');
  circle.style.width = `${inpCircleDiameter}px`;
  circle.style.height = `${inpCircleDiameter}px`;
  circle.style.borderRadius = "100%";
  circle.style.background = "rgba(0, 0, 0, .3)";
  circle.style.position = 'absolute';
  circle.style.top = '50%';
  circle.style.left = '50%';
  circle.style.transform = 'translate(-50%, -50%)';
}
// функция проверяет шаг передвижения круга. Далее высчитываю перемещение круга и не даю ему выйти за пределы квадрата,
//использую Comma оператор. На btnGroup  вешаю событие, и через всплытие получаю значение кнопки на которой произошёл event,
//что бы не обращаться к каждой отдельно.
document.querySelector('.btnGroup').addEventListener('click', event => {
  const circle = document.querySelector('.circle');
  const divSquare = document.querySelector('.square');
  let step = document.querySelector('.inpStep').value;
  let action = event.target.innerText;
  if (step === '' || step === '0') {
    alert('Так шагать невозможно!');
    return;
  }
  step = +step;
  switch (action) {
    case "Up":
      circle.style.top = Math.max(circle.offsetTop - step, circle.offsetWidth / 2) + 'px';
      break;
    case "Left":
      circle.style.left = Math.max(circle.offsetLeft - step, circle.offsetWidth / 2) + 'px';
      break;
    case "Down":
      circle.style.top = Math.min(circle.offsetTop + step, divSquare.clientWidth - circle.offsetWidth / 2) + 'px';
      break;
    case "Right":
      circle.style.left = Math.min(circle.offsetLeft + step, divSquare.clientWidth - circle.offsetWidth / 2) + 'px';
      break;
  }
});

















