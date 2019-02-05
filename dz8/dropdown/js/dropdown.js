console.log('----------- Dropdown -----------');

// 7. Реализовать примитивный дропдаун. Изначально все dropdown-menu скрыты через класс .d-none.
// При клике на dropdown-item должен отображаться блок dropdown-menu который вложен именно в тот  dropdown-item на котором произошел клик.
// При повторном клике на этот же dropdown-item блок dropdown-menu должен закрыться.
// При клике на любой другой dropdown-item уже открытый dropdown-menu должен закрываться а на тот который кликнули открываться.

const menu = document.getElementsByClassName('menu')[0];
menu.addEventListener('click', handlerMenu);

function handlerMenu(e) {
    let li = e.target.parentElement;

    if (li.classList.contains('dropdown-item')) {

        let dropdownMenu = li.getElementsByClassName('dropdown-menu')[0];
        let dropdownIsHide = dropdownMenu.classList.contains('d-none');

        closeAllDropdownMenu();

        if (dropdownIsHide) {
            dropdownMenu.classList.remove("d-none");
        } else {
            dropdownMenu.classList.add("d-none");
        }
    }
}

function closeAllDropdownMenu() {
    let dropdownMenuList = menu.getElementsByClassName('dropdown-menu');

    for (let i = 0; i < dropdownMenuList.length; i++) {
        dropdownMenuList[i].classList.add('d-none');
    }
}
