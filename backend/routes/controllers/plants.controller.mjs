import fetch from 'node-fetch'
import {
    getPage,
    getUrlPaged,
    getUrlTokenedAsParam,
    getUrlTokenedAsConstant,
    sendListResponse
} from "../../constants/functions.mjs"
import { apiUrl } from "../../constants/values.mjs"

const path = 'plants'
const url = `${apiUrl}${path}`

/**
 * Get Plants
 * @description Sends Plants data by page
 * @param {Request} req Request
 * @param {Response} res Response
*/
export async function getPlants(req, res) {
    const page = getPage(req)
    const urlPaged = getUrlPaged(getUrlTokenedAsParam(url), page)

    const response = await fetch(urlPaged)
    const data = await response.json()

    const send = sendListResponse(data)
    
    res.send(send)
}

/**
 * Get Plant
 * @description Responses with all plant details
 * It's needed a plant id as Request parameter
 * @param {Request} req Request
 * @param {Response} res Response
 */
export async function getPlant(req, res) {
    const { plant } = req.params

    const plantUrl = `${url}/${plant}`
    
    const response = await fetch(getUrlTokenedAsParam(plantUrl))
    const data = await response.json()

    res.send(data)
}

/**
 * Search Plant
 * @description Responses with all plants that matched with 'q' param string
 * It's needed a plant name, common name or synonym name as Request parameter
 * @param {Request} req Request
 * @param {Response} res Response
 */
export async function searchPlant(req, res) {
    const { q } = req.query
    const page = getPage(req)

    const plantUrl = `${url}/search?q=${q}`
    
    const urlPaged = getUrlPaged(getUrlTokenedAsConstant(plantUrl), page)

    const response = await fetch(urlPaged)
    const data = await response.json()

    const send = sendListResponse(data)

    res.send(send)
}