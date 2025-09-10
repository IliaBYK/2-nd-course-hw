const buttonQuiz = document.getElementById('quiz');

const quizQuestions = [
  {
    question: "Какой цвет небо?",
    options: ["1. Красный", "2. Синий", "3. Зеленый"],
    correctAnswer: 2
  },
  {
    question: "Сколько дней в неделе?",
    options: ["1. Шесть", "2. Семь", "3. Восемь"],
    correctAnswer: 2
  },
  {
    question: "Сколько у человека пальцев на одной руке?",
    options: ["1. Четыре", "2. Пять", "3. Шесть"],
    correctAnswer: 2
  }
];

const quiz = () => {
  let userGuess;
  let score = 0;

  alert('Добро пожаловать в игру Простая викторина!');
  alert(`Вам будут представлены 3 вопросов и 3 варианта ответов,
    выберите правильный, на ваш взгляд, и введите его в поле ввода`);

  for (let i = 0; i < quizQuestions.length; i++) {
    userGuess = prompt(`${quizQuestions[i].question}
      варианты ответов:
      ${quizQuestions[i].options.join(', ')}
    `);

    if(userGuess === null) {
      alert('Вы завершили игру');
      break;
    }

      if (userGuess !== quizQuestions[i].correctAnswer.toString()) {
        alert(`Увы, неверно, ${i < quizQuestions.length - 1 ? ('следующий вопрос') : 'Вы ответили на все вопросы'}`);
      } else {
        alert(`Верно! ${i < quizQuestions.length - 1 ? ('Cледующий вопрос') : 'Вы ответили на все вопросы'}`)
        score++;
        continue;
      }
  }

  alert(`Поздравляем! Вы набрали ${score} ${score === 0 && 'очков' || score === 1 && 'очко' || score > 1  && 'очка'}`);
}

buttonQuiz.addEventListener('click', quiz)
