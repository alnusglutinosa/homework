console.log('----------- Class ES6 -----------');
// 1. Реализовать конструктор в ES6 синтаксисе (также используйте аргументы по умолчанию):
//
// function Component(tagName) {
//   this.tagName = tagName || 'div';
//   this.node = document.createElement(tagName);
// }
//
// Пример вызова:
//
// const comp = new Component('span');

class Component {
  constructor(tagName = 'div') {
    this.tagName = tagName;
    this.node = document.createElement(tagName);
  }
}

const comp = new Component('span');
console.log('1)', comp);


// 2. Реализовать конструктор и методы в ES6 синтаксисе:
//
// function Component(tagName) {
//   this.tagName = tagName || 'div';
//   this.node = document.createElement(tagName);
// }
//
// Component.prototype.setText = function (text) {
//   this.node.textContent = text;
// };

class WebComponent {
  constructor(tagName = 'div') {
    this.tagName = tagName;
    this.node = document.createElement(tagName);
  }

  setText (text = '') {
    this.node.textContent = text;
  }
}

const divComponent = new WebComponent('div');
divComponent.setText("new div!");
console.log('2)', divComponent);


// 3. Создать класс калькулятора который будет принимать стартовое значение
// и у него будут методы сложить, вычесть, умножить , разделить.
// Также у него должны быть геттер и сеттер для получения и установки текущего числа
// с которым производятся вычисления.
console.log('3) Calculator:');

class Calculator {
  constructor(value = 0) {
    this._calculatorValue = value;
  }

  get calculatorValue() {
    return this._calculatorValue;
  }

  set calculatorValue(value) {
    if (typeof value !== "number" || isNaN(value)) {
      console.log("Calculator / set calculatorValue : value - not number");
      return;
    }

    this._calculatorValue = value;
    console.log(`Set calculator value, value is ${this._calculatorValue}`);
  }

  addValue(value = 0) {
    if (typeof value !== "number" || isNaN(value)) {
      console.log("Calculator / addValue : value - not number");
      return;
    }

    console.log(`+ ${value}`);
    this._calculatorValue += value;
  }

  minusValue(value = 0) {
    if (typeof value !== "number" || isNaN(value)) {
      console.log("Calculator / minusValue : value - not number");
      return;;
    }

    console.log(`- ${value}`);
    this._calculatorValue -= value;
  }

  multiplyValue(value = 1) {
    if (typeof value !== "number" || isNaN(value)) {
      console.log("Calculator / multiplyValue : value - not number");
      return;
    }

    console.log(`* ${value}`);
    this._calculatorValue *= value;
  }

  divideValue(value = 1) {
    if (typeof value !== "number" || isNaN(value)) {
      console.log("Calculator / divideValue : value - not number");
      return;
    }

    if (value === 0) {
      console.log("Calculator / divideValue  : division by zero");
      return;
    }

    console.log(`/ ${value}`);
    this._calculatorValue /= value;
  }
  
}

const calcNumber = new Calculator();
console.log(`Get calculator value, value is ${calcNumber.calculatorValue}`);
calcNumber.calculatorValue = 10;
calcNumber.divideValue(2);
calcNumber.multiplyValue(3);
calcNumber.minusValue(1);
calcNumber.addValue(6);
console.log(`Get calculator value, value is ${calcNumber.calculatorValue}`);
