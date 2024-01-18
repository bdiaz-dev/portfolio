export default function MdCapture ({ item, go }) {
  return (
    <div
      className='projectModal--img_Container'
      onClick={() => { window.open(`${item.urls.site}`, '_blank') }}
    >
      <img
        className='projectModal--img'
        onClick={() => { window.open(`${item.urls.site}`, '_blank') }}
        src={item.img}
        alt={`${item.title} capture of website`}
        title={`${item.title} capture of website`}
      />
      <img
        className='imgIconGo'
        onClick={() => { window.open(`${item.urls.site}`, '_blank') }}
        src={go}
      />
    </div>
  )
}
