import { useEffect, useRef } from 'react'

function useClickOutside (handler) {
  const ref = useRef(null)

  useEffect(() => {
    function handleClickOutside (event) {
      if (
        ref.current &&
        event.target.nodeType === 1 &&
        !ref.current.contains(event.target)
      ) {
        handler(event)
        console.log('Clicked outside')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handler])

  return ref
}

export default useClickOutside
