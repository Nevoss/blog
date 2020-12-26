import remark from 'remark'
import html from 'remark-html'

/**
 * Convert markdown into html.
 *
 * @param markdown
 * @returns {Promise<string>}
 */
export default async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown)

  return result.toString()
}
