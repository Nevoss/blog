import { useMemo } from 'react'
import PropTypes from 'prop-types'
import Container from '../components/common/container'
import PageHead from '../components/page-head'
import PageHeadModel from '../models/page-head'
import { getAllPosts } from '../data/posts'
import Post from '../models/post'
import PostCardList from '../components/posts/posts-card-list'
import Heading from '../components/common/heading'

const pageHeadModel = new PageHeadModel({
  title: 'Blog',
  description: 'All the latest blog post written by Nevo Golan.',
})

/**
 * Return all the posts.
 *
 * @returns {Promise<{props: {posts: *}}>}
 */
export async function getStaticProps() {
  const rawPosts = await getAllPosts(false)

  return { props: { rawPosts } }
}

/**
 * Index page.
 *
 * @param posts
 * @returns {JSX.Element}
 * @constructor
 */
export default function Index({ rawPosts }) {
  const posts = useMemo(() => rawPosts.map((post) => new Post(post)), [
    rawPosts,
  ])

  return (
    <div>
      <PageHead model={pageHeadModel} />
      <main>
        <Container size="lg">
          <Heading
            text={() => 'Blog'}
            subText={() => 'All the latest blog post written by me.'}
          />
          <hr className="hidden md:block border-gray-200" />
          <PostCardList posts={posts} className="my-8" />
        </Container>
      </main>
    </div>
  )
}

Index.propTypes = {
  rawPosts: PropTypes.array,
}
