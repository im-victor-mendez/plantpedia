import { CardTextFixed } from "../../components/Card/Card"
import { getRandomDefaultCard } from "../../components/Card/getCard"
import MasonryComponent from "../../components/MasonryComponent/MasonryComponent"

function List({ list, parentPath }) {
  return (
    <section className="list">
      <MasonryComponent>
        {list.map(item => {
          const { id, slug, image_url, common_name } = item
          
          const childPath = `${parentPath}/${id}`
          const type = getRandomDefaultCard()
          
          return <CardTextFixed
          key={slug}
          type={type}
          path={childPath}
          image={image_url}
          name={common_name}
          />
        })}
      </MasonryComponent>
    </section>
  )
}
export default List