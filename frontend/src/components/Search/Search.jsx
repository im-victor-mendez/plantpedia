import './Search.scss'
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg'
import { useState } from 'react'
import PropTypes from 'prop-types'

/**
 * Default Search
 * @description Default Search component used to set state value with input value
 * @param {any} Destructured_Props
 * @param {Function} search Set state function to use with input value as param
 * @example <Search search={setTopicContentPath} />
 * @returns {React.JSX.Element}
 */
function Search({ search }) {
  const [input, setInput] = useState('')
  
  function handleKeyUp (event) {
    if (event.key === 'Enter') onClick()
  }

  function handleChange(event) {
    const value = event.target.value
    setInput(value)
  }

  function onClick() {
    search(input ? `search?q=${input}` : '')
  }


  return (
    <div className="search" onKeyUp={handleKeyUp}>
        <SearchIcon className='icon' onClick={onClick} />
        <input type="search" placeholder='Search' value={input} onChange={handleChange} />
    </div>
  )
}
Search.propTypes = {
  search: PropTypes.func
}

export default Search