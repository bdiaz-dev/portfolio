import * as content from '../constants/content'

export default function About ({ lang }) {
  return (
    <section id='about'>
      <article>
        <h1 className='textColored'>{content[lang].about.title}</h1>
        <p>{content[lang].about.text}</p>
      </article>
    </section>
  )
}
