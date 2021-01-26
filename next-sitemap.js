const path = require('path')
const dotenv = require('dotenv')

dotenv.config({
  path: path.resolve(process.cwd(), '.env.production'),
})

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  generateRobotsTxt: true,
}
