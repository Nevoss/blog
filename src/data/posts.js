import fs from 'fs'
import { join } from 'path'
import Post from '../models/post'

const postsDirAbsolute = join(process.cwd(), 'content/posts')

/**
 * Return all the posts.
 *
 * @param withContent
 * @returns {*}
 */
export function getAllPosts(withContent = false) {
  return fs
    .readdirSync(postsDirAbsolute)
    .filter((path) => fs.lstatSync(join(postsDirAbsolute, path)).isDirectory())
    .map((slug) => getPostBySlug(slug, withContent))
}

/**
 * Find a single post by slug
 *
 * @param slug
 * @param withContent
 * @returns {any}
 */
export function getPostBySlug(slug, withContent = false) {
  const rawPost = require(`../../content/posts/${slug}/index.js`).default

  const post = new Post({
    ...rawPost,
    slug,
    content: withContent
      ? fs
          .readFileSync(join(postsDirAbsolute, `${slug}/content.mdx`))
          .toString()
      : '',
  })

  return post.toPlainObject()
}
