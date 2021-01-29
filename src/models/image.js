export default class Image {
  constructor({ srcSet, images, src, width, height, placeholder }) {
    this.srcSet = srcSet
    this.images = images
    this.src = src
    this.width = width
    this.height = height
    this.placeholder = placeholder
  }
}
