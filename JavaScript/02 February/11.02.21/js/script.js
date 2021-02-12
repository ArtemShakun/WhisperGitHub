'use strict';

// НАСЛЕДОВАНИЕ



// const animals = {
//    move() {
//       console.log('Moving');
//    },
//    stop() {
//       console.log('stopped');
//    },
//    eat() {
//       console.log('eat');
//    },
//    play() {
//       console.log('play')
//    }
// };

// const dog = {
//    bark() {
//       console.log('bark');
//    },
//    bite() {
//       console.log('bite')
//    },
//    __proto__: animals
// }

// const cat = {
//    mew() {
//       console.log('mew')
//    },
//    sharpenСlaws() {
//       console.log('sharpen Сlaws')
//    },
//    // __proto__: animals
// }
// Object.setPrototypeOf(cat, animals);

// const newCat = {
//    name: 'Chit',
//    color: 'red',
//    // __proto__: cat
// }
// Object.setPrototypeOf(newCat, cat);
// Сейчас документация, такой метод не рекомендует использовать так как он ломает оптимизации языка

// Что бы вывести собственные методы объекта - hasOwnProperty

// for (let prop in newCat) {
//    if (newCat.hasOwnProperty(prop)) {
//       console.log(prop)
//    }
// }

//  Новый упрощенный метод

// console.log(Object.keys(newCat))


//  get and set 

// const user = {
//    firstName: 'John',
//    lastName: 'Doe',
//    get fullName() {
//       return `${this.firstName} ${this.lastName}`
//    },
//    set fullName(value) {
//       const [firstName, lastName] = value.split(' ');
//       this.firstName = firstName;
//       this.lastName = lastName;
//    },

// }


// Функция-конструктор

// function User(name, age) {
//    this.name = name;
//    this.age = age;
//    // this.sayHi = function () {
//    //    console.log(`Hi, I am ${this.name}`);
//    // }
//    // // минус такого варианта бьет по памяти
//    User.prototype.sayHi = function () {
//       console.log(`Hi, I am ${this.name}`);
//    }
//    // такой вариант хранит все методы в прототипе объекта
// }

// const user1 = new User('Tom', 17);
// const user2 = new User('Barbara', 26)
// user1.sayHi()
// user2.sayHi()



// КЛАССЫ

// class User {
//    // Конструктор как __init__ в python.
//    constructor(name, age) {
//       this.name = name;
//       this.age = age;
//    }
//    // обычные методы есть только в экземпляре класса, 
//    // а статический есть в классе, но в экземпляре его не будет.
//    static compare(user1, user2) {
//       return user1.age - user2.age;
//    }
//    // В классах не нужно явно записывать методы в прототипы
//    //   User.prototype.requestNewPhoto = function () ....
//    sayHi() {
//       console.log(`Hi, I am ${this.name}`);
//    }

//    requestNewPhoto() {
//       console.log(`New photo request was sent for ${this.name}`);
//    }
//    setAge(value) {
//       if (value < 0) {
//          return false;
//       }
//       this.age = value;
//       if (value >= 25) {
//          this.requestNewPhoto()
//       }
//       return value;
//    }
// }

// const user1 = new User('Tom', 21);
// const user2 = new User('Barbara', 45);
// console.log(User.compare(user1, user2))


// Защищенность и приватность

// class Wallet {
//    #balance = 0;

//    getBalance() {
//       return this.#balance;
//    }
//    deposit(amount) {
//       return this.#balance += amount;
//    }
//    withdraw(amount) {
//       if (amount > this.#balance) {
//          console.log('No enouhg founds');
//          return;
//       }
//       this.#balance -= amount;
//    }
// }

// const wallet1 = new Wallet();

console.log(wallet1.getBalance())
wallet1.deposit(130);
console.log(wallet1.getBalance())
wallet1.withdraw(86);
console.log(wallet1.getBalance())
wallet1.withdraw(245);
console.log(wallet1.#balance)
