import './NoImage.scss'
import { ReactComponent as NoImageIcon } from '../../assets/svg/no_image.svg'
import PropTypes from 'prop-types'

/**
 * No Image
 * @description Component to use instead of image that are not founded in Card component
 * @returns {React.JSX.Element}
 */
function NoImage() {
  return (
    <div className='no-image'>
      <NoImageIcon />
    </div>
  )
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
    <div className='no-image' style={{ height: `calc(100% - ${textHeight}px)` }}>
        <NoImageIcon />
    </div>
  )
}
NoImageFixed.propTypes = {
  textHeight: PropTypes.number
}

export default NoImage