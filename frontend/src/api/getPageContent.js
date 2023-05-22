import apiUrl from "."

/**
 * Gets page content (cards) from database
 * @param {string} path Api endpoint, example '/findby' or '/plants'
 * @param {number} page Page of api endpoint
 * @returns {Promise<JSON>} data
 */
export async function getPageContent(path, page = 1) {
    const url = `${apiUrl}${path}?page=${page}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}