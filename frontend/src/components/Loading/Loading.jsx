import './Loading.scss'
import { useEffect, useState } from 'react'
import '../../animations/leaf.scss'
import {ReactComponent as Leaf} from '../../assets/svg/leaf.svg'
import PropTypes from 'prop-types'

/**
 * Loading infinite animation
 * @description Infinite loop animation of black leaf icon
 * @param {string} className Class name to set style from _icons style file
 * @returns {React.JSX.Element}
 */
function Loading({ className = '' }) {
  const [active, setActive] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(!active)
    }, 1000);
  
    return () => clearInterval(interval)
  })
  
  return (
    <div className={`loading`}>
      <Leaf
        className={active ? `icon ${className} active` : `icon ${className}`}
        width='42.14'
        height='44'
      />
    </div>
  )
}
Loading.propTypes = {
  className: PropTypes.string
}

export default Loading