import { useNavigate } from 'react-router-dom'
import './Auth.css'
import { useEffect, useRef, useState } from 'react'
import { toast, ToastContainer, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function SignUpPage() {
    const navigate = useNavigate()
    const wooshRef = useRef(null)
    const imageRef = useRef()
    const [guestName, setGuestName ] = useState('')
    const [username, setUsername] = useState('')
    const [ password, setPassword] = useState('') 

    useEffect(() => {

        const randomNum = Math.floor(100 + Math.random() * 900)
        setGuestName(`MasterSo_${randomNum}`)

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

    const moveToLogin = () =>
    {
        navigate('/login')
    }

    const addUser = async () => {

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
            });
            return
        }

        try {
            const response = await fetch('http://localhost:3000/signup', {
                method : "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ username, password })
            })

            const data = await response.json()

            if(response.status === 201) {
                toast.success('User Added Successfully..', {
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
                        navigate('/upload')
                    }
                })
                
                const token = import.meta.env.VITE_TOKEN

                localStorage.setItem('username', username)
                localStorage.setItem('authToken', token)

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
                }) }
            
        } catch (error) {
            console.error(error)
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

    const continueWithGuest = () => {

        const token = import.meta.env.VITE_GUEST_TOKEN

        localStorage.setItem('guestToken', token)
        localStorage.setItem('username', guestName)

        localStorage.removeItem('authToken')

        navigate('/main')
    }


    return <div ref={imageRef} className="login-image w-full h-full absolute top-0 left-0 bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center" style={{ backgroundImage: "url('/authentication/5.png')" }}>
        <ToastContainer theme='colored' position='top-center' />
        <div className='top-navbar py-3 px-8 flex justify-between absolute top-0 left-0 w-full'>
            <div className='flex items-center gap-4'>
                <img src='/authentication/logo.svg' />
                <span className='agon-head'>AGON SNIPE</span>
            </div>

            <button onClick={() => { home(), wooshSound() }} className='discord-button flex gap-2 px-5 items-center'><img src='/authentication/home.png' /><span>GO BACK</span></button>
        </div>
        <div className='flex gap-6 mt-[120px]'>
            <div className="login-panel px-9 relative flex flex-col justify-center items-center w-[430px]">
                <div className='flex'>

                <div className='flex h-7 items-center justify-center gap-4 mt-11'>
                    <img src='/authentication/signuplogo.png' />
                    <span className='welcome-text'>AGON SNIPE</span>
                </div>

                </div> 
            <div className='main-buttons-hold flex w-full p-1 mt-7 tracking-wider rounded-2xl justify-center'>
                <button className='regreg-button w-full rounded-2xl'>REGISTER</button>
                <button onClick={moveToLogin} className='loginreg-button w-full rounded-2xl'>LOGIN</button>
            </div>
            <div className=' w-full flex gap-1 flex-col mt-4'>
                <span className='above-text'>Username</span>
                <input
                    className='text-input p-4'
                    placeholder='Enter Your Username'
                    type='text'
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div className=' w-full flex gap-1 flex-col mt-4'>
                <span className='above-text'>Password</span>
                <input
                    className='text-input p-4'
                    placeholder='Enter Your Password'
                    type='password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className='flex flex-col gap-5 w-full justify-center mt-[60px]'>
                    <button onClick={addUser} className='to-account w-full py-4'><span>CREATE AN ACCOUNT</span></button>
                <img className='' src='/authentication/orline.png'></img>
                <button className='discord-button mb-[30px] py-[15px] flex justify-center items-center gap-[10px]'><img src='/authentication/discord.png'></img><span>SIGNUP WITH DISCORD</span></button>
            </div>
            </div>
            <div className='guest-reg w-[430px] flex justify-center '>
                <div className='relative top-[-50px] w-full flex flex-col gap-5 items-center'>
                    <img src='/authentication/profile.png' />
                    <span className='guest-name'>{guestName}</span>
                <div className='w-full px-[75px]'>
                        <button onClick={continueWithGuest} className='guest-button w-full flex justify-center items-center gap-2 py-[10px] '><img src='/authentication/rocket.png' /><span>CONTINUE WITH GUEST</span></button>
                </div>
                </div>
            </div>
        </div>
    </div>
}