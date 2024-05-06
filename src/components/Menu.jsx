import { useEffect } from 'react'
import headerReposition from '../logic/headerReposition'
import Contact from './Contact'
import { menu } from '../constants/imgs'
import * as content from '../constants/content'

export default function Menu ({ lang }) {
  useEffect(() => {
    headerReposition()
  })
  return (
    <nav className='menuContainer'>

      {/* Nombre en top -> Solo movil */}
      <div id='topNameContainer'>
        <strong
          style={{ cursor: 'pointer' }}
          onClick={() => { window.location.href = 'mailto:contact@brunodiaz.es' }}
          id='nameTop'
        >
          BrunoDiaz.es
        </strong>
        <Contact id='contactTop' isOnTop />
      </div>

      {/* Menu escritorio */}
      <ul id='menu'>
        <li>
          <a href='#top'>{content[lang].menu.about}</a>
        </li>
        <li>
          <a href='#projects'>{content[lang].menu.projects}</a>
        </li>
        <li>
          <a href='#skills'>{content[lang].menu.skills}</a>
        </li>
      </ul>

      {/* Menu movil */}
      <ul id='menuMini'>
        <li>
          <a href='#top'><img src={menu.info} alt='info' /></a>
        </li>
        <li>
          <a href='#projectsResponsiveTag'><img src={menu.projects} alt='projects' /></a>
        </li>
        <li>
          <a href='#skills'><img src={menu.skills} alt='skills' /></a>
        </li>
      </ul>

    </nav>
  )
}
