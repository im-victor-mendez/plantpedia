import { getAvailablePages, getPage, getUrlPaged, getUrlTokenedAsParam } from "../../constants/functions.mjs"
import { apiUrl } from "../../constants/values.mjs"

const path = 'species'
const url = `${apiUrl}${path}`
const urlTokened = getUrlTokenedAsParam(url)

/**
 * Get Species
 * @description Sends Species data by page
 * @param {Request} req Request
 * @param {Response} res Response
 */
export async function getSpecies(req, res) {
    const page = getPage(req)
    const urlPaged = getUrlPaged(urlTokened, page)

    const response = await fetch(urlPaged)
    const data = await response.json()

    const lastLink = data.links.last
    const send = Object.assign(data, {
        available_page: getAvailablePages(lastLink)
    })

    res.send(send)
}