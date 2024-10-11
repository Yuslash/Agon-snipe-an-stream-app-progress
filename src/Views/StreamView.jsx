import { useEffect } from 'react'
import './Stream.css'

export default function StreamView() {

    const fetchUserData = async () => {
        try {

            const response = await fetch(`http://localhost:3000/`)

        } catch (error) {
            console.error('Failed to Fetch')
        }
    }

    return <>
        <div className="stream-view absolute top-0 left-0 w-full h-full px-[200px] bg-orange-300">
            <div className='w-full h-full bg-purple-400'>
                <ReactPlayer
                    width="500px"
                    url={card.videoUrl}
                    controls
                    light={<img src={card.imageFile} />}
                />
            </div>
        </div>
    </>
}