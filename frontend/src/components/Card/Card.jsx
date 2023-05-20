function Card({ type, image, name, path }) {
  return (
    <a id={name} className={`${type} card`} href={path}>
        <img src={image} alt={`${image} image`} />
        <h1>{name}</h1>
    </a>
  )
}
export default Card