export default function MdBotomLinks ({ item, txt }) {
  return (
    <ul
      className='botomLinks'
    >
      <li>
        {item.urls.github &&
          <a href={item.urls.github} target='blank'>
            {txt.repo}
          </a>}
      </li>
      <li>
        {item.urls.site &&
          <a href={item.urls.site} target='blank'>
            {txt.go}
          </a>}
      </li>
    </ul>
  )
}
