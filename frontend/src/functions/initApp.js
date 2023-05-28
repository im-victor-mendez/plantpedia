export function removeDomLoader() {
    const bodyStyle = document.body.style
    bodyStyle.justifyContent = ''
    bodyStyle.alignItems = ''

    const domLoadingIcon = document.getElementById('dom-loading-icon')
    if (domLoadingIcon) domLoadingIcon.remove()
}