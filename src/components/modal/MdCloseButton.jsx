import { useJob } from '@context/JobProvider'
import { modalIcos } from '@constants/imgs'

export default function MdCloseButton () {
  const { setJob } = useJob()
  const handleClose = () => {
    setJob(null)
    document.documentElement.setAttribute('data-scrollcancel', 'false')
  }
  return (
    <div
      className='closeModal'
      onClick={() => handleClose(null)}
    >
      <img src={modalIcos.close} alt='close_modal' />
    </div>
  )
}
