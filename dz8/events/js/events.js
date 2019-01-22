console.log('----------- Events -----------');

// 1.По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.
const btn = document.getElementById('btn-msg');

btn.addEventListener('click', handlerBtnMsg);

function handlerBtnMsg(e) {
    e.preventDefault();
    alert(btn.getAttribute('data-text'));
}


// 2. При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета. 
//Цвет менять можно через добавление класса.

btn.addEventListener('mouseover', handlerBtnImportant);
btn.addEventListener('mouseout', handlerBtnDefault);

function handlerBtnImportant(e) {
    btn.classList.add("important");
}

function handlerBtnDefault(e) {
    btn.classList.remove("important");
}


// 3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.

document.body.addEventListener('click', (e) => {
    document.getElementById('tag').textContent = e.target.tagName;
});


// 4. При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д 
let btnGenerate = document.getElementById('btn-generate');
btnGenerate.addEventListener('click', createItem);

/**
 * 
* createItem - добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку
*/
function createItem() {
    let ul = document.querySelector('ul');
    let li = liTemplate(ul.children.length + 1);
    ul.insertAdjacentHTML('beforeEnd', li);
}

/**
 * 
 * @param {Number} index 
 */
function liTemplate(index) {
    return `
        <li>Item ${index} </li>
    `;
}

