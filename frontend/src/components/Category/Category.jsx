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
 * @returns {React.JSX.Element}
 */
export function DefaultCategory({ title, value, negativeValue }) {
  title = getCategoryTitle(title)

  return (
    <div className={`${className} default`}>
      <h1 className='title'>{title}</h1>
      <h2 className={negativeValue ? 'no-value' : 'value'}>{value}</h2>
    </div>
  )
}


/**
 * Like default category, but larger :P
 * @param {any} Destructured_Props
 * @param {string} title Title of category
 * @param {string | number} value Value to display as text
 * @returns {React.JSX.Element}
 */
export function LargeCategory({ title, value, negativeValue }) {
  title = getCategoryTitle(title)

  return (
    <div className={`${className} large`}>
      <h1 className='title'>{title}</h1>
      <h2 className={negativeValue ? 'no-value' : 'value'}>{value}</h2>
    </div>
  )
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

  title = getCategoryTitle(title)
  
  const emptyDataCondition = (Object.keys(data).length == 0 || data.length == 0)
  const arrayCondition = data instanceof Array
  
  return (
    <div className={`${className} toggle`}>
      <div className='top'>
        <h1 className='title'>{title}</h1>
        {emptyDataCondition ? <h2 className='no-value'>{dictionary.null}</h2> :
        <img className='toggle-button-icon' src={icon} alt="Toggle image button" onClick={activeToggle} />}
      </div>
      {(!emptyDataCondition && toggle) &&
      <div className='toggle-content'>
      {arrayCondition && data.map(item => {
        if (title == 'sources') {
          const type = 'default'
          const name = item.name
          const url = item.url

          return types.value.url({ type, data: url, value: name })
        }
console.log(item)
        const title = ''
        const value = ''

        return types.large({ title, value })
      })
      }

      {!arrayCondition && Object.keys(data).map()}
    </div>}
    </div>
  )
}

export function ImageCategory({ title, image }) {
  title = getCategoryTitle(title)
  
  return (
    <div className={`${className} category-image`}>
      <h1 className='title'>{title}</h1>
      <img className='value' src={image} alt={`${title} image`} />
    </div>
  )
}

export function DefaultValue({ value }) {
  return (
    <div className={`${className} default-value`}>
      <p className='value'>{value}</p>
    </div>
  )
}

export function ShortValue({ value }) {
  return (
    <div className={`${className} short-value`}>
      <p className='value'>{value}</p>
    </div>
  )
}

export function Url({ data, value }) {
  const noUrlStyle = (data == null) ? { color: `#333333` } : {}

  return (
    <div className={`${className} url-value`}>
      <a className='value' href={data} target='_blank' rel='noreferrer' style={noUrlStyle}>{value}</a>
    </div>
  )
}

export default DefaultCategory