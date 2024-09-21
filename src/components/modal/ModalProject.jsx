import { AnimatePresence, motion } from 'framer-motion'
import { content } from '@constants/content'
import Techs from '../globals/Techs'
import MdCloseButton from './MdCloseButton'
import { useJob } from '@context/JobProvider'
import { useLang } from '@context/LangProvider'
import { modalIcos } from '@constants/imgs'

export default function ModalProject () {
  const { job } = useJob()
  const { lang } = useLang()
  const project = content[lang].projects.jobs[job]
  return (
    <AnimatePresence>
      {
        job != null &&
        (
          <motion.aside
            className='modalContainer'
            style={{ zIndex: '2000' }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <article className='projectModal'>

              {/* boton de cierre */}
              <MdCloseButton />

              {/* titulo y enlaces */}
              <h2>
                {project.title}
              </h2>

              <ul
                className='botomLinks'
              >
                <li>
                  <a href={project.urls.github} target='blank' className='linkButton'>
                    <button>
                      <span className='textMode'>{content[lang].menu.repo}</span>
                      <img className='iconMode' src={modalIcos.gitHub} alt='gitHub repo' />
                    </button>
                  </a>
                </li>
                <li>
                  <a href={project.urls.site} target='blank' className='linkButton'>
                    <button>
                      <span className='textMode'>{content[lang].menu.go}</span>
                      <img className='iconMode' src={modalIcos.go} alt='go site' />
                    </button>
                  </a>
                </li>
              </ul>

              {/* texto y captura */}
              <div className='projectModal--textContainer'>
                <div
                  className='projectModal--img_Container'
                  onClick={() => { window.open(`${project.urls.site}`, '_blank') }}
                >
                  <img
                    className='projectModal--img'
                    onClick={() => { window.open(`${project.urls.site}`, '_blank') }}
                    src={project.img}
                    alt={`${project.title} capture of website`}
                    title={`${project.title} capture of website`}
                  />
                  <img
                    className='imgIconGo'
                    onClick={() => { window.open(`${project.urls.site}`, '_blank') }}
                    src={modalIcos.go}
                    alt='go to site'
                  />
                </div>
                {project.description.map((t) => (
                  <p key={t}>{t}</p>
                ))}

              </div>

              {/* tecnologias usadas */}
              <Techs
                item={project}
                cl='projectModal--techs'
              />

            </article>

          </motion.aside>
        )

      }
    </AnimatePresence>
  )
}
