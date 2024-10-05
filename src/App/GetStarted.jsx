import DarkGreen from "./DarkGreen";
import { useRef, useEffect, useState } from "react";

export default function GetStarted()
{
    const [ audioEnabled, setAudioEnabled ] = useState(false)
    const [ initialAudio, setInitialAudio] = useState(null)

    const videoRef = useRef();

    useEffect(() =>
    {   
        const audio = new Audio('HoverSounds/spiderman.mp3')
        audio.preload = 'auto'
        setInitialAudio(audio)
    }, [])

    const enableAudio = () =>
    {
        if (initialAudio) {
            initialAudio.loop = true
            initialAudio.play()
            setAudioEnabled(true)
        }
    }

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth) * 20;
            const y = (e.clientY / window.innerHeight) * 20;

            if (videoRef.current) {
                videoRef.current.style.transform = `translate(${x}px, ${y}px)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove)


        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return <>
        <div className="adipoli w-full h-full absolute top-0 left-0 p-2 ">
            {!audioEnabled && (
                <div className="enable-audio w-full h-full absolute top-0 left-0 flex justify-center items-center text-white">
                    <button className=" bg-green-800 p-6 rounded-full hover:rounded font-semibold text-md border border-green-700 transition-all duration-300 ease-in-out" onClick={enableAudio}>Enable Audio</button>
                </div>
            )}
            {audioEnabled && (
                <>
                    <DarkGreen videoRef={videoRef} />
                </>
            )}
        </div>
    </>
}