export default function Footer() {
  return (
    <footer>
      <div className="text-center text-xs text-gray-500">
        This site is built with{' '}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noreferrer"
          className="text-red-500 hover:underline hover:text-red-500 transition transition-all"
        >
          Next.js
        </a>{' '}
        and hosted on{' '}
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noreferrer"
          className="text-red-500 hover:underline hover:text-red-500 transition transition-all"
        >
          Vercel
        </a>
        . You can inspect source code on{' '}
        <a
          href="https://github.com/Nevoss/blog"
          target="_blank"
          rel="noreferrer"
          className="text-red-500 hover:underline hover:text-red-500 transition transition-all"
        >
          GitHub
        </a>
        .
      </div>
    </footer>
  )
}
