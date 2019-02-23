console.log('----------- Planet -----------');

// Есть класс Planet
// function Planet(name) {
//     this.name = name;
//     this.getName = function () {
//         return 'Planet name is ' + this.name;
//     }
// }
// Создать наследника от Planet, который будет называться PlanetWithSatellite и будет
// принимать, кроме name, название спутника (satelliteName). Переопределите метод
// getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку +
// дополнительный текст 'The satellite is' + satelliteName.
// Например:
// var earth = new PlanetWithSatellite('earth', 'moon');
// earth.getName(); // 'Planet name is earth. The satellite is moon’


/**
* Class representing a Planet.
* @param {String} name - The name value.
*/
function Planet(name) {
  this.name = name;

  /**
  * getName - get name planet.
  * @returns {String} Name value.
  */
  this.getName = function () {
    return 'Planet name is ' + this.name;
  }
}

/**
* Class representing a planet with satellite.
* @param {String} name - The name value.
* @param {String} satelliteName - The satellite name value.
*/
function PlanetWithSatellite(name, satelliteName) {
  Planet.call(this, name); 
  this.satelliteName = satelliteName;
  let parentGetName = this.getName;

  /**
  * getName - get name planet.
  * @returns {String} Name value.
  */
  this.getName = function() {
    return parentGetName.call(this) + '. The satellite is ' + this.satelliteName;
  };
}

var earth = new PlanetWithSatellite('earth', 'moon');
console.log(earth.getName()); // 'Planet name is earth. The satellite is moon’
