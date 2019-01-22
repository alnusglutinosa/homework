// Todo manager
// 1. создать задачу
//      а. обработка формы
//          - проверить данные перед добавлением (валидация)
//      б. добавить задачу в массив
//      в. добавить данные в таблицу
//      г. очистить форму
// 2. удалить задачу
//      а. подтверждение
//      б. удаление данных из таблицы
//      в. удаление данных из массива 
// 3. редактировать задачу 
//      а. взять данные из массива
//      б. поместить в форму 
//      в. обработать форму на редактирование
//          - валидация
//      г. обновить данные в массиве
//      д. обновить данные в таблице
//      е. очистить форму

let arrLocalTodos = localStorage.getItem("localTodosStorage") ? JSON.parse(localStorage.getItem("localTodosStorage")) : [];

// const todosStorage = {
//     todos: []
// }

const todosStorage = {
    todos: arrLocalTodos
}


// UI Elements
const formCol = document.querySelector('.form-col');
const form = document.forms['addTodoForm'];
const table = document.querySelector('.table tbody');
const title = form.elements['title'];
const text = form.elements['text'];

const btnSubmit = document.querySelector('.submit');
const btnSaveLS = document.querySelector('.js-save-ls');
const btnClearLS = document.querySelector('.js-clear-ls');
//var currentId = '';


btnSaveLS.addEventListener('click', (event) => {
    event.preventDefault();
    saveToLocalStorage();
});

btnClearLS.addEventListener('click', (event) => {
    event.preventDefault();
    clearLocalStorage();
});


// event handling
form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!title.value || !text.value) return alertMessage('alert-danger', 'Введите title и text');

    // если есть аттр data-task-id
    // вызываем функцию editTaskStorage
    // очистка формы и удалить аттр data-task-id

    let currentId = form.getAttribute('data-task-id');

    if (btnSubmit.getAttribute('data-btn') === 'edit') {
        editTaskStorage(currentId, title.value, text.value);
        form.reset();
        btnSubmit.setAttribute('data-btn', 'add');
        btnSubmit.textContent = "Add Task";
    } else {
        addNewTodoToStorage(title.value, text.value);
        alertMessage('alert-info', 'Задача добавлена успешно');
        form.reset();
    }

});

table.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-todo')) {
        const id = event.target.closest('[data-id]').dataset.id;
        deleteTodoFromStorage(id);
        alertMessage('alert-info', 'Задача удалена успешно');
        return;
    }

    if (event.target.classList.contains('edit-todo')) {
        btnSubmit.textContent = "Edit Task";
        btnSubmit.setAttribute('data-btn', 'edit');
       
        const id = event.target.closest('[data-id]').dataset.id;
        form.setAttribute('data-task-id', id);
        //setFormtoEdit(id);

    }
});


// alert messages
/**
 * 
 * @param {String} className 
 * @param {String} message 
 */
function alertMessage(className, message) {
    removeAlert();

    const template = alertTemplate(className, message);
    formCol.insertAdjacentHTML('afterbegin', template);

    setTimeout(removeAlert, 2000);
}

function removeAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) formCol.removeChild(currentAlert);
}


/**
* generateId - создает произвольную строку 
* @returns {string} - новый id
*/
function generateId() {
    const uniqueValues = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let id = '';

    for (let char of uniqueValues) {
        let index = Math.floor(Math.random() * uniqueValues.length);
        id += uniqueValues[index];
    }

    return id;
}


/**
* addNewTodoToStorage - добавляет новый todo в storage а потом в view
* @param {String} title 
* @param {String} text
* @returns {[]} currentTodos
*/
function addNewTodoToStorage(title, text) {
    if (!title) return console.log('Please provide todo title');
    if (!text) return console.log('Please provide todo text');

    const newTodo = { title, text, id: generateId() }
    todosStorage.todos.push(newTodo);

    // Добавим в разметку
    addNewTodoToView(newTodo);

    return todosStorage.todos;
};

/**
* 
* @param {String} id 
* @returns {[]} currentTodos
*/
function deleteTodoFromStorage(id) {
    const checkIdRes = checkId(id);
    if (checkIdRes.error) return console.log(checkIdRes.msg);

    let removedTask;

    for (let i = 0; i < todosStorage.todos.length; i++) {
        if (todosStorage.todos[i].id === id) {
            removedTask = todosStorage.todos.splice(i, 1);
            break;
        }
    }

    // удаляем с разметки
    deleteTodoFromView(id);

    return removedTask;
}


/**
 * 
 * @param {String} id 
 */
function checkId(id) {
    if (!id) return { error: true, msg: 'Передайте id удаляемой задачи.' };

    const idIsPresent = todosStorage.todos.some((todo) => todo.id === id);
    if (!idIsPresent) return { error: true, msg: 'Задачи с таким id несуществуе' };

    return { error: false, msg: '' };
}


// View functions

/**
 * 
 * @param {String} id 
 */
function deleteTodoFromView(id) {
    const target = document.querySelector(`[data-id="${id}"]`);
    target.parentElement.removeChild(target);
}


/**
 * 
 * @param {String} id 
 */
function editTodoInView(id, title, text) {
    const taskEdit = document.querySelector(`[data-id="${id}"]`);
    // debugger;
    taskEdit.firstElementChild.textContent = title;
    taskEdit.firstElementChild.nextElementSibling.textContent = text;
}

/**
 * 
 * @param {*} task 
 */
function addNewTodoToView(todo) {
    const template = todoTemplate(todo);
    table.insertAdjacentHTML('afterbegin', template);
}

/**
 * 
 * @param {*} todo 
 * todo {
 *  id: string;
 *  title: string;
 *  text: string;
 * }
 */
function todoTemplate(todo) {
    return `
        <tr data-id="${todo.id}"> 
            <td>${todo.title}</td>
            <td>${todo.text}</td>
            <td>
                <i class="fas fa-trash remove-todo"></i>
                <i class="fas fa-edit edit-todo"></i>
            </td>
        </tr>
    `;
}

/**
 * 
 * @param {String} className 
 * @param {String} message 
 */
function alertTemplate(className, message) {
    return `
        <div class="alert ${className}">${message}</div>
    `;
}

function addFromStorage(countTodos) {
    if (todosStorage) {
        for (let i = 0; i < countTodos; i++) {
            addNewTodoToStorage(arrLocalTodos[i].title, arrLocalTodos[i].text);
        }

    } else {
        addNewTodoToStorage('My title 1', 'My text 1');
    }
}

addFromStorage(arrLocalTodos.length);

// Make editing work

function saveToLocalStorage() {

    // Delete
    localStorage.removeItem('localTodosStorage'); 
    localStorage.setItem("localTodosStorage", JSON.stringify({}));

    //Add
    localStorage.setItem("localTodosStorage", JSON.stringify(todosStorage.todos));

    alertMessage('alert-info', 'Список задач сохранен в локальном хранилище');

}

function clearLocalStorage() {
    // Delete
    localStorage.removeItem('localTodosStorage'); 
    alertMessage('alert-info', 'Список задач очищен в локальном хранилище');
}

/**
 * editTodoItem - редактирование задачи по id
 * @param {String} id 
 * @param {String} title
 * @param {String} text
 */
function editTaskStorage(id, title = '', text = '') {

    if (!id) {
        return console.log("Передайте id удаляемой задачи.");
    }

    if (typeof id !== "string") {
        return console.log('function editTodoItem: id - not string');
    }

    if (title) {

        if (typeof title !== "string") {
            return console.log('function editTodoItem: title - not string');
        }
        
        let item = todosStorage.todos.find(item => item.id === id);
        item.title = title;

    }

    if (text) {

        if (typeof text !== "string") {
            return console.log('function editTodoItem: text - not string');
        }
        
        let item = todosStorage.todos.find(item => item.id === id);
        item.text = text;

    }

    // редактируем с разметку
    editTodoInView(id, title, text);

}
