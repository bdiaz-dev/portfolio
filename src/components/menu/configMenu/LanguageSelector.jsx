import { AnimatePresence, motion } from 'framer-motion'
import { useLang } from '@context/LangProvider'
import { menu } from '@constants/imgs'

export default function LanguageSelector ({ isConfigShow = true }) {
  const { lang, setLang } = useLang()
  return (
    <AnimatePresence>
      {isConfigShow && (
        <motion.div
          initial={{ scaleY: 0, translateY: '-100%' }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          className='languageSelector'
        >
          <ul>

            <li
              onClick={() => { setLang('es') }}
              style={{ textDecoration: ((lang === 'es') ? 'underline' : '') }}
            >
              Español
            </li>

            <li>/</li>

            <li
              onClick={() => { setLang('en') }}
              style={{ textDecoration: ((lang === 'en') ? 'underline' : '') }}
            >
              English
            </li>

          </ul>

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
        </motion.div>
      )}
    </AnimatePresence>
  )
}
