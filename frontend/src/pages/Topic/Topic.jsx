import './Topic.scss'

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPageContent, getSearchPageContent } from "../../api/getPageContent"

import List from "../../layout/List/List"
import Loading from "../../components/Loading/Loading"
import Search from '../../components/Search/Search'
import { FixedButton, ShortButton } from "../../components/Button/Button"
import { BackWithName } from '../../components/TopBar/TopBar'

import { ReactComponent as Return } from '../../assets/svg/return.svg'

/**
 * Topic Page template
 * @description To use to display lists of api snippets, like Genus, Plants, Species, Zones and Distributions
 * @returns {React.JSX.Element}
 */
function Topic() {
  const params = useParams()
  const { topicContent } = params

  const path = `/${topicContent}`

  const [loading, setLoading] = useState(true)
  const [topicContentPath, setTopicContentPath] = useState('')
  const [page, setPage] = useState(1)
  const [availablePages, setAvailablePages] = useState()
  const [list, setList] = useState([])
  
  useEffect(() => {
    setLoading(true)

    if (topicContentPath)
    getSearchPageContent(`${path}/${topicContentPath}`, page)
    .then(data => {
      setValues(data)
    })

    else
    getPageContent(path, page)
    .then(data => {
      setValues(data)
    })
  }, [topicContentPath, page])

  function setValues(data) {
    setLoading(false)

    const dataList = data.data
    const dataAvailablePages = data.available_page
    
    setList(dataList)
    setAvailablePages(dataAvailablePages)
  }

  function scrollTopPage() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  function getMoreData() {
    scrollTopPage()
    setPage(page + 1)
  }

  function getPreviousData() {
    scrollTopPage()
    setPage(page - 1)
  }

  return (
      <article id={topicContent} className="topic">
        <BackWithName name={topicContent} />
          <Search
            search={setTopicContentPath}
          />
          {loading ? <Loading className="large-bold"/> : <>
            <List
              list={list}
              parentPath={path}
            />
            <section className="load-buttons">
              {page > 1 && <ShortButton onClick={getPreviousData}>
                <Return/>
              </ShortButton>}
              {(availablePages > 1 && page < availablePages) &&
              <FixedButton onClick={getMoreData}>
                Load More!
              </FixedButton>}
            </section>
          </>}
      </article>
  )
}
export default Topic