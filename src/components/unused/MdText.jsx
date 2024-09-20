import MdBotomLinks from './MdBotomLinks'

export default function MdText ({ text }) {
  return (
    <div className='projectModal--textContainer'>
      {text.description.map((t) => (
        <p className='P' key={t}>{t}</p>
      ))}

      {/* enlaces final texto */}
      <MdBotomLinks />
    </div>
  )
}
