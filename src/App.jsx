// import '@styles/App.scss'
import Header from '@components/Header'
import About from '@components/About'
import Projects from '@components/Projects'
import Skills from '@components/Skills'
import Footer from '@components/Footer'
import { useLang } from '@context/LangProvider'
import ModalProject from '@components/modal/ModalProject'
import MenuResponsive from '@components/menu/MenuResponsive'
import ConfigMenu from '@components/menu/configMenu/ConfigMenu'

export default function App () {
  const { lang } = useLang()

  return (
    <div className='allContainer'>
      <Header lang={lang} />
      <main className='main'>
        <ModalProject />
        <ConfigMenu isDesktop />
        <About />
        <Projects />
        <Skills />
        <Footer />
      </main>
      <MenuResponsive />
    </div>
  )
}
