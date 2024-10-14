import { useNavigate } from 'react-router-dom'
import './Auth.css'
import './Astro.css'
import { useEffect, useRef, useState } from 'react'
import { toast, ToastContainer, Bounce } from 'react-toastify'

export default function AstroLoginPage() {
    const navigate = useNavigate()
    const wooshRef = useRef(null)
    const imageRef = useRef()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {

        wooshRef.current = new Audio('/HoverSounds/woosh.wav')

        wooshRef.current.preload = 'auto'

    }, [])

    useEffect(() => {

        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth) * 5
            const y = (e.clientY / window.innerHeight) * 5

            if (imageRef.current) {
                imageRef.current.style.transform = `translate(${x}px, ${y}px)`
            }

        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }

    }, [])

    const wooshSound = () => {
        wooshRef.current.currentTime = 0
        wooshRef.current.play()
    }

    const home = () => {
        navigate('/init')
    }

    const moveToReg = () => {
        navigate('/signup')
    }

    const checkUserData = async () => {

        if (!username || !password) {
            toast.warn(' All Fields Are Required', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            })
            return
        }

        const response = await fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ username, password })
        })

        const data = await response.json()

        if (response.status === 200) {
            toast.success('Login Successfully..', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                onClose: () => {
                    navigate('/profile')
                }
            })

            const token = import.meta.env.VITE_TOKEN

            localStorage.setItem('username', username)
            localStorage.setItem('authToken', token)
            localStorage.removeItem('guestToken')

        } else if (response.status === 404) {
            toast.error(data.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            })
        } else if (response.status === 400) {
            toast.error(data.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            })
        } else {
            toast.error("An error occurred. Please try again.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            })
        }
    }

    return <div ref={imageRef} className="login-image w-full h-full absolute top-0 left-0 bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center" style={{ backgroundImage: "url('/authentication/background/3.jpg')" }}>
        <ToastContainer />
        <div className='astro-top-navbar py-3 px-8 flex justify-between absolute top-0 left-0 w-full'>
            <div className='flex items-center gap-4'>
                <img src='/authentication/logo.svg' />
                <span className='agon-head'>AGON SNIPE</span>
            </div>

            <button onClick={() => { home(), wooshSound() }} className='discord-button flex gap-2 px-5 items-center'><img src='/authentication/home.png' /><span>GO BACK</span></button>
        </div>
        <div className="astro-login-panel mt-[120px] px-9 relative flex flex-col justify-center items-center w-[430px]">
            <img className='relative top-[-50px]' src='/authentication/profile.png' />
            <span className='superwelcome-text'>WELCOME BACK</span>
            <div className='astro-main-buttons-hold flex w-full p-1 mt-7 tracking-wider rounded-2xl justify-center'>
                <button onClick={moveToReg} className='astro-regiser-button w-full rounded-2xl'>REGISTER</button>
                <button className='astro-login-button w-full rounded-2xl'>LOGIN</button>
            </div>
            <div className=' w-full flex gap-1 flex-col mt-4'>
                <span className='astro-above-text'>Username</span>
                <input
                    className='astro-text-input p-4'
                    placeholder='Enter Your Username'
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div className=' w-full flex gap-1 flex-col mt-4'>
                <span className='astro-above-text'>Password</span>
                <input
                    className='astro-text-input p-4'
                    placeholder='Enter Your Password'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className='flex flex-col gap-5 w-full justify-center mt-[60px]'>
                <button onClick={checkUserData} className='astro-to-account w-full py-4'><span>LOGIN TO ACCOUNT</span></button>
                <img className='' src='/authentication/orline.png'></img>
                <button className='discord-button mb-[30px] py-[15px] flex justify-center items-center gap-[10px]'><img src='/authentication/discord.png'></img><span>LOGIN WITH DISCORD</span></button>
            </div>
        </div>
    </div>
}