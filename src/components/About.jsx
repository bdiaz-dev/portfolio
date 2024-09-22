import { content } from '@constants/content'
import { useLang } from '@context/LangProvider'

export default function About () {
  const { lang } = useLang()
  return (
    <section id='about'>
      <article>
        <h1 className='textColored'>{content[lang].about.title}</h1>
        <p>{content[lang].about.text}</p>
      </article>
    </section>
  )
}
