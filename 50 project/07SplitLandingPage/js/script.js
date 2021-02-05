const ps5 = document.querySelector('.coonteiner__ps5');
const xbox = document.querySelector('.coonteiner__xbox');
const container = document.querySelector('.conteiner');


console.log(ps5, xbox, container)

ps5.addEventListener('mouseenter', () => container.classList.add('hover-left'))
ps5.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

xbox.addEventListener('mouseenter', () => container.classList.add('hover-right'))
xbox.addEventListener('mouseleave', () => container.classList.remove('hover-right'))