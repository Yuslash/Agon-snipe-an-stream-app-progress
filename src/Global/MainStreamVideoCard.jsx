import { useEffect, useState } from "react"
import NewStreamer from "./NewStreamer"

export default function MainStreamVideoCard({ isCollapsed }) {
    
    const [userData, setUserData] = useState([])

    useEffect(() => {
    
        const fetchUserData = async () => {
            const response = await fetch('http://localhost:3000/mainstreamdata')
            const data = await response.json()
            setUserData(data)
        }

        fetchUserData()

    }, [])


    const newStream = userData.filter(item => item.category === 'New Streamer')
    const topStream = userData.filter(item => item.category === 'Top Streamer')
    const hotStream = userData.filter(item => item.category === 'Hot Streamer')
    const topClip = userData.filter(item => item.category === 'Top Clip')
    

    return <>
        <NewStreamer topstream={topStream} hotstream={hotStream} topclip={topClip} isCollapsed={isCollapsed} newstream={newStream} />
    </>
}