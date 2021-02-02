import PropTypes from 'prop-types'
import Post from '../../models/post'
import Link from '../common/link'
import PostCoverImage from './post-cover-image'
import format from 'date-fns/format'

export default function PostCardWide({ post }) {
  return (
    <article className="lg:grid lg:grid-cols-5 lg:gap-8 md:col-span-2 lg:col-span-3">
      <div className="lg:col-span-3 mb-3 lg:mb-0">
        <Link href={`/posts/${post.slug}`}>
          <PostCoverImage
            image={post.coverImage}
            webpImage={post.coverImageWebP}
            alt={post.title}
            sizes="(min-width: 1024px) 800px, 100vw"
          />
        </Link>
      </div>
      <div className="lg:col-span-2">
        <p className="mb-1 text-xs text-gray-500">
          <time dateTime={post.date.toString()}>
            {format(post.date, 'MMMM dd, yyyy')}
          </time>
        </p>
        <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">
          <Link href={`/posts/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h2>
        <p className="md:text-lg text-gray-500 leading-7 mb-6">
          {post.excerpt}
        </p>
        <Link
          href={`/posts/${post.slug}`}
          className="text-red-600 font-semibold hover:underline"
        >
          Read more →
        </Link>
      </div>
    </article>
  )
}

PostCardWide.propTypes = {
  post: PropTypes.instanceOf(Post).isRequired,
}
