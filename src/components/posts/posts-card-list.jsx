import PropTypes from 'prop-types'
import Post from '../../models/post'
import PostCardWide from './post-card-wide'
import PostCard from './post-card'

export default function PostCardList({ posts, className }) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 ${className}`}
    >
      {posts.map((post, index) =>
        index === 0 ? (
          <PostCardWide post={post} key={post.slug} />
        ) : (
          <PostCard post={post} key={post.slug} />
        )
      )}
    </div>
  )
}

PostCardList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.instanceOf(Post)).isRequired,
  className: PropTypes.string,
}

PostCardList.defaultProps = {
  className: '',
}
