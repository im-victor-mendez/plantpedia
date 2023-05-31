import {
    getPage,
    getUrlPaged,
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