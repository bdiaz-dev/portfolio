export default function MdTitleAndLinks ({ item, modalIcos }) {
  return (
    <h2 className='projectModal--title'>
      {item.title}
      <a href={item.urls.site} target='blank'>
        <img src={modalIcos.go} alt='' />
      </a>
      <a href={item.urls.github} target='blank'>
        <img src={modalIcos.gitHub} alt='' />
      </a>
    </h2>
  )
}
