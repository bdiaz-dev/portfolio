// import '../styles/projectCards.scss'
import CardImg from './card/CardImg'
import CardText from './card/CardText'

export default function ProjectsCards ({ item, clickModal }) {
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
