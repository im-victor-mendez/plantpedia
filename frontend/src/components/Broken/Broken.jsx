import './Broken.scss'
import { ReactComponent as BrokenIcon } from '../../assets/svg/broken.svg'
import PropTypes from 'prop-types'

/**
 * Broken component
 * @description Used when an error was ocurred
 * @param {any} Destructured_Props
 * @param {string} width Width of icon with unit (px)
 * @param {string} height Height of icon with unit (px)
 * @param {string} message Message to display bellow icon describing the error
 * @example <Broken width='50px' height='50px' message={`You don't have internet :(`} />
 * @returns {React.JSX.Element}
 */
function Broken({ width = '53px', height = '53px', message = 'Data not founded :('}) {
  return (
    <article className='broken'>
        <BrokenIcon width={width} height={height} className='icon' />
        <h1 className='message'>{message}</h1>
    </article>
  )
}
Broken.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  message: PropTypes.string
}

export default Broken