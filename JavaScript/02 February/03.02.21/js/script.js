// TASK-1 -- Создайте функцию getSpecialNumbers, которая будет принимать массив чисел и возвращать отфильтрованный массив

// let getSpecialNumbers = arr => arr.filter(num => num % 3 === 0);

// TASK-2 -- Отсортируйте элементы массива по убыванию

// const sortDesc = arr => arr
//    .slice()
//    .sort((a, b) => b - a);


// TASK-3 -- Создайте функцию flatArray, которая будет принимать массив, элементами которого могут быть одномерные массивы и преобразует его в плоский массив

// const flatArray = arr => (!Array.isArray(arr)) ? null : arr.flat();


// TASK-4 -- Создайте функцию getMessagesForBestStudents, которая будет генерировать сообщения для студентов, которые сдали экзамен

// const students = ['Vasy', 'Alexandr', 'Victor', 'Alina'];
// const studentsPassed = ['Vasy', 'Alina'];

// const getMessagesForBestStudents = (allStudentsList, studentsPassed) =>
//    allStudentsList.filter(name => studentsPassed.includes(name))
//       .map((name => ('Good job, ' + name)));

// TASK-5 -- Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

// const shuffle = arr => arr.sort(() => Math.round(Math.random() * 100) - 50)

// TASK-6 -- Напишите функцию, которая принимает объект и возвращает массив со значениями объекта.

// let objTransformArr = user => {
//    let arrUser = []
//    for (key in user) {
//       arrUser.push(user[key])
//    }
//    return arrUser
// }


// let objTransformArr = user => Object.values(user)

// TASK-7 -- Напишите функцию, которая копирует объект.

let copyObj = obj => {
   let newObj = {}
   for (key in obj) {
      newObj[key] = obj[key]
   }
   return newObj
}

