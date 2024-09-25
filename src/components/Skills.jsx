import { technologies } from '@constants/imgs'
import { content } from '@constants/content'
import { useLang } from '@context/LangProvider'
export default function Skills () {
  const { lang } = useLang()
  const techs = Object.values(technologies)
  return (
    <div
      id='skills'
      style={{ zIndex: '100' }}
    >
      <div id='skillsResponsiveTag' />
      <h1 className='textColored'>{content.skills.title[lang]}</h1>
      <div className='skillsImgContainer'>
        {techs.map((tech) => (
          <img
            key={tech.title}
            src={tech.img}
            alt={tech.title}
            title={tech.title}
          />
        ))}
      </div>
    </div>
  )
}
