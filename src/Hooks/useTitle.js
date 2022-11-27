import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Recycle`;
    }, [title])
}

export default useTitle;