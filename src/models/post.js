import Image from './image'

export default class Post {
  constructor({
    title,
    slug,
    date,
    excerpt,
    coverImage,
    githubIssueId,
    content,
  }) {
    this.title = title
    this.slug = slug
    this.date = new Date(date)
    this.excerpt = excerpt
    this.coverImage = new Image(coverImage)
    this.content = content
    this.githubIssueId = githubIssueId
  }

  /**
   * Make this model a plain object mostly for next static rendering
   * that required a plain object.
   *
   * @returns {object}
   */
  toPlainObject() {
    return {
      ...this,
      date: this.date.toISOString(),
      coverImage: {
        ...this.coverImage,
      },
    }
  }
}
