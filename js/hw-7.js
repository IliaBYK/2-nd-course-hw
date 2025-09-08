//1
const string = 'js';
console.log(string.toUpperCase());

//2
function filterStrings(array, prefix) {
  const lowerCasePrefix = prefix.toLowerCase();
    
  return array.filter(item => item.toLowerCase().startsWith(lowerCasePrefix));
}

const words = ['Apple', 'application', 'Banana', 'apricot', 'Orange', 'apex'];
const result = filterStrings(words, 'ap');

console.log(result);

//3
const example = 32.58884;

console.log(Math.floor(example), Math.ceil(example), Math.round(example));

//4
const numbers = [52, 53, 49, 77, 21, 32];

const minValue = Math.min(...numbers);
const maxValue = Math.max(...numbers);

console.log(minValue, maxValue);

//5
function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
    
  console.log(`Случайное число: ${randomNumber}`);
}

getRandomNumber();

//6
function generateRandomArray(n) {
  const arrayLength = n / 2;
  const result = [];
  
  for (let i = 0; i < arrayLength; i++) {
    const randomNumber = Math.floor(Math.random() * (n + 1));
    result.push(randomNumber);
  }
    
  return result;
}

console.log(generateRandomArray(6));
console.log(generateRandomArray(10));

//7
function getRandomNumberInRange(min, max) {
  if (min > max) {
    min = max;
    max = min;
  }
  
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumberInRange(1, 7));
console.log(getRandomNumberInRange(3, 10));
console.log(getRandomNumberInRange(-5, 5));

//8
  //1
//console.log(new Date());

  //2
/* const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

console.log(`${day}.${month}.${year}`); */

  //3
//console.log(new Date().toDateString());

  //4
const date = new Date();
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

console.log(`${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`);

//9
let currentDate = new Date();

let futureDate = new Date(currentDate);
futureDate.setDate(futureDate.getDate() + 73);

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

console.log("Дата через 73 дня: " + formatDate(futureDate));

//10
function formatDate(date) {
  const months = [
    'января', 'февраля', 'марта', 
    'апреля', 'мая', 'июня', 
    'июля', 'августа', 'сентября', 
    'октября', 'ноября', 'декабря'
  ];
  
  const daysOfWeek = [
    'понедельник', 'вторник', 
    'среда', 'четверг', 'пятница', 
    'суббота', 'воскресенье'
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const dayOfWeek = daysOfWeek[date.getDay()];
  
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  
  return `
    Дата: ${day} ${month} ${year} — это ${dayOfWeek}.
    Время: ${hours}:${minutes}:${seconds}
  `;
}

const currentDateExample = new Date();
console.log(formatDate(currentDateExample));
