import PropTypes from 'prop-types'

export default function BaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      {props.children}
    </svg>
  )
}

BaseIcon.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
}

BaseIcon.defaultProps = {
  className: '',
}
