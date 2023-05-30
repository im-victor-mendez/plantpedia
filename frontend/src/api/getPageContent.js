import apiUrl from "."

/**
 * Get Page Content
 * @description Gets page content (cards) from database
 * @param {string} path Api endpoint
 * @param {number} page Page of api endpoint
 * @example getPageContent('/findby') or getPageContent('/plants')
 * @returns {Promise<JSON>}
 */
export async function getPageContent(path, page = 1) {
    const url = `${apiUrl}${path}?page=${page}`
    const response = await fetch(url)
    const data = response.ok ? await response.json() : { error: true }
    return data
}

/**
 * Get Card Content
 * @description Gets card content data of topic from api
 * @param {string} path Api endpoint with next structure `/topic/cardContent`.
 * Example: `/plants/230202`: This will return data of plant with id 230202.
 * @example getCardContent('/plants/230202')
 * //This will return data of plant with id 230202.
 * @returns {Promise<JSON}
 */
export async function getCardContent(path) {
    const url = `${apiUrl}${path}`
    
    const response = await fetch(url)
    const data = await response.json()
    
    return data
}

/**
 * Get Search Page Content
 * @description Gets Content of topic by search value
 * @param {string} path Endpoint path of topic. Structure: /topic/topicContent
 * @param {number} page Page number
 * @example getSearchPageContent('/plants/search?q=Avocado', 2)
 * @returns {Promise<JSON>}
 */
export async function getSearchPageContent(path, page = 1) {
    const url = `${apiUrl}${path}&page=${page}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}