import { useEffect, useRef } from 'react'
import './Stream.css'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import AnimationLoading from '../Animations/AnimationLoading'
import ReactPlayer from 'react-player'

export default function MainStream() {

    const [userData, setUserData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [username, setUsername] = useState("")
    const { id } = useParams()
    const navigate = useNavigate()

    const users = userData.find((c) => c.id === parseInt(id))

    const updateViews = async () => {
        if (users) {
            await fetch(`http://localhost:3000/updateViews/${users.id}`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username })
            })
        }
    }

    const fetchUserData = async () => {
        try {

            const response = await fetch(`http://localhost:3000/mainstreamdata`)
            const data = await response.json()
            setUserData(data)

        } catch (error) {
            console.error('Failed to Fetch')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {

        const user = localStorage.getItem('username')
        if (user) {

            setUsername(user)
            fetchUserData()
        }

        updateViews()


    }, [users])

    if (isLoading) {
        return <AnimationLoading />
    }

    const toBack = () => {
        navigate('/init')
    }

    const navi = () => {
        navigate('/profile')
    }


    return <>



        <div className="stream-view absolute top-0 left-0 w-full h-full ">

            {/* Top nav bar stats */}
            <div className='profile-top w-full flex justify-between py-5 px-10'>
                <button onClick={toBack} className='discord-button flex gap-2 px-5 items-center'><img src='/authentication/home.png' /><span>GO HOME</span></button>
                <div className='flex gap-3'>
                    <div className='flex flex-col justify-center items-end'>
                        <span className='profile-username'>{username}</span>
                        <span className='profile-id'>ID:1237623483457</span>
                    </div>
                    <img src='/profile/profile.png' />
                </div>
            </div>
            {/* Top nav bar ends */}

            <div className='w-full h-full '>
                <ReactPlayer
                    width="100%"
                    height="800px"
                    url={users.videoUrl}
                    controls
                    light={<img className='cover-image' src={users.imageFile} />}
                />
                <div className='video-below-panel w-full px-[300px]'>

                    <div className='video-content-panel flex w-full bg-violet-600 h-[200px]'>

                        <div className='inside-content-panel w-full h-full p-[40px]'>
                            <h1>{users.title}</h1>
                            
                            
                        </div>

                        <div className='w-full px-10 flex flex-col items-end'>
                            <Link to={'/profile'} className='mt-5 flex p-2 items-center gap-2'>
                                <img src='/profile/eclipse.png' />
                                <span className='text-xl text-white font-semibold'>{username}</span>
                            </Link>
                            <p className='view-count text-purple-200'>Views: {users.views}</p>

                        </div>

                    </div>
                    <div className='py-10'>
                        <h1 className='mt-3 px-5 text-2xl text-white font-semibold'>Description:</h1>
                        <h2 className='mt-5 px-8 text-white'>{users.description}</h2>
                    </div>
                </div>
            </div>
        </div>
    </>
}