import './CardContent.scss'
import { useEffect, useState } from "react"
import { getCardContent } from "../../api/getPageContent"
import { useParams } from "react-router"
import { ListCategories } from "../../layout/List/List"
import { BackWithName } from '../../components/TopBar/TopBar'
import Loading from '../../components/Loading/Loading'
import { NoImageContent } from '../../components/NoImage/NoImage'

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
    }, [path])
    
    if (!data) return <Loading className="large-bold"/>

    const { common_name, name, image_url } = data.data
    
    return (<>
        <BackWithName name={common_name || name} />

        <article id={cardContent} className='card-content'>
            {!image_url ? <NoImageContent/> : <img
                src={image_url}
                alt={`${name} image`}
            />}
            <ListCategories categories={data.data} />
        </article>
    </>)
}
export default CardContent