
// 1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
// <ul>
// <li><a href="#">Link1</a></li>
// ...
// <li class=”new-item”>item 5</li>
// <li class=”new-item”>item 6</li>
// </ul>
// Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.

let ulList = document.querySelector('ul');
let countLi = ulList.childElementCount;

for (let i = countLi; i < countLi + 2; i++) {
    ulList.insertAdjacentHTML('beforeend', '<li class = "new-item">item ' + (i + i) +'</li>');
}


// 2. В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong). 

let ulElement = document.querySelector('ul');
let linksList = document.querySelector('ul').querySelectorAll('a');


for (let i = 0; i < linksList.length; i++) {
    let strongElement = document.createElement('strong');
    let currentLink = linksList[i];
    currentLink.appendChild(strongElement);
}


// 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement. 

let img = document.createElement('img');
img.src = "http://www.vivatur.com.ua/wp-content/uploads/2017/09/2.jpg";
img.alt = "Thailand";
document.body.prepend(img);


// 4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green
let markDocument = document.querySelector('mark');
markDocument.classList.add('green');
markDocument.insertAdjacentText('beforeend', 'green');
