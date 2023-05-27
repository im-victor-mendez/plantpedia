import { getPage, getUrlPaged, getUrlTokenedAsParam, getUrlTokenedAsConstant } from "../../constants/functions.mjs"
import { apiUrl } from "../../constants/values.mjs"

const path = 'plants'
const url = `${apiUrl}${path}`

/**
 * Responses with all plants with a pagination of 20 items, links and meta
 * @param {Object} req Request
 * @param {Object} res Response
 */
export async function getPlants(req, res) {
    const page = getPage(req)
    const urlPaged = getUrlPaged(getUrlTokenedAsParam(url), page)

    const response = await fetch(urlPaged)
    const data = await response.json()
    
    res.send(data)
}

/**
 * Responses with all plant details
 * @description It's needed a plant id as Request parameter
 * @param {Object} req Request
 * @param {Object} res Response
 */
export async function getPlant(req, res) {
    const { plant } = req.params

    const plantUrl = `${url}/${plant}`
    
    const response = await fetch(getUrlTokenedAsParam(plantUrl))
    const data = await response.json()

    res.send(data)
}

/**
 * Responses with all plants that matched with 'q' param string
 * @description It's needed a plant name, common name or synonym name as Request parameter
 * @param {Object} req Request
 * @param {Object} res Response
 */
export async function searchPlant(req, res) {
    const { q } = req.query

    const plantUrl = `${url}/search?q=${q}`

    const response = await fetch(getUrlTokenedAsConstant(plantUrl))
    const data = await response.json()

    res.send(data)
}