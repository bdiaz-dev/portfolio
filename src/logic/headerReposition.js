import isElementInViewport from './isElementInViewport'

export default function headerReposition () {
  // highlightMenuItem(0)

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

    const name = document.getElementById('nameTop')
    const nameViewer = document.getElementById('nameViewer')
    const contact = document.getElementById('contactTop')
    const contactViewer = document.getElementById('contactViewer')

    if (!isElementInViewport(nameViewer)) {
      name.setAttribute('data-isShow', true)
    } else {
      name.setAttribute('data-isShow', false)
    }

    if (!isElementInViewport(contactViewer)) {
      contact.setAttribute('data-isShow', true)
    } else {
      contact.setAttribute('data-isShow', false)
    }
  })
}
