// 1. Создать функцию, которая принимает два элемента. 
//Функция проверяет, является ли первый элемент родителем для второго:

// isParent(parent, child);
// isParent(document.body.children[0], document.querySelector('mark'));
// // true так как первый див является родительским элементом для mark

// isParent(document.querySelector('ul'), document.querySelector('mark'));
// // false так ul НЕ является родительским элементом для mark

console.log('----------- Collection -----------');
console.log('1. ');

/**
 * isParent - проверка, является ли первый элемент родителем для второго
 * @param {Object} parent 
 * @param {Object} child
 * @returns {Boolean} 
 */
const isParent = (parent, child) => {
	return parent.contains(child);
}

console.log(isParent(document.body.children[0], document.querySelector('mark')));
console.log(isParent(document.querySelector('ul'), document.querySelector('mark')));


// 2. Получить список всех ссылок, которые не находятся внутри списка ul
console.log('2. ');

let linksDocument = document.links;

for (let i = 0; i < linksDocument.length; i++){
    if(!linksDocument[i].closest('ul')) {
        console.log(linksDocument[i]);
    } 
}

// 3. Найти элемент, который находится перед и после списка ul
console.log('3. ');

let listDocument = document.querySelector('ul');
console.log(listDocument.previousElementSibling);
console.log(listDocument.nextElementSibling);

// 4. Посчитать количество элементов li в списке
let ulDocument = document.querySelector('ul');
console.log('4. ', ulDocument.getElementsByTagName('li').length);
