import './Menu.scss'

import PropTypes from 'prop-types'

import { Opened as OpenedTopBar } from "../../components/TopBar/TopBar"

/**
 * Menu Layout
 * @description Menu nav layout
 * @param {any} Destructured_Props
 * @param {Function} closeMenu Function to set state that manage
 * menu display false to close menu
 * @returns {React.JSX.Element}
 */
function Menu({ closeMenu }) {
    return (
      <section id='menu'>
        <nav id='menu-list'>
            <OpenedTopBar closeMenu={closeMenu}/>
        </nav>
      </section>
  )
}
Menu.propTypes = {
  closeMenu: PropTypes.func
}

export default Menu