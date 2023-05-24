import dictionary from '../../constants/dictionary'
import useToggle from '../../hooks/toggle'
import './Category.scss'

const className = 'category'

const types = Object.freeze({
  'default': (props) => <Default title={props.title} value={props.data} />,
  'large': (props) => <Large title={props.title} value={props.data} />,
  'toggle': (props) => <Toggle title={props.title} data={props.data} />,
  'image': (props) => <CategoryImage title={props.title} image={props.image} />,
  'value': {
    'default': (props) => <DefaultValue value={props.value} />,
    'short': (props) => <ShortValue data={props.data} value={props.value} />,
    'url': (props) => <Url data={props.data} value={props.value} />,
  }
})

function Category({ type, title, data }) {
  const regex = /[_]/g
  const replace = ' '

  title = title.replace(regex, replace)

  return types[type]({ title, data })
}

function Default({ title, value }) {
  return (
    <div className={`${className} default`}>
      <h1 className='title'>{title}</h1>
      <h2 className='value'>{value}</h2>
    </div>
  )
}

function Large({ title, value }) {
  return (
    <div className={`${className} large`}>
      <h1 className='title'>{title}</h1>
      <h2 className='value'>{value}</h2>
    </div>
  )
}

function Toggle({ title, data }) {
  const { toggle, icon, activeToggle } = useToggle()

  const emptyDataCondition = (Object.keys(data).length == 0 || data.length == 0)
  
  return (
    <div className={`${className} toggle`}>
      <div className='top'>
        <h1 className='title'>{title}</h1>
        {emptyDataCondition ?
        <h2 className='no-value'>{dictionary.null}</h2> :
        <img className='toggle-button-icon' src={icon} alt="Toggle image button" onClick={activeToggle} />}
      </div>
      {(!emptyDataCondition && toggle) &&
      <ToggleContent title={title} data={data} />}
    </div>
  )
}

function ToggleContent({ title, data }) {
  const arrayCondition = data instanceof Array

  return (
    <div className='toggle-content'>
      {arrayCondition && data.map(item => {
        if (title == 'sources') {
          const type = 'default'
          const name = item.name
          const url = item.url

          return types.value.url({ type, data: url, value: name })
        }
      })}
    </div>
  )
}

function CategoryImage({ title, image }) {
  return (
    <div className={`${className} category-image`}>
      <h1 className='title'>{title}</h1>
      <img className='value' src={image} alt={`${title} image`} />
    </div>
  )
}

function DefaultValue({ value }) {
  return (
    <div className={`${className} default-value`}>
      <p className='value'>{value}</p>
    </div>
  )
}

function ShortValue({ value }) {
  return (
    <div className={`${className} short-value`}>
      <p className='value'>{value}</p>
    </div>
  )
}

function Url({ data, value }) {
  const noUrlStyle = (data == null) ? { color: `#333333` } : {}

  return (
    <div className={`${className} url-value`}>
      <a className='value' href={data} target='_blank' rel='noreferrer' style={noUrlStyle}>{value}</a>
    </div>
  )
}

export default Category