import { content, contactLinks } from '@constants/content'
import { useLang } from '@context/LangProvider'

export default function Footer () {
  const { lang } = useLang()
  return (
    <div className='footer'>
      <p>
        {content.footer[lang][0]}
      </p>
      <p>
        {content.footer[lang][1]}
        <a
          href='https://github.com/bdiaz-dev/portfolio'
        >
          {content.footer[lang][2]}
        </a>
      </p>
      <p>
        {content.footer[lang][3]}
        <a
          href={contactLinks.mail}
        >
          {content.footer[lang][4]}
        </a>
      </p>
    </div>
  )
}
