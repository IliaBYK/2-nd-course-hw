//1
const less = (a, b) => a <= b ? a : b;

console.log(less(8, 4));
console.log(less(6, 6));

//2
const evenOdd = a => a % 2 === 0 ? 'Число четное' : 'Число нечетное';

console.log(evenOdd(2));
console.log(evenOdd(15));

//3
  //1
const quater = a => {
  console.log(a * a)
}

quater(6);
  //2
const quaterReturn = a => a * a;

console.log(quaterReturn(5));


//4
const age = () => {
  let ageUser;

  do {
    ageUser = parseInt(prompt('Сколько вам лет?'), 10);    

    if (ageUser < 0 || isNaN(ageUser)) {
      alert('Вы ввели неправильное значение');
      continue;
    } else if(ageUser >= 0 && ageUser < 12) {
      alert('Привет, друг!')
    } else if(ageUser >= 13) {
      alert('Добро пожаловать!')
    }
    
  } while (ageUser < 0 || isNaN(ageUser));
}

//age();

//5
const multiply = (a, b) => {
  const num1 = parseFloat(a);
  const num2 = parseFloat(b);

  if(isNaN(num1) || isNaN(num2)) return 'Одно или оба значения не являются числом';
  else return num1 * num2;
}

console.log(multiply(5, 6));
console.log(multiply('', 6));
console.log(multiply(5, 5));


//6
const number = () => {
  const inputUser = parseInt(prompt('Введите число'));    

  if (isNaN(inputUser)) {
    return 'Переданный параметр не является числом';
  } else return `${inputUser} в кубе равняется ${Math.pow(inputUser, 3)}`
}

//console.log(number());

//7
function getArea() {    
  return Math.PI * Math.pow(this.radius, 2);
}

function getPerimeter() {  
  return 2 * Math.PI * this.radius;
}

const circle1 = {
  'radius': 2,
  getArea,
  getPerimeter
}

const circle2 = {
  'radius': 4,
  getArea,
  getPerimeter
}

console.log(circle1.getArea());
console.log(circle2.getPerimeter());
