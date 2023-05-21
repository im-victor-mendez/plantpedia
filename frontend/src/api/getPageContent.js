import apiUrl from "."

/**
 * Gets page content (cards) from database
 * @param {string} path 
 * @returns {Promise<JSON>} data
 */
export async function getPageContent(path) {
    const url = `${apiUrl}${path}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}