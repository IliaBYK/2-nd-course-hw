const buttonTurn = document.getElementById('turnOver');

const turnOver = () => {
  alert('Добро пожаловать в игру Переверни текст!');
  alert(`Вы можете ввести текст и он будет перевернут
    для лучшей демонстрации игры вводите от 2х букв`);
    
  do {
    userGuess = prompt('Введите ваш текст: ');

    if(userGuess === null) {
      alert('Вы завершили игру');
      break;
    }

    if (userGuess.length < 2 && userGuess) {
      alert(`Вы ввели меньше двух букв, попробуйте еще раз`);
      continue;
    } else {
      alert(`Получившийся результат: 
        ${userGuess.split('').reverse().join('')}`)
    }
    
  } while (userGuess.length < 2);
}

buttonTurn.addEventListener('click', turnOver)
