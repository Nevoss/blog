import { useRef, useEffect, useState } from 'react'

export default function useIsInViewport(options) {
  const elementRef = useRef()
  const [{ isInViewPort, wasInViewPort, count }, setData] = useState({
    isInViewPort: false,
    wasInViewPort: false,
    count: 0,
  })

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const isInViewPort = !!entries[0]?.isIntersecting

      setData((prev) => {
        const count = isInViewPort ? prev.count + 1 : prev.count

        return {
          isInViewPort,
          count,
          wasInViewPort: count > 0,
        }
      })
    }, options)

    observer.observe(elementRef.current)

    return () => observer.disconnect()
  }, [])

  return {
    elementRef,
    isInViewPort,
    count,
    wasInViewPort,
  }
}
