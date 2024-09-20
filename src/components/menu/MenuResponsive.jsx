import { menu } from '../../constants/imgs'
import ConfigMenu from './configMenu/ConfigMenu'

export default function MenuResponsive () {
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
          </li>
        </ul>
      </div>
    </div>
  )
}
