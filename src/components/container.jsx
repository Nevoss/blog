import React from 'react'
import PropTypes from 'prop-types'

export default function Container({ children, size, className }) {
  return (
    <div
      className={`mx-auto px-4 sm-px:6 ${size === 'md' && 'max-w-6xl'} ${
        size === 'sm' && 'max-w-4xl'
      } ${className}`}
    >
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  size: PropTypes.oneOf(['md', 'sm']),
  className: PropTypes.string,
}

Container.defaultProps = {
  size: 'md',
  className: '',
}
