console.log('----------- Свойства -----------');

// 1. Найти параграф и получить его текстовое содержимое (только текст!)

let title = document.querySelector('p');
console.log('1)', title.textContent);


// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) 
// о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).

/**
 * nodeInfo - Возвращает информацию о типе узла
* @param {Object} nodeDom 
* @returns {Object} arrayNodeInfo 
 */
function nodeInfo(nodeDom) {
    let typeNode = nodeDom.nodeType;
    let nameNode = nodeDom.nodeName;
    let countChildrenNode = nodeDom.childNodes.length;

    return {typeNode, nameNode, countChildrenNode}
}

console.log('2)', nodeInfo(document.body));


// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]

/**
 * getTextFromUl - Возвращает текстовое содержимое ссылок внутри списка
* @param {Object} list 
* @returns {Object} arrayNodeInfo 
*/
function getTextFromUl(ulDocument) {

    let linksUl = ulDocument.getElementsByTagName('a');
    let arrayLinks = [];

    for (let i = 0; i < linksUl.length; i++) {
        arrayLinks.push(linksUl[i].textContent);
    }
    
    return arrayLinks;
}

console.log('3)', getTextFromUl(document.querySelector('ul')));

// 4. В параграф е заменить все дочерни е текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
// -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-

let pDocument = document.querySelector('p');

for (var i = 0; i < pDocument.childNodes.length; i++) {
    if(pDocument.childNodes[i].nodeType === 3) {
        pDocument.childNodes[i].replaceWith("-text-");
    }
}

console.log('4)', pDocument);





// =========================
// 1. Найти в коде список ul и добавить класс “list”
// 2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
// 3. На li через один (начиная с самого первого) установить класс “item”
// 4. На все ссылки в примере установить класс “custom-link”

// Код для задач брать со слайда 5. 





// ======================
// 1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
// <ul>
// <li><a href="#">Link1</a></li>
// ...
// <li class=”new-item”>item 5</li>
// <li class=”new-item”>item 6</li>
// </ul>
// Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.

// Код для задач брать со слайда 5.


// 2. В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong). 
// 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement. 
// 4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green
// 5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)


// Код для задач брать со слайда 5. 






