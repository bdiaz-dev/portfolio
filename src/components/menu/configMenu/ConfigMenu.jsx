import { useState } from 'react'
import { menu } from '@constants/imgs'
import { motion } from 'framer-motion'
import ConfigModal from './ConfigModal'

export default function ConfigMenu ({ isDesktop = false }) {
  const [isConfigShow, setIsConfigShow] = useState(false)
  return (
    <div id='configMenu' data-isdesktop={isDesktop}>
      <motion.img
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        src={menu.config}
        onClick={() => setIsConfigShow(!isConfigShow)}
        alt='config'
      />
      <ConfigModal isConfigShow={isConfigShow} />
    </div>
  )
}
