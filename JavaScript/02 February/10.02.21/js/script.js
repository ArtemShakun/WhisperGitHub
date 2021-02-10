'use strict';


// for (var i = 0; i < 10; i++) {

//    setTimeout(() => {
//       console.log(i)
//    }, 1000);
// }


function getPerson(obj) {
   console.log('Print object: ', obj)
   for (let key in this) {
      if (this.hasOwnProperty(key)) {
         console.log('[' + key + ']', this[key])
      }
   }
}

const person = {
   name: 'Artem',
   age: 29,
}

const car = {
   name: 'Ford',
   model: 'Focus',
   year: 2015,
}

// То что мы передаюм в метод bind является котекстом
let printPerson = getPerson.bind(person)
printPerson('person')
// метод call делает то что и bind только вызывает функцию сразу. 
// Параметры указываються через запятую, бузконечное к-во
getPerson.call(car, 'Car')
getPerson.apply(person, ['Person'])
// метод aplly делает то что и call только параметры передаются в массиве.
