import React, { useMemo } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Container from '../components/container'
import Link from '../components/link'

import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  const isIndexPage = useMemo(() => router.asPath === '/', [router.asPath])

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <header className="grid grid-cols-3 items-center py-6 md:py-10 gap-2 md:gap-4">
          {!isIndexPage ? (
            <Link
              href="/"
              className="text-red-600 font-medium text-sm hover:underline"
            >
              ← <span className="hidden md:inline">Back to blog</span>
            </Link>
          ) : (
            <div />
          )}
          <Link
            href="/"
            className="text-lg md:text-2xl font-bold text-gray-900 tracking-tight text-center"
          >
            Nevo Golan
          </Link>
          <span />
        </header>
      </Container>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  )
}
