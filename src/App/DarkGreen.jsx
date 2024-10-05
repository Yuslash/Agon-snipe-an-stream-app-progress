import '../Parallax/ParallaxVideo.css'

export default function DarkGreen({videoRef})
{

    return <>
        <div className="video-container">
        <div className=' top-nav'></div>
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                className="parallax-video"
                src="ivanthandamassuh.mp4" // Replace with your video file
            />
            <div className="gradient-overlay"></div>
        </div>
    </>
}