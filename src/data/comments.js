import config from '../config'
import Comment from '../models/comment'

const createCommentsUrlPattern = `https://github.com/${config.githubRepo}/issues/{ID}`
const commentsApiUrlPattern = `https://api.github.com/repos/${config.githubRepo}/issues/{ID}/comments?per_page=100`

/**
 * Get all the comment for specific issue.
 *
 * @param issueId
 * @returns {Promise<Comment[]>}
 */
export async function fetchComments(issueId) {
  const comments = await (
    await fetch(commentsApiUrlPattern.replace('{ID}', issueId))
  ).json()

  return comments
    .map(
      (comment) =>
        new Comment({
          id: comment.id,
          content: comment.body,
          createdAt: comment.created_at,
          username: comment.user.login,
          avatarUrl: comment.user.avatar_url,
        })
    )
    .sort((comment1, comment2) => comment2.createdAt - comment1.createdAt)
}

/**
 * Get create comments url
 *
 * @param issueId
 * @returns {string}
 */
export function getCreateCommentsUrl(issueId) {
  return createCommentsUrlPattern.replace('{ID}', issueId)
}
