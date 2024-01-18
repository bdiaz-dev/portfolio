import { modalIcos } from '../constants/imgs'
import '../styles/ModalProject.scss'
import handleExit from '../logic/handleExitModal'
import MdCapture from './modal/MdCapture'
import MdTitleAndLinks from './modal/MdTitleAndLinks'
import Techs from './globals/Techs'
import MdText from './modal/MdText'
import MdCloseButton from './modal/MdCloseButton'

export default function ModalProject ({ item, repo, go }) {
  return (
    <aside className='modalContainer'>
      <article className='projectModal'>

        {/* boton de cierre */}
        <MdCloseButton
          exit={handleExit}
          icos={modalIcos}
        />

        {/* titulo y enlaces */}
        <MdTitleAndLinks
          item={item}
          modalIcos={modalIcos}
        />

        {/* texto */}
        <MdText
          item={item}
          txt={{ repo, go }}
        />

        {/* captura */}
        <MdCapture
          item={item}
          go={modalIcos.go}
        />

        {/* tecnologias usadas */}
        <Techs
          item={item}
          cl='projectModal--techs'
        />

      </article>

    </aside>
  )
}
