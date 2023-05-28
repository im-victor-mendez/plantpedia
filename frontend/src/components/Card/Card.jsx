import { useEffect, useRef, useState } from 'react'
import './Card.scss'
import PropTypes from 'prop-types'
import { NoImageFixed } from '../NoImage/NoImage'

/**
 * Card Component
 * @description Default Card component
 * @param {any} Destructured_Props
 * @param {string} type Type of Card to get style
 * @param {string} image Link of image
 * @param {string} name Name of Card
 * @param {string} path Path to navigate to when card is clicked
 * @returns {React.JSX.Element}
 */
function Card({ type, image, name, path }) {
  return (
    <div id={name} className={`${type} card`} onClick={() => navigateTo(path)}>
      <img src={image} alt={`${name} image`} />
      <h1>{name}</h1>
    </div>
  )
}
Card.propTypes = {
  type: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  path: PropTypes.string
}

/**
 * Card Text Fixed Component
 * @description Card that fixes size to text content
 * @param {any} Destructured_Props
 * @param {string} type Type of Card to get style
 * @param {string} image Link of image
 * @param {string} name Name of Card
 * @param {string} path Path to navigate to when card is clicked
 * @returns {React.JSX.Element}
 */
export function CardTextFixed({ type, image, name, path }) {
  const [textHeight, setTextHeight] = useState(0)
  const textRef = useRef(null)

  useEffect(() => {
    const textElementHeight = textRef.current.clientHeight
    const condition = (textElementHeight > 23)

    setTextHeight(!condition ? 0 : textElementHeight + 10)
  }, [textHeight])

  return (
    <div id={name} className={`${type} card text-fixed`} onClick={() => navigateTo(path)}>
      {(textHeight >= 0 && image != null) ? <img
        src={image}
        alt={`${image} image`}
        style={{ height: `calc(100% - ${textHeight}px)` }}
      /> : <NoImageFixed textHeight={textHeight} />
      }
      <h1 ref={textRef}>{name}</h1>
    </div>
  )
}
CardTextFixed.propTypes = {
  type: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  path: PropTypes.string
}

function navigateTo(path) {
  window.location.href = path
}

export default Card