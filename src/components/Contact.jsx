import { contact } from '../constants/imgs'

export default function Contact ({ id = 'contact', isOnTop = false }) {
  return (
    <div id={id} className='contactContainer'>
      <a href='https://github.com/bdiaz-dev'>
        <img src={contact.gitHub} />
      </a>
      <a href='https://www.linkedin.com/in/bruno-diaz-a2aa15297/'>
        <img src={contact.linkedin} />
      </a>
      <a href='mailto:brunodiaz.dev@gmail.com'>
        <img src={contact.mail} />
      </a>
      {isOnTop || <div id='contactViewer' />}
    </div>
  )
}
