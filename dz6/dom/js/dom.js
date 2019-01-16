console.log('----------- DOM -----------');

// Зная структуру html, с помощью изученных
// методов получить (в консоль):
// 1. head
console.log('1.', document.head); 

// 2. body
console.log('2.', document.body); 

// 3. все дочерние элементы body и вывести их в
// консоль.
console.log('3.', document.body.children); 

// 4. первый div и все его дочерние узлы
// а) вывести все дочерние узлы в консоль

const divDocument = document.body.firstElementChild;
console.log('4. а)', divDocument.childNodes);

// б) вывести в консоль все дочерние узлы,
// кроме первого и последнего
// Для навигации по DOM использовать методы,
// которые возвращают только элементы
console.log('4. б)');

for (var i = 1; i < divDocument.childNodes.length - 1; i++) {
    console.log(divDocument.childNodes[i]); 
}

