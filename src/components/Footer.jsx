import * as content from '../constants/content'

export default function Footer ({ lang }) {
  // const lang = 'spanish'
  return (
    <div className='footer'>
      <p>
        {content[lang].footer[0]}
      </p>
      <p>
        {content[lang].footer[1]}
        <a
          href=''
        >
          {content[lang].footer[2]}
        </a>
      </p>
      <p>
        {content[lang].footer[3]}
        <a
          href='mailto:brunodiaz.dev@gmail.com'
        >
          {content[lang].footer[4]}
        </a>
      </p>
    </div>
  )
}
