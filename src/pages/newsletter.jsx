import Container from '../components/container'
import Head from 'next/head'
import NewsletterForm from '../components/newsletter-form'
import config from '../config'

export default function Newsletter() {
  return (
    <main>
      <Head>
        <title>Newsletter - Nevo Golan</title>
        <meta name="twitter:title" content="Blog – Nevo Golan" />
        <meta
          name="twitter:description"
          content="Subscribe to Nevo Golan blog newsletter."
        />
        <meta name="twitter:image" content={`${config.siteUrl}/logo.png`} />
        <meta property="og:url" content={`${config.siteUrl}/newsletter`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Newsletter – Nevo Golan" />
        <meta property="og:image" content={`${config.siteUrl}/logo.png`} />
        <meta
          property="og:description"
          content="Subscribe to Nevo Golan blog newsletter."
        />
        <meta property="og:image" content={`${config.siteUrl}/logo.png`} />
        <meta
          name="description"
          content="Subscribe to Nevo Golan blog newsletter."
        />
      </Head>
      <Container className="py-4 md:py-6">
        <div className="space-y-4 md:space-y-5 mb-8">
          <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Newsletter
          </h1>
          <p className="text-lg leading-7 text-gray-500 max-w-2xl">
            Do you want to receive occasional mails about what&lsquo;s going on
            on this blog? Feel free to leave behind your email address.
          </p>
        </div>
        <div className="md:mt-14 mt-8">
          <NewsletterForm />
        </div>
      </Container>
    </main>
  )
}
