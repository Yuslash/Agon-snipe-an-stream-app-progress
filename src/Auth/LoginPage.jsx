import { useNavigate } from 'react-router-dom'
import './Auth.css'
import { useEffect, useRef } from 'react'

export default function LoginPage()
{
    const navigate = useNavigate()
    const wooshRef = useRef(null)
    const imageRef = useRef()

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

    const home = () =>
    {
        navigate('/init')
    }

    const moveToReg = () =>
    {
        navigate('/signup')
    }

    return <div ref={imageRef} className="login-image w-full h-full absolute top-0 left-0 bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center" style={{ backgroundImage: "url('/authentication/5.png')" }}>
            <div className='top-navbar py-3 px-8 flex justify-between absolute top-0 left-0 w-full'>
                    <div className='flex items-center gap-4'>
                    <img src='/authentication/logo.svg' />
                    <span className='agon-head'>AGON SNIPE</span>
                    </div>

                    <button onClick={() => {home(), wooshSound()}} className='discord-button flex gap-2 px-5 items-center'><img src='/authentication/home.png' /><span>GO BACK</span></button>           
            </div>
        <div className="login-panel mt-[120px] px-9 relative flex flex-col justify-center items-center w-[430px]">
            <img className='relative top-[-50px]' src='/authentication/profile.png' />
            <span className='superwelcome-text'>WELCOME</span>
            <div className='main-buttons-hold flex w-full p-1 mt-7 tracking-wider rounded-2xl justify-center'>
                <button onClick={moveToReg} className='regiser-button w-full rounded-2xl'>REGISTER</button>
                <button  className='login-button w-full rounded-2xl'>LOGIN</button>
            </div>
            <div className=' w-full flex gap-1 flex-col mt-4'>
                <span className='above-text'>Username</span>
                <input 
                className='text-input p-4'
                placeholder='Enter Your Username'
                type='text'                    
                />
            </div>

            <div className=' w-full flex gap-1 flex-col mt-4'>
                <span className='above-text'>Password</span>
                <input 
                className='text-input p-4'
                placeholder='Enter Your Password'
                type='password'                    
                />
            </div>

            <div className='flex flex-col gap-5 w-full justify-center mt-[60px]'>
                <button className='to-account w-full py-4'><span>LOGIN TO ACCOUNT</span></button>
            <img className='' src='/authentication/orline.png'></img>
            <button className='discord-button mb-[30px] py-[15px] flex justify-center items-center gap-[10px]'><img src='/authentication/discord.png'></img><span>LOGIN WITH DISCORD</span></button>
            </div>
        </div>
    </div>
}