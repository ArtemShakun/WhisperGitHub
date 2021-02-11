'use strict';
const animals = {
   move() {
      console.log('Moving');
   },
   stop() {
      console.log('stopped');
   },
   eat() {
      console.log('eat');
   },
   play() {
      console.log('play')
   }
};

const dog = {
   bark() {
      console.log('bark');
   },
   bite() {
      console.log('bite')
   },
   __proto__: animals
}

const cat = {
   mew() {
      console.log('mew')
   },
   sharpenСlaws() {
      console.log('sharpen Сlaws')
   },
   __proto__: animals
}

const newCat = {
   name: 'Chit',
   color: 'red',
   __proto__: cat

}



newCat.move()
newCat.mew()