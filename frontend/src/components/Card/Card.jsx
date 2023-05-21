import './Card.scss'

function Card({ type, image, name, path }) {
  function href(path) {
    window.location.href = path
  }

  return (
    <div id={name} className={`${type} card`} onClick={() => href(path)}>
      <img src={image} alt={`${image} image`} />
      <h1>{name}</h1>
    </div>
  )
}
export default Card