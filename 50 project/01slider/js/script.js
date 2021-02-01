const sliderFotos = document.querySelectorAll('.slider__foto');


sliderFotos.forEach((foto) => {
   foto.addEventListener('click', () => {
      removeActiveClass()
      foto.classList.add('active')
   })
})

function removeActiveClass() {
   sliderFotos.forEach((foto) => {
      foto.classList.remove('active')
   })
}