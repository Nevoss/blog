import config from '../config'

export default class PageHead {
  constructor({
    title = '',
    imageUrl = '/logo.png',
    description = '',
    url = '',
    twitterHandle = config.twitterHandle,
    type = 'website',
  }) {
    this.title = `${title} - ${config.siteName}`
    this.imageUrl = `${config.siteUrl}${imageUrl}`
    this.type = type
    this.description = description
    this.url = `${config.siteUrl}${url}`
    this.twitterHandle = twitterHandle
  }
}
