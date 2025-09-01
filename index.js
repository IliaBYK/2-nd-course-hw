//1
let a = 10;
alert(a);

a = 20;
alert(a);

//2
const year = 2007;
alert(year);

//3
const creator = 'Brendan Eich';
alert(creator);

//4
const ten = 10;
const two = 2;
alert(ten + two)
alert(ten - two)
alert(ten * two)
alert(ten / two)

//5
const result = 2 ** 5;
alert(result);

//6
a = 9;
const b = 2;
alert(a % 2);

//7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//8
const age = prompt('Сколько вам лет?')
alert(age)

//9
const user = {
  name: 'Иван', 
  age: 20, 
  isAdmin: true
}

//10
const nameUser = promt('Как вас зовут?')
alert(`Привет, ${nameUser}`)

//Дополнительное
const number = promt('Загадайте любое число')

const numberOne = number * 2;
alert(`Удвоенное загаданное число: ${numberOne}`);

const numberTwo = numberOne + 10;
alert(`К удвоенному числу прибавили 10: ${numberTwo}`);

const numberThree = numberTwo / 2;
alert(`Полученное число разделили на 2: ${numberThree}`);

const numberFour = numberThree - number;
alert(`Из результата вычли первоначальное загаданное число: ${numberFour}`)

alert('Ответ: 5')
