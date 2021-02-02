import PropTypes from 'prop-types'
import format from 'date-fns/format'
import Post from '../../models/post'
import Link from '../common/link'
import PostCoverImage from './post-cover-image'

export default function PostCard({ post }) {
  return (
    <article>
      <div className="mb-3">
        <Link href={`/posts/${post.slug}`}>
          <PostCoverImage
            image={post.coverImage}
            webpImage={post.coverImageWebP}
            alt={post.title}
            sizes="(min-width: 1024px) 400px, 100vw"
          />
        </Link>
      </div>
      <div>
        <p className="mb-1 text-xs text-gray-500">
          <time dateTime={post.date.toString()}>
            {format(post.date, 'MMMM dd, yyyy')}
          </time>
        </p>
        <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
          <Link href={`/posts/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h2>
        <p className="text-gray-500 leading-7 mb-6">{post.excerpt}</p>
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

PostCard.propTypes = {
  post: PropTypes.instanceOf(Post).isRequired,
}
