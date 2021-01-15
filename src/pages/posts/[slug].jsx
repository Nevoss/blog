import React, { useMemo } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import format from 'date-fns/format'
import Prism from 'prismjs'
import 'prism-themes/themes/prism-material-oceanic.css'
import Container from '../../components/container'
import { getPostBySlug, getPostSlugs } from '../../api'
import config from '../../config'
import { useRouter } from 'next/router'
import NewsletterForm from '../../components/newsletter-form'
import { imagePropType } from '../../utils/image'

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
  const router = useRouter()

  React.useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <article>
      <Head>
        <title>{post.title} - Nevo Golan</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} – Nevo Golan`} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta
          name="twitter:image"
          content={`${config.siteUrl}${post.coverImage.src}`}
        />
        <meta property="og:url" content={`${config.siteUrl}${router.asPath}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${post.title} – Nevo Golan`} />
        <meta property="og:description" content={post.excerpt} />
        <meta
          property="og:image"
          content={`${config.siteUrl}${post.coverImage.src}`}
        />
        <meta name="description" content={post.excerpt} />
      </Head>
      <Container size="sm">
        <div
          className={`aspect-w-2 aspect-h-1 relative -mx-4 md:rounded-md overflow-hidden opacity-70 hover:opacity-80 shadow bg-cover bg-center transition transition-all mb-6`}
        >
          <img
            src={post.coverImage.src}
            srcSet={post.coverImage.srcset}
            alt={post.title}
            sizes="(min-width: 1024px) 900px, 100vw"
          />
        </div>
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
          className="prose lg:prose-lg prose-red mx-auto"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="text-center mt-24 max-w-3xl mx-auto space-y-6 md:border border-gray-300 md:p-10 rounded-md">
          <p className="text-gray-500 leading-7 max-w-lg mx-auto">
            Do you want to receive occasional mails about what&lsquo;s going on
            on this blog? Feel free to leave behind your email address.
          </p>
          <NewsletterForm />
        </div>
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
    content: PropTypes.string,
    coverImage: imagePropType,
  }),
}
