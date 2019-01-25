console.log('----------- THIS 1 -----------');

// 1. Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};

const rectangle = {
    width: 10, 
    height: 20, 
    getSquare: function() { return this.width * this.height }
};

console.log('1.', rectangle.getSquare());


// 2. Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:

// const price = {
//     price: 10,
//     discount: '15%',
// ... };
// price.getPrice(); // 10
// price.getPriceWithDiscount(); // 8.5

const price = {
    price: 10,
    discount: '15%',
    getPrice() { return this.price },
    getPriceWithDiscount() {
        let priceNumber = parseFloat(this.price);
        let discountNumber = parseInt(this.discount);

        if (discountNumber && discountNumber > 0 && discountNumber <= 100) {
            return priceNumber - (priceNumber / 100 * discountNumber);
        }

        return this.price;
    }
};

let currentPrice = price.getPrice(); // 10
let currentPriceWithDiscount = price.getPriceWithDiscount(); // 8.5

console.log(`2. currentPrice = ${currentPrice} priceWithDiscount = ${currentPriceWithDiscount} `);


// 3. Создать объект, у которого будет поле высота и метод “увеличить
// высоту на один”. Метод должен возвращать новую высоту:
// object.height = 10;
// object.inc(); // придумать свое название для метода
// object.height; // 11;

const object = {
    height: 50, 
    incHeight: function() { return this.height++ }
};

object.height = 10;
object.incHeight();
object.height;

console.log('3.', object.height);


// 4. Создать объект “вычислитель”, у которого есть числовое свойство
// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:
// const numerator = {
//     value: 1,
//     double: function () {...},
//     plusOne: function () {...},
//     minusOne: function () {...},
// }
// numerator.double().plusOne().plusOne().minusOne();
// numerator.value // 3

const numerator = {
    value: 1,
    double: function () {
        this.value*=2;
        return this;
    },
    plusOne: function () {
        this.value++;
        return this;
    },
    minusOne: function () {
        this.value--;
        return this;
    }
}

numerator.double().plusOne().plusOne().minusOne();
console.log('4.', numerator.value);


console.log('----------- THIS 2 -----------');

// 1. Создать объект с розничной ценой и количеством продуктов. 
// Этот объект должен содержать метод для получения общей стоимости
// всех товаров (цена * количество продуктов)

let iphone = {
    price: 1500,
    count: 10,
    getTotalCost: function() { return this.price * this.count }
};

console.log('1.', iphone.getTotalCost());


// 2. Создать объект из предыдущей задачи. 
// Создать второй объект,
// который описывает количество деталей и цену за одну деталь. Для
// второго объекта нужно узнать общую стоимость всех деталей, но
// нельзя создавать новые функции и методы. Для этого
// “позаимствуйте” метод из предыдущего объекта.

let product = {
    price: 200,
    count: 5,
    getTotalCost: function() { return this.price * this.count }
};

let detail = {
    price: 100,
    count: 7
};

console.log('2.', product.getTotalCost.call(detail));

// 3.Даны объект и функция:
// let sizes = {width: 5, height: 10},
// getSquare = function () {return this.width * this.height};
// Не изменяя функцию или объект, получить результат функции
// getSquare для объекта sizes

let sizes = {width: 5, height: 10},
getSquare = function () {return this.width * this.height};

console.log('3.', getSquare.call(sizes));


// 4.  
// let element = {
//     height: 25,
//     getHeight: function () {return this.height;}
// };

// let getElementHeight = element.getHeight;
// getElementHeight(); // undefined

// Измените функцию getElementHeight таким образом, чтобы можно
// было вызвать getElementHeight() и получить 25.

let element = {
    height: 25,
    getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight.bind(element);

console.log('4.', getElementHeight()); // 25