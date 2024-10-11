import { useEffect, useRef, useState } from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'


export default function ProfilePage() {

    const [ username, setUsername] = useState("")
    const imageRef = useRef()

    useEffect(() => 
    {

        const user = localStorage.getItem('username')
        if(user) {
            setUsername(user)
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


    }, [])

    return <>
            <div ref={imageRef} className='profile-main'></div>
            <div className='profile-container absolute top-0 left-0 w-full h-full'>
                {/* Top nav bar stats */}
                    <div className='profile-top w-full flex justify-between py-5 px-10'>
                        <button className='discord-button flex gap-2 px-5 items-center'><img src='/authentication/home.png' /><span>GO BACK</span></button>

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
                                <div className='image-bar'></div>
                            </div>
                            <div className='upload-panel w-full'>
                                <div className='upload-frame px-[70px] py-[30px]'>
                                    <span>YOUR UPLOAD'S</span>
                                </div>
                                <div className='main-uploads flex gap-2 p-10 w-full]'>
                                    <Link className='profile-video-card w-[404px] flex flex-col gap-4 p-4 '>
                                        <img className='h-[220px] object-cover' src='/background/3.jpg' />
                                        <div className='ti-di flex gap-4'>
                                        <img src='/profile/eclipse.png' />
                                            <div className='flex flex-col'>
                                                <span>Title of the weak goes to</span>
                                                <p>Desiption at peak</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* Profile Main Body Ends */}
            </div>
    </>
}