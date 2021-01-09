export default function NewsletterForm() {
  return (
    <div id="mc_embed_signup">
      <form
        action="https://gmail.us7.list-manage.com/subscribe/post?u=ad805327e3b7495fd0b5d7cfb&amp;id=ac6e301936"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
        noValidate
      >
        <div
          id="mc_embed_signup_scroll"
          className="inline-flex rounded-md overflow-hidden border-2 border-gray-500"
        >
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL" className="hidden">
              Email Address
            </label>
            <input
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              className="px-4 py-2 text-gray-800 focus:outline-none focus:bg-gray-50 transition w-full"
              placeholder="Email Address"
            />
          </div>
          <div
            style={{ position: 'absolute', left: '-5000px' }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_ad805327e3b7495fd0b5d7cfb_ac6e301936"
              tabIndex="-1"
            />
          </div>
          <div className="clear">
            <button
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="h-full bg-red-200 text-red-900 md:px-8 px-4 font-medium hover:bg-red-100 focus:bg-red-50 active:bg-red-50 transition focus:outline-none"
            >
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
