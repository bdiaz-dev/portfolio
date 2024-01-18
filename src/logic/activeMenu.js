import isElementInViewport from './isElementInViewport'

export default function activeMenu () {
  highlightMenuItem(0)

  document.addEventListener('scroll', function () {
    // function isElementInViewport (el) {
    //   const rect = el.getBoundingClientRect()
    //   return (
    //     rect.top >= 0 &&
    //     rect.left >= 0 &&
    //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    //   )
    // }

    const about = document.getElementById('about').offsetTop
    const projects = document.getElementById('projects').offsetTop
    const skills = document.getElementById('skills')
    const scrollPosition = window.scrollY

    if (scrollPosition < about) {
      highlightMenuItem(0)
    } else if (scrollPosition < projects && !isElementInViewport(skills)) {
      highlightMenuItem(1)
    } else if (isElementInViewport(skills)) {
      highlightMenuItem(2)
    }
  })

  function highlightMenuItem (index) {
    // Elimina la clase 'activo' de todos los elementos del menú
    document.querySelectorAll('#menu a').forEach(function (el) {
      el.classList.remove('activo')
    })

    // Agrega la clase 'activo' al elemento del menú correspondiente
    document.querySelectorAll('#menu a')[index].classList.add('activo')
  }
}
