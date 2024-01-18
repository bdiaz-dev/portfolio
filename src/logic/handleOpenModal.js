export default function handleOpenModal (i, setJob) {
  setJob(i)
  console.log(i)
  const bgModal = document.querySelector('.modalContainer')
  const modalPage = document.querySelector('.projectModal')
  bgModal.style.display = 'flex'
  modalPage.classList.add('enterAnimation')
  bgModal.classList.add('enterBlurAnimation')
  const animationEnd = () => {
    bgModal.classList.remove('enterBlurAnimation')
    modalPage.classList.remove('enterAnimation')
    modalPage.removeEventListener('animationend', animationEnd)
  }
  modalPage.addEventListener('animationend', animationEnd)
}
