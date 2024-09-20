// import './styles/App.scss'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import LanguageSelector from './components/LanguageSelector'
// import { useState } from 'react'
import { useLang } from './context/LangProvider'
import ModalProject from './components/ModalProject'
import MenuResponsive from './components/menu/MenuResponsive'
import ConfigMenu from './components/menu/ConfigMenu'

export default function App () {
  const { lang } = useLang()

  return (
    <div className='allContainer'>
      <Header lang={lang} />
      <main className='main'>
        <ModalProject />
        {/* <LanguageSelector /> */}
        <ConfigMenu isDesktop />
        <About lang={lang} />
        <Projects lang={lang} />
        <Skills lang={lang} />
        <Footer lang={lang} />
      </main>
      <MenuResponsive />
    </div>
  )
}
