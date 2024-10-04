import './ParallaxVideo.css';
import { useRef, useEffect } from 'react';

export default function ParallaxVideo() {
    const videoRef = useRef();

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth) * 20;
            const y = (e.clientY / window.innerHeight) * 20;

            if (videoRef.current) {
                videoRef.current.style.transform = `translate(${x}px, ${y}px)`; // Move the video based on mouse position
            }
        };

        // Add event listener when the component mounts
        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div className="video-container">
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                className="parallax-video"
                src="ivanthandamassuh.mp4" // Replace with your video file
            />
        </div>
    );
}
