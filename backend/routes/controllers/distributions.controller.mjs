import {
    getPage,
    getUrlPaged,
    getUrlTokenedAsConstant,
    getUrlTokenedAsParam,
    sendListResponse
} from "../../constants/functions.mjs"
import { apiUrl } from "../../constants/values.mjs"

const path = 'distributions'
const url = `${apiUrl}${path}`

/**
 * Get Distributions
 * @description Sends Distributions data by page
 * @param {Request} req Request
 * @param {Response} res Response
 */
export async function getDistributions(req, res) {
    const page = getPage(req)
    const urlPaged = getUrlPaged(getUrlTokenedAsParam(url), page)

    const response = await fetch(urlPaged)
    const data = await response.json()

    const send = sendListResponse(data)

    res.send(send)
}

/**
 * Get Distribution
 * @description Responses with all distribution details.
 * It's needed a distribution id as Request parameter.
 * @param {Request} req Request
 * @param {Response} res Response
 */
export async function getDistribution(req, res) {
    const { distribution } = req.params

    const distributionUrl = `${url}/${distribution}`

    const response = await fetch(getUrlTokenedAsParam(distributionUrl))
    const data = await response.json()

    res.send(data)
}