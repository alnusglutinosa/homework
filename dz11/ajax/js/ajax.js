console.log('----------- AJAX -----------');
// Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com
// используя класс созданный на занятии.
// Получив ответ от сервера вывести имена пользователей на страницу.
// При клике на имя пользователя в произвольном месте должна появиться подробная информация о нем.
// Для визуальной части можно использовать bootstrap или другие фреймворки.

const url = 'https://jsonplaceholder.typicode.com';

class CustomHttp {
  get(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.addEventListener('load', () => callback(xhr.responseText));
  }

  post(url, data, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(data);
    xhr.addEventListener('load', () => callback(xhr.responseText));
  }
}

class TreeJson {

  constructor(arr, parentItem) {
    this.init(arr, parentItem);
  }

  init(arr, parentItem) {
    arr.forEach((item) => {
      this.goRec(item, this.getNameItem(parentItem, item['username']));
    });

    this.events();

  }

  goRec(obj, parentItem) {
    for (let key in obj) {
      let value = obj[key];
      if (typeof value == "object") {
        this.goRec(value, this.getNameItem(parentItem, key));
      } else {
        parentItem.insertAdjacentHTML('beforeEnd', `<li> <b>${key}:</b> ${value}  </li>`);
      }
    }
  }

  events() {
    let toggler = document.getElementsByClassName("caret");
    for (let i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".subMenu").classList.toggle("active");
        this.classList.toggle("caret-down");
      });
    }
  }

  getNameItem(parentItem, text) {
    let li = '';

    if (parentItem.classList.contains('tree')) {
      li = `<li class="card"><span class="caret caret-link card-header">${text}</span></li>`;
    } else {
      li = `<li class="card"><span class="caret caret-link">${text}</span></li>`;
    }

    parentItem.insertAdjacentHTML('beforeEnd', li);

    let ul = `<ul class="subMenu"></ul>`;
    parentItem = parentItem.lastElementChild;
    parentItem.insertAdjacentHTML('beforeEnd', ul);

    return parentItem.lastElementChild;
  }
}

const httpClient = new CustomHttp();

httpClient.get('https://jsonplaceholder.typicode.com/users', (response) => {
  const userTree = new TreeJson(JSON.parse(response), document.getElementById('treeValues'));
});
