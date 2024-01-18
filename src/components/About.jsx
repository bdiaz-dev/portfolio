import * as content from '../constants/content'

export default function About ({ lang }) {
  return (
    <section className='aboutContainer' id='about'>
      <article className='aboutArticle'>
        <h1 className='P textColored'>{content[lang].about.title}</h1>
        <p className='P'>{content[lang].about.text}</p>
      </article>
    </section>
  )
}
