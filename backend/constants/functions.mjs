/**
 * Function that returns string page as number
 * @param {Object} req Request queries
 * @returns {number} Parsed int page from Request.Query
 */
export function getPage(req) {
    const { page } = req.query
    return parseInt(page) || 1
}

/**
 * Function that returns api url with page query param
 * @param {string} url Api url
 * @param {number} page Int page
 * @returns {string} Api url with page query param
 */
export function getUrlPaged(url, page = 1) {
    const urlPaged = `${url}&page=${page}`
    return urlPaged
}