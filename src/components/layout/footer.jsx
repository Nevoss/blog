import RssIcon from '../icons/rss-icon'
import GithubIcon from '../icons/github-icon'
import TwitterIcon from '../icons/twitter-icon'
import LinkedinIcon from '../icons/linkedin-icon'

export default function Footer() {
  return (
    <footer>
      <div className="flex items-center justify-center gap-x-3 my-3">
        <a
          href="https://github.com/Nevoss"
          target="_blank"
          rel="noreferrer"
          className="text-gray-300 hover:text-gray-400 transition"
        >
          <GithubIcon className="w-5.5" />
        </a>
        <a
          href="https://twitter.com/NevoGolan"
          target="_blank"
          rel="noreferrer"
          className="text-gray-300 hover:text-gray-400 transition"
        >
          <TwitterIcon className="w-5.5" />
        </a>
        <a
          href="https://www.linkedin.com/in/nevo-golan-940b19125/"
          target="_blank"
          rel="noreferrer"
          className="text-gray-300 hover:text-gray-400 transition"
        >
          <LinkedinIcon className="w-5" />
        </a>
        <a
          href="/feed.xml"
          target="_blank"
          rel="noreferrer"
          className="text-gray-300 hover:text-gray-400 transition"
        >
          <RssIcon className="w-4.5" />
        </a>
      </div>
      <div className="text-center text-xs text-gray-500">
        This site is built with{' '}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noreferrer"
          className="text-red-500 hover:underline hover:text-red-600 transition transition-all"
        >
          Next.js
        </a>{' '}
        and hosted on{' '}
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noreferrer"
          className="text-red-500 hover:underline hover:text-red-600 transition transition-all"
        >
          Vercel
        </a>
        . You can inspect source code on{' '}
        <a
          href="https://github.com/Nevoss/blog"
          target="_blank"
          rel="noreferrer"
          className="text-red-500 hover:underline hover:text-red-600 transition transition-all"
        >
          GitHub
        </a>
        .
      </div>
    </footer>
  )
}
