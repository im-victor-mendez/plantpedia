import toggle_icon from '../assets/svg/toggle/toggle.svg'
import active_toggle_icon from '../assets/svg/toggle/active_toggle.svg'

import { useState } from "react"

function useToggle() {
    const [toggle, setToggle] = useState(false)
    const icon = !toggle ? toggle_icon : active_toggle_icon
    
    function activeToggle() {
        setToggle(previous => !previous)
    }

    return { toggle, icon, activeToggle }
}

export default useToggle