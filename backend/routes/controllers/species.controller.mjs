import {
    getPage,
    getUrlPaged,
    getUrlTokenedAsConstant,
    getUrlTokenedAsParam,
    sendListResponse
} from "../../constants/functions.mjs"
import { apiUrl } from "../../constants/values.mjs"

const path = 'species'
const url = `${apiUrl}${path}`

/**
 * Get Species
 * @description Sends Species data by page
 * @param {Request} req Request
 * @param {Response} res Response
 */
export async function getSpecies(req, res) {
    const page = getPage(req)
    const urlPaged = getUrlPaged(getUrlTokenedAsParam(url), page)
    
    const response = await fetch(urlPaged)
    const data = await response.json()
    
    const send = sendListResponse(data)

    res.send(send)
}

/**
 * Search Specie
 * @description Responses with all species that matched with 'q' param string.
 * It's needed a specie name, common name or synonym name as Request query parameter
 * @param {Request} req Request
 * @param {Response} res Response
 */
export async function searchSpecie(req, res) {
    const { q } = req.query
    const page = getPage(req)

    const specieUrl = `${url}/search?q=${q}`

    const urlPaged = getUrlPaged(getUrlTokenedAsConstant(specieUrl), page)

    const response = await fetch(urlPaged)
    const data = await response.json()

    const send = sendListResponse(data)

    res.send(send)
}

/**
 * Get Specie
 * @description Responses with all specie details.
 * It's needed a specie id as Request parameter
 * @param {Request} req Request
 * @param {Response} res Response
 */
export async function getSpecie(req, res) {
    const { specie } = req.params

    const specieUrl = `${url}/${specie}`
    
    const response = await fetch(getUrlTokenedAsParam(specieUrl))
    const data = await response.json()

    res.send(data)
}