import React from 'react'
import PropTypes from 'prop-types'

const sizeToClassNameMap = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
}

export default function Container({ children, size, className }) {
  return (
    <div
      className={`mx-auto w-full px-4 sm-px:6 ${sizeToClassNameMap[size]} ${className}`}
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
  size: PropTypes.oneOf(Object.keys(sizeToClassNameMap)),
  className: PropTypes.string,
}

Container.defaultProps = {
  className: '',
}
