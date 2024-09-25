import Techs from '../globals/Techs'
import { useLang } from '@context/LangProvider'

export default function CardText ({ item }) {
  const { lang } = useLang()
  return (
    <div className='projectCard--textContainer'>

      <h2 className='projectCard--title textColored'>
        {item.title[lang]}
      </h2>

      <p className='projectCard--text P'>
        {item.text[lang]}
      </p>

      {/* Techs */}
      <Techs
        item={item}
        cl='projectCard--techs'
      />

    </div>
  )
}
