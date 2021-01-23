import { useShownBackLink } from '../context/back-link'
import Container from '../components/common/container'
import NewsletterForm from '../components/newsletter-form'
import PageHeadModel from '../models/page-head'
import PageHead from '../components/page-head'
import Heading from '../components/common/heading'

const pageHeadModel = new PageHeadModel({
  title: 'Newsletter',
  description: 'Subscribe to Nevo Golan blog newsletter.',
  url: '/newsletter',
})

export default function Newsletter() {
  useShownBackLink()

  return (
    <>
      <PageHead model={pageHeadModel} />
      <main>
        <Container size="lg">
          <Heading
            text={() => 'Newsletter'}
            subText={() =>
              "Do you want to receive occasional mails about what's going on on this blog? Feel free to leave behind your email address."
            }
          />
          <div className="md:my-14 my-8">
            <NewsletterForm />
          </div>
        </Container>
      </main>
    </>
  )
}
