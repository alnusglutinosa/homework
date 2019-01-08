// СТРОКИ
let string = 'some test string';

// 1. Получить первую и последнюю буквы строки
console.log(string[0]);
console.log(string.slice(-1)); //string[string.length - 1];

// 2. Сделать первую и последнюю буквы в верхнем регистре
console.log(string[0].toUpperCase() + string.slice(1,-1) + string.slice(-1).toUpperCase());
// string[0].toUpperCase();
// string[string.length - 1].toUpperCase();

// 3. Найти положение слова ‘string’ в строке
//console.log(string.indexOf('string') + 1);

let secondSpace = string.indexOf(' ', string.indexOf(' ') + 1);

// 4. Найти положение второго пробела (“вручную” ничего не считать)
console.log(string.lastIndexOf(' ') + 1);

// 5. Получить строку с 5-го символа длиной 4 буквы
console.log(string.substr(4, 4));

// 6. Получить строку с 5-го по 9-й символы
console.log(string.substring(4, 8));

// 7. Получить новую строку из исходной путем удаления последних 6-и символов
stringNew = string.slice(0, -6);
console.log(stringNew);

// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
// содержаться текст “2016”
let a = 20,
    b = 16; 
string = `${a}${b}`;
console.log(string);


// ЧИСЛА
// 1. Получить число pi из Math и округлить его до 2-х знаков после точки
let pi = Math.PI;
console.log( Math.round(pi * 100) / 100 );
// parseFloat((Math.PI).toFixed(2));

// 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
console.log(Math.max(15, 11, 16, 12, 51, 12, 13, 51));
console.log(Math.min(15, 11, 16, 12, 51, 12, 13, 51));

// 3. Работа с Math.random:
// a. Получить случайное число и округлить его до двух цифр после запятой
// b. Получить случайное целое число от 0 до X. X - любое произвольное число. 
let randomNumber = Math.random() * 20;
// randomNumber = randomNumber.toFixed(2);
// console.log(randomNumber);
parseFloat(randomNumber.toFixed(2));

let x = 15;
randomNumber = Math.round(Math.random() * x);
console.log(randomNumber);

// 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
a = 0.6,
b = 0.7;
console.log( a + b );
console.log( (a * 10 + b * 10) / 10 );

// 5. Получить число из строки ‘100$’
console.log(parseInt('100$'));

// parseFloat((0.6 + 0.7).toFixed(1));