const searchInput = document.querySelector('.search__block');
const searchButton = document.querySelector('.btn');
const input = document.querySelector('input');

searchButton.addEventListener('click', () => {
   searchInput.classList.toggle('active')
   input.focus()
}
);