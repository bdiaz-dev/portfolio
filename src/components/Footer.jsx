import * as content from '../constants/content'

export default function Footer ({ lang }) {
  return (
    <div className='footer'>
      <p>
        {content[lang].footer[0]}
      </p>
      <p>
        {content[lang].footer[1]}
        <a
          href='https://github.com/bdiaz-dev/portfolio'
        >
          {content[lang].footer[2]}
        </a>
      </p>
      <p>
        {content[lang].footer[3]}
        <a
          href={content.contactLinks.mail}
        >
          {content[lang].footer[4]}
        </a>
      </p>
    </div>
  )
}
