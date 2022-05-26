import { useEffect, useRef } from 'react'

export const useComponentDidFirstMount = (callback: () => void) => {
  const isFirst = useRef(true)

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false

      callback()
    }
  }, [callback, isFirst])
}
