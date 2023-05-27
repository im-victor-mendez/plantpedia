import './Topic.scss'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPageContent } from "../../api/getPageContent"
import List from "../../layout/List/List"
import Loading from "../../components/Loading/Loading"
import { FixedButton, ShortButton } from "../../components/Button/Button"
import { ReactComponent as Return } from '../../assets/svg/return.svg'

function Topic() {
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [list, setList] = useState([])

  const params = useParams()
  const { topicContent } = params
  const topicPath = `/${topicContent}`
  
  useEffect(() => {
    setLoading(true)

    getPageContent(topicPath, page)
    .then(data => {
      setLoading(false)

      const dataList = data.data
      setList(dataList)
    })
  }, [page, topicPath])

  function scrollTopPage() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  function getMoreData() {
    scrollTopPage()

    setPage(previous => previous + 1)
  }

  function getPreviousData() {
    scrollTopPage()
    
    if (page == 1) return null
    
    setPage(previous => previous - 1)
  }

  if (loading) return <Loading className="large-bold"/>

  return (
      <article id={topicContent} className="topic">
        <List
          list={list}
          parentPath={topicPath}
        />
        <section className="load-buttons">
          <ShortButton onClick={getPreviousData}>
            <Return/>
          </ShortButton>
          <FixedButton onClick={getMoreData}>
            Load More!
          </FixedButton>
        </section>
      </article>
  )
}
export default Topic