import { useEffect, useRef, useState } from "react";
import StartingPage from "./StartingPage";

export default function Exprerience()
{
    const [initialAudio, setInitialAudio ] = useState(false)
    const audio = useRef(null)
    const clickSound = useRef(null)
    const hoverAudio = useRef(null)

    useEffect(() => {

        audio.current = new Audio('/HoverSounds/spiderman.mp3')
        clickSound.current = new Audio('/HoverSounds/mixkit-apocalyptic-stomp-impact-3057.wav')
        hoverAudio.current =new Audio('/HoverSounds/alterededition.wav')
        
        audio.current.preload = 'auto'
        clickSound.current.preload = 'auto'
        hoverAudio.current.preload = 'auto'

        audio.current.loop = true
    }, [hoverAudio])

    const enableAudio = () =>
    {
        setInitialAudio(true)

        audio.current.play()
    }

    const clickAudio = () =>
    {   
        clickSound.current.currentTime = 0
        clickSound.current.play()
    }

    const playAudio = () => {
        hoverAudio.current.currentTime = 0
        hoverAudio.current.play()
    }

    return <div className="absolute top-0 left-0 w-full h-full bg-black text-white overflow-hidden">
        {!initialAudio && (
            <div className="fade-out absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black text-white overflow-hidden">
                <button onMouseEnter={playAudio} onClick={() => {clickAudio(), enableAudio()}} className=" p-8 font-semibold border border-white rounded-full text-2xl hover:rounded">Start Explore</button>
            </div>
        )}
        
        {initialAudio && (
            <div className="fade-in transition-opacity duration-1000">
                <StartingPage playAudio={playAudio} />
            </div>
        )}
       
    </div>
}