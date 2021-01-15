import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import Link from './link'
import format from 'date-fns/format'

export default function PostCard({
  title,
  date,
  excerpt,
  slug,
  coverImage,
  layout,
}) {
  const isMain = useMemo(() => layout === 'main', [layout])

  return (
    <article
      className={`relative text-gray-900 ${
        isMain && 'lg:grid lg:grid-cols-5 lg:gap-8 md:col-span-2 lg:col-span-3'
      }`}
    >
      <Link href={`/posts/${slug}`} className={isMain && 'lg:col-span-3'}>
        <div
          className={`aspect-w-2 aspect-h-1 relative -mx-4 md:mx-0 md:rounded-md overflow-hidden opacity-70 hover:opacity-80 shadow bg-cover bg-center transition transition-all mb-6 ${
            isMain && 'lg:mb-0'
          }`}
          style={{ backgroundImage: `url(${coverImage})` }}
        />
      </Link>
      <div className={isMain ? 'lg:col-span-2' : ''}>
        <p className="mb-1 text-xs text-gray-500">
          <time dateTime={date.toString()}>
            {format(date, 'MMMM dd, yyyy')}
          </time>
        </p>
        <h2
          className={`text-xl md:text-2xl font-bold mb-4 ${
            isMain && 'md:text-3xl'
          }`}
        >
          <Link href={`/posts/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h2>
        <p className={`mb-6 text-gray-500 leading-7 ${isMain && 'md:text-lg'}`}>
          {excerpt}
        </p>
        <Link
          href={`/posts/${slug}`}
          className="text-red-600 font-semibold hover:underline"
        >
          Read more →
        </Link>
      </div>
    </article>
  )
}

PostCard.propTypes = {
  layout: PropTypes.oneOf(['default', 'main']),
  title: PropTypes.string,
  excerpt: PropTypes.string,
  slug: PropTypes.string,
  date: PropTypes.objectOf(Date),
  coverImage: PropTypes.string,
}

PostCard.defaultProps = {
  layout: 'default',
}
