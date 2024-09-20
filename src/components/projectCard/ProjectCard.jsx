// import '../styles/projectCards.scss'
import CardImg from './CardImg'
import CardText from './CardText'

export default function ProjectCard ({ item, clickModal }) {
  return (
    <article
      className='projectCard'
      onClick={clickModal}
    >

      {/* Imagen */}
      <CardImg item={item} />

      {/* Texto +Tecnologias */}
      <CardText item={item} />

    </article>
  )
}
