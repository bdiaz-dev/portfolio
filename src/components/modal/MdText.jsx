import MdBotomLinks from './MdBotomLinks'

export default function MdText ({ item, txt }) {
  return (
    <div className='projectModal--textContainer'>
      {item.description.map((t) => (
        <p className='projectModal--text P' key={t}>{t}</p>
      ))}

      {/* enlaces final texto */}
      <MdBotomLinks
        item={item}
        txt={txt}
      />

    </div>
  )
}
