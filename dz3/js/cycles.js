// Тернарный оператор. Switch case. Задачи.

// 1) Записать в виде switch case следующее условие:
// if (a === ‘block’) {
// 	console.log(‘block’)
// } else if (a === ‘none’) {
// 	console.log(‘none’)
// } else if (a === ‘inline’) {
// console.log(‘inline’)
// } else {
// 	console.log(‘other’)
// }
//  Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.

let a = '';
switch (a) {
    case 'block': 
        console.log('block'); 
        break;
    case 'none': 
        console.log('none'); 
        break;
    case 'inline': 
        console.log('inline'); 
        break;
    default: 
        console.log('other');
}


// 2) Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного оператора.

// 2.1) Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let toggleVariable;
toggleVariable = toggleVariable === 'hidden' ? 'visible' : 'hidden';

console.log(toggleVariable);

// 2.2) Используя if, записать условие:
//     a. если переменная равна нулю, присвоить ей 1;
//     b. если меньше нуля - строку “less then zero”;
//     c. если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let compareVariable = 5;
compareVariable === 0 ? compareVariable = 1 
    : compareVariable < 0 ? compareVariable = 'less then zero'
	: compareVariable *= 10;

console.log(compareVariable);

// 2.3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' 
// и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = { 
    name: 'Lexus', 
    age: 10, 
    create: 2008, 
    needRepair: false 
}

car.age > 5 ? (
    console.log('Need Repair'),
    car.needRepair = true
) : car.needRepair = false;

console.log("car %o", car);


// Циклы. Задачи.

// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова 
// будут в верхнем регистре. Использовать for или while.

let stringLowerCase = 'i am in the easycode';
let stringUpperCase = '';

for (let i = 0; i < stringLowerCase.length; i++) {
    stringUpperCase += (i === 0 || stringLowerCase[i-1] === ' ') ? stringLowerCase[i].toUpperCase() : stringLowerCase[i];
}

console.log(stringUpperCase);

// 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).
let stringReverse = 'tseb eht ma i';
let stringCorrect = '';

for (var key in stringReverse) {
    stringCorrect = stringReverse[key] + stringCorrect;
}

console.log(stringCorrect);

// 3. Факториал числа - произведение всех натуральных чисел от 1 до n
// включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.

let factorial = 1; 
for(let i = 2; i <= 10; i++) {
    factorial *= i; 
}
   
console.log(`10! = ${factorial}`);

// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
// где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

let stringVariable = 'JavaScript is a pretty good language';
let stringEdit = '';
let stringEditLength = stringVariable.length;

for (let i = 0; i < stringEditLength; i++) {

    if (stringVariable[i] === ' ') {
        continue;
    }

    let newLetter = (i === 0 || stringVariable[i-1] === ' ') ? stringVariable[i].toUpperCase() : stringVariable[i];
    stringEdit += newLetter;
}

console.log(stringEdit);


// 5. Найти все нечетные числа от 1 до 15 включительно и вывести их в консоль. Использовать for of.
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let value of myArray) {
    if (value % 2 !== 0) {
        console.log(value);
    }
}


// 6. Дан объект:
// let list = {
//      name: ‘denis’,
//      work: ‘easycode’,
//      age: 29
// }
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in

let list = {
     name: 'denis',
     work: 'easycode',
     age: 29
}

for (let item in list) {
    if(typeof list[item] === "string") {
        list[item] = list[item].toUpperCase();
    }
}

console.log("list %o", list);
