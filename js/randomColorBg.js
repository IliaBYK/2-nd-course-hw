const buttonChangeColor = document.getElementById('changeColor');
const main = document.getElementById('main');
let isClicked = true;
let color = '#';

//функция для показа окна один раз
const changeClick = () => {
  alert('При клике на эту кнопку вы можете изменить фон страницы на случайный');
  isClicked = false;
}

const changeColor = () => {
  isClicked && changeClick();

  for (let i = 0; i < 6; i++) {
    const num = Math.floor(Math.random() * 9)

    color += num.toString();
  }

  main.style.backgroundColor = color;

  color = '#';
}

buttonChangeColor.addEventListener('click', changeColor)
