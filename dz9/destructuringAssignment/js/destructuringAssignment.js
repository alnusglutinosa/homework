console.log('-----------Деструктурирующее присваивание -----------');

// 1. Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов 
//и возвращает объект, содержащий первый аргумент и массив из остатка:

// func(‘a’, ‘b’, ‘c’, ‘d’) → 
// {
//   first: ‘a’,
//   other: [‘b’, ‘c’, ‘d’]
// }

function userInfo(first, ...other) {
    return ({ first, other });
}

console.log('1.', userInfo('a', 'b', 'c', 'd'));


// 2. Организовать функцию getInfo, которая принимает объект вида
// { name: ...,  info: { employees: [...], partners: [ … ]  } }
// и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:

// const organisation = {  
//   name: 'Google',   
//   info: { employees: [‘Vlad’, ‘Olga’], partners: ['Microsoft', 'Facebook', 'Xing']   } 
// };
// getInfo(organisation); → 
// Name: Google 
// Partners: Microsoft Facebook
console.log('2.');

const organisation = {
    name: 'Google',
    info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing'] }
};

function getInfo(organisation = {}) {
    let {
        name = 'Unknown', 
        info:{
            partners:[partners1 = 'Unknown',  partners2 = 'Unknown'] = ['Unknown', 'Unknown']
        } = {} 
    } = organisation;

    console.log(`Name: ${name} \nPartners: ${partners1} ${partners2}`);
}

getInfo(organisation);