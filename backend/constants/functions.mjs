import { apiToken } from "./values.mjs"

/**
 * Get Url Tokened As Param
 * @description Function that returns api url with token param
 * @param {string} url Api url
 * @example getUrlTokenedAsParam(url): 'api/endpoint?token=value'
 * @returns {string}
 */
export function getUrlTokenedAsParam(url) {
    return `${url}?${apiToken}`
}

/**
 * Get Url Tokened As Constant
 * @description Function that returns api url with token param
 * @param {string} url Api url
 * @example getUrlTokenedAsConstant(url): 'api/endpoint?variable=value&token=value'
 * @returns {string}
 */
export function getUrlTokenedAsConstant(url) {
    return `${url}&${apiToken}`
}

/**
 * Get Page
 * @description Function that returns string page from req queries as number
 * @param {Request} req Request queries
 * @returns {number}
 */
export function getPage(req) {
    const { page } = req.query
    return parseInt(page) || 1
}

/**
 * Get Url Paged
 * @description Function that returns api url with page query param
 * @param {string} url Api url
 * @param {number} page Int page (default: 1)
 * @example getUrlPaged(url): 'url&page=1' || getUrlPaged(url, 5): 'url&page=5'
 * @returns {string}
 */
export function getUrlPaged(url, page = 1) {
    return `${url}&page=${page}`
}

/**
 * Get Available Pages
 * @description Returns last link of an API endpoint as number
 * @param {string} lastLink Last link of API endpoint
 * @example getAvailablePages("/api/v1/species?page=24468"): 24468
 * @returns {number}
 */
export function getAvailablePages(lastLink) {
    const pageRegex = /page=(\d+)/
    const pageMatch = lastLink.match(pageRegex)
    const availablePages = pageMatch ? parseInt(pageMatch[1]) : null

    return availablePages
}

/**
 * Send List Response
 * @description Returns JSON value appending values into JSON API
 * endpoint response that returns lists
 * @param {JSON} data JSON value obtained of fetch API list endpoint
 * @returns {JSON}
 */
export function sendListResponse(data) {
    if (data.error) return data

    const lastLink = data.links.last

    return Object.assign(data, {
        available_page: getAvailablePages(lastLink)
    })
}