import './styles/App.scss'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import LanguageSelector from './components/LanguageSelector'
import { useState } from 'react'

export default function App () {
  const navLang = (navigator.language).substring(0, 2)
  const [lang, setLang] = useState(navLang)
  const changeLang = (l) => {
    setLang(l)
  }
  return (
    <div className='allContainer'>
      <Header lang={lang} />
      <main className='main'>
        <LanguageSelector changeLang={changeLang} lang={lang} />
        <About lang={lang} />
        <Projects lang={lang} />
        <Skills lang={lang} />
        <Footer lang={lang} />
      </main>
    </div>
  )
}
