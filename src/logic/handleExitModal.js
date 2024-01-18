export default function handleExit () {
  const bgModal = document.querySelector('.modalContainer')
  const modalPage = document.querySelector('.projectModal')
  bgModal.classList.add('exitBlurAnimation')
  modalPage.classList.add('exitAnimation')
  const animationEnd = () => {
    console.log('a')
    document.getElementsByTagName('html')[0].style.overflow = 'initial'
    bgModal.style.display = 'none'
    bgModal.classList.remove('exitBlurAnimation')
    modalPage.classList.remove('exitAnimation')
    bgModal.removeEventListener('animationend', animationEnd)
  }
  bgModal.addEventListener('animationend', animationEnd)
}
