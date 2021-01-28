import Head from 'next/head'
import PropTypes from 'prop-types'
import GoogleAnalyticsTag from './google-analytics-tag'
import PageHeadModel from '../models/page-head'
import config from '../config'

export default function PageHead({ model }) {
  return (
    <Head>
      {config.isProduction && config.gaTag && (
        <GoogleAnalyticsTag gaTag={config.gaTag} />
      )}

      <title>{model.title}</title>
      <meta name="twitter:title" content={model.title} />
      <meta property="og:title" content={model.title} />

      <meta property="og:image" content={model.imageUrl} />
      <meta name="twitter:image" content={model.imageUrl} />

      <meta property="og:type" content={model.type} />

      <meta name="twitter:description" content={model.description} />
      <meta property="og:description" content={model.description} />
      <meta name="description" content={model.description} />

      <meta name="twitter:site" content={model.twitterHandle} />
      <meta name="twitter:creator" content={model.twitterHandle} />

      <meta property="og:url" content={model.url} />
      <link rel="canonical" href={model.url} />

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

      <meta name="theme-color" content="#ffffff" />

      <link rel="manifest" href="/site.webmanifest" />

      <link
        rel="alternate"
        type="application/rss+xml"
        title="RSS 2.0"
        href="/feed.xml"
      />
      <link
        rel="alternate"
        type="application/atom+xml"
        title="Atom 1.0"
        href="/atom.xml"
      />
      <link
        rel="alternate"
        type="application/json"
        title="JSON Feed"
        href="/feed.json"
      />

      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>
  )
}

PageHead.propTypes = {
  model: PropTypes.instanceOf(PageHeadModel).isRequired,
}
