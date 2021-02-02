import Image from './image'

export default class Post {
  constructor({
    title,
    slug,
    date,
    excerpt,
    coverImage,
    coverImageWebP,
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

    if (coverImageWebP) {
      this.coverImageWebP = new Image(coverImageWebP)
    }
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
      coverImage: { ...this.coverImage },
      coverImageWebP: this.coverImageWebP ? { ...this.coverImageWebP } : null,
    }
  }
}
