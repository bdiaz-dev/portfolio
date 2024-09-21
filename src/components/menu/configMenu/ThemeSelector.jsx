import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ThemeSelector () {
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30
  }
  const isLight = (document.documentElement.className === 'lightMode')
  const [isDark, setIsDark] = useState(!isLight)
  const toggleSwitch = () => setIsDark(!isDark)

  useEffect(() => {
    document.documentElement.className = (isDark ? '' : 'lightMode')
  }, [isDark])

  return (
    <div className='switch' data-isdark={isDark} onClick={toggleSwitch}>
      <motion.div className='handle' layout transition={spring} />
    </div>
  )
}
