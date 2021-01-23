import { useRef, useEffect, useState } from 'react'

export function useIsInViewport(options) {
  const [data, setData] = useState({ isInViewPort: false, count: 0 })
  const elementRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setData((prev) => {
        const isInViewPort = !!entries[0]?.isIntersecting

        return {
          isInViewPort,
          count: isInViewPort ? prev.count + 1 : prev.count,
        }
      })
    }, options)

    observer.observe(elementRef.current)

    return () => observer.disconnect()
  }, [])

  return { elementRef, isInViewPort: data.isInViewPort, count: data.count }
}
