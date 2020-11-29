// Задача 1
// В неупорядоченном списке с 10 элементами вывести на консоль текст находящийся
// внутри элементов. Список находится в html (список создаёте на своё усмотрение).
let textLi = document.querySelectorAll('li');
let outputVariable = '';
for (let i = 0; i < textLi.length; i++) {
  outputVariable += textLi[i].textContent + " ";
}
console.log(outputVariable);

// Задача 2
// Сформировать неупорядоченный список в js с числами от 1 до n, где n вводит
// пользователь, готовый список вывести в html
//Создать список из n элементов внутри элемента вывести значение n

function f1() {
  // получаю необходимые данные, создаю массив и добавляю значение из инпута в массив
  let btn = document.querySelector('.btn');
  let numberArray = [];
  let valueInput = +document.querySelector('.inp').value;
  let input = document.querySelector('.inp');
  numberArray.push(valueInput);
  let error;

  // проверяю на 0, если попадает под условие, то вывожу сообщение и блокирую кнопку
  if (valueInput === 0) {
    error = document.createElement('p');
    error.style.color = 'red';
    error.innerHTML = 'Вы ввели недопустимое число!';
    document.body.append(error);
    this.disabled = true;
  }
  // при правильном вводе, разблакирую кнопку и очишаю сообщение об ошибке
  input.oninput = () => {
    this.disabled = false;
    error.innerHTML = '';
  }
  //циклом прохожу по массиву и создаю элементы
  for (let i = 0; i < numberArray; i++) {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
//добавляю в созданный список элементы li, записываю в li значения из массива
    ul.appendChild(li);
    li.innerHTML = numberArray;
    //вывожу на страниу список
    document.body.append(ul);
  }
}

document.querySelector('.btn').onclick = f1;
