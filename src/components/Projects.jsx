import { useState } from 'react'
import * as content from '../constants/content'
import handleOpenModal from '../logic/handleOpenModal'
import ModalProject from './ModalProject'
import ProjectsCards from './ProjectsCards'

export default function Projects ({ lang }) {
  const [job, setJob] = useState(0)

  return (
    <section id='projects'>
      <div id='projectsResponsiveTag' />
      <h1 className='P textColored'>
        {content[lang].projects.title}
      </h1>
      {
        content[lang].projects.jobs.map((item, index) => (
          <ProjectsCards
            key={item.title}
            item={item}
            clickModal={() => handleOpenModal(index, setJob)}
          />
        ))
      }
      <ModalProject
        item={content[lang].projects.jobs[job]}
        repo={content[lang].menu.repo}
        go={content[lang].menu.go}
      />
    </section>
  )
}
