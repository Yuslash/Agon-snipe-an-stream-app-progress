import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import AnimationLoading from "../Animations/AnimationLoading"

export default function RedStartPage({ playAudio, videoRef, stopAudio }) {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)

    const timeAudio = useRef(null)

    useEffect(() => {

        timeAudio.current = new Audio('/HoverSounds/freefire.mp3')

        timeAudio.current.preload = 'auto'

        timeAudio.current.loop = true

    }, [])

    const toLogin = () => {
        stopAudio.pause()
        stopAudio.currentTime = 0

        setIsLoading(true)

        const fakeLoadingTime = 3000

        setTimeout(() => {
            setIsLoading(false)
            navigate('/mass')
            timeAudio.current.play()
        }, fakeLoadingTime)
    }

    const toSignup = () => {
        stopAudio.pause()
        stopAudio.currentTime = 0

        setIsLoading(true)

        const fakeLoadingTime = 3000

        setTimeout(() => {
            setIsLoading(false)
            navigate('/signup')
        }, fakeLoadingTime)
    }

    if (isLoading) { return <AnimationLoading /> }


    return <>
        <div className="mass w-full h-full absolute top-0 left-0 bg-black overflow-hidden">
            <video
                ref={videoRef}
                autoPlay
                className="ivanthanda object-cover w-full h-full"
                src="mrmass.webm"
                loop
                muted
            />
        </div>
        <div className="gradient-over flex absolute top-0 left-0 w-full h-full ">
            <div className="top-nav z-20 absolute top-0 left-0 w-full bg-blue-400 ">
                <img className="flex-shrink-0 w-[200px] h-auto" src="redlogo.png" />
                <div className="top-midcon pl-40 ">
                    <span>Home</span>
                    <span>About</span>
                    <span>Nothing</span>
                    <span>Contact</span>
                </div>
                <div className="flex gap-2">
                    <img onClick={toSignup} onMouseEnter={playAudio} className="redgethover" src="/Buttons/redgethoverbefore.png" />
                    <img onClick={toLogin} onMouseEnter={playAudio} className="redgetreverse" src="/Buttons/loginhoverbefore.png" />
                </div>
            </div>

            <div className="left-row w-full h-full justify-center flex flex-col ">

                <div className="flex flex-col mt-20 gap-5 px-[180px] ">


                    <div className=" w-full flex px-28 ">
                        <span className="over floating">overwatch</span>
                    </div>
                    <span className="the-hunt floating">ARE YOU <br /> IS READY</span>
                    <span className="kaka floating">Some Description about something that is
                        not look correct so be care full</span>


                    <div className=" flex px-20 mt-6 w-full">
                        <img onMouseEnter={playAudio} className="fortnite-button" src="/Buttons/red.png"></img>
                    </div>


                </div>

            </div>

            <div className="right-row w-full h-full flex items-end py-60 "></div>
        </div>
    </>
}