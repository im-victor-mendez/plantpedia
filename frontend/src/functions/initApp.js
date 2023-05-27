export function removeDomLoader() {
    document.body.style = null
    const domLoadingIcon = document.getElementById('dom-loading-icon')
    if (domLoadingIcon) domLoadingIcon.remove()
}