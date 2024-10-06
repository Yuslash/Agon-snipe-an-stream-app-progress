import { useEffect, useState } from "react";
import StartingPage from "./StartingPage";

export default function Exprerience()
{
    const [initialAudio, setInitialAudio ] = useState(false)
    let audio

    useEffect(() => {

        audio = new Audio('/HoverSounds/spiderman.mp3')
        
        audio.preload = 'auto'

        audio.loop = true
    }, [])

    const enableAudio = () =>
    {
        setInitialAudio(true)

        audio.play()
    }

    return <div className="absolute top-0 left-0 w-full h-full bg-black text-white overflow-hidden">
        {!initialAudio && (
            <div className="fade-out absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black text-white overflow-hidden">
                <button onClick={enableAudio} className=" p-8 font-semibold border border-white rounded-full text-2xl hover:rounded">Start Explore</button>
            </div>
        )}
        
        {initialAudio && (
            <div className="fade-in transition-opacity duration-1000">
                <StartingPage />
            </div>
        )}
       
    </div>
}