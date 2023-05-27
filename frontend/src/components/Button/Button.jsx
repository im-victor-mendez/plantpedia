import './Button.scss'
import PropTypes from 'prop-types'

/**
 * Default Button
 * @description Default button component used to create it variations
 * @param {any} Destructured_Props
 * @param {string} className Class name to add in it variations
 * @param {Function} onClick Button action
 * @param {any} children Custom content
 * @returns {React.JSX.Element}
 */
function Button({ className = '', onClick, children }) {
    return <button className={`button ${className}`} onClick={onClick}>{children}</button>
}
Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.any
}

/**
 * Short Button
 * @description Short button component
 * @param {any} Destructured_Props
 * @param {Function} onClick Button action
 * @param {any} children Image or SVG elements
 * @returns {React.JSX.Element}
 */
export function ShortButton({ onClick, children }) {
    return <Button className={`button-short`} onClick={onClick}>{children}</Button>
}
ShortButton.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.any
}

/**
 * Large Button
 * @description Large button component
 * @param {any} Destructured_Props
 * @param {Function} onClick Button action
 * @param {any} children Custom content
 * @returns {React.JSX.Element}
 */
export function LargeButton({ onClick, children}) {
    return <Button className={`button-large`} onClick={onClick}>{children}</Button>
}
LargeButton.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.any
}

/**
 * Fixed Button
 * @description Fixed sizes button component to use when content doesn't fit to sizes
 * @param {any} Destructured_Props
 * @param {string} className Class name to define type of button
 * @param {Function} onClick Button action
 * @param {any} children Image or SVG elements
 * @returns {React.JSX.Element}
 */
export function FixedButton({ className = '', onClick, children }) {
    return <Button className={`button-fixed ${className}`} onClick={onClick}>{children}</Button>
}
FixedButton.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.any
}

export default Button