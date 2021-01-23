import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BackLinkProvider } from '../context/back-link'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import Container from '../components/common/container'

// Load all the css.
import 'tailwindcss/tailwind.css'

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
})

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <BackLinkProvider>
        <div className="antialiased text-gray-900 flex flex-col min-h-screen">
          <Container size="lg" className="py-6 md:py-10">
            <Header />
          </Container>
          <div className="flex-1">
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
          </div>
          <Container size="lg" className="py-4 border-t md:border-0">
            <Footer />
          </Container>
        </div>
      </BackLinkProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
