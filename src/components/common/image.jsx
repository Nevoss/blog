import { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ImageModel from '../../models/image'

export default function Image({ model, alt, sizes, className }) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const ref = useRef()

  useEffect(() => {
    ref.current.onload = () => setImageLoaded(true)

    if (ref.current.complete) {
      setImageLoaded(true)
    }
  }, [])

  return (
    <div className={`overflow-hidden transition transition-all ${className}`}>
      {
        <img
          src={model.placeholder}
          alt={alt}
          style={{ filter: 'blur(20px)' }}
          className="z-0"
        />
      }
      <img
        className={`transition transition-all z-10 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        ref={ref}
        src={model.src}
        srcSet={model.srcSet}
        alt={alt}
        sizes={sizes}
        loading="lazy"
      />
    </div>
  )
}

Image.propTypes = {
  model: PropTypes.instanceOf(ImageModel).isRequired,
  alt: PropTypes.string,
  sizes: PropTypes.string,
  className: PropTypes.string,
}

Image.defaultProps = {
  className: '',
}
