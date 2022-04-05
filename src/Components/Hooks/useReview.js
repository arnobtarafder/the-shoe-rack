import { useEffect, useState } from "react"

const useReview = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('review.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    return [data, setData];
}

export default useReview;