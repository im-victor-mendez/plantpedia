import './FindBy.scss'
import { useEffect, useState } from "react"
import { getPageContent } from "../../api/getPageContent"
import Card from "../../components/Card/Card"
import useLoading from '../../hooks/loading'
import Loading from '../../components/Loading/Loading'

/**
 * Find By layout
 * @description To use only to Find By list display
 * @returns {React.JSX.Element}
 */
function FindBy() {
  const [sections, setSections] = useState([])

  const { loading, setLoading } = useLoading()

  useEffect(() => {
    setLoading(true)

    getPageContent('/findby')
    .then(data => {
      setSections(data)
      setLoading(false)
    })
    .catch(error => {console.log(error)})
  }, [])
  
  return (
    <article id="find-by">
      {loading ? <Loading className='large-bold' /> : sections.map(section => {
        const { name, type, image, path } = section

        return <Card
          key={`${name}-key`}
          id={`${name}-id`}
          type={type}
          path={path}
          image={image}
          name={name}
        />
      })}
    </article>
  )
}
export default FindBy