import { useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'
import Prism from 'prismjs'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import PageHeadModel from '../../models/page-head'
import PostModel from '../../models/post'
import { getAllPosts, getPostBySlug } from '../../data/posts'
import { useShownBackLink } from '../../context/back-link'
import Container from '../../components/common/container'
import NewsletterForm from '../../components/newsletter-form'
import PageHead from '../../components/page-head'
import PostCoverImage from '../../components/posts/post-cover-image'
import PostComments from '../../components/posts/post-comments'

import 'prism-themes/themes/prism-material-oceanic.css'

/**
 * Get the post data.
 *
 * @param slug
 * @returns {any}
 */
export async function getStaticProps({ params: { slug } }) {
  const rawPost = getPostBySlug(slug, true)

  return {
    props: {
      rawPost: {
        ...rawPost,
        content: await renderToString(rawPost.content),
      },
    },
  }
}

/**
 * Available posts that can exists.
 *
 * @returns {{paths: {params: {slug: *}}[], fallback: boolean}}
 */
export function getStaticPaths() {
  return {
    paths: getAllPosts(false).map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  }
}

/**
 * Single post view.
 *
 * @param post
 * @returns {JSX.Element}
 * @constructor
 */
export default function Post({ rawPost }) {
  const post = useMemo(() => new PostModel(rawPost), [rawPost])

  const pageHeadModel = useMemo(
    () =>
      new PageHeadModel({
        title: post.title,
        description: post.excerpt,
        imageUrl: post.coverImage.images.find(
          ({ width }) => width > 500 && width < 700
        ).path,
        url: `/posts/${post.slug}`,
        type: 'article',
      }),
    [post]
  )

  const content = hydrate(post.content)

  useEffect(() => Prism.highlightAll(), [content])
  useShownBackLink()

  return (
    <>
      <PageHead model={pageHeadModel} />
      <article>
        <Container size="md">
          <PostCoverImage
            image={post.coverImage}
            alt={post.title}
            sizes="(min-width: 1024px) 900px, 100vw"
            className="mb-6 md:mb-10"
          />
          <header className="xl:mb-14">
            <div className="space-y-1 text-center">
              <dl className="mb-3">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-sm md:text-base leading-6 font-medium text-gray-500">
                    <time dateTime={post.date.toString()}>
                      {format(post.date, 'EEEE, MMMM dd, yyyy')}
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
          <hr className="border-gray-200 my-4 md:my-8 -mx-4 md:mx-0" />
          <main className="prose lg:prose-lg prose-red mx-auto">{content}</main>
          <div className="text-center md:mt-36 md:mb-48 mt-16 mb-20 max-w-3xl mx-auto space-y-6 md:border border-gray-300 md:p-10 rounded-md">
            <p className="text-gray-500 leading-7 max-w-lg mx-auto">
              Do you want to receive occasional mails about what&lsquo;s going
              on on this blog? Feel free to leave behind your email address.
            </p>
            <NewsletterForm />
          </div>
          <div className="lg:max-w-3xl max-w-2xl sm:px-4 mx-auto pb-8">
            <PostComments issueId={post.githubIssueId} />
          </div>
        </Container>
      </article>
    </>
  )
}

Post.propTypes = {
  rawPost: PropTypes.object.isRequired,
}
