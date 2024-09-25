import { useEffect } from 'react'
import headerReposition from '@logic/headerReposition'
import Contact from '../Contact'
import { content } from '@constants/content'
import { useLang } from '@context/LangProvider'

export default function Menu () {
  const { lang } = useLang()
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
          <a href='#top'>{content.menu.about[lang]}</a>
        </li>
        <li>
          <a href='#projects'>{content.menu.projects[lang]}</a>
        </li>
        <li>
          <a href='#skills'>{content.menu.skills[lang]}</a>
        </li>
      </ul>
    </nav>
  )
}
