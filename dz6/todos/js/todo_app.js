/**
 * TODOS
 * 1. Добавление задачи
 * 2. Удаление задачи
 * 3. Редактирование задачи
 */

 /**
 * Одна задача это объект из следующих полей
 * id - произвольная уникальная строка
 * title - заголовок задачи
 * text - текст задачи
 */


 /**
  * todosStorage - обьект для хранения всех todos
  */
 const todosStorage = {
     currentTodos: [],
     deletedTodos: []
 }

/**
 * 
 * @param {String} title 
 * @param {String} text
 * @returns {[]} currentTodos
 */
 const addTodoItem = (title, text) => {
    if (!title) return console.log('Please provide todo title');
    if (!text) return console.log('Please provide todo text');

    todosStorage.currentTodos.push({title, text, id: generateId()});
    return todosStorage.currentTodos;
 };

 /**
 * generateId - создает произвольную строку 
 * @returns {string} - новый id
 */
const generateId = () => {
    const uniqueValues = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        
    // let id = '';

    // for (let i = 0; i < 10; i++) {
    //     const index = Math.floor(Math.random() * uniqueValues.length);
    //     id += uniqueValues[index];
    // }

    let arrUniqueValues = uniqueValues.split('');
    return arrUniqueValues.sort(compareRandom).slice(0, 10).join('');
}

/**
 * compareRandom - генерирует рандомное число для сортировки массива 
 * @returns {number} - рандомное число от -0.5 до 0.5
 */
const compareRandom = () => { 
    return Math.random() - 0.5;
}

/**
 * deleteTodoItem - удаление задачи по id
 * @param {String} id 
 * @returns {[]} currentTodos
 */
const deleteTodoItem = (id) => {
    if (!id) return console.log("Передайте id удаляемой задачи.");
    
    todosStorage.currentTodos = todosStorage.currentTodos.filter((todoItem) => todoItem.id !== id);
    return todosStorage.currentTodos;
}

/**
 * editTodoItem - редактирование задачи по id
 * @param {String} id 
 * @param {String} title
 * @param {String} text
 */
const editTodoItem = (id, title = '', text = '') => {

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
        
        let item = todosStorage.currentTodos.find(item => item.id === id);
        item.title = title;

    }

    if (text) {

        if (typeof text !== "string") {
            return console.log('function editTodoItem: text - not string');
        }
        
        let item = todosStorage.currentTodos.find(item => item.id === id);
        item.text = text;

    }

}
