import './MasonryComponent.scss'
import Masonry from 'react-masonry-css'
import breakpointColumns from './responsiveBreakColumns'
import PropTypes from 'prop-types'

/**
 * @description Component that converts lists into masonry lists
 * @param {any} Destructured_Props
 * @param {React.JSX.Element} children All elements mapped
 * @returns {React.JSX.Element}
 */
function MasonryComponent({ children }) {
  return (
    <Masonry
        breakpointCols={breakpointColumns}
        className='masonry-grid'
        columnClassName='masonry-grid_column'
    >{children}</Masonry>
  )
}
MasonryComponent.propTypes = {
  children: PropTypes.any
}

export default MasonryComponent