import './TopBar.scss'

import PropTypes from 'prop-types'

import back_icon from '../../assets/svg/back.svg'
import { ReactComponent as MenuIcon } from '../../assets/svg/menu.svg'
import { ReactComponent as LeafIcon } from '../../assets/svg/leaf.svg'
import { ReactComponent as CloseIcon } from '../../assets/svg/close.svg'
import { ReactComponent as AccountIcon } from '../../assets/svg/account.svg'

/**
 * TopBar structure
 * @description To use to create all TopBar variations
 * @param {any} Destructured_Props
 * @param {string} type Type of TopBar component to use styles
 * @param {any} children Needs for all of other components
 * @returns {React.JSX.Element}
 */
function TopBar({ type, children }) {
  return (
    <div className={`top-bar ${type ? type : ''}`}>
        {children}
    </div>
  )
}
TopBar.propTypes = {
    type: PropTypes.string,
    children: PropTypes.any
}

/**
 * Default TopBar
 * @description To use in Home page
 * @param {any} Destructured_Props
 * @param {Function} openMenu Function to set state that manage display of menu true
 * @returns {React.JSX.Element}
 */
export function Default({ openMenu }) {
    return (
        <TopBar type='default'>
            <MenuIcon onClick={openMenu}/>
            <LeafIcon/>
        </TopBar>
    )
}
Default.propTypes = {
    openMenu: PropTypes.func
}

/**
 * Opened TopBar
 * @description To use when Default TopBar was activated
 * @param {any} Destructured_Props
 * @param {Function} closeMenu Function to set state that manage display of menu false
 * @returns {React.JSX.Element}
 */
export function Opened({ closeMenu }) {
    return (
        <TopBar type='opened'>
            <CloseIcon onClick={closeMenu}/>
            <AccountIcon/>
        </TopBar>
    )
}
Opened.propTypes = {
    closeMenu: PropTypes.func
}

/**
 * Back structure
 * @param {any} children Needs for other Back components
 * @returns {React.JSX.Element}
 */
export function Back({ children }) {
    /**
     * Back button functionality
     * @description Gives to back icon functionality
     * like back button from browser
     */
    function onClick() {
        window.history.back();
    }

    return <TopBar>
        <img
            className='back'
            onClick={onClick}
            src={back_icon}
            alt="Back icon"
        />
        {children}
    </TopBar>
}
Back.propTypes = {
    children: PropTypes.any
}

/**
 * Back with Name
 * @param {string} name Name of the page
 * @returns {React.JSX.Element}
 */
export function BackWithName({ name }) {
    return <Back>
        <h1 className='top-bar-name'>{name}</h1>
    </Back>
}
BackWithName.propTypes = {
    name: PropTypes.string
}