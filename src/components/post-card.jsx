import React from 'react'
import PropTypes from 'prop-types'
import Link from './link'
import format from 'date-fns/format'

export default function PostCard({
  className,
  title,
  date,
  excerpt,
  slug,
  coverImage,
}) {
  return (
    <article className={`relative text-gray-900 ${className}`}>
      <Link href={`/posts/${slug}`}>
        <div
          className="h-48 md:h-60 relative -mx-4 md:mx-0 md:rounded-lg overflow-hidden mb-6 opacity-60 shadow bg-cover bg-center hover:opacity-80 transition transition-all"
          style={{ backgroundImage: `url(${coverImage})` }}
        />
      </Link>
      <p className="mb-1 text-xs text-gray-500">
        <time dateTime={date.toString()}>{format(date, 'MMMM dd, yyyy')}</time>
      </p>
      <h2 className="text-xl md:text-2xl font-bold mb-4">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h2>
      <p className="mb-6 max-w-2xl text-gray-700">{excerpt}</p>
      <Link
        href={`/posts/${slug}`}
        className="text-red-600 font-semibold hover:underline"
      >
        Read more →
      </Link>
    </article>
  )
}

PostCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string,
  slug: PropTypes.string,
  date: PropTypes.objectOf(Date),
  coverImage: PropTypes.string,
}

PostCard.defaultProps = {
  className: '',
}
