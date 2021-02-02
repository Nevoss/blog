import { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ImageModel from '../../models/image'

export default function Image({
  model,
  webpModel,
  alt,
  sizes,
  className,
  aspectW,
  aspectH,
}) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const ref = useRef()

  useEffect(() => {
    ref.current.onload = () => setImageLoaded(true)

    if (ref.current.complete) {
      setImageLoaded(true)
    }
  }, [])

  return (
    <div
      className={`overflow-hidden transition transition-all aspect-h-${aspectH} aspect-w-${aspectW} ${className}`}
    >
      {
        <img
          src={model.placeholder}
          alt={alt}
          style={{ filter: 'blur(20px)' }}
          className="z-0"
        />
      }
      <picture className={`aspect-h-${aspectH} aspect-w-${aspectW}`}>
        {webpModel && <source srcSet={webpModel.srcSet} type="image/webp" />}
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
      </picture>
    </div>
  )
}

Image.propTypes = {
  model: PropTypes.instanceOf(ImageModel).isRequired,
  webpModel: PropTypes.instanceOf(ImageModel),
  alt: PropTypes.string,
  sizes: PropTypes.string,
  className: PropTypes.string,
  aspectH: PropTypes.number.isRequired,
  aspectW: PropTypes.number.isRequired,
}

Image.defaultProps = {
  className: '',
}
