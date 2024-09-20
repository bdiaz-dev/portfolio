import { modalIcos } from '@constants/imgs'

export default function MdTitleAndLinks ({ item }) {
  return (
    <h2>
      {item.title}
      <a href={item.urls.site} target='blank'>
        <img src={modalIcos.go} alt='go to site' />
      </a>
      {item.urls.github &&
        <a href={item.urls.github} target='blank'>
          <img src={modalIcos.gitHub} alt='github' />
        </a>}

    </h2>
  )
}
