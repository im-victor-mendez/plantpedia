import dictionary from "../../constants/dictionary"

/**
 * @description Function that transforms text given into dictionary equality value
 * @param {string} title Text to convert with dictionary content
 * @returns {string} Text by dictionary
 */
function getCategoryTitle(title = dictionary.null) {
  const regex = /[_]/g
  const replace = ' '

  if (title == null) title = dictionary.null

  return title = title.replace(regex, replace)
}

export default getCategoryTitle