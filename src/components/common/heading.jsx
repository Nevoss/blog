import PropTypes from 'prop-types'

export default function Heading({ text, subText }) {
  return (
    <div className="space-y-2 md:space-y-5 mb-8">
      <h1 className="text-3xl md:text-6xl sm:text-4xl leading-9 sm:leading-10 md:leading-14 font-extrabold tracking-tight">
        {text()}
      </h1>
      {subText && (
        <p className="text-md md:text-lg leading-7 text-gray-500 max-w-2xl">
          {subText()}
        </p>
      )}
    </div>
  )
}

Heading.propTypes = {
  text: PropTypes.func.isRequired,
  subText: PropTypes.func,
}
