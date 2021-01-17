import { useMemo } from 'react'
import { useRouter } from 'next/router'
import Link from './link'

export default function Header() {
  const router = useRouter()

  const isIndexPage = useMemo(() => router.asPath === '/', [router.asPath])

  return (
    <header className="grid grid-cols-3 items-center py-6 md:py-10 gap-x-0 md:gap-x-4">
      {!isIndexPage ? (
        <Link
          href="/"
          className="text-red-600 font-medium text-sm hover:underline"
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
        Nevo Golan
      </Link>
      <span />
      <nav className="col-span-3 text-center mt-3">
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
              href="https://twitter.com/NevoGolan"
              className="text-gray-500 hover:text-red-600 hover:underline transition transition-all md:text-lg"
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
