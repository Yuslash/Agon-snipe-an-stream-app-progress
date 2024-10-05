import { useEffect, useState } from 'react'
import '../Parallax/ParallaxVideo.css'

export default function DarkGreen({videoRef})
{
    const hoverSound = new Audio('HoverSounds/alterededition.wav')
    const [ isHovered, setIsHovered ] = useState(false)

    useEffect(() =>
    {
        hoverSound.preload = 'auto'
        hoverSound.load()
    } ,[hoverSound])

    const handleMouseEnter = () =>
    {
        hoverSound.currentTime = 0
        hoverSound.play()
    }

    const handleHoverEnter = () =>
    {
        setIsHovered(true)
    }

    const handleHoverLeave = () =>
    {
        setIsHovered(false)
    }

    return <>
        <div className="video-container">
            <div
                className='hover-trigger'
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
            ></div>

            <div className={`top-nav ${isHovered ? 'visible' : ''}`}
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
            >
            <img src='Logo.png'></img>
            <div className='hero-tags text-white'>
                <span>Home</span>
                <span>About</span>
                <span>Home</span>
                <span>Contact</span>
            </div>
                <img onMouseEnter={handleMouseEnter} className='hover-button' src='/Buttons/gethoverbefore.png'></img>
        </div>
        
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                className="parallax-video"
                src="ivanthandamassuh.webm" // Replace with your video file
            />
            <div className="gradient-overlay">
                <div className='flex-content w-full h-full'>
                    <div className='flex flex-col max-w-[600] text-wrap h-auto items-start text-center px-5 relative mt-[300px] ml-[120px]'>
                        <div className=' w-[420px]'>
                            <p className='over mb-5 '>overwatch</p>
                        </div>
                        <h1 className='main-head'>The Hunt <br />Is Await</h1>
                        <p className='kakabo relative left-[15px] text-left '>Some Description about something that is <br />
                            not look correct so be care full</p>
                        <div className='master w-[420px] mt-8 flex justify-center'>
                            <img className='hover-scale' src='/Buttons/fortnite.png'></img>
                        </div>
                    </div>
                </div>
                <div className=' w-full h-full'></div>
            </div>
        </div>
    </>
}