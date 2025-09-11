const buttonStone = document.getElementById('stonePaper');

const stonePaper = () => {
  const choices = ["камень", "ножницы", "бумага"];
  let userInput;

  function getRandomSign(array) {
    const randomIndex = Math.floor(Math.random() * 3);
    return array[randomIndex];
  }

  alert('Добро пожаловать в игру Камень, ножницы, бумага!');
  alert(`Вы можете сыграть с компьютером в популярную игру.\nДля выхода нажмите "Отмена"`);

  do {
    //пришлось дописать проверку, иначе если пользователь нажимал отмена или вводил пустое значение,
    //появлялась ошибка, так как у этого нет свойства toLowerCase
    userInput = prompt("Выберите: камень, ножницы или бумага (отмена для выхода)");

    if (userInput !== null && userInput !== undefined) {
      userInput.toLowerCase();
    }

    if (userInput === null) {
      alert("Игра окончена. Спасибо за участие!");
      break;
    }

    if (!choices.includes(userInput)) {
      alert("Неверный ввод! Пожалуйста, выберите камень, ножницы или бумагу.");
      continue;
    }

    const computerChoice = getRandomSign(choices);
    
    let result;
    
    if (userInput === computerChoice) {
      result = "Ничья!";
    } else if (
      (userInput === "камень" && computerChoice === "ножницы") ||
      (userInput === "ножницы" && computerChoice === "бумага") ||
      (userInput === "бумага" && computerChoice === "камень")
    ) {
      result = "Вы победили!";
    } else {
      result = "Вы проиграли!";
    }

    alert(
      `Ваш выбор: ${userInput}\n` +
      `Выбор компьютера: ${computerChoice}\n` +
      `${result}`
    );
  } while (userInput !== null)

}

buttonStone.addEventListener('click', stonePaper)
