import { useEffect, useRef, useState } from 'react'
import './Card.scss'

function Card({ type, image, name, path }) {
  function href(path) {
    window.location.href = path
  }

  return (
    <div id={name} className={`${type} card`} onClick={() => href(path)}>
      <img src={image} alt={`${name} image`} />
      <h1>{name}</h1>
    </div>
  )
}

export function CardTextFixed({ type, image, name, path }) {
  const [textHeight, setTextHeight] = useState(0)
  const textRef = useRef(null)

  useEffect(() => {
    const textElementHeight = textRef.current.clientHeight
    const condition = (textElementHeight < 52 && textElementHeight > 23)

    setTextHeight(condition ? 52 + 20 : textElementHeight)
  }, [textHeight])

  function href(path) {
    window.location.href = path
  }

  return (
    <div id={name} className={`${type} card text-fixed`} onClick={() => href(path)}>
      {textHeight && <img
        src={image}
        alt={`${image} image`}
        style={{ height: `calc(100% - ${textHeight}px)` }}
      />}
      <h1 ref={textRef}>{name}</h1>
    </div>
  )
}

export default Card