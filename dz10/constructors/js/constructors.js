console.log('----------- Сonstructors -----------');

// 1. Создать конструктор для производства автомобилей. 
// Конструктор должен принимать марку автомобиля и возраст машины. 
// Конструктор должен иметь метод, который возвращает марку, и
// второй метод, который возвращает год производства машины (год текущий минус возраст машины, использовать Date для получения текущего года)
// var lexus = new Car(‘lexus’, 2);
// lexus.получитьМарку(); // “Lexus”
// lexus.получитьГодВыпуска(); // 2014 (2016-2);
// Марка машины всегда должна возвращаться с большой буквы!
console.log('1) Car:');

function Car(brand, age) {

    this.brand = checkBrandName(brand || 'Unknown'); 
    this.age = checkAge(age || 0);

    function checkBrandName(stringVariable) {
        if (typeof stringVariable !== "string") {
            console.log('function checkBrandName / Car: stringVariable - not string');
            return 'Unknown';
        }

        let upperCaseFirstLetter = ([firstLetter, ...rest]) => firstLetter.toUpperCase() + rest.join('');
        stringVariable = upperCaseFirstLetter(stringVariable.trim());

        return stringVariable;
    }

    function checkAge(numberVariable) {
        if (typeof numberVariable !== "number" || isNaN(numberVariable)) {
            console.log("function getProductionYear / Car: numberVariable - not number");
            return 0;
        }

        if (numberVariable < 0) {
            console.log("function getProductionYear / Car: numberVariable < 0");
            return 0;
        }

        return numberVariable;
    }

    this.getBrand = function() {
        console.log(`Car brand: ${this.brand}`);
    };

    this.getProductionYear = function() {
        let date = new Date();
        let productionYear = date.getFullYear() - this.age;
        console.log(`Production year: ${productionYear}`);
    };
    
}

var lexus = new Car('lexus', 2);
lexus.getBrand(); // “Lexus”
lexus.getProductionYear(); // 2014 (2016-2);


// 2. Написать конструктор, который умеет элементарно шифровать строки 
// (например, сделать из строки строку-перевертыш, или заменить все символы их цифровым представлением, или любой другой метод). 
// Конструктор при инициализации получает строку и имеет следующие методы:
// 	a. показать оригинальную строку
// b. показать зашифрованную строку
// Строки не должны быть доступны через this, только с помощью методов.
console.log('2) EncryptString:');

function EncryptString(stringOriginal) {

    let string = checkString(stringOriginal || ''); 

    function checkString(stringVariable) {
        if (typeof stringVariable !== "string") {
            console.log('function checkString / EncryptString: stringVariable - not string');
            return '';
        }

        return stringVariable;
    }

    function reverseString(stringVariable) {    
        return stringVariable.split('').reverse().join('');
    }

    this.getEncryptString = function() {
        console.log(reverseString(string));
    };

    this.getString = function() {
        console.log(string);
    };

}

var stringPassword = new EncryptString('123Abc');
stringPassword.getString();
stringPassword.getEncryptString();
