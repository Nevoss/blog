import Link from '../components/common/link'
import Container from '../components/common/container'
import PageHeadModel from '../models/page-head'
import PageHead from '../components/page-head'

const pageHeadModel = new PageHeadModel({ title: '404 - Page not found' })

export default function FourOhFour() {
  return (
    <>
      <PageHead model={pageHeadModel} />
      <Container size="md" className="flex items-center justify-center">
        <div className="text-center my-40">
          <h1 className="text-2xl font-medium">404 - Page Not Found</h1>
          <Link
            href="/"
            className="text-red-600 font-medium text-sm hover:underline inline-block mt-5"
          >
            ← Back to blog
          </Link>
        </div>
      </Container>
    </>
  )
}
