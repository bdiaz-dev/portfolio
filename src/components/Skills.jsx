import { technologies } from '../constants/imgs'
import * as content from '../constants/content'
export default function Skills ({ lang }) {
  const techs = Object.values(technologies)
  return (
    <div
      id='skills'
      style={{ zIndex: '100' }}
    >
      <h1 className='P textColored'>{content[lang].skills.title}</h1>
      <div className='skillsImgContainer'>
        {techs.map((tech) => (
          <img
            width='70px'
            key={tech.title}
            src={tech.img}
            alt={tech.title}
            title={tech.title}
            style={{ zIndex: '200', position: 'relative' }}
          />
        ))}
      </div>
    </div>
  )
}
