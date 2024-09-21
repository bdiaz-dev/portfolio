import isElementInViewport from './isElementInViewport'

export default function activeMenu () {
  highlightMenuItem(0)

  document.addEventListener('scroll', function () {
    const aboutHeight = document.getElementById('about').offsetHeight
    const skills = document.getElementById('skills')
    const scrollPosition = window.scrollY

    if (scrollPosition < aboutHeight) {
      highlightMenuItem(0)
    } else if (scrollPosition > aboutHeight && !isElementInViewport(skills)) {
      highlightMenuItem(1)
    } else if (isElementInViewport(skills)) {
      highlightMenuItem(2)
    }
  })

  function highlightMenuItem (index) {
    // Elimina la clase 'activo' de todos los elementos del menú
    document.querySelectorAll('#menu a').forEach(function (el) {
      el.classList.remove('active')
    })

    // Agrega la clase 'activo' al elemento del menú correspondiente
    document.querySelectorAll('#menu a')[index].classList.add('active')
  }
}
