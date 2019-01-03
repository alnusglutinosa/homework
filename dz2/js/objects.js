
// Преобразование примитивов. Задачи.
// Чему равно а, почему?

//let a = 0 || 'string'; =>'string'  
    /*
    оператор ИЛИ запинается на «правде»  Boolean(0)=>false, Boolean('string')=>true
    оператор ИЛИ вычисляет ровно столько значений, сколько необходимо – до первого true.
    При этом оператор ИЛИ возвращает то значение, на котором остановились вычисления. Причём, не преобразованное к логическому типу.
    */

//let a = 1 && 'string'; =>'string'  Boolean(1)=>true, Boolean('string')=>true
    /*
    оператор И запинается на «лжи».
    оператор И вычисляет операнды слева направо до первого «ложного» и возвращает его, а если все истинные – то последнее значение.
    */

// let a = null || 25; =>25  Boolean(null)=>false, Boolean(25)=>true - запинается на «правде»  

// let a = null && 25; =>null  Boolean(null)=>false, Boolean(25)=>true - запинается на «лжи»  

// let a = null || 0 || 35; =>35 Boolean(35)=>true - запинается на «правде» 

// let a = null && 0 && 35; =>null  Boolean(null)=>false запинается на «лжи» 

// Что отобразится в консоли. Почему?

// 12 + 14 + '12' =>"2612"  
    // 1) 12 + 14 = 26
    //2) 26 + '12' = "2612" //Плюс производит конкатенацию (сложение) строк, 
    //Если хотя бы один аргумент является строкой, то второй будет также преобразован к строке

// 3 + 2 - '1'=>4  Остальные арифметические операторы работают только с числами и всегда приводят аргументы к числу

// '3' + 2 - 1=>31  1) Конкатенация => "32" 2) "32" - 1  Оператор "-" приводит аргументы к числу 32-1=31

// true + 2=>3  Оператор "+" приводит аргумент "true" к числу 1+2=3

// +'10' + 1=>11  Унарный плюс, приведет строку к числу 10+1=11

// undefined + 2=>NaN //Оператор "+" приводит "undefined" к числу NaN + 2

// null + 5=>5 null //"null" при численном преобразовании становится 0

// true + undefined=>NaN // 1+NaN=NaN


// Объекты
// 1. Создать объект с полем product, равным ‘iphone’
console.log("----------- Объекты 1) ----------- ");

let card = {
    product: 'iphone'
};

// 2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
card.price = 1000;
card.currency = 'dollar';

// 3. Добавить поле details, которое будет содержать объект с полями model и color
// Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями.

card.details = {};
card.details.model = "iPhone 8 Plus";
card.details.color = "green";

console.log("card %o", card);

// If else. Задачи.

// 1) Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
console.log("----------- If else 1) ----------- ");

let toggleVariable;
if (toggleVariable === 'hidden') {
    toggleVariable = 'visible';
} else {
    toggleVariable = 'hidden';
}

console.log(toggleVariable);

// 2) Используя if, записать условие:
//     a. если переменная равна нулю, присвоить ей 1;
//     b. если меньше нуля - строку “less then zero”;
//     c. если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
console.log("----------- If else 2) ----------- ");

let compareVariable = 5;

if (compareVariable === 0) {
    compareVariable = 1;
} else if (compareVariable < 0) {
    compareVariable = 'less then zero';
} else {
    compareVariable *= 10;
}

console.log(compareVariable);


// 3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' 
// и свойство needRepair в объекте car изменить на true; иначе изменить на false.
console.log("----------- If else 3) ----------- ");

let car = { 
    name: 'Lexus', 
    age: 10, 
    create: 2008, 
    needRepair: false 
}

if (car.age > 5) {
    console.log('Need Repair');
    car.needRepair = true;
} else {
    car.needRepair = false;
}

console.log("car %o", car);

// 4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
// Написать условие если у item есть поле discount и там есть значение то в объекте item создать поле priceWithDiscount 
// и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание  что поля 
//discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.
console.log("----------- If else 4) ----------- ");

let item = { 
    name: 'Intel core i7', 
    price: '100$', 
    discount: '15%' 
}

let priceNumber = parseFloat(item.price);
let discountNumber = parseInt(item.discount);

if ('discount' in item && discountNumber && discountNumber > 0 && discountNumber <= 100) {
    item.priceWithDiscount = priceNumber - (priceNumber / 100 * discountNumber) + '$';
} else {
    console.log(item.price);
}
console.log("item %o", item);


// 6. Дан следующий код:
console.log("----------- If else 6) ----------- ");

let product = {
    name: 'Яблоко',
    price: '10$'
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена
// Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, 
// иначе вывести в консоль что товаров не найдено.

priceNumber = parseFloat(product.price);

if (priceNumber >= min &&  priceNumber <= max) {
    console.log(product.name);
} else {
    console.log('Товаров не найдено');
}


console.log("product %o", product);
