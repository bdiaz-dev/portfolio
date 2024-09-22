import * as content from '../constants/content'
import ProjectCard from '@components/projectCard/ProjectCard'
import { useJob } from '@context/JobProvider'
import { useLang } from '@context/LangProvider'

export default function Projects () {
  const { setJob } = useJob()
  const { lang } = useLang()
  const handleSetJob = (i) => {
    setJob(i)
    document.documentElement.setAttribute('data-scrollcancel', 'true')
  }

  return (
    <section id='projects'>
      <div id='projectsResponsiveTag' />
      <h1 className='textColored'>
        {content[lang].projects.title}
      </h1>
      {
        content[lang].projects.jobs.map((item, index) => (
          <ProjectCard
            key={item.title}
            item={item}
            clickModal={() => handleSetJob(index)}
          />
        ))
      }
    </section>
  )
}
