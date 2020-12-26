import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Container from '../components/container'
import PostCard from '../components/post-card'
import { getAllPosts } from '../api'

/**
 * Index page.
 *
 * @param posts
 * @returns {JSX.Element}
 * @constructor
 */
export default function Index({ posts }) {
  return (
    <div>
      <Head>
        <title>Blog - Nevo Golan</title>
      </Head>
      <main>
        <Container className="py-4 md:py-6">
          <div className="space-y-2 md:space-y-5 mb-8">
            <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Blog
            </h1>
            <p className="text-lg leading-7 text-gray-500">
              All the latest blog post written by me.
            </p>
          </div>
          <hr className="hidden md:block border-gray-200" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-6 mt-8">
            {posts.map((post, index) => {
              const isWideCard = index % 10 === 0 || index % 10 === 6

              return (
                <PostCard
                  className={isWideCard ? 'lg:col-span-2' : ''}
                  key={index}
                  title={post.title}
                  excerpt={post.excerpt}
                  slug={post.slug}
                  date={new Date(post.date)}
                  coverImage={post.coverImage}
                />
              )
            })}
          </div>
        </Container>
      </main>
    </div>
  )
}

/**
 * Return all the posts.
 *
 * @returns {Promise<{props: {posts: *}}>}
 */
export async function getStaticProps() {
  const posts = await getAllPosts()

  return {
    props: { posts },
  }
}

Index.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      excerpt: PropTypes.string,
      slug: PropTypes.string,
      date: PropTypes.string,
      coverImage: PropTypes.string,
    })
  ),
}
