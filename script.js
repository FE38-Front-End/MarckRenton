// получаю все кнопки
const addUl = document.querySelector('.addUl');
const addLi = document.querySelector('.addLi');
const remuveLi = document.querySelector('.remuveLi');

//функция создаёт ul. Т.к. пользователь не видит результата нажатия кнопки
//я блокирую её и вывожу подсказку с дальнейшим действием.
addUl.onclick = () => {
  const ul = document.createElement('ul');
  document.body.appendChild(ul);
  addUl.disabled = true;
  let p = document.createElement('p');
  p.innerHTML = 'Вы создали список. Создайте элемент';
  document.body.append(p);
}
//функция создаёт в ul li, выводит время и удаляет сообщение из предыдущей функции. 
addLi.onclick = () => {
  let p = document.querySelector('p');
  const ul = document.querySelector('ul');
  if (!ul) {
    alert('Создайте сначала список!');
  } else {
    const li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML =new Date().toTimeString().replace(/ .*/, '') ;
    document.body.append(ul);
  }
  if (p) {
    p.remove();
  }
}
//функция получает список со вложенными элементами, удаляя последний элемено li
// и разблокирует первую кнопку, что бы можно было использовать задачу повторно.
//после удаления последнего элемента, вывожу сообщение, что элементров больше нету.
remuveLi.onclick = () => {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li');
  if (!li) {
    alert('В списке нету больше элементов!');
    addUl.disabled = false;
  } else
    ul.removeChild(ul.lastElementChild)
}
