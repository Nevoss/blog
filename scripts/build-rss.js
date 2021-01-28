// This scripts is running only after complied with webpack in the server
// you should run the './bin/build-rss.sh'

import { Feed } from 'feed'
import path from 'path'
import fs from 'fs'
import dotenv from 'dotenv'
import { getAllPosts } from '../src/data/posts'

dotenv.config({
  path: path.resolve(process.cwd(), '.env.production'),
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

const feed = new Feed({
  title: 'Nevo Golan Blog',
  description: 'A blog about web development and more.',
  id: siteUrl,
  link: siteUrl,
  language: 'en',
  image: `${siteUrl}/favicon-32x32.png`,
  favicon: `${siteUrl}/favicon.ico`,
  copyright: `All rights reserved ${new Date().getFullYear()}, Nevo Golan`,
  feedLinks: {
    rss: `${siteUrl}/feed.xml`,
    json: `${siteUrl}/feed.json`,
    atom: `${siteUrl}/atom.xml`,
  },
  author: {
    name: 'Nevo Golan',
    link: 'https://twitter.com/NevoGolan',
  },
})

getAllPosts().forEach((post) => {
  feed.addItem({
    title: post.title,
    id: post.slug,
    link: `${siteUrl}/posts/${post.slug}`,
    description: post.excerpt,
    author: {
      name: 'Nevo Golan',
      link: 'https://twitter.com/NevoGolan',
    },
    date: new Date(post.date),
    image: `${siteUrl}${post.coverImage.src}`,
  })
})

fs.writeFileSync('./public/feed.xml', feed.rss2())
fs.writeFileSync('./public/atom.xml', feed.atom1())
fs.writeFileSync('./public/feed.json', feed.json1())
