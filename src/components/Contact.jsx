import { contact } from '../constants/imgs'
import { contactLinks } from '../constants/content'

export default function Contact ({ id = 'contact', isOnTop = false, lang }) {
  return (
    <div id={id} className='contactContainer'>
      <a href={contactLinks.github} target='blank'>
        <img src={contact.gitHub} alt='githubIco' title='GitHub' />
      </a>
      <a href={contactLinks.mail}>
        <img src={contact.mail} alt='mailIco' title='Mail' />
      </a>
      <a href={contactLinks.linkedin} target='blank'>
        <img src={contact.linkedin} alt='linkedinIco' title='LinkedIn' />
      </a>
      <a href={contactLinks.cvDownload[lang === 'es' ? 0 : 1]}>
        <img src={contact.cvIco} alt='cvIcon' title='Curriculum Vitae' />
      </a>
      {isOnTop || <div id='contactViewer' />}
    </div>
  )
}
