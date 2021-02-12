'use strict';

const tasks = [
   'buy milk',
   'Pick up Tom from airoport',
   'Visit party',
   'Visit doctor',
   'Buy meat',
];


const renderListItems = listItems => {
   const listElem = document.querySelector('.todo__list__taks');

   const listItemElements = listItems.map(itemText => {

      const listItemElem = document.createElement('li');
      listItemElem.classList.add('todo__list__taks__one-task');

      const span = document.createElement('span');
      span.append(itemText)

      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');



      listItemElem.append(checkbox, span);

      return listItemElem
   });

   listElem.append(...listItemElements)




}

renderListItems(tasks);