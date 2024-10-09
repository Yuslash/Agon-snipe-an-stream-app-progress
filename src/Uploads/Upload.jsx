import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import './IconUpload.css'
import Site from "./Site"
import Bubbles from "./Bubbles"

export default function Upload() {

    const navigate = useNavigate()

    useEffect(() => {

        const expectedToken = import.meta.env.VITE_TOKEN
        const localToken = localStorage.getItem('authToken')

        const expectedGuestToken = import.meta.env.VITE_GUEST_TOKEN
        const guestLocalToken = localStorage.getItem('guestToken')

        if (
            (expectedToken && expectedToken !== localToken) &&
            (expectedGuestToken && expectedGuestToken !== guestLocalToken)
        ) {
            navigate('/signup');
        }

    }, [navigate])

    return <div className="main-upload absolute top-0 left-0 w-full h-full text-white px-96">
        <div className="upload-panel flex">
            <div className="w-full"></div>
            <div className="w-[560px]"></div>
        </div>
    </div>
}