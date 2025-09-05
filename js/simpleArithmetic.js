const buttonSimple = document.getElementById('simpleArithmetic');

const simpleArithmetic = () => {
  const operations = ['+', '-', '*', '/']
  const randomOperation = operations[Math.floor(Math.random() * operations.length)];
  const randomOne = Math.floor(Math.floor(Math.random() * 10) + 1);
  const randomTwo = Math.floor(Math.floor(Math.random() * 10) + 1);
  let userGuess;

  function calculate(operator, num1, num2) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        alert('Введите ваш вариант ответа');
    }
  } 

  alert('Добро пожаловать в игру Простая арифметика!');
  alert(`Вам будут представлены арифметические задачи, 
  попробуйте решить их и написать ответ в поле ввода`);
  alert([randomOne, randomOperation, randomTwo].join(''))
    
  do {
    userGuess = parseInt(prompt('Введите ваш ответ: '), 10);
    if (userGuess !== calculate(randomOperation, randomOne, randomTwo)) {
      alert(`К сожалению, вы ошиблись, попробуйте еще раз
      Вот задача:  ${[randomOne, randomOperation, randomTwo].join('')}`);
      continue;
    }
    
  } while (userGuess !== calculate(randomOperation, randomOne, randomTwo));

  alert(`Поздравляем! Вы решили задачу.`);
}

buttonSimple.addEventListener('click', simpleArithmetic)
