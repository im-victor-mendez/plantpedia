function getCategoryTitle(title) {
  const regex = /[_]/g
  const replace = ' '

  return title = title.replace(regex, replace)
}
export default getCategoryTitle