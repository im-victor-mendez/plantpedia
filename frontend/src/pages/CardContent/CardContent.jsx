import './CardContent.scss'
import { useEffect, useState } from "react"
import { getCardContent } from "../../api/getPageContent"
import { useParams } from "react-router"
import { ListCategories } from "../../layout/List/List"

/**
 * Card content
 * @description Function that gets data of topicContent and cardContent url params
 * @returns {React.JSX.Element}
 */
function CardContent() {
    const [data, setData] = useState()

    const params = useParams()
    const { topicContent, cardContent } = params

    const path = `/${topicContent}/${cardContent}`

    useEffect(() => {
        getCardContent(path)
        .then(data => {
            setData(data)
        })
    }, [])
    
    if (data) return (
        <article id={cardContent} className='card-content'>
            {/* <TopBar/> */}
            <img
                src={data.data.image_url}
                alt={`${data.data.common_name} image`}
            />
            <ListCategories categories={data.data} />
        </article>
    )
}
export default CardContent