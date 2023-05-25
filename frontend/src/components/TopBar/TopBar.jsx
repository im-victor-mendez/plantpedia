import './TopBar.scss'
import back_icon from '../../assets/svg/back.svg'
import PropTypes from 'prop-types'

/**
 * TopBar structure
 * @param {any} children Needs for all of other components
 * @returns {React.JSX.Element}
 */
function TopBar({ children }) {
  return (
    <div className="top-bar">{children}</div>
  )
}
TopBar.propTypes = {
    children: PropTypes.any
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