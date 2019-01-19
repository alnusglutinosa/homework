
// 5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)
let ul = document.querySelector('ul');
let arrayList = Array.prototype.slice.call(ul.children);

arrayList.sort(function (prev, next) {
    return prev.textContent.toLowerCase() > next.textContent.toLowerCase() ? -1 : 1;
});

arrayList.forEach(function(item, i, arr) {
    ul.append(item);
});

