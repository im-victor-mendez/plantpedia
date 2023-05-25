import './CardContent.scss'
import { useEffect, useState } from "react"
import { getCardContent } from "../../api/getPageContent"
import { useParams } from "react-router"
import { ListCategories } from "../../layout/List/List"
import { BackWithName } from '../../components/TopBar/TopBar'

/**
 * Card content
 * @description Function that gets data of topicContent and cardContent url params
 * @returns {React.JSX.Element}
 */
function CardContent() {
    const [data, setData] = useState()
    const name = data ? data.data.common_name : ''

    const params = useParams()
    const { topicContent, cardContent } = params

    const path = `/${topicContent}/${cardContent}`

    useEffect(() => {
        getCardContent(path)
        .then(data => {
            setData(data)
        })
    }, [path])
    
    if (data) return (<>
        <BackWithName name={name} />

        <article id={cardContent} className='card-content'>
            <img
                src={data.data.image_url}
                alt={`${name} image`}
            />
            <ListCategories categories={data.data} />
        </article>
    </>)
}
export default CardContent