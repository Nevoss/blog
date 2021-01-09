import { useMemo } from 'react'
import NewsletterForm from './newsletter-form'
import { useRouter } from 'next/router'

export default function Footer() {
  const router = useRouter()

  const isPostPage = useMemo(() => router.asPath.includes('/posts'), [
    router.asPath,
  ])

  return (
    <footer>
      {isPostPage && (
        <div className="text-center mb-10 max-w-2xl mx-auto space-y-6 md:border border-gray-300 md:p-10 rounded-md">
          <p className="text-gray-500 leading-7 max-w-lg mx-auto">
            Do you want to receive occasional mails about what&lsquo;s going on
            on this blog? Feel free to leave behind your email address.
          </p>
          <NewsletterForm />
        </div>
      )}

      <div className="text-center text-xs text-gray-500">
        This site is built with{' '}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noreferrer"
          className="text-red-400 hover:underline hover:text-red-500 transition transition-all"
        >
          Next.js
        </a>{' '}
        and hosted on{' '}
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noreferrer"
          className="text-red-400 hover:underline hover:text-red-500 transition transition-all"
        >
          Vercel
        </a>
        . You can inspect source code on{' '}
        <a
          href="https://github.com/Nevoss/blog"
          target="_blank"
          rel="noreferrer"
          className="text-red-400 hover:underline hover:text-red-500 transition transition-all"
        >
          GitHub
        </a>
        .
      </div>
    </footer>
  )
}
