import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPageContent } from "../../api/getPageContent"
import List from "../../layout/List/List"
import Loading from "../../components/Loading/Loading"

function Topic() {
  const [loading, setLoading] = useState(true)
  const [list, setList] = useState([])

  const params = useParams()
  const { topicContent } = params
  const topicPath = `/${topicContent}`
  
  useEffect(() => {
    getPageContent(topicPath)
    .then(data => {
      setLoading(false)

      const dataList = data.data
      setList(dataList)
    })
  }, [topicPath])

  if (loading) return <Loading/>

  return (
      <article id={topicContent} className="topic">
        <List
          list={list}
          parentPath={topicPath}
        />
      </article>
  )
}
export default Topic