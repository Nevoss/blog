import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import markdownToHtml from '../utils/markdown-to-html'

export default function CommentsItem(props) {
  const [bodyHtml, setBodyHtml] = useState('')

  useEffect(() => {
    if (!props.body) {
      return
    }

    markdownToHtml(props.body).then(setBodyHtml)
  }, [props.body])

  return (
    <div>
      <div className="flex items-center gap-x-4 md:mt-12 mt-8">
        <div className="w-10 h-10 rounded-full overflow-hidden shadow opacity-90">
          <img src={props.user.avatar_url} alt={props.user.login} />
        </div>
        <div>
          <p>
            <span className="font-semibold text-lg"> {props.user.login} </span>
            <span className="text-xs text-gray-500">
              {' '}
              - {props.createdAt.toLocaleDateString()}
            </span>
          </p>
        </div>
      </div>
      {bodyHtml && (
        <div
          className="sm:prose prose-sm ml-14 mt-1"
          dangerouslySetInnerHTML={{ __html: bodyHtml }}
        />
      )}
    </div>
  )
}

CommentsItem.propTypes = {
  body: PropTypes.string,
  createdAt: PropTypes.instanceOf(Date),
  user: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string,
  }),
}
