import dictionary from "../../constants/dictionary"

function getCategoryTitle(title = dictionary.null) {
  const regex = /[_]/g
  const replace = ' '

  if (title == null) title = dictionary.null

  return title = title.replace(regex, replace)
}
export default getCategoryTitle