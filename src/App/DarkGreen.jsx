import { useEffect } from 'react'
import '../Parallax/ParallaxVideo.css'

export default function DarkGreen({videoRef})
{
    const hoverSound = new Audio('HoverSounds/alterededition.wav')

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

    return <>
        <div className="video-container">
        <div className=' top-nav'>
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
            <div className="gradient-overlay"></div>
        </div>
    </>
}