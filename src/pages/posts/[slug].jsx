import React, { useMemo } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import format from 'date-fns/format'
import Prism from 'prismjs'
import 'prism-themes/themes/prism-material-oceanic.css'
import Container from '../../components/container'
import { getPostBySlug, getPostSlugs } from '../../api'

// loadLanguages(['php'])

/**
 * Single post view.
 *
 * @param post
 * @returns {JSX.Element}
 * @constructor
 */
export default function Post({ post }) {
  const date = useMemo(() => new Date(post.date), [post.date])

  React.useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <article>
      <Head>
        <title>{post.title} - Nevo Golan</title>
      </Head>
      <Container>
        <div
          className="h-60 md:h-96 relative -mx-4 lg:mx-0 lg:rounded-lg overflow-hidden mb-6 opacity-60 shadow bg-cover bg-center hover:opacity-80 transition transition-all"
          style={{ backgroundImage: `url(${post.coverImage})` }}
        />
      </Container>
      <Container size="sm">
        <header className="pt-6 xl:pb-10">
          <div className="space-y-1 text-center">
            <dl className="space-y-10 mb-3">
              <div>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base leading-6 font-medium text-gray-500">
                  <time dateTime={date.toString()}>
                    {format(date, 'EEEE, MMMM dd, yyyy')}
                  </time>
                </dd>
              </div>
            </dl>
            <div>
              <h1 className="font-extrabold text-gray-900 tracking-tight text-3xl md:text-4xl lg:text-5xl leading-14">
                {post.title}
              </h1>
            </div>
          </div>
        </header>
        <hr className="border-gray-200 my-8 -mx-4 md:mx-0" />
        <main
          className="prose lg:prose-lg prose-red max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </Container>
    </article>
  )
}

/**
 * Get the post data.
 *
 * @param slug
 * @returns {Promise<{props: {post: {date: *, coverImage: *, title: *, excerpt: *, slug: *, content: string}}}>}
 */
export async function getStaticProps({ params: { slug } }) {
  const post = await getPostBySlug(slug, true)

  return {
    props: {
      post,
    },
  }
}

/**
 * Available posts that can exists.
 *
 * @returns {{paths: {params: {slug: *}}[], fallback: boolean}}
 */
export function getStaticPaths() {
  const paths = getPostSlugs().map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    excerpt: PropTypes.string,
    slug: PropTypes.string,
    date: PropTypes.string,
    coverImage: PropTypes.string,
    content: PropTypes.string,
  }),
}
