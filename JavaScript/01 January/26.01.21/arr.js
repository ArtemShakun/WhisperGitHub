/*-------TASK1-------*/

// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

function camelize(str) {
   let arr = str.split('-')
   let newStr = arr.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
   return newStr.join('')
}
/*-------TASK2-------*/
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
// Функция должна возвращать новый массив и не изменять исходный.

