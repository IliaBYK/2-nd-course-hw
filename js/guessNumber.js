const button = document.getElementById('guessNumber')

const guessNumber = () => {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  let userGuess;

  //вывожу в консоль, чтоб можно было угадать
  console.log(secretNumber);

  alert('Добро пожаловать в игру Угадай число!');
  alert('Я загадал число от 1 до 100. Попробуйте его угадать!');

  do {
      userGuess = parseInt(prompt('Введите ваше предположение: '), 10);

      if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
          alert('Пожалуйста, введите число от 1 до 100!');
          continue;
      }

      if (userGuess < secretNumber) {
          alert('Загаданное число больше!');
      } else if (userGuess > secretNumber) {
          alert('Загаданное число меньше!');
      }
  } while (userGuess !== secretNumber);

  alert(`Поздравляем! Вы угадали число ${secretNumber}.`);
}

button.addEventListener('click', guessNumber)
