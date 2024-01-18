export default function CardImg ({ item }) {
  return (
    <figure className='projectCard--imgContainer'>
      <img className='projectCard--img' src={item.img} alt={item.title} />
    </figure>
  )
}
