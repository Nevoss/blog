import PropTypes from 'prop-types'

export default function GoogleAnalyticsTag({ gaTag }) {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaTag}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaTag}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

GoogleAnalyticsTag.propTypes = {
  gaTag: PropTypes.string.isRequired,
}
