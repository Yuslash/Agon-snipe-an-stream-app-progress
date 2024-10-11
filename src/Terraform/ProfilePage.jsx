import { useEffect, useState } from 'react'
import './Profile.css'


export default function ProfilePage() {

    const [ username, setUsername] = useState("")

    useEffect(() => 
    {

        const user = localStorage.getItem('username')
        if(user) {
            setUsername(user)
        }

    }, [])

    return <>
            <div className='profile-main'></div>
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
                            </div>
                        </div>
                    </div>
                {/* Profile Main Body Ends */}
            </div>
    </>
}