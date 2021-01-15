import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Container from '../components/container'
import PostCard from '../components/post-card'
import { getAllPosts } from '../api'
import config from '../config'
import { imagePropType } from '../utils/image'

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
        <meta name="twitter:title" content="Blog – Nevo Golan" />
        <meta
          name="twitter:description"
          content="All the latest blog post written by Nevo Golan."
        />
        <meta name="twitter:image" content={`${config.siteUrl}/logo.png`} />
        <meta property="og:url" content={config.siteUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Blog – Nevo Golan" />
        <meta property="og:image" content={`${config.siteUrl}/logo.png`} />
        <meta
          property="og:description"
          content="All the latest blog post written by Nevo Golan."
        />
        <meta property="og:image" content={`${config.siteUrl}/logo.png`} />
        <meta
          name="description"
          content="All the latest blog post written by Nevo Golan."
        />
      </Head>
      <main>
        <Container className="pb-4 md:pb-6">
          <div className="space-y-4 md:space-y-5 mb-8">
            <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Blog
            </h1>
            <p className="text-lg leading-7 text-gray-500">
              All the latest blog post written by me.
            </p>
          </div>
          <hr className="hidden md:block border-gray-200" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 mt-8">
            {posts.map(({ title, excerpt, slug, date, coverImage }, index) => {
              return (
                <PostCard
                  key={index}
                  title={title}
                  excerpt={excerpt}
                  slug={slug}
                  coverImage={coverImage}
                  date={new Date(date)}
                  layout={index === 0 ? 'main' : 'default'}
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
      coverImage: imagePropType,
    })
  ),
}
