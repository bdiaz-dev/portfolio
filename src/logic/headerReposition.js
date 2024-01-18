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
    // const scrollPosition = window.scrollY

    if (!isElementInViewport(nameViewer)) {
      name.style.display = 'block'
    } else {
      name.style.display = 'none'
    }

    if (!isElementInViewport(contactViewer)) {
      contact.style.display = 'block'
    } else {
      contact.style.display = 'none'
    }
    // } else if (isElementInViewport(skills)) {
    //   repositionItem(2)
    // }
    // })

    //   function repositionItem (index) {
    //     document.querySelectorAll('#nameContainer .toRepo').forEach(function (el) {
    //       el.classList.remove('repositioned')
    //     })
    //     document.querySelectorAll('#nameContainer .toRepo')[index].classList.add('repositioned')
    //   }
  })
}
