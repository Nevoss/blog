import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import Comment from '../../models/comment'

export default function PostCommentsItem({ comment }) {
  return (
    <div className="mt-8 md:mt-10">
      <div className="flex items-center gap-x-4">
        <div className="w-10 h-10 rounded-full overflow-hidden shadow opacity-90">
          <img src={comment.avatarUrl} alt={comment.username} />
        </div>
        <div>
          <p>
            <span className="font-semibold text-lg"> {comment.username} </span>
            <span className="text-xs text-gray-500">
              {' '}
              - {comment.createdAt.toLocaleDateString()}
            </span>
          </p>
        </div>
      </div>
      <div className="sm:prose prose-sm ml-14 mt-1">
        <ReactMarkdown>{comment.content}</ReactMarkdown>
      </div>
    </div>
  )
}

PostCommentsItem.propTypes = {
  comment: PropTypes.instanceOf(Comment),
}
