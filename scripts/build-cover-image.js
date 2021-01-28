const path = require('path')
const sharp = require('sharp')

const [, , imagePath, postName] = process.argv
const mainDir = process.cwd()

if (!imagePath || !postName) {
  throw new Error('Must declare an imagePath and postName.')
}

sharp(path.resolve(mainDir, imagePath))
  .resize({ width: 1000, height: 500 })
  .jpeg({
    quality: 90,
  })
  .toFile(path.resolve(mainDir, `content/posts/${postName}/cover.jpg`))
