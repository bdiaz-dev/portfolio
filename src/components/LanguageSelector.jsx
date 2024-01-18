export default function LanguageSelector ({ changeLang, lang }) {
  return (
    <div className='languageSelector'>
      <ul>

        <li
          onClick={() => { changeLang('es') }}
          style={{ textDecoration: ((lang === 'es') ? 'underline' : '') }}
        >
          Español
        </li>

        <li>/</li>

        <li
          onClick={() => { changeLang('en') }}
          style={{ textDecoration: ((lang === 'en') ? 'underline' : '') }}
        >
          English
        </li>

      </ul>
    </div>
  )
}
