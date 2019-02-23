console.log('----------- User -----------');

// Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации” и методом “получить информацию”
// (метод должен вывести имя и дату регистрации).
// Метод должен быть объявлен с помощью прототипов (Func.prototype...)
// Создать два наследника класса “Пользователь”: класс “Админ” и класс “Гость”.
// У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть true/false, должно быть скрытым).
// Свойства определяются в момент вызова
// конструктора.
// У класса “Гость” должно быть свойство “срокДействия” (validDate, например),
// содержащее дату (например, одну неделю от момента регистрации).
// У классов-наследников метод “получить информацию” должен так же содержать информацию о дополнительных свойствах
// (“суперАдмин” и “срокДействия”)
//

/**
* Class representing User.
* @param {String} name - The name value.
* @param {String} dateRegistration - Date registration.
*/
function User(name, dateRegistration) {
  this.name = name || 'user';
  this.dateRegistration = dateRegistration || '';
}

/**
* getInformation - get information of user
* @returns {String} Information value
*/
User.prototype.getInformation = function() {
    return this.name + ' ' + this.dateRegistration;
}

/**
* Class representing user admin.
* @param {String} name - The name value.
* @param {String} dateRegistration - Date registration.
* @param {Boolean} superAdmin - User is super admin.
*/
function Admin(name, dateRegistration, superAdmin) {
    User.apply(this, arguments);
    this._superAdmin = superAdmin || false;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

/**
* getInformation - get information of user
* @returns {String} Information value
*/
Admin.prototype.getInformation = function () {
  return User.prototype.getInformation.call(this) + ', super admin: ' + this.superAdmin;
}

/**
* Class representing user guest.
* @param {String} name - The name value.
* @param {String} dateRegistration - Date registration.
* @param {String} validDate - Valid date.
*/
function Guest(name, dateRegistration, validDate) {
    User.apply(this, arguments);
    this.validDate = validDate || false;
}

Guest.prototype = Object.create(User.prototype);
Guest.prototype.constructor = Guest;

/**
* getInformation - get information of user
* @returns {String} Information value
*/
Guest.prototype.getInformation = function () {
  return User.prototype.getInformation.call(this) + ', valid date: ' + this.validDate;
}

const shevchenko = new Admin('Shevchenko', '20190101', true);
console.log(shevchenko);

const ivanov = new Guest('Ivanov', '20150701', 20200101);
console.log(ivanov);
