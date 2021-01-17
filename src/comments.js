const createCommentsUrlPattern = 'https://github.com/Nevoss/blog/issues/{ID}'
const commentsApiUrlPattern =
  'https://api.github.com/repos/nevoss/blog/issues/{ID}/comments?per_page=100'

export async function fetchComments({ queryKey: [, issueId] }) {
  const comments = await (
    await fetch(commentsApiUrlPattern.replace('{ID}', issueId))
  ).json()

  return comments
    .map((comment) => ({ ...comment, createdAt: new Date(comment.created_at) }))
    .sort((comment1, comment2) => comment2.createdAt - comment1.createdAt)
}

export function getCreateCommentsUrl(issueId) {
  return createCommentsUrlPattern.replace('{ID}', issueId)
}
