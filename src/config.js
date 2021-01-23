export default {
  siteName: 'Nevo Golan',
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
  twitterHandle: '@NevoGolan',
  githubRepo: 'nevoss/blog',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  gaTag: process.env.NEXT_PUBLIC_GA_TAG,
}
