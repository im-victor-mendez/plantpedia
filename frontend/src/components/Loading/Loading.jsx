import { useEffect, useState } from 'react'
import '../../animations/leaf.scss'
import {ReactComponent as Leaf} from '../../assets/svg/leaf.svg'

/**
 * Loading infinite animation
 * @description Infinite loop animation of black leaf icon
 * @returns {React.JSX.Element}
 */
function Loading() {
  const [active, setActive] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(!active)
    }, 1000);
  
    return () => clearInterval(interval)
  })
  
  return (
    <div className='loading'>
      <Leaf
        className={active ? 'active' : ''}
        width='42.14'
        height='44'
      />
    </div>
  )
}

export default Loading