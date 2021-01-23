import PropTypes from 'prop-types'
import NextLink from 'next/link'

export default function Link({ children, href, className }) {
  return (
    <NextLink href={href} passHref>
      <a className={className}> {children} </a>
    </NextLink>
  )
}

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Link.defaultProps = {
  className: '',
}
