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
    <div className={`${className} default`}>
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
    <div className={`${className} large`}>
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
  const { toggle, icon, activeToggle } = useToggle()

  const categoryTitle = getCategoryTitle(title)
  
  const emptyDataCondition = (Object.keys(data).length == 0 || data.length == 0)
  const arrayCondition = data instanceof Array
  
  return (
    <div className={`${className} toggle`}>
      <div className='top'>
        <h1 className='title'>{categoryTitle}</h1>
        {emptyDataCondition ? <h2 className='no-value'>{dictionary.null}</h2> :
        <img className='toggle-button-icon' src={icon} alt="Toggle image button" onClick={activeToggle} />}
      </div>
      {(!emptyDataCondition && toggle) &&
      <div className='toggle-content'>
      {arrayCondition && data.map(item => {
        if (categoryTitle == 'sources') {
          const name = item.name
          const url = item.url

          return <Url key={`${name}-key`} url={url} value={name} />
        }
      })
      }
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
    <div className={`${className} default-value`}>
      <p className='value'>{value}</p>
    </div>
  )
}
DefaultValue.propTypes = {
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
    <div className={`${className} short-value`}>
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
    <div className={`${className} url-value`}>
      <a className={url ? 'value' : 'no-value'} href={url} target='_blank' rel='noreferrer'>{value}</a>
    </div>
  )
}
Url.propTypes = {
  url: PropTypes.string,
  value: PropTypes.string
}

export default DefaultCategory