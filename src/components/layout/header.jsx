import config from '../../config'
import Link from '../common/link'

const twitterUserName = config.twitterHandle.replace('@', '')

export default function Header() {
  return (
    <header className="flex md:flex-row flex-col flex-wrap justify-between items-center gap-y-4">
      <Link
        href="/"
        className="flex items-center text-lg md:text-2xl font-bold text-gray-900 tracking-tight flex-shrink-0"
      >
        <img
          src="/favicon-32x32.png"
          className="w-6 h-6 md:h-8 md:w-8 mr-4"
          alt="Nevo Golan - Blog"
        />
        {config.siteName}
      </Link>
      <nav className="text-right">
        <ul className="flex">
          <li className="px-3 md:px-5">
            <Link
              href="/"
              className="text-gray-700 hover:text-red-600 transition transition-all md:text-lg"
            >
              Blog
            </Link>
          </li>
          <li className="px-3 md:px-5">
            <Link
              href="/newsletter"
              className="text-gray-700 hover:text-red-600 transition transition-all md:text-lg"
            >
              Newsletter
            </Link>
          </li>
          <li className="px-3 md:px-5">
            <a
              href={`https://twitter.com/${twitterUserName}`}
              className="text-gray-700 hover:text-red-600 transition transition-all md:text-lg"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
