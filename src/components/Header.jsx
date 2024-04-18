import * as content from '../constants/content'
import { foto } from '../constants/imgs'
import { useEffect } from 'react'
import activeMenu from '../logic/activeMenu'
import Menu from './Menu'
import Contact from './Contact'

export default function Header ({ lang }) {
  useEffect(() => {
    activeMenu()
  }, [])

  return (
    <header className='header' id='header'>
      <div className='fotoContainer'>
        <img src={foto} alt='Bruno Diaz photo' title='Hi, I am here!' />
      </div>
      <div id='nameContainer' className='nameContainer'>
        <h1 id='name' className='H1'>BrunoDiaz.es <div id='nameViewer' /></h1>
        <h2 className='H2 textColored'>{content[lang].header.titles}</h2>
        <Contact />
        <hr />
        <Menu lang={lang} />
      </div>
    </header>
  )
}
