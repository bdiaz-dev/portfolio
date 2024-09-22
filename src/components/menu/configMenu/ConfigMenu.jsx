import { useState } from 'react'
import { menu } from '@constants/imgs'
import { motion } from 'framer-motion'
import ConfigModal from './ConfigModal'
import useClickOutside from '../../../hooks/useClickOutside'

export default function ConfigMenu ({ isDesktop = false }) {
  const [isConfigShow, setIsConfigShow] = useState(false)
  const configRef = useClickOutside(() => setIsConfigShow(false))
  return (
    <div id='configMenu' data-isdesktop={isDesktop} ref={configRef}>
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
