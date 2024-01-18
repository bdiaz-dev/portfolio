export default function Techs ({ cl, item }) {
  return (
    <div className={cl}>

      {item.tech.map(img => (
        <img
          key={img.title}
          src={img.img}
          title={img.title}
          className='jobTech'
        />
      ))}

    </div>
  )
}
