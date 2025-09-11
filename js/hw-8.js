//1
const people = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));

//2
function isPositive(item) {
  return item > 0
}
function isMale(item) {
  return item.gender === 'male'
}
function filter(arr, ruleFunction) {
  const output = [];

  for (let i = 0; i < arr.length; i++) {
    if(ruleFunction(arr[i])) output.push(arr[i])
  }

  return output;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people2 = [
  {name: 'Глеб', gender: 'male'},
  {name: 'Анна', gender: 'female'},
  {name: 'Олег', gender: 'male'},
  {name: 'Оксана', gender: 'female'}
];

console.log(filter(people2, isMale));

//3
function startTimer() {
  let totalTime = 0;
  const interval = 3000;
  const maxTime = 30000;

  const intervalId = setInterval(() => {
  console.log(`Текущее время: ${new Date()}`);

  totalTime += interval;

  if (totalTime >= maxTime) {
    clearInterval(intervalId);
    console.log('30 секунд прошло');
  }
  }, interval);
}

startTimer();

//4
function delayForSecond(callback) {
  setTimeout(callback, 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
});

//5
// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log('Привет, ${name}!');
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'))
