import Techs from '../globals/Techs'

export default function CardText ({ item }) {
  return (
    <div className='projectCard--textContainer'>

      <h2 className='projectCard--title textColored'>
        {item.title}
      </h2>

      <p className='projectCard--text P'>
        {item.text}
      </p>

      {/* Techs */}
      <Techs
        item={item}
        cl='projectCard--techs'
      />

    </div>
  )
}
