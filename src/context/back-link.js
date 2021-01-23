import { createContext, useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'

/**
 * The content itself.
 *
 * @type {React.Context<{isShown: boolean, setIsShown: function}>}
 */
const BackLinkContext = createContext({ isShown: false, setIsShown: () => {} })

/**
 * Use back link context
 *
 * @returns {{isShown: boolean, setIsShown: function}}
 */
export function useBackLinkContext() {
  return useContext(BackLinkContext)
}

/**
 * An hook for showing the back link in specific page.
 */
export function useShownBackLink() {
  const { setIsShown } = useBackLinkContext()

  useEffect(() => {
    setIsShown(true)

    return () => setIsShown(false)
  }, [])
}

/**
 * Context provider.
 *
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export function BackLinkProvider({ children }) {
  const [isShown, setIsShown] = useState(false)

  return (
    <BackLinkContext.Provider value={{ isShown, setIsShown }}>
      {children}
    </BackLinkContext.Provider>
  )
}

BackLinkProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
