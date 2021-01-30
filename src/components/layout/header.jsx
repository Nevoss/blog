import config from '../../config'
import Link from '../common/link'
import { useBackLinkContext } from '../../context/back-link'

const twitterUserName = config.twitterHandle.replace('@', '')

export default function Header() {
  const { isShown } = useBackLinkContext()

  return (
    <header className="grid grid-cols-3 items-center gap-x-0 md:gap-x-4">
      {isShown ? (
        <Link
          href="/"
          className="text-red-600 font-semibold text-sm hover:underline"
        >
          ← <span className="hidden md:inline">Back to blog</span>
        </Link>
      ) : (
        <span />
      )}
      <Link
        href="/"
        className="text-lg md:text-2xl font-bold text-gray-900 tracking-tight text-center"
      >
        {config.siteName}
      </Link>
      <span />
      <nav className="col-span-3 text-center md:mt-3 mt-1">
        <ul className="flex items-center justify-center">
          <li className="px-5">
            <Link
              href="/"
              className="text-gray-500 hover:text-red-600 hover:underline transition transition-all md:text-lg"
            >
              Blog
            </Link>
          </li>
          <li className="px-5">
            <Link
              href="/newsletter"
              className="text-gray-500 hover:text-red-600 hover:underline transition transition-all md:text-lg"
            >
              Newsletter
            </Link>
          </li>
          <li className="px-5">
            <a
              href={`https://twitter.com/${twitterUserName}`}
              className="text-gray-500 hover:text-red-600 hover:underline transition transition-all md:text-lg"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
      </nav>
      <span />
    </header>
  )
}
