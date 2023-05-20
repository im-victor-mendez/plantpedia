import { getPage, getUrlPaged } from "../../constants/functions.mjs"
import { apiToken, apiUrl } from "../../constants/values.mjs"

const path = 'plants?'
const url = `${apiUrl}${path}${apiToken}`

/**
 * Responses with all plants with a pagination of 20 items, links and meta
 * @param {Object} req Request
 * @param {Object} res Response
 */
export async function getPlants(req, res) {
    const page = getPage(req)
    const urlPaged = getUrlPaged(url, page)

    const response = await fetch(urlPaged)
    const data = await response.json()
    
    res.send(data)
}