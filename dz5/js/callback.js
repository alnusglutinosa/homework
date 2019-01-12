// 1. Создать две функции и дать им осмысленные названия:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback) 

// Первая функция возвращает строку "New value: " и результат обработки:

// firstFunc(['my', 'name', 'is', 'Trinity'], handler1) → "New value: MyNameIsTrinity"
// firstFunc([10, 20, 30], handler2) → "New value: 100, 200, 300,"
// firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3) →
// "New value: Jhon is 45, Aaron is 20,"
// firstFunc(['abc', '123'], handler4) → "New value: cba, 321," // строки инвертируются

// Подсказка: secondFunc должна быть представлена функцией, которая принимает
// один аргумент (каждый элемент массива) и возвращает результат его обработки
console.log('----------- Функции высшего порядка -----------');

function processArray(arrayVariable, handler) {

    if (!Array.isArray(arrayVariable)) {
        return console.log("function processArray : arrayVariable - not Array");
    }

    let newString = '';
    
    arrayVariable.forEach(function(item) {
        newString += handler(item);
    });

    return "New value: " + newString.trim();
}

function upperCaseFirst(stringVariable) {
    if (typeof stringVariable !== "string") {
        console.log('function combineItem: stringVariable - not string');
        return '';
    }

    if (!stringVariable) {
        console.log('function combineItem: stringVariable - empty string');
        return '';
    }

    return stringVariable[0].toUpperCase() + stringVariable.slice(1);
}

function multiplyTen(numberVariable) {
    if (typeof numberVariable !== "number" || isNaN(numberVariable)) {
        return console.log("function multiplyTen : numberVariable - not number");
    }

    return (numberVariable * 10) + ', ';
}

function ageUser(objVariable) {

    if (typeof objVariable !== "object" || objVariable === null) {
        console.log('function ageUser: objVariable - not object');
        return '';
    }

    if (! ('age' in objVariable)) {
        console.log('function ageUser: age - not property');
        return '';
    }

    if (! ('name' in objVariable)) {
        console.log('function ageUser: name - not property');
        return '';
    }

    if (typeof objVariable['age'] !== "number" || isNaN(objVariable['age'])) {
        return console.log("function ageUser : age - not number");
    }

    if (typeof objVariable['name'] !== "string") {
        return console.log('function ageUser: name - not string');
    }

    return `${objVariable.name} is ${objVariable.age}` + ', ';
}

function reverseString(stringVariable) {
    if (typeof stringVariable !== "string") {
        return console.log('function reverseString: stringVariable - not string');
    }

    return stringVariable.split('').reverse().join('') + ', ';
}

console.log('1.1', processArray(['my', 'name', 'is', 'Trinity'], upperCaseFirst)); //"New value: MyNameIsTrinity"
console.log('1.2', processArray([10, 20, 30], multiplyTen)); // "New value: 100, 200, 300,"
console.log('1.3', processArray([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], ageUser)); //"New value: Jhon is 45, Aaron is 20,"
console.log('1.4', processArray(['abc', '123'], reverseString)); // "New value: cba, 321," // строки инвертируются


// 2. Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) 
//вторым аргументом callback 
// функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). 
// Callback  должен принимать один элемент массива, его индекс в массиве и весь массив. 

function every(arrayNumbers, handler) {

    if (!Array.isArray(arrayNumbers)) {
        return console.log("function every : arrayNumbers - not Array");
    }

    for (let i = 0; i < arrayNumbers.length; i++) {
        
        if (!handler(arrayNumbers[i], i, arrayNumbers)) {
            return false;
        }
    }

    return true;
}

function numberMoreThan5(numberVariable, i, arr) {
    if (typeof numberVariable !== "number" || isNaN(numberVariable)) {
        return console.log(`function numberMoreThan5 : array [ ${arr} ], item[${i}] ${numberVariable} - not number`);
    }

    return numberVariable > 5;
}

console.log('2', every([50, 8, 8], numberMoreThan5));


// Перебирающие методы. Задачи.

// 1. На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
// каждый элемент которого будет хранить информацию о числе и его четности:
// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]
console.log('----------- Перебирающие методы -----------');

let arrayVariable = [1, 2, 3, 5, 8, 9, 10];

let arrayDetail = arrayVariable.map(function (numberVariable) {
    return {
       digit: numberVariable,
       odd: numberVariable % 2 !== 0
    }
});

console.log("1 arrayDetail %o", arrayDetail);


// 2.Проверить, содержит ли массив [12, 4, 50, 1, 50, 18, 40] элементы, равные нулю. Если да - вернуть false.
let arrayNumber = [12, 4, 50, 1, 0, 18, 40];

let resultValue = arrayNumber.every(function (val) {
    return (val !== 0);
});

console.log('2. ', resultValue);


// 3. Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной больше 3х букв. Если да - вернуть true
let arrayWords = ['yes', 'hello', 'no', 'easycode', 'what'];
let longWord = arrayWords.some(function (val) {
    return val.length > 3;
});

console.log('3. ', longWord);


// 4. Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: "a", позиция_в_предложении: 1}:

// [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
// {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
// {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

// Напишите функцию, которая из элементов массива соберет и вернёт
// строку, основываясь на index каждой буквы. Например:
// [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → "Hi!"

// Подсказка: вначале отсортируйте массив по index, затем используйте reduce() для построения
// строки

let arrayObject = [
    {char:"a", index:12}, {char:"w", index:8}, {char:"Y", index:10}, {char:"p", index:3}, {char:"p", index:2},
    {char:"N", index:6}, {char:" ", index:5}, {char:"y", index:4}, {char:"r", index:13}, {char:"H", index:0},
    {char:"e", index:11}, {char:"a" ,index:1}, {char:" ", index:9}, {char:"!", index:14}, {char:"e", index:7}
];

function makeString(arrayObject) {

    if (!Array.isArray(arrayObject)) {
        return console.log("function makeString : arrayValue - not Array");
    }

    let arrayValue = arrayObject.slice();

    arrayValue.sort(function (prev, next) {
        return prev.index - next.index;
    });

    let reduceRes = arrayValue.reduce(function (newString, current) {
        return newString += current.char;
    }, '');

    return reduceRes;
}

console.log('4. ', makeString(arrayObject));

// Метод Sort. Задачи.
// 1. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): 
//[  [14, 45],  [1],  ['a', 'c', 'd']  ] → [ [1], [14, 45], ['a', 'c', 'd'] ]
console.log('----------- Метод Sort -----------');

let arraySort = [  [14, 45],  [1],  ['a', 'c', 'd']  ]; 

arraySort.sort(function (prev, next) {
    return prev.length - next.length;
});

console.log('1. ', arraySort);

// 2. Есть массив объектов:
// [
//     {cpu: 'intel', info: {cores:2, сache: 3}},
//     {cpu: 'intel', info: {cores:4, сache: 4}},
//     {cpu: 'amd', info: {cores:1, сache: 1}},
//     {cpu: 'intel', info: {cores:3, сache: 2}},
//     {cpu: 'amd', info: {cores:4, сache: 2}}
// ]

// Отсортировать их по возрастающему количеству ядер (cores).

let arrayCpu = [
    {cpu: 'intel', info: {cores:2, сache: 3}},
    {cpu: 'intel', info: {cores:4, сache: 4}},
    {cpu: 'amd', info: {cores:1, сache: 1}},
    {cpu: 'intel', info: {cores:3, сache: 2}},
    {cpu: 'amd', info: {cores:4, сache: 2}}
];

arrayCpu.sort(function (prev, next) {
    return prev.info.cores - next.info.cores;
});

console.log('2. ', arrayCpu);


// 3. Создать функцию, которая будет принимать массив продуктов и две цены. 
//Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:

// let products = [
//     {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
//     {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
//     {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
//     {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
// ];

// filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]

let products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

function filterCollection (arrayProducts, priceMin, priceMax) {

    if (!Array.isArray(arrayProducts)) {
        return console.log("function filterCollection : arrayProducts - not Array");
    }

    let arraySelection = arrayProducts.filter(function(product) {
        return product.price >= priceMin && product.price <= priceMax;
    });

    arraySelection.sort(function (prev, next) {
        return prev.price - next.price;
    });

    return arraySelection;
}

console.log('3. ', filterCollection(products, 15, 30));



