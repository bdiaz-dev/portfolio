// import { useState } from 'react'
// import { content } from '../../constants/content'
import { menu } from '../../constants/imgs'
// import { useLang } from '../../context/LangProvider'
// import LanguageSelector from '../LanguageSelector'
import ConfigMenu from './ConfigMenu'

export default function MenuResponsive () {
  // const { lang } = useLang()
  // const [isConfigShow, setIsConfigShow] = useState(false)
  return (
    <div id='menuResponsive'>
      <div>
        <ul>
          <li>
            <a href='#top'><img src={menu.info} alt='info' /></a>
          </li>
          <li>
            <a href='#projectsResponsiveTag'><img src={menu.projects} alt='projects' /></a>
          </li>
          <li>
            <a href='#skills'><img src={menu.skills} alt='skills' /></a>
          </li>
          <li>
            <ConfigMenu />
            {/* <img
              src={menu.config}
              onClick={() => setIsConfigShow(!isConfigShow)}
              alt='config'
            />
            <LanguageSelector isConfigShow={isConfigShow} /> */}
          </li>
        </ul>
      </div>
    </div>
  )
}
