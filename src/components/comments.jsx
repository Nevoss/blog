import React, { useMemo, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { fetchComments, getCreateCommentsUrl } from '../comments'
import { useQuery } from 'react-query'
import CommentsItem from './comments-item'
import { useInViewport } from '../hooks/use-in-viewport'

export default function Comments({ issueId }) {
  const [inViewPortFirstTime, setInViewPortFirstTime] = useState(false)
  const { elementRef, inViewPort } = useInViewport()
  const { data, status } = useQuery(['comments', issueId], fetchComments, {
    enabled: inViewPortFirstTime,
  })
  const createCommentsUrl = useMemo(() => getCreateCommentsUrl(issueId), [
    issueId,
  ])

  useEffect(
    () => !inViewPortFirstTime && inViewPort && setInViewPortFirstTime(true),
    [inViewPort]
  )

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
        {status === 'success' && data.length === 0 && (
          <p className="text-center md:mt-20 md:mb-8 mt-12 mb-4 text-md leading-7 text-gray-300">
            No comments for this blog posts...
          </p>
        )}
        {status === 'loading' && data && data.length === 0 && (
          <p className="text-center my-20 text-md leading-7 text-gray-300">
            Loading...
          </p>
        )}
        {status === 'error' && (
          <p className="text-center my-20 text-md leading-7 text-gray-300">
            Error fetching comments...
          </p>
        )}
        {status === 'success' &&
          data.map((comment) => (
            <CommentsItem
              key={comment.id}
              user={comment.user}
              body={comment.body}
              createdAt={comment.createdAt}
            />
          ))}
      </div>
    </div>
  )
}

Comments.propTypes = {
  issueId: PropTypes.number.isRequired,
}
