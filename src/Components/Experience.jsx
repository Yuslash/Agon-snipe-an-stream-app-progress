import { useEffect, useRef, useState } from "react";
import StartingPage from "./StartingPage";
import RedStartPage from "./RedStartPage";
import BlackMythPage from "./BlackMythPage";
import FortStartPage from "./FortStartPage";
import SoloStartPage from "./SoloStartPage";
import MonsterStartPage from "./MonsterStartPage";
import AnimationLoading from "../Animations/AnimationLoading";

export default function Exprerience()
{
    const [initialAudio, setInitialAudio ] = useState(false)
    const [ activePanel, setActivePanel ] = useState('starting')
    const [ isLoading, setIsLoading] = useState(true)
    const audio = useRef(null)
    const clickSound = useRef(null)
    const hoverAudio = useRef(null)
    const cameraShutter = useRef(null)

    const videoRef = useRef()

    useEffect(() =>
    {   
    
        const handleMouseMove = (e) =>
        {
            const x = (e.clientX / window.innerWidth) * 20
            const y = (e.clientY / window.innerHeight) * 20

            if(videoRef.current){
                videoRef.current.style.transform = `translate(${x}px, ${y}px)`
            }

        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }

    }, [])

    useEffect(() => {

        audio.current = new Audio('/HoverSounds/spiderman.mp3')
        clickSound.current = new Audio('/HoverSounds/mixkit-apocalyptic-stomp-impact-3057.wav')
        hoverAudio.current =new Audio('/HoverSounds/alterededition.wav')
        cameraShutter.current = new Audio('/HoverSounds/camerashutter.mp3')

        audio.current.preload = 'auto'
        clickSound.current.preload = 'auto'
        hoverAudio.current.preload = 'auto'
        cameraShutter.current.preload = 'auto'

        audio.current.loop = true

        
    }, [])

    useEffect(() => {
        const fakeLoadingTime = 3000 // 3 seconds fake loading time

        const fakeLoading = setTimeout(() => {
            setIsLoading(false)
        }, fakeLoadingTime)

        return () => clearTimeout(fakeLoading) // Clear timeout if component unmounts
    }, [])

    const enableAudio = () =>
    {
        setInitialAudio(true)

        audio.current.play()

        setIsLoading(true)
        const fakeLoadingTime = 3000 // 3 seconds fake loading time

        setTimeout(() => {
            setIsLoading(false) // Set loading to false after 3 seconds
        }, fakeLoadingTime)
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

    const cameraAudio = () => {
        cameraShutter.current.currentTime = 0
        cameraShutter.current.play()
    }

    //This function updates the activePanel state based on the panel name passed in the argument.
    const switchPanel = (panelName) => {
        clickAudio()
        setActivePanel(panelName)
    }

    if (isLoading) {
        return <AnimationLoading />
    }

    const renderPanel = () => {
        switch (activePanel) {
            case 'starting':
                return <StartingPage stopAudio={audio.current} videoRef={videoRef} playAudio={playAudio} />
            case 'red':
                return <RedStartPage stopAudio={audio.current} videoRef={videoRef} playAudio={playAudio} />
            case 'black':
                return <BlackMythPage stopAudio={audio.current} videoRef={videoRef} playAudio={playAudio} />
            case 'fort':
                return <FortStartPage stopAudio={audio.current} videoRef={videoRef} playAudio={playAudio} />
            case 'solo':
                return <SoloStartPage stopAudio={audio.current} videoRef={videoRef} playAudio={playAudio}/>
            case 'monster':
                return <MonsterStartPage stopAudio={audio.current} videoRef={videoRef} playAudio={playAudio} />     
            default:
                return <StartingPage stopAudio={audio.current} videoRef={videoRef} playAudio={playAudio} />
        }
    }
    

    return <div className="absolute top-0 left-0 w-full h-full bg-black text-white overflow-hidden">
        {!initialAudio && (
            <div className="fade-out absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black text-white overflow-hidden">
                <button onMouseEnter={playAudio} onClick={() => {clickAudio(), enableAudio()}} className=" p-8 font-semibold border border-white rounded-full text-2xl hover:rounded">Start Explore</button>
            </div>
        )}
        
        {initialAudio && (
            <div className="fade-in transition-opacity duration-1000">
                {renderPanel()}
                <div className="frame-panel pointer-events-none flex w-full h-full absolute top-0 left-0 to-blue-400">
                    <div className=" w-full "></div>
                    <div className="right-box-panel  pointer-events-auto w-full z-10 flex items-end py-44">
                        <div className="page-frame w-full p-2 flex gap-2">
                            
                            <button 
                            onMouseEnter={cameraAudio} 
                            onClick={() => switchPanel('starting')} 
                            className="frame-green w-[180px]  rounded p-1"
                            >
                                <img 
                                className="rounded" 
                                src="/framepage/hunt.png" 
                                />

                            </button>
                            
                            <button 
                            onMouseEnter={cameraAudio} 
                            onClick={() => switchPanel('red')} 
                            className="frame-red w-[180px] rounded  p-1"
                            >
                                <img 
                                className="rounded" 
                                src="/framepage/redpage.png"                                    
                                />

                            </button>
                            
                            <button 
                            onMouseEnter={cameraAudio} 
                            onClick={() => switchPanel('fort')} 
                            className="frame-fort w-[180px] rounded  p-1">
                                <img 
                                className="rounded" 
                                src="/framepage/fort.png" 
                                />

                            </button>
                            
                            <button 
                            onMouseEnter={cameraAudio} 
                            onClick={() => switchPanel('black')} 
                            className="frame-black w-[180px] rounded  p-1"
                            >
                                <img 
                                className="rounded" 
                                src="/framepage/blackmyth.png"                                    
                                />

                            </button>

                            <button 
                            onMouseEnter={cameraAudio} 
                            onClick={() => switchPanel('solo')} 
                            className="frame-solo w-[180px] rounded  p-1"
                            >
                                <img 
                                className="rounded" 
                                src="/framepage/solo.png"                                   
                                />

                            </button>

                            <button 
                            onMouseEnter={cameraAudio} 
                            onClick={() => switchPanel('monster')}
                             className="frame-monster w-[180px] rounded  p-1"
                             >
                                <img 
                                className="rounded" 
                                src="/framepage/monster.png" 
                                />

                            </button>

                        
                        </div>
                    </div>
                </div>
                
            </div>
        )}
       
    </div>
}