import fs from 'fs'
import { join } from 'path'
import markdownToHtml from './utils/markdown-to-html'

const postsDirectory = join(process.cwd(), 'content/posts')

/**
 * Get all the posts slugs.
 *
 * @returns {string[]}
 */
export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter((path) => {
    return fs.lstatSync(join(postsDirectory, path)).isDirectory()
  })
}

/**
 * Get post by slug.
 *
 * @param slug
 * @param withContent
 * @returns {Promise<{date: *, coverImage: *, title: *, excerpt: *, slug: *, content: string}>}
 */
export async function getPostBySlug(slug, withContent = false) {
  const {
    default: { title, excerpt, date, coverImage },
  } = await import(`../content/posts/${slug}/index.js`)

  const content = withContent
    ? await markdownToHtml(
        fs.readFileSync(join(postsDirectory, `${slug}/content.mdx`))
      )
    : ''

  return {
    title,
    excerpt,
    date,
    coverImage,
    slug,
    content,
  }
}

/**
 * Get all the posts.
 *
 * @returns {Promise<{date: *, coverImage: *, title: *, excerpt: *, slug: *, content: string}[]>}
 */
export async function getAllPosts() {
  return (
    await Promise.all(getPostSlugs().map((slug) => getPostBySlug(slug)))
  ).sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}
