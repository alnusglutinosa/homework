// Функции. Задачи.
// 1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
//  Если нет ни одного аргумента, вернуть ноль: multiply() // 0

function multiply() {
    if (!arguments.length) {
        return 0;
    }

    let result = 1;

    for (let i = 0; i < arguments.length; i++) {

        if (typeof arguments[i] !== "number" || isNaN(arguments[i])) {
            continue;
        }

        result *= arguments[i];
    } 

    return result;
}

console.log('1.', multiply(1, 2, 3));


// 2. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

function reverseString(stringVariable) {
    if (typeof stringVariable !== "string") {
        return console.log('function reverseString: stringVariable - not string');
    }

    let reversRes = stringVariable.split('');
    reversRes.reverse();
    reversRes = reversRes.join('');

    return reversRes;
}

console.log('2.', reverseString('test'));

// 3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, 
// где каждый символ разделен пробелом и заменен на юникод-значение символа: 
// getCodeStringFromText(‘hello’) // “104 101 108 108 111” 
// подсказка: для получения кода используйте специальный метод 

function getCodeStringFromText(stringVariable) {
    if (typeof stringVariable !== "string") {
        return console.log('function getCodeStringFromText: stringVariable - not string');
    }

    let unicodeArray = stringVariable.split('');

    for(let i = 0; i < unicodeArray.length; i++) {
        unicodeArray[i] = unicodeArray[i].charCodeAt(0);
    }
  
    return unicodeArray.join(' ');
}

console.log('3.', getCodeStringFromText('hello'));


// 4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). 
// Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то возвращает “Вы выиграли” 
// если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.

function guessNumber(userNumer) {

    if (typeof userNumer !== "number" || isNaN(userNumer)) {
        return "Вы ввели не число";
    }

    if (userNumer > 10 || userNumer <= 0) {
        return "Введите число от 1-10";
    }

    randomNumber = Math.round(Math.random() * 10);

    if (randomNumber !== userNumer) {
        return `Вы не угадали ваше число ${userNumer} а выпало число ${randomNumber}`;
    } 
            
    return "Вы выиграли";
}

console.log('4.', guessNumber(7));


// 5. Создать функцию, которая принимает число N и возвращает массив, заполненный числами от 1 до N: getArray(10); // [1,2,3,4,5,6,7,8,9,10]

function getArray(lengthArray) {

    if (typeof lengthArray !== "number" || isNaN(lengthArray)) {
        return console.log("function getArray : lengthArray - not number");
    }

    let arrayVariable = [];

    for(let i = 1; i <= lengthArray; i++) {
        arrayVariable.push(i);
    }
    return arrayVariable;
}

console.log('5.', getArray(10));


// 6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива:
// doubleArray([1,2,3]) // [1,2,3,1,2,3]

function doubleArray(arrayNumbers) {

    if (!Array.isArray(arrayNumbers)) {
        return console.log("function doubleArray : arrayNumbers - not Array");
    }

    let arrayCopy = arrayNumbers.slice();
    return arrayCopy.concat(arrayNumbers);
}

console.log('6.', doubleArray([1,2,3])); 


// 7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, 
// а возвращает массив из оставшихся значений: 
// changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.

function changeCollection() {
    if (!arguments.length) {
        return console.log("function changeCollection : no argument");
    }

    arrayResult = [];

    for (let i = 0; i < arguments.length; i++) {

        if (!Array.isArray(arguments[i])) {
            continue;
        }

        arguments[i].shift();
        arrayResult.push(arguments[i]);
    } 

    return arrayResult;
}

console.log('7.', changeCollection([1,2,3], ['a', 'b', 'c']));


// 8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. 
//Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие у казанным параметрам.

// funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]

function funcGetUsers(arrayUsers, checkField, checkValue) {

    if (arguments.length < 3) {
        return console.log("function funcGetUsers : need 3 argument");
    }

    if (!Array.isArray(arrayUsers)) {
        return console.log("function funcGetUsers : arrayUsers not array");
    }

    if (typeof checkField !== "string") {
        return console.log('function funcGetUsers: checkField - not string');
    }

    let arrayCheck = [];

    for (let i = 0; i < arrayUsers.length; i++) {
        if (arrayUsers[i][checkField] === checkValue) {
            arrayCheck.push(arrayUsers[i]);
        }
    }
  
    return arrayCheck 
}

let users = [ 
    {name: 'Denis', age: '27', gender: 'male'}, 
    {name: 'Ira', age: '38', gender: 'female'},
    {name: 'Ivan', age: '50', gender: 'male'},
    {name: 'Anna', age: '26', gender: 'female'},
    {name: 'Olha', age: '27', gender: 'female'} 
];


console.log('8.', funcGetUsers(users, "gender", "male"));
