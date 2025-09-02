//1
let password = 'пароль';

let asked = prompt('Введите пароль')

password === asked ? alert('Пароль введен верно') : alert('Пароль введен неправильно')

//2
let c = 4;
if(c > 0 && c < 10) {
  console.log('Верно');
} else console.log('Неверно');

c = 0;
c > 0 && c < 10 ? console.log('Верно') : console.log('Неверно');

c = 10;
c > 0 && c < 10 ? console.log('Верно') : console.log('Неверно');

c = -3;
c > 0 && c < 10 ? console.log('Верно') : console.log('Неверно');

c = 2;
c > 0 && c < 10 ? console.log('Верно') : console.log('Неверно');

//3
const d = 101
const e = 90

d > 100 || e > 100 ? console.log('Верно') : console.log('Неверно');

//4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(+a + +b);

//5
let monthNumber = 12;

switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    alert("Зима");
    break;
  case 3:
  case 4:
  case 5:
    alert("Весна");
    break;
  case 6:
  case 7:
  case 8:
    alert("Лето");
    break;
  case 9:
  case 10:
  case 11:
    alert("Осень");
    break;
  default:
    alert("Ошибка: неверный номер месяца!")
}

//дополнительное
//1

const number = prompt('Пожалуйста, введите любое число')

typeof(+number) !== 'number' 
? 
alert('Вы ввели не число')
:
+number % 2 === 0 ? alert('Число четное') : alert('Число нечетное');

/* switch (number) {
  case typeof(+number) !== 'number':
    alert('Вы ввели не число')
    break;
  case +number % 2 === 0:
    alert('Число четное')
    break;
  case +number % 2 !== 0:
    alert('Число нечетное')
    break;
  default:
    break;
} */

//2
let clientOS = 0;

if (clientOS === 0) {
  console.log('Установите версию приложения для iOS по ссылке')
} else if (clientOS === 1) {
  console.log('Установите версию приложения для Android по ссылке')
} else {
  console.log('Не удалось распознать вашу операционную систему');
}

//clientOS === 0 ? console.log('Установите версию приложения для iOS по ссылке') : console.log('Установите версию приложения для Android по ссылке')

//3
const clientDeviceYear = 2015;

if (clientOS === 0 && clientDeviceYear < 2015) {
  console.log('Установите облегченную версию приложения для iOS по ссылке');
} else if (clientOS === 0 && clientDeviceYear >= 2015) {
  console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 1 && clientDeviceYear < 2015) {
  console.log('Установите облегченную версию приложения для Android по ссылке');
} else if (clientOS === 1 && clientDeviceYear >= 2015) {
  console.log('Установите версию приложения для Android по ссылке');
} else {
  console.log('При обработке запроса произошла ошибка');
}
