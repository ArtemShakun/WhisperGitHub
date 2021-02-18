// ЧЕЙНИНГ


// calc(3).add(2).mult(4).div(10).substract(5).result(); // -3

// const calc = initValue => {
//    let result = initValue;

//    const calculator = {
//       add(value) {
//          result += value;
// return this;
//       },
//       mult(value) {
//          result *= value;
// return this;
//       },
//       substract(value) {
//          result -= value;
// return this;
//       },
//       div(value) {
//          result /= value;
// return this;
//       },
//       result() {
//          return result
//       }
//    }
//    return calculator;
// }

// let ladder = {
//    step: 0,
//    up() {
//       this.step++;
//       return this
//    },
//    down() {
//       this.step--;
//       return this
//    },
//    showStep: function () {
//       console.log(this.step);
//    }
// }

// ladder.up().up().down().up().showStep()


// РЕКУРСИЯ

// const favorites = ['id-6', 'id-17'];

// const tree = {
//    id: 'id-1',
//    name: 'Products',

//    nodes: [
//       {
//          id: 'id-2',
//          name: 'food',
//          nodes: [
//             {
//                id: 'id-6',
//                name: 'Drinks',
//                nodes: [],
//             }
//          ]
//       },
//       {
//          id: 'id-17',
//          name: 'Vehicles',
//          nodes: []
//       }
//    ],
// };

// const markFavorites = (tree, favorites) => {
//    const isFavorite = favorites.includes(tree.id);

//    return {
//       ...tree,
//       isFavorite,
//       nodes: tree.nodes.map(childNode => markFavorites(childNode, favorites)),
//    }
// }
// const result = markFavorites(tree, favorites);
// console.log(result)

// КАРРИРОВАНИЕ