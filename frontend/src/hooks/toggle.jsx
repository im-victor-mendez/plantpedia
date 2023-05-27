import { ReactComponent as ToggleIcon } from '../assets/svg/toggle/toggle.svg'
import { ReactComponent as ActiveToggleIcon } from '../assets/svg/toggle/active_toggle.svg'

import { useState } from "react"

/**
 * Hook to implement toggle functionality into component
 * @param {React.JSX.Element} iconToUse SVG nonactive icon as component
 * @param {React.JSX.Element} activeIconToUse SVG active icon as component
 * @returns {object} toggle, icon, activeToggle
 * @example useToggle(ToggleIcon, ActiveToggleIcon)
 */
function useToggle(iconToUse = ToggleIcon, activeIconToUse = ActiveToggleIcon) {
    const [toggle, setToggle] = useState(false)
    const Icon = !toggle ? iconToUse : activeIconToUse
    
    function activeToggle() {
        setToggle(previous => !previous)
    }

    return { toggle, Icon, activeToggle }
}

export default useToggle