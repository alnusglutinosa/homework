console.log('----------- Furniture -----------');

// Создать класс “Мебель” с базовыми свойствами “имя”, “цена”
// и методом “получить информацию” (метод должен вывести имя и цену).
// Метод должен быть объявлен с помощью прототипов (Func.prototype...).
//
// Создать два экземпляра класса “Мебель”: экземпляр “ОфиснаяМебель” и “Мебель для дома”.
// Придумайте им по одному свойству, которые будут характерны только для этих экземпляров
// (например, для офисной мебели - наличие компьютерного стола или шредера).
// Метод “получить информацию” должен учитывать и добавленное вами новое свойство.
// Задача на переопределение метода у экземпляров класса.

/**
* Class representing a furniture.
* @param {String} name - The name value.
* @param {Number} price - Price of furniture.
*/
function Furniture(name, price) {
  this.name = name || '';
  this.price = price || 0;
}

/**
* getInformation - get information of furniture
* @returns {String} Information value
*/
Furniture.prototype.getInformation = function() {
    return 'name: ' + this.name + ', price: ' + this.price + ',';
}

/**
* Class representing office furniture.
* @param {String} name - The name value.
* @param {String} price - Price of furniture.
* @param {Boolean} forProgrammers - Option furniture for programmers.
*/
function OfficeFurniture(name, price, forProgrammers) {
    Furniture.apply(this, arguments);
    this.forProgrammers = forProgrammers || false;
}

OfficeFurniture.prototype = Object.create(Furniture.prototype);
OfficeFurniture.prototype.constructor = OfficeFurniture;
OfficeFurniture.prototype.getInformation = function() {
  return Furniture.prototype.getInformation.call(this) + ' for programmers: ' + this.forProgrammers + ',';
}


/**
* Class representing home furniture.
* @param {String} name - The name value.
* @param {String} price - Price of furniture.
* @param {Boolean} forChildren - Option furniture for children.
*/
function HomeFurniture(name, price, forChildren) {
    Furniture.apply(this, arguments);
    this.forChildren = forChildren || false;
}

HomeFurniture.prototype = Object.create(Furniture.prototype);
HomeFurniture.prototype.constructor = HomeFurniture;
HomeFurniture.prototype.getInformation = function () {
  return Furniture.prototype.getInformation.call(this) + ' for children: ' + this.forChildren + ',';
}

const table = new OfficeFurniture('Table Venge', 2000, true);
console.log(table.getInformation());

const bed = new HomeFurniture('Bed Ukraine', 1700, false);
console.log(bed.getInformation());
