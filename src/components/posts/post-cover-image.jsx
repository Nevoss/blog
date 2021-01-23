import PropTypes from 'prop-types'
import Image from '../../../src/models/image'

export default function PostCoverImage({ image, alt, sizes, className }) {
  return (
    <div
      className={`aspect-w-2 aspect-h-1 -mx-4 md:mx-0 md:rounded-md overflow-hidden opacity-70 hover:opacity-80 shadow transition transition-all ${className}`}
    >
      <img src={image.src} srcSet={image.srcSet} alt={alt} sizes={sizes} />
    </div>
  )
}

PostCoverImage.propTypes = {
  image: PropTypes.instanceOf(Image).isRequired,
  alt: PropTypes.string,
  sizes: PropTypes.string,
  className: PropTypes.string,
}

PostCoverImage.defaultProps = {
  className: '',
}
