console.log('----------- Сlosures -----------');

// 1. Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0
// Подсказка, функция minus должна возвращать другую функцию.
console.log('1) Function minus :');

function minus(numberVariable = 0) {
    if (typeof numberVariable !== "number" || isNaN(numberVariable)) {
        console.log("function minus : numberVariable - not number");
    }

    return function (numberMinus = 0) {
        if (typeof numberMinus !== "number" || isNaN(numberMinus)) {
            console.log("function minus : numberMinus - not number");
        }

        console.log(numberVariable - numberMinus);
    }
}

minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0


// 2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
// function MultiplyMaker ...
// const multiply = MultiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)
console.log('2) Function MultiplyMaker:');

function MultiplyMaker(numberVariable = 0) {
    if (typeof numberVariable !== "number" || isNaN(numberVariable)) {
        console.log("function MultiplyMaker : numberMultiply - not number");
    }

    return function (numberMultiply = 0) {
        if (typeof numberMultiply !== "number" || isNaN(numberMultiply)) {
            console.log("function MultiplyMaker : numberMultiply - not number");
        }

        numberVariable *= numberMultiply;
        console.log(numberVariable);
    };
}

const multiply = MultiplyMaker(2);
multiply(2); // 4 (2 * 2)
multiply(1); // 4 (4 * 1)
multiply(3); // 12 (4 * 3)
multiply(10); // 120 (12 * 10)


// 3. Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
//  i. если передано пустое значение, то установить пустую строку
//  ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш
// Пример:
// модуль.установитьСтроку(‘abcde’);
// модуль.получитьСтроку(); // ‘abcde’
// модуль.получитьДлину(); // 5
console.log('3) stringModule:');

const stringModule = (function () {
    let _stringVariable = '';

    function getReverseString() {
        let reversRes = _stringVariable.split('');
        reversRes.reverse();
        reversRes = reversRes.join('');

        return reversRes;
    }

    function getLengthString() {
        return _stringVariable.length;
    }

    function setString(stringValue = '') {
        if (typeof stringValue === "number" && !isNaN(stringValue)) {
            _stringVariable = String(stringValue);
        } else if (typeof stringValue !== "string") {
            _stringVariable = '';
            console.log('function setString / stringModule: stringVariable - not string');
        } else {
            _stringVariable = stringValue;
        }
    }

    function getString() {
        return _stringVariable;
    }

    return {
        setString: setString,
        getString: getString,
        getLengthString: getLengthString,
        getReverseString: getReverseString
    };
}());

stringModule.setString('Olha');
console.log(stringModule.getString());
console.log(stringModule.getLengthString());
console.log(stringModule.getReverseString());


// 4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. 
//Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100
console.log('4) calculatorModule:');

const calculatorModule = (function () {
    let _calculatorValue = 0;

    function setValue(numberValue = 0) {
        if (typeof numberValue !== "number" || isNaN(numberValue)) {
            console.log("function setValue / calculatorModule  : numberValue - not number");
            numberValue = 0;
        }

        _calculatorValue = numberValue;
        return this;
    }

    function addValue(numberValue = 0) {
        if (typeof numberValue !== "number" || isNaN(numberValue)) {
            console.log("function setValue / calculatorModule  : numberValue - not number");
            numberValue = 0;
        }

        _calculatorValue += numberValue;
        return this;
    }

    function minusValue(numberValue = 0) {
        if (typeof numberValue !== "number" || isNaN(numberValue)) {
            console.log("function setValue / calculatorModule  : numberValue - not number");
            numberValue = 0;
        }

        _calculatorValue -= numberValue;
        return this;
    }

    function multiplyValue(numberValue = 1) {
        if (typeof numberValue !== "number" || isNaN(numberValue)) {
            console.log("function multiplyValue / calculatorModule  : numberValue - not number");
            numberValue = 1;
        }

        _calculatorValue *= numberValue;
        return this;
    }

    function divideValue(numberValue = 1) {
        if (typeof numberValue !== "number" || isNaN(numberValue)) {
            console.log("function multiplyValue / calculatorModule  : numberValue - not number");
            numberValue = 1;
        }

        if (numberValue === 0) {
            console.log("function multiplyValue / calculatorModule  : division by zero");
            numberValue = 1;
        }

        _calculatorValue /= numberValue;
        return this;
    }

    function powValue(numberValue = 1) {
        if (typeof numberValue !== "number" || isNaN(numberValue)) {
            console.log("function powValue / calculatorModule  : numberValue - not number");
            numberValue = 1;
        }

        _calculatorValue = Math.pow(_calculatorValue, numberValue);
        return this;
    }

    function getValue() {
        _calculatorValue = parseFloat(_calculatorValue.toFixed(2));
        console.log(_calculatorValue);
        return this;
    }

    return {
        setValue: setValue,
        addValue: addValue,
        minusValue: minusValue,
        multiplyValue: multiplyValue,
        divideValue: divideValue,
        powValue: powValue,
        getValue: getValue
    };
    
}());

calculatorModule.setValue(10); // значение = 10
calculatorModule.addValue(5);  // значение += 5 => 15
calculatorModule.multiplyValue(2); // значение *= 2 =>30
calculatorModule.getValue();  // вывести в консоль 30 (здесь надо округлить)  

calculatorModule.setValue(10).powValue(2).getValue();  // 100