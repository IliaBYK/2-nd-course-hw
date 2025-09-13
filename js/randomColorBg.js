const buttonChangeColor = document.getElementById('changeColor');
const main = document.getElementById('main');
let isClicked = true;

//функция для показа окна один раз
const changeClick = () => {
  alert('При клике на эту кнопку вы можете изменить фон страницы на случайный');
  isClicked = false;
}

const changeColor = () => {
  isClicked && changeClick();

  main.style.backgroundColor = '#fff'
}

buttonChangeColor.addEventListener('click', changeColor)
