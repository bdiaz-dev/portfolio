import { useState } from 'react'
import { menu } from '../../constants/imgs'
import LanguageSelector from '../LanguageSelector'
import { motion } from 'framer-motion'

export default function ConfigMenu ({ isDesktop = false }) {
  const [isConfigShow, setIsConfigShow] = useState(false)
  return (
    <div id='configMenu' data-isDesktop={isDesktop}>
      <motion.img
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        src={menu.config}
        onClick={() => setIsConfigShow(!isConfigShow)}
        alt='config'
      />
      <LanguageSelector isConfigShow={isConfigShow} />
    </div>
  )
}