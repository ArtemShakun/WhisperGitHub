// TASK-1--Создайте функцию getArrayBounds, которая будет принимать массив и
// возвращать массив с из 3-х элементов (длина, первый и последний элементы)

// function getArrayBounds(arr) {
//    if (!Array.isArray(arr)) {
//        return null;
//    }
//    return [arr.length, arr[0], arr[arr.length - 1]];
// }

// TASK-2--Создайте функцию getSum, которая будет принимать массив чисел и врнет сумму всех элементов

// function getSum(arr) {
//    if (!Array.isArray(arr)) {
//       return null;
//    }
//    let counter = 0;
//    for (let i = 0; i < arr.length; i++) {
//       counter += arr[i]
//    }
//    return counter

// }

// TASK-3 -- Найдите эллементы массива, которые деляться на 3 без остатка

// function getSpecialNumbers(a, b) {
//    let result = [];
//    for (let i = a; i < b; i++) {
//       if (i % 3 === 0) {
//          result.push(i)
//       }
//    }
//    return result
// }

// TASK-4 --Создайте функцию swap, которая будет принимать массив, первый элемент ставить в конец и возвращать результат

// function swap(arr) {
//    const [start, ...rest] = arr;
//    return [...rest, start];
// }