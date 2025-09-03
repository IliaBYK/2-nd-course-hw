//1
for (let i = 0; i < 2; i++) {
  console.log('Привет');
}

//2
for (let i = 1; i < 6; i++) {
  console.log(i);
}

//3
for (let i = 7; i < 22; i++) {
  console.log(i);
}

//4
const obj = {
  "Коля" : '200',
  "Вася" : '300',
  "Петя" : '400'
}

for (const key in obj) {
  console.log(`${key} - ${obj[key]} долларов`);
}

//5
let n = 1000
let num = 0;

while (n >= 50) {
  n /= 2;
  num++
}

console.log(`Получилось число: ${n}`);
console.log(`Количество итераций: ${num}`);


//6
const firstFriday = 2;

for (let day = firstFriday; day <= 31; day += 7) {
  let dayFriday = day;
    
  console.log(`Сегодня пятница, ${dayFriday}-е число. Необходимо подготовить отчет.`);
}

//дополнительное
//1
let k = 100;
let iterations = 0;

while (k > 0) {
  k -= 7;
  iterations++;
}

console.log(`Получилось число: ${k}`);
console.log(`Количество итераций: ${iterations}`);

//2
const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
];

for (let i = 0; i < months.length; i++) {
  console.log(`${months[i]}: ${i + 1}`);
}

//3
const book = {
    'название': "Война и мир",
    'автор': "Лев Николаевич Толстой",
    'год издания': 1869,
    'жанр': "Роман-эпопея"
};

for (const key in book) {
  console.log(`${key}: ${book[key]}`);
}

//4
const arr = [80, 1, 64, 71, 46, 54, 68, 89, 18, 94];
let number = arr[0];

for (let i = 0; i < arr.length; i++) {
  if(number > arr[i + 1]) {
    number = arr[i + 1]
  }
}

console.log(number);
