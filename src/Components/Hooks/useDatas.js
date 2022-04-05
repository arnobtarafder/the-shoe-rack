import { useEffect, useState } from "react"

const useDatas = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('datas.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    return [data, setData];
}

export default useDatas;