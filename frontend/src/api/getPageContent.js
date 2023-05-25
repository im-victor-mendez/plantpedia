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

/**
 * Gets card content data of topic from api
 * @param {string} path Api endpoint with next structure `/topic/cardContent`.
 * Example: `/plants/230202`: This will return data of plant with id 230202.
 * @returns {Promise<JSON}
 */
export async function getCardContent(path) {
    const url = `${apiUrl}${path}`
    
    const response = await fetch(url)
    const data = await response.json()
    
    return data
}