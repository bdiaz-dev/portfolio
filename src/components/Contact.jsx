import { contact } from '../constants/imgs'
import { contactLinks } from '../constants/content'

export default function Contact ({ id = 'contact', isOnTop = false }) {
  return (
    <div id={id} className='contactContainer'>
      <a href={contactLinks.github} target='blank'>
        <img src={contact.gitHub} />
      </a>
      <a href={contactLinks.linkedin} target='blank'>
        <img src={contact.linkedin} />
      </a>
      <a href={contactLinks.mail}>
        <img src={contact.mail} />
      </a>
      {isOnTop || <div id='contactViewer' />}
    </div>
  )
}
