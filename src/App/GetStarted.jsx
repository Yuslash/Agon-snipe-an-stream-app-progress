import DarkGreen from "./DarkGreen";
import { useRef, useEffect, useState } from "react";

export default function GetStarted()
{
    const [ audioEnabled, setAudioEnabled ] = useState(false)
    const [ initialAudio, setInitialAudio] = useState(null)

    const videoRef = useRef();

    useEffect(() =>
    {   
        const audio = new Audio('HoverSounds/freefire.mp3')
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
        <div className=" w-full h-full absolute top-0 left-0 p-2 ">
            {!audioEnabled && (
                <div className="enable-audio text-white">
                    <button onClick={enableAudio}>Enable Audio</button>
                </div>
            )}
            {audioEnabled && (
                <DarkGreen videoRef={videoRef} />
            )}
        </div>
    </>
}