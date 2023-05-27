import PropTypes from 'prop-types'
import dictionary from '../../constants/dictionary'
import useToggle from '../../hooks/toggle'
import './Category.scss'
import getCategoryTitle from './getCategoryTitle'

const className = 'category'

/**
 * Default category
 * @param {any} Destructured_Props
 * @param {string} title Title of category
 * @param {string | number} value Value to display as text
 * @param {boolean} negativeValue Boolean to indicate if value passed is a no-value. Example: 'Doesn't have' or 'No' and implement style
 * @returns {React.JSX.Element}
 */
export function DefaultCategory({ title, value, negativeValue }) {
  const categoryTitle = getCategoryTitle(title)

  return (
    <div className={`${className} ${className}-default`}>
      <h1 className='title'>{categoryTitle}</h1>
      <h2 className={negativeValue ? 'no-value' : 'value'}>{value}</h2>
    </div>
  )
}
DefaultCategory.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  negativeValue: PropTypes.bool
}

/**
 * Like default category, but larger :P
 * @param {any} Destructured_Props
 * @param {string} title Title of category
 * @param {string | number} value Value to display as text
 * @param {boolean} negativeValue Boolean to indicate if value passed is a no-value. Example: 'Doesn't have' or 'No' and implement style
 * @returns {React.JSX.Element}
 */
export function LargeCategory({ title, value, negativeValue }) {
  const categoryTitle = getCategoryTitle(title)

  return (
    <div className={`${className} ${className}-large`}>
      <h1 className='title'>{categoryTitle}</h1>
      <h2 className={negativeValue ? 'no-value' : 'value'}>{value}</h2>
    </div>
  )
}
LargeCategory.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  negativeValue: PropTypes.bool
}

/**
 * Category with array or object values as data.
 * @description This maps data values as Categories elements
 * @param {any} Destructured_Props
 * @param {string} title Title of category
 * @param {Array | Object} data Data to map their values
 * @returns {React.JSX.Element}
 */
export function ToggleCategory({ title, data }) {
  const { toggle, Icon, activeToggle } = useToggle()

  const categoryTitle = getCategoryTitle(title)

  const conditions = {
    'empty_data': (Object.keys(data).length == 0 || data.length == 0),
    'is_array': data instanceof Array,
    'is_object': data instanceof Object,
    'links': title == 'links',
    'main_species': title == 'main_species',
    'genus': title == 'genus',
    'family': title == 'family',
    'species': title == 'species',
    'subspecies': title == 'subspecies',
    'varieties': title == 'varieties',
    'sources': title == 'sources',
  }
  
  return (
    <div className={`${className} ${className}-toggle`}>
      <div className='top'>
        <h1 className='title'>{categoryTitle}</h1>
        {conditions.empty_data ? <h2 className='no-value'>{dictionary.null}</h2> :
        <Icon className='toggle-button-icon' onClick={activeToggle} />}
      </div>

      {(!conditions.empty_data && toggle) && <div className='category-toggle-content'>
        {conditions.is_array && data.map(item => {
          if (conditions.sources) return <Url
            key={`${item.name}-${data.indexOf(item)}-key`}
            url={item.url}
            value={item.name}
          />

          if (conditions.species) return <ImageCategory
            key={`${item.name}-${data.indexOf(item)}-key`}
            title={item.common_name || item.scientific_name}
            image={item.image_url}
          />

          if (conditions.subspecies || conditions.varieties) return <LargeValue
            key={`${item.name}-${data.indexOf(item)}-key`}
            value={item.common_name || item.scientific_name}
          />
        })}

        {conditions.is_object && Object.keys(data).map(item => {
          const key = `${item}-key`
          const value = data[item]

          if (conditions.links) return <Url key={key} url={value} value={item} />
        })}

        {conditions.main_species && <ImageCategory
          key={`${data.common_name}-image_category-key`}
          title={data.common_name}
          image={data.images.fruit[0].image_url || data.images.bark[0].image_url}
        />}

        {conditions.genus && <LargeValue key={`${data.name}-key`} value={data.name} />}

        {conditions.family && <LargeValue key={`${data.name}-key`} value={data.name} />}
      </div>}
    </div>
  )
}
ToggleCategory.propTypes = {
  title: PropTypes.string,
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

/**
 * Image Category
 * @description With image value instead of plane text
 * @param {any} Destructured_Props
 * @param {string} title Url of value
 * @param {string} image Image url to display
 * @returns {React.JSX.Element}
 */
export function ImageCategory({ title, image }) {
  const categoryTitle = getCategoryTitle(title)
  
  return (
    <div className={`${className} category-image`}>
      <h1 className='title'>{categoryTitle}</h1>
      <img className='value' src={image} alt={`${categoryTitle} image`} />
    </div>
  )
}
ImageCategory.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string
}

/**
 * Default Value
 * @description Returns plane text
 * @param {any} Destructured_Props
 * @param {string} value Value to display
 * @returns {React.JSX.Element}
 */
export function DefaultValue({ value }) {
  return (
    <div className={`${className} value-default`}>
      <p className='value'>{value}</p>
    </div>
  )
}
DefaultValue.propTypes = {
  value: PropTypes.string
}

/**
 * Large Value
 * @description Default Value but larger :P
 * @param {any} Destructured_Props
 * @param {string} value Value to display
 * @returns {React.JSX.Element}
 */
export function LargeValue({ value }) {
  return (
    <div className={`${className} value-large`}>
      <p className='value'>{value}</p>
    </div>
  )
}
LargeValue.propTypes = {
  value: PropTypes.string
}

/**
 * Short Value
 * @description Default Value but shorter :P
 * @param {any} Destructured_Props
 * @param {string} value Value to display as plane text
 * @returns {React.JSX.Element}
 */
export function ShortValue({ value }) {
  return (
    <div className={`${className} value-short`}>
      <p className='value'>{value}</p>
    </div>
  )
}
ShortValue.propTypes = {
  url: PropTypes.string,
  value: PropTypes.string
}

/**
 * Url Category Value
 * @description With link value instead of plane text
 * @param {any} Destructured_Props
 * @param {string} url Url of value
 * @param {string} value Name of url to display
 * @returns {React.JSX.Element}
 */
export function Url({ url, value }) {
  return (
    <div className={`${className} value-url`}>
      <a className={url ? 'value' : 'no-value'} href={url} target='_blank' rel='noreferrer'>{value}</a>
    </div>
  )
}
Url.propTypes = {
  url: PropTypes.string,
  value: PropTypes.string
}

export default DefaultCategory