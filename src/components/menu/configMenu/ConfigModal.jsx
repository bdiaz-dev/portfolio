import { AnimatePresence, motion } from 'framer-motion'
import ThemeSelector from './ThemeSelector'
import LanguageSelector from './LanguageSelector'
import { useLang } from '@context/LangProvider'

export default function ConfigModal ({ isConfigShow = true }) {
  const { lang } = useLang()
  return (
    <AnimatePresence>
      {isConfigShow && (
        <motion.div
          initial={{ scaleY: 0, translateY: '-100%' }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          className='configModal'
        >
          <b>
            {lang === 'es' ? 'Tema' : 'Theme'}
          </b>
          <ThemeSelector />

          <b>
            {lang === 'es' ? 'Idioma' : 'Language'}
          </b>
          <LanguageSelector />

        </motion.div>
      )}
    </AnimatePresence>
  )
}
