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

    return { typeNode, nameNode, countChildrenNode }
}

console.log('2)', nodeInfo(document.body.firstChild));


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

// 4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
// -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-

let pDocument = document.querySelector('p');

for (let i = 0; i < pDocument.childNodes.length; i++) {
    if (pDocument.childNodes[i].nodeType === 3) {
        pDocument.childNodes[i].replaceWith("-text-");
    }
}

console.log('4)', pDocument);