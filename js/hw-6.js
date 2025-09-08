//1
const array = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array.length; i++) {
  if (array[i] === 10) {
    console.log(array[i]);
    break;
  } else {
    console.log(array[i]);
  }
}

//2
const index = array.indexOf(4);
console.log(index);

//3
const arrayForJoin = [1, 3, 5, 10, 20];
console.log(arrayForJoin.join(' '));

//4
const matrix = [];

for(let i = 0; i < 3; i++) {
    matrix[i] = [];
    
    for(let j = 0; j < 3; j++) {
        matrix[i][j] = 1;
    }
}

console.log(matrix);

//5
const arrayForPush = [1, 1, 1];
arrayForPush.push(2, 2, 2)

console.log(arrayForPush);

//6
const arrayForSort = [9, 8, 7, 'a', 6, 5];

const filteredArray = arrayForSort.sort().filter(el => typeof(el) === 'number');
console.log(filteredArray);

//7
const arrayForGuess = [9, 8, 7, 6, 5];
let userInput;

/* do {
  userInput = parseInt(prompt('Угадайте число'), 10);

  if (userInput < 0 || isNaN(userInput)) {
    alert('Вы ввели неправильное значение');
    continue;
  } else if(arrayForGuess.includes(userInput)) {
    alert('Угадал')
  } else alert('Не угадал')
  
} while (userInput < 0 || isNaN(userInput) || !arrayForGuess.includes(userInput)); */

//8
const string = 'abcdef';
console.log(string.split('').reverse().join(''));

//9
const arrayForSpread = [[1, 2, 3],[4, 5, 6]];
const result = [].concat(...arrayForSpread);

console.log(result);

//10
const arrayForReduce = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arrayForReduce.length - 1; i++) {
  console.log(arrayForReduce[i] + arrayForReduce[i + 1]);
}

//11
const square = (arr) => arr.map(item => item * item);

console.log(square(arrayForReduce));

//12
const cities = ['Москва', 'Санкт-Петербург', 'Казань', 'Сочи', 'Владивосток'];

const lengthWord = (arr) => arr.map(item => item.split('').length);

console.log(lengthWord(cities));

//13
const negative = (arr) => arr.filter(item => item < 0);

const arrayForExample = [1, 2, -3, 4, -5, 6];

console.log(negative(arrayForExample));

//14
const randomArray = [...Array(10)].map(() => 
    Math.floor(Math.random() * 11)
);

const filteredRandomArray = randomArray.filter(item => item % 2 === 0/*  && item !== 0 */);

console.log(randomArray);
console.log(filteredRandomArray);

//15
const randomArrayMiidle = [...Array(6)].map(() => 
    Math.floor(Math.floor(Math.random() * 10) + 1)
);
//console.log(randomArrayMiidle);

const sum = randomArrayMiidle.reduce((item, acc) => item + acc);
const middle = sum / randomArrayMiidle.length;

console.log(middle);
