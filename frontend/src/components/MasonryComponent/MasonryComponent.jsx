import './MasonryComponent.scss'
import Masonry from 'react-masonry-css'
import breakpointColumns from './responsiveBreakColumns'

function MasonryComponent({ children }) {
  return (
    <Masonry
        breakpointCols={breakpointColumns}
        className='masonry-grid'
        columnClassName='masonry-grid_column'
    >{children}</Masonry>
  )
}
export default MasonryComponent