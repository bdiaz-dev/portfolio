import { useJob } from '@context/JobProvider'
import { useLang } from '@context/LangProvider'
import { getProjectLinks } from '../../logic/getContent'

export default function MdLinks () {
  const { lang } = useLang()
  const { job } = useJob()
  const items = getProjectLinks({ lang, job })
  return (
    <ul
      className='botomLinks'
    >
      <li>
        <a href={items.repoLink} target='blank'>
          {items.repoText}
        </a>
      </li>
      <li>
        <a href={items.goLink} target='blank'>
          {items.goText}
        </a>
      </li>
    </ul>
  )
}
