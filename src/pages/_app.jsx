import React from 'react'
import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'
import Footer from '../components/footer'

import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Header />
      </Container>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
      <Container className="md:mt-16 mt-10 py-4 border-t md:border-0">
        <Footer />
      </Container>
    </>
  )
}
