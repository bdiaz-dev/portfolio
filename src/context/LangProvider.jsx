import React, { createContext, useContext, useState, useMemo } from 'react'

const LangContext = createContext()
const navLang = (navigator.language).substring(0, 2)

export const useLang = () => {
  const context = useContext(LangContext)
  if (!context) {
    throw new Error('useLang must be used within a LangProvider')
  }
  return context
}

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(navLang)

  const value = useMemo(() => ({ lang, setLang }), [lang])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}
