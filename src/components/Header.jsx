import { content } from '@constants/content'
import { foto } from '@constants/imgs'
import { useEffect } from 'react'
import activeMenu from '@logic/activeMenu'
import Menu from './menu/Menu'
import Contact from './Contact'

export default function Header ({ lang }) {
  useEffect(() => {
    activeMenu()
  }, [])

  return (
    <header id='header'>
      <div className='fotoContainer'>
        <img src={foto} alt='Bruno Diaz photo' title='Hi, I am here!' />
      </div>
      <div id='nameContainer'>
        <h1 id='name'>
          BrunoDiaz.es
          <div id='nameViewer' />
        </h1>
        <h2 className='textColored'>
          {content.header.titles[lang]}
        </h2>
        <Contact lang={lang} />
        <hr />
        <Menu lang={lang} />
      </div>
    </header>
  )
}
