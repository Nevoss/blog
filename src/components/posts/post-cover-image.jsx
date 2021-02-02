import PropTypes from 'prop-types'
import ImageModel from '../../../src/models/image'
import Image from '../common/image'

export default function PostCoverImage({
  image,
  webpImage,
  alt,
  sizes,
  className,
}) {
  return (
    <Image
      className={`-mx-4 md:mx-0 md:rounded-md overflow-hidden opacity-70 hover:opacity-80 shadow ${className}`}
      model={image}
      webpModel={webpImage}
      aspectW={2}
      aspectH={1}
      alt={alt}
      sizes={sizes}
    />
  )
}

PostCoverImage.propTypes = {
  image: PropTypes.instanceOf(ImageModel).isRequired,
  webpImage: PropTypes.instanceOf(ImageModel),
  alt: PropTypes.string,
  sizes: PropTypes.string,
  className: PropTypes.string,
}

PostCoverImage.defaultProps = {
  className: '',
}
