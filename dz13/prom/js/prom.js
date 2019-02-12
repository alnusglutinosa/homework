console.log('----------- Prom -----------');

// Создать класс, который производит экземпляр со следующими свойствами:
// - promise - промис, который создается во время запуска конструктора;
// - reject - метод, при выполнении которого promise реджектится;
// - resolve - метод, при выполнении которого promise резолвится.

// class Prom {...}
// const inst = new Prom();
// inst.promise.then(data => console.log(data));
// inst.resolve('test'); 
// →  test


/** Class representing a Promise. */
class Prom {
    /**
     * Create a Promise.
     */
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    } 
}

const inst = new Prom();
inst.promise.then(data => console.log(data));
inst.resolve('test'); // →  test