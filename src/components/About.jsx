import { content } from '@constants/content'
import { useLang } from '@context/LangProvider'

export default function About () {
  const { lang } = useLang()
  return (
    <section id='about'>
      <article>
        <h1 className='textColored'>{content.about.title[lang]}</h1>
        <p>{content.about.text[lang]}</p>
      </article>
    </section>
  )
}
