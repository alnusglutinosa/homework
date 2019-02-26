console.log('----------- Building -----------');

// Создайте класс “Здание”
// (пусть у него будет имя, количество этажей, метод “получить количество этажей” и метод “установить количество этажей”).
// Создайте наследников этого класса:
// классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование
//
// У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}
//
// У торгового центра появится свойство “количество магазинов на этаже”,
// а метод “получить количество этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
// От каждого класса создать экземпляр (дом, торговый центр)

/**
* Class representing a Building.
* @param {String} name - The name value.
* @param {String} quantityFloors - Quantity floors.
*/
function Building(name, quantityFloors) {
  this.name = name || '';
  this.quantityFloors = quantityFloors || 1;
  let self = this;

  /**
  * getQuantityFloors - get quantity floors.
  * @returns {Number} quantity floors.
  */
  this.getQuantityFloors = function() {
    return self.quantityFloors;
  };

  /**
  * setQuantityFloors - set quantity floors.
  */
  this.setQuantityFloors = function(quantity) {
    this.quantityFloors = quantity;
  };
}

/**
* Class representing a House.
* @param {String} name - The name value.
* @param {String} quantityFloors - Quantity floors.
* @param {String} numberApartments - Quantity apartments.
*/
function House(name, quantityFloors, numberApartments) {
    Building.apply(this, arguments);
    this.numberApartments = numberApartments || 0;
    var parentGetQuantityFloors = this.getQuantityFloors;

    /**
    * getQuantityFloors - get quantity floors
    * @returns {Object} Information value
    */
    this.getQuantityFloors = function() {
        return {
          floor: parentGetQuantityFloors(),
          totalApartments: parentGetQuantityFloors() * this.numberApartments
        };
    }
}


/**
* Class representing a shopping center.
* @param {String} name - The name value.
* @param {String} quantityFloors - Quantity floors.
* @param {String} numberShops - Quantity shops.
*/
function ShoppingCenter(name, quantityFloors, numberShops) {
    Building.apply(this, arguments);
    this.numberShops = numberShops || 0;
    var parentGetQuantityFloors = this.getQuantityFloors;

    /**
    * getQuantityFloors - get quantity floors
    * @returns {Object} Information value
    */
    this.getQuantityFloors = function() {
        return {
          floor: parentGetQuantityFloors(),
          totalShops: parentGetQuantityFloors() * this.numberShops
        };
    }
}


const housePark = new House('House Park 2017', 10, 5);
console.log(housePark.getQuantityFloors());

const cityShoppingCenter = new ShoppingCenter('City-Shop', 7, 30);
console.log(cityShoppingCenter.getQuantityFloors());
