import DarkGreen from "./DarkGreen";
import { useRef, useEffect } from "react";

export default function GetStarted()
{

    const videoRef = useRef();

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
            <DarkGreen videoRef={videoRef} />
        </div>
    </>
}