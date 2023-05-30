import './NavBar.scss'

import { NavLink } from "react-router-dom"
import PropTypes from 'prop-types'

/**
 * NavBar layout
 * @description Returns NavLink buttons to navigate into path of item
 * @param {any} Destructured_Props
 * @param {Array} links Array of links
 * @returns {React.JSX.Element}
 */
function NavBar({ links }) {
    return (
        <nav className="nav-bar">
            {links.map(item => <NavLink
                key={`nav-bar-${item.name}-key`}
                className={`nav-link`}
                to={item.path}
            >
                {item.display}
            </NavLink>
            )}
        </nav>
    )
}
NavBar.propTypes = {
    links: PropTypes.arrayOf(Object)
}

export default NavBar