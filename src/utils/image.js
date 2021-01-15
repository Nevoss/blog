import PropTypes from 'prop-types'

export const imagePropType = PropTypes.shape({
  src: PropTypes.string,
  srcset: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
    })
  ),
  width: PropTypes.number,
  height: PropTypes.number,
})

export function createImageObject({ srcSet, images, src, width, height }) {
  return {
    srcset: srcSet,
    images,
    src,
    width,
    height,
  }
}
