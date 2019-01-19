
// 1. Найти в коде список ul и добавить класс “list”
ul = document.querySelector('ul');
ul.classList.add('list');
console.log('1)', ul);


// 2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
linkDocument = ul.nextElementSibling.nextElementSibling;
linkDocument.setAttribute('id', 'link');
console.log('2)', linkDocument);


// 3. На li через один (начиная с самого первого) установить класс “item”
console.log('3)');

for (let i = 0; i < ul.children.length; i += 2) {
    ul.children[i].classList.add('item');
    console.log(ul.children[i]);
}


// 4. На все ссылки в примере установить класс “custom-link”
// console.log('4)');

let linksDocument = document.links;

for (let i = 0; i < linksDocument.length; i++) {
    linksDocument[i].classList.add('custom-link');;
}