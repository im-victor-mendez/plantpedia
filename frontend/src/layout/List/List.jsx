import './List.scss'
import { CardTextFixed } from "../../components/Card/Card"
import { getRandomDefaultCard } from "../../components/Card/getCard"
import MasonryComponent from "../../components/MasonryComponent/MasonryComponent"
import dictionary from '../../constants/dictionary'
import { LargeCategory, ToggleCategory } from '../../components/Category/Category'
import PropTypes from 'prop-types'
import Broken from '../../components/Broken/Broken'

/**
 * List layout
 * @description To display topic content within topic class element
 * @param {any} Destructured_Props
 * @param {Array} list List as Array of cards
 * @param {string} parentPath Path of topic
 * @returns {React.JSX.Element}
 */
function List({ list, parentPath }) {
  return (
    <section className="list">
      {!list || list.length == 0 ? <Broken/> :
        <MasonryComponent>
          {list.map(item => {
            const { id, slug, image_url, common_name, scientific_name } = item

            const childPath = `${parentPath}/${id}`
            const type = getRandomDefaultCard()
            
            return <CardTextFixed
              key={slug}
              type={type}
              path={childPath}
              image={image_url}
              name={common_name || scientific_name}
            />
          })}
        </MasonryComponent>
      }
    </section>
  )
}
List.propTypes = {
  list: PropTypes.array,
  parentPath: PropTypes.string
}

/**
 * List Categories layout
 * @description To display categories of card content within Card Content element
 * @param {any} Destructured_Props
 * @param {object} categories List as Object of categories
 * @param {boolean} hideNull Boolean value to hide null category values 
 * @returns {React.JSX.Element}
 */
export function ListCategories({ categories, hideNull = true }) {
  if (categories) return (
    <section className="list-categories">
      {Object.keys(categories).map(category => {
        const data = categories[category]
        const key = `${category}-key`

        const conditions = {
          'text': typeof data == "string" || typeof data == "number",
          'boolean': typeof data == "boolean",
          'null': data == null,
          'empty_object': data != null && Object.keys(data).length == 0,
          'id': category == 'id',
          'name': category == 'common_name',
          'slug': category == 'slug',
          'id_main_species': category == 'main_species_id',
          'image': category == 'image_url',
          'id_genus': category == 'genus_id',
        }

        if (hideNull && (conditions.null || conditions.empty_object)) return null

        if (conditions.id || conditions.name ||
          conditions.slug || conditions.id_main_species ||
          conditions.image || conditions.id_genus) return null

        if (conditions.text) return <LargeCategory
          key={key}
          title={category}
          value={data}
        />

        if (conditions.boolean || conditions.null) return <LargeCategory
          key={key}
          title={category}
          value={dictionary[data]}
          negativeValue={true}
        />
        
        return <ToggleCategory
          key={key}
          title={category}
          data={data}
        />
      })}
    </section>
  )
}
ListCategories.propTypes = {
  categories: PropTypes.object,
  hideNull: PropTypes.bool
}

export default List