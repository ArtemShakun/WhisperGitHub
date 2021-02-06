// TASK-1 -- Создайте функции, которые будут парсить числа в массиве

// let getParsedIntegers = arr => arr.map(elem => Number.parseInt(elem));
// let getParsedIntegersV2 = arr => arr.map(elem => parseInt(elem));
// let getParseFloats = arr => arr.map(elem => Number.parseFloat(elem))
// let getParseFloatsV2 = arr => arr.map(elem => parseFloat(elem))

// TASK-2 -- Создайте функции, которые будут искать указанные числа в массиве

// let getFiniteNumbers = arr => arr.filter(Number.isFinite);
// const getFiniteNumbersV2 = arr => arr.filter(isFinite);
// const getNaN = arr => arr.filter(Number.isNaN);
// const getNaNV2 = arr => arr.filter(isNaN);
// const getIntegers = arr => arr.filter(Number.isInteger);

// TASK-3 Напишите ф-цию, которая разными методами будет округлять число до 2-х знаков после запятой

// const multiRound = num => [
//    Math.floor(num * 100) / 100,
//    Math.round(num * 100) / 100,
//    Math.ceil(num * 100) / 100,
//    Math.trunc(num * 100) / 100,
//    +num.toFixed(2)
// ]


// TASK-4 Создайте функцию, которая будет возвращать максимальное по модулю число
// let getMaxAbsoluteNumber = arr => {
//    if (!Array.isArray(arr) || arr.length === 0) {
//       return null
//    }
//    const modulNumber = arr.map(Math.abs);
//    return Math.max(...modulNumber)
// }

// TASK-5 Напишите ф-цию, которая разделит входящую строку на строки с указанным к-вом символов и вернет их в многострочном формате

// let splitString = (str, len = 10) => {
//    if (typeof str !== 'string') {
//       return null
//    }

//    let start = 0;
//    const result = []

//    while (true) {
//       let part = str.substr(start, len);

//       if (part.length === 0) {
//          break
//       }
//       result.push(part[0].toUpperCase() + part.slice(1));
//       start += len;
//    }
//    return result.join('\n')
// }

// TASK-5 -- Создайте ф-цию, calc (калькулятор)которая будет принимать строку и делать вычисления взависимости от оператора.

// let calc = str => {
//    [x, operator, y] = str.split(' ');
//    let result
//    switch (operator) {
//       case '+':
//          result = + x + +y;
//          break;
//       case '-':
//          result = x - y;
//          break;
//       case '*':
//          result = x * y;
//          break;
//       case '/':
//          result = x / y;
//          break;
//    }

//    return `${str} = ${result}`
// }



