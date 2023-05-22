import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { getPageContent } from "../../api/getPageContent"
import List from "../../layout/List/List"

function Topic() {
    const [searchParams] = useSearchParams()
    const params = useParams()

    const [list, setList] = useState([])
    const [page, setPage] = useState(searchParams.get('page'))
    
    const { topicContent } = params
    const parentPath = `/${topicContent}`
    
    useEffect(() => {
      getPageContent(parentPath, parseInt(page))
      .then(data => {
        const dataList = data.data
        
        setList(dataList)
      })
    }, [page])

    return (
        <article id={topicContent} className="topic">
            <List
                list={list}
                parentPath={parentPath}
            />
        </article>
    )
}
export default Topic