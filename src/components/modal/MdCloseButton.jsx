export default function MdCloseButton ({ exit, icos }) {
  return (
    <div
      className='closeModal'
      onClick={exit}
    >
      <img src={icos.close} alt='close_modal' />
    </div>
  )
}
