import { useState } from "react"

function useLoading() {
    const [loading, setLoading] = useState(true)

    return { loading, setLoading }
}
export default useLoading