import { AnimatePresence, motion } from 'framer-motion'
// import '../styles/ModalProject.scss'
import { content } from '../constants/content'
// import handleExit from '../logic/handleExitModal'
import MdCapture from './modal/MdCapture'
import MdTitleAndLinks from './modal/MdTitleAndLinks'
import Techs from './globals/Techs'
import MdText from './modal/MdText'
import MdCloseButton from './modal/MdCloseButton'
import { useJob } from '../context/JobProvider'
import { useLang } from '../context/LangProvider'
import { modalIcos } from '../constants/imgs'

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

              <h2>
                {project.title}
                {/* <a href={project.urls.site} target='blank'>
                  <img src={modalIcos.go} alt='go to site' />
                </a>
                {project.urls.github &&
                  <a href={project.urls.github} target='blank'>
                    <img src={modalIcos.gitHub} alt='github' />
                  </a>} */}
              </h2>

              <ul
                className='botomLinks'
              >
                <li>
                  <a href={project.urls.github} target='blank'>
                    <button>
                      {content[lang].menu.repo}
                    </button>
                  </a>
                </li>
                <li>
                  <a href={project.urls.site} target='blank'>
                    <button>
                      {content[lang].menu.go}
                    </button>
                  </a>
                </li>
              </ul>

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

                {/* enlaces final texto */}
                {/* <MdBotomLinks /> */}
              </div>

              {/* titulo y enlaces */}
              {/* <MdTitleAndLinks item={project} /> */}

              {/* texto */}
              {/* <MdText text={project.description} /> */}

              {/* captura */}
              {/* <MdCapture item={project} /> */}

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
