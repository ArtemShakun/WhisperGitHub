const sliderFotos = document.querySelectorAll('.slider__foto');

sliderFotos.forEach(foto => {
   foto.addEventListener('click', () => {
      removeActiveClasses()
      foto.classList.add('active')
   })
})

function removeActiveClasses() {
   sliderFotos.forEach(foto => {
      foto.classList.remove('active')
   }

   )
}