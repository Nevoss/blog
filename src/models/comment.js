export default class Comment {
  constructor({ id, content, createdAt, username, avatarUrl }) {
    this.id = id
    this.content = content
    this.createdAt = new Date(createdAt)
    this.username = username
    this.avatarUrl = avatarUrl
  }
}
