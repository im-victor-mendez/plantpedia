import './NoImage.scss'
import { ReactComponent as NoImageIcon } from '../../assets/svg/no_image.svg'
import PropTypes from 'prop-types'

/**
 * No Image
 * @description Component to use instead of image that are not founded in Card component.
 * To use to create No Image variations.
 * @param {any} Destructured_Props
 * @param {string} className Class name to identify variation
 * @param {object} style Optional style
 * @returns {React.JSX.Element}
 */
function NoImage({ className = '', style = {} }) {
  return (
    <div className={`no-image ${className}`} style={style}>
      <NoImageIcon />
    </div>
  )
}
NoImage.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}

/**
 * No Image Fixed
 * @description Component to use in Card Text Fixed components
 * @param {any} Destructured_Props
 * @param {number} textHeight Height of text in card
 * @returns {React.JSX.Element}
 */
export function NoImageFixed({ textHeight }) {
  return (
    <NoImage style={{ height: `calc(100% - ${textHeight}px)` }} />
  )
}
NoImageFixed.propTypes = {
  textHeight: PropTypes.number
}

/**
 * No Image Content
 * @description Component to use in Card Content page
 * @returns {React.JSX.Element}
 */
export function NoImageContent() {
  return (
    <NoImage className='card-content' />
  )
}

export default NoImage