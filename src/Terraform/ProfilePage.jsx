import { useEffect, useRef, useState } from 'react'
import './Profile.css'
import { Link, useNavigate } from 'react-router-dom'
import AnimationLoading from '../Animations/AnimationLoading'
import ScaleUpGsap from './ScaleUpGsap'


export default function ProfilePage() {

    const [ username, setUsername] = useState("")
    const imageRef = useRef()
    const navigate = useNavigate()
    const [ userData, setUserData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const bubbleSound1Ref = useRef(null)
    const scaleVideoCard = useRef([])
    const triggerElement = useRef()
    const useAudio = useRef()

    const fetchUserData = async (user) => {

        try {

            const response = await fetch(`http://localhost:3000/presonaldata?username=${user}`)
            const data = await response.json()
            setUserData(data)

        } catch (error) {
            console.error('Failed to Fetch')
        } finally {
            setIsLoading(false)
                scaleVideoCard.current.forEach(box => {
                    if(box) ScaleUpGsap(box)
                })
            }
    }

    useEffect(() => 
    {

        const user = localStorage.getItem('username')
        if(user) {
            setUsername(user)
            fetchUserData(user)
        }

        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth) * 20
            const y = (e.clientY / window.innerHeight) * 20

            if (imageRef.current) {
                imageRef.current.style.transform = `translate(${x}px, ${y}px)`
            }

        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }


    }, [username])

    useEffect(() => {

        bubbleSound1Ref.current = new Audio('/HoverSounds/bubble1.mp3')
        useAudio.current = new Audio('/HoverSounds/time.mp3')

        bubbleSound1Ref.current.preload = 'auto'
        useAudio.current.preload = 'auto'

        useAudio.current.loop = true

    }, [])

    const toBack = () => {
        localStorage.setItem('reloadOnce', 'true')
        navigate('/main')
    }
    
    const toUpload = () => {
        useAudio.current.play()
        navigate('/upload')
    }

    if(isLoading) {
        return <AnimationLoading />
    }

    const bubblesound1 = () => {
        if (bubbleSound1Ref.current) {
            bubbleSound1Ref.current.currentTime = 0
            bubbleSound1Ref.current.play()
        }
    }

    return <>
            <div ref={imageRef} className='profile-main'></div>
            <div className='profile-container absolute top-0 left-0 w-full h-full'>
                {/* Top nav bar stats */}
                    <div className='profile-top w-full flex justify-between py-5 px-10'>
                        <div className='flex gap-4'>
                            <button onClick={toBack} className='discord-button flex gap-2 px-5 items-center'><img src='/authentication/home.png' /><span>HOME</span></button>
                            <button onClick={toUpload} className='discord-button flex gap-2 px-5 items-center'><span>UPLOAD</span></button>
                        </div>

                        <div className='flex gap-3'>
                            <div className='flex flex-col justify-center items-end'>
                                <span className='profile-username'>{username}</span>
                                <span className='profile-id'>ID:1237623483457</span>
                            </div>
                            <img src='/profile/profile.png'/>
                        </div>
                    </div>
                {/* Top nav bar ends */}

                {/* Profile Main Body Starts */}
                    <div className='w-full h-full  px-[100px]'>
                        <div className='flex flex-col w-full h-full py-10'>
                            <div className='w-full '>
                                <div className='px-5'>
                                    <img className='h-[430px] rounded-3xl w-full object-cover' src='/background/2.jpg' />
                                </div>
                        
                        {/* Image bar starts */}
                                <div className='image-bar flex items-center justify-between px-4'>
                                    
                                    {/* three box starts  */}
                                     <div className='total-detail text-center w-full flex'>
                                        <div className='count-detail flex flex-col items-center gap-3 px-10'>
                                            <span>Total Videos</span>
                                            <p>1956</p>
                                        </div>
                                        <div className='count-detail flex flex-col items-center gap-3 px-10'>
                                            <span>Videos Views</span>
                                            <p>237</p>
                                        </div>
                                        <div className='count-detail flex flex-col items-center gap-3 px-10'>
                                            <span>Total Videos</span>
                                            <p>1956</p>
                                        </div>
                                     </div>   
                                    {/* three box ends  */}

                                {/* Profile with Username Starts */}
                                     <div className='image-bar-profile w-full'>
                                        <div className='flex flex-col items-center relative top-[-70px] gap-4'>
                                            <img className='' src='/profile/imagebarprofile.png' />
                                            <span>{username}</span>
                                        </div>
                                     </div>
                                {/* Profile with Username Ends */}

                                {/* Just Fill up things starts */}
                                    <div className='total-detail w-full text-center flex items-center gap-6'>
                                        <div className='count-detail  w-full flex flex-col items-center gap-3 px-10'>
                                            <span>Total Videos</span>
                                            <p>1956</p>
                                        </div>
                                        <div className=' flex gap-4 w-full justify-center'>
                                            <button className='discord-button p-3'><img src='/profile/Discord.png' /></button>
                                            <button className='discord-button p-3'><img src='/profile/Discord.png' /></button>
                                        </div>
                                     </div>
                                {/* Just Fill up things Ends */}

                                </div>
                        {/* Image bar Ends*/}

                            </div>
                            <div className='upload-panel2 w-full'>
                                <div ref={triggerElement} className='upload-frame px-[70px] py-[30px]'>
                                    <span>YOUR UPLOAD'S</span>
                                </div>
                                <div className='main-uploads flex flex-wrap justify-center gap-y-4 gap-2 p-10 w-full]'>
                                    {/* Dyanimic Cards Starts */}
                                    {userData.map((user, index) => (
                                        <Link ref={(el) => (scaleVideoCard.current[index] = el)} onMouseEnter={bubblesound1} key={user.id} to={`/view/${user.id}`} className='profile-video-card w-[403px] flex flex-col gap-4 p-4 '>
                                            <div className='relative w-full h-[220px]'>
                                                <img className='user-image-profile w-full h-full object-cover' src={user.imageFile} alt='Profile' />
                                                <img className='absolute inset-0 m-auto w-[50px] h-[50px] opacity-0 transition-opacity duration-300' src='/profile/fastforward.png' alt='Fast Forward Icon' />
                                            </div>
                                                <div className='ti-di flex gap-4'>
                                                    <img className='w-[40px] h-[40px]' src='/profile/eclipse.png' />
                                                    <div className='flex flex-col'>
                                                        <span>{user.title}</span>
                                                        <p>{username}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                    {/* Dyanimic Cards Ends */}
                                </div>
                            </div>
                        </div>
                    </div>
                {/* Profile Main Body Ends */}
            </div>
    </>
}