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


    return <>
        <div className='p-3 w-full h-full '>
            <div className='main-video-card-top w-full py-5 flex gap-9'>
                <button className="hover:text-purple-500 hover:underline">Top Streamer</button>
                <button className="hover:text-purple-500 hover:underline">Hot Streamer</button>
                <button className="hover:text-purple-500 hover:underline">New Streamer</button>
                <button className="hover:text-purple-500 hover:underline">Top Clip</button>
            </div>

            {/* Streamer Video Playlist Starts */}
            <NewStreamer isCollapsed={isCollapsed} newstream={newStream} />
            {/* Streamer Video Playlist Ends */}
        
        </div>
    </>
}