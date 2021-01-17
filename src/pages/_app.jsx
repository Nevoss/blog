import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'
import Footer from '../components/footer'

import 'tailwindcss/tailwind.css'

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
})

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <div className="antialiased flex flex-col min-h-screen">
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="twitter:site" content="@NevoGolan" />
        <meta name="twitter:creator" content="@NevoGolan" />
      </Head>
      <Container className="w-full">
        <Header />
      </Container>
      <div className="flex-1">
        <QueryClientProvider client={queryClient}>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </div>
      <Container className="md:mt-16 mt-10 py-4 border-t md:border-0 w-full">
        <Footer />
      </Container>
    </div>
  )
}
