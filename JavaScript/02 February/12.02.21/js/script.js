'use strict';

const tasks = [
   { text: 'buy milk', done: false },
   { text: 'Pick up Tom from airoport', done: true },
   { text: 'Visit party', done: false },
   { text: 'Visit doctor', done: true },
   { text: 'Buy meat', done: false },
];


const renderListItems = listItems => {
   const listElem = document.querySelector('.todo__list__taks');

   const listItemElements = listItems
      .sort((a, b) => a.done - b.done)
      .map(({ text, done }) => {

         const listItemElem = document.createElement('li');
         listItemElem.classList.add('todo__list__taks__one-task');
         if (done) {
            listItemElem.classList.add('completed')
         }

         const span = document.createElement('span');

         span.append(text)

         const checkbox = document.createElement('input');
         checkbox.setAttribute('type', 'checkbox');
         checkbox.checked = done;



         listItemElem.append(checkbox, span);

         return listItemElem
      });

   listElem.append(...listItemElements)




}

renderListItems(tasks);