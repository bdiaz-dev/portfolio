export default function MdBotomLinks ({ item, txt }) {
  return (
    <ul
      className='botomLinks'
    >
      <li>
        <a href={item.urls.github} target='blank'>
          {txt.repo}
        </a>
      </li>
      <li>
        <a href={item.urls.site} target='blank'>
          {txt.go}
        </a>
      </li>
    </ul>
  )
}
