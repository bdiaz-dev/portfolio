import { motion } from 'framer-motion'
import { useLang } from '@context/LangProvider'
import { menu } from '@constants/imgs'

export default function LanguageSelector ({ isConfigShow = true }) {
  const { lang, setLang } = useLang()
  return (
    <div className='languageButtons'>
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        data-islang={lang === 'es'}
        onClick={() => setLang('es')}
      >
        <img src={menu.esp} alt='spanish' />
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        data-islang={lang === 'en'}
        onClick={() => setLang('en')}
      >
        <img src={menu.eng} alt='english' />
      </motion.button>
    </div>
  )
}
