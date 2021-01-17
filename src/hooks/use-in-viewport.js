import { useRef, useEffect, useState } from 'react'

export function useInViewport() {
  const [inViewPort, setInViewPort] = useState(false)
  const elementRef = useRef()
  const observerRef = useRef()

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => entries[0] && setInViewPort(entries[0].isIntersecting)
    )

    observerRef.current.observe(elementRef.current)

    return () => observerRef.current.disconnect()
  }, [])

  return { elementRef, inViewPort }
}
