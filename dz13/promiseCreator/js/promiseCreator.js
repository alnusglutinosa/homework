console.log('----------- Promise Creator -----------');

// Создать функцию, которая возвращает промис.  
// Функция принимает два аргумента - время, через которое промис должен выполниться, 
// и значение, с которым промис будет выполнен. 

// function promiseCreator(...) {...}
// const prom = promiseCreator(500, 'Ok!');
// prom.then(console.log);
// // Ok!


/**
 * Create promise
 * @param {Number} time - Delay in milliseconds.
 * @param {String} value - Successful promise value.
 * @return {object} new promise.
*/
function promiseCreator(time, value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, time);
    });
}

const prom = promiseCreator(1500, 'Ok!');
prom.then(console.log); // Ok!