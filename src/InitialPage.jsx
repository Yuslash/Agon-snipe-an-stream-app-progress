import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function InitialPage() {

    const [startButton, setStartButton] = useState(false)

    const hanldeButton = () => {
        setStartButton(true)
    }

    const navigate = useNavigate()

    const navi = () => {
        navigate("/init")
    }

    return <>
        <div className="absolute top-0 left-0 w-full h-full text-xl text-white">
            {!startButton ? (
                <div className="text-white w-full h-full flex justify-center items-center">
                    <button onClick={hanldeButton}>Start</button>
                </div>
            ) : (
            <>
                <video
                    autoPlay
                    loop
                    className="ivanthanda object-cover w-full h-full absolute top-0 left-0 z-10 pointer-events-none"
                    src="/ea.mp4"
                ></video>
                <button className="w-full h-full" onClick={navi}></button>
            </>
            )}
        </div>
    </>
}