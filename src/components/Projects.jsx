// import { useState } from 'react'
import * as content from '../constants/content'
// import handleOpenModal from '../logic/handleOpenModal'
// import ModalProject from './ModalProject'
import ProjectsCards from './ProjectsCards'
import { useJob } from '../context/JobProvider'

export default function Projects ({ lang }) {
  const { setJob } = useJob()
  const handleSetJob = (i) => {
    setJob(i)
    document.documentElement.setAttribute('data-scrollcancel', 'true')
  }

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
            clickModal={() => handleSetJob(index)}
          />
        ))
      }
      {/* <ModalProject /> */}
    </section>
  )
}
