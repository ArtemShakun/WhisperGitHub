const conterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');

const onCouterChange = e => {
   const isButton = e.target.classList.contains('counter__button')

   if (!isButton) {
      return;
   }

   const action = e.target.dataset.action;

   const oldValue = Number(counterValueElem.textContent);

   const newValue = action === 'decrease'
      ? oldValue - 1
      : oldValue + 1;

   localStorage.setItem('counterValue', newValue)
   counterValueElem.textContent = newValue;
}
conterElem.addEventListener('click', onCouterChange);

const onStorageChange = e => {
   counterValueElem.textContent = e.newValue;
};

window.addEventListener('storage', onStorageChange);

const onDocumentLoaded = () => {
   counterValueElem.textContent = localStorage.getItem('counterValue') || 0;
}

document.addEventListener('DOMContentLoaded', onDocumentLoaded);