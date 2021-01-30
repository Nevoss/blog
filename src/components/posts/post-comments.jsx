import { useMemo } from 'react'
import PropTypes from 'prop-types'
import { useQuery } from 'react-query'
import { fetchComments, getCreateCommentsUrl } from '../../data/comments'
import PostCommentsItem from './post-comments-item'
import useIsInViewport from '../../hooks/use-is-in-viewport'

export default function PostComments({ issueId }) {
  const { elementRef, wasInViewPort } = useIsInViewport({
    rootMargin: '500px',
  })

  const { data, status } = useQuery(
    ['comments', issueId],
    () => fetchComments(issueId),
    {
      enabled: wasInViewPort,
    }
  )

  const createCommentsUrl = useMemo(() => getCreateCommentsUrl(issueId), [
    issueId,
  ])

  return (
    <div ref={elementRef}>
      <div className="flex flex-wrap gap-x-8 gap-y-4 items-center justify-between">
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold mb-1"> Comments </h3>
          <p className="text-gray-500 mt-1">
            The comment system is based on github issues.
          </p>
        </div>
        <div>
          <a
            className="bg-gray-200 text-gray-900 px-6 py-2 rounded-md font-medium hover:bg-red-100 focus:bg-red-100 active:bg-red-100 hover:text-red-900 focus:text-red-900 active:text-red-900 transition inline-block"
            href={createCommentsUrl}
            target="_blank"
            rel="noreferrer"
          >
            Write a comment
          </a>
        </div>
      </div>
      <div>
        {status === 'success' && data.length > 0 ? (
          <div className="mb-16 md:mb-20 mt-10 md:mt-12">
            {data.map((comment) => (
              <PostCommentsItem key={comment.id} comment={comment} />
            ))}
          </div>
        ) : (
          <p className="text-center md:my-20 my-12 text-md leading-7 text-gray-300">
            {status === 'success' &&
              data.length === 0 &&
              'No comments for this blog posts...'}
            {status === 'loading' && 'Loading...'}
            {status === 'error' && 'Error fetching comments...'}
          </p>
        )}
      </div>
    </div>
  )
}

PostComments.propTypes = {
  issueId: PropTypes.number.isRequired,
}
