import Link from '../components/link'
import Container from '../components/container'

export default function FourOhFour() {
  return (
    <>
      <Container className="flex items-center justify-center text-center mt-48">
        <div>
          <h1 className="text-2xl font-medium">404 - Page Not Found</h1>
          <Link
            href="/"
            className="text-red-600 font-medium text-sm hover:underline inline-block mt-3"
          >
            ← Go back
          </Link>
        </div>
      </Container>
    </>
  )
}
