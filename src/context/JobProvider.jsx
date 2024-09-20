import React, { createContext, useContext, useState, useMemo } from 'react'

const JobContext = createContext()

export const useJob = () => {
  const context = useContext(JobContext)
  if (!context) {
    throw new Error('useJob must be used within a JobProvider')
  }
  return context
}

export const JobProvider = ({ children }) => {
  const [job, setJob] = useState(null)

  const value = useMemo(() => ({ job, setJob }), [job])

  return <JobContext.Provider value={value}>{children}</JobContext.Provider>
}
