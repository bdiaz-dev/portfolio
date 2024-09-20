import * as content from '@constants/content'
import { useJob } from '@context/JobProvider'
import { useLang } from '@context/LangProvider'

export default function Techs ({ cl, item }) {
  const { lang } = useLang()
  const { job } = useJob()
  if (!item) {
    item = content[lang].projects.jobs[job]
  }
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
