import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import './IconUpload.css'

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

    return <div className="main-upload absolute flex justify-center items-center top-0 left-0 w-full h-full text-white px-[120px] py-[40px]">
        <div className="upload-panel p-5 w-full h-full flex">
            <div className="w-full flex flex-col gap-2 py-10 px-16 ">
                <span className=" text-3xl font-semibold">Let's Upload Your Monster Content! ✨</span>
                <span className=" text-sm font-normal">All fields are Required and Select both Images and Video to Upload</span>

                <div className="all-input-field flex flex-col gap-4 mt-4">
                    <span className="text-xl tracking-wide text-gray-300 font-semibold">Enter Title For The Video</span>
                    <input
                     
                     className="super-input-field w-full"    
                    placeholder="Title"

                    />

                    <span className="text-xl tracking-wide text-gray-300 font-semibold">Enter Description For The Video</span>
                    <textarea
                     
                     className="super-input-field h-[120px] w-full"    
                    placeholder="Description"

                    />
                    
                    <h1 className="text-xl tracking-wide">Select Game</h1>
                    <select className="super-input-field">
                        <option></option>
                    </select>

                    <div className="flex gap-4 w-full h-full">
                        {/* Blue Image with File Upload */}
                        <label className="flex-1 cursor-pointer">
                            <img className="w-full h-full object-contain" src="/upload/uploadblue.png" alt="Upload Blue" />
                            <input type="file" className="hidden" accept="video/*" />
                        </label>

                        {/* Purple Image with File Upload */}
                        <label className="flex-1 cursor-pointer">
                            <img className="w-full h-full object-contain" src="/upload/uploadpurple.png" alt="Upload Purple" />
                            <input type="file" className="hidden" accept="image/*" />
                        </label>
                    </div>

                    <button className="discord-button py-4 rounded-lg font-semibold text-xl">Upload</button>


                </div>

            </div>
            <img src="/some.png" className="w-[660px] rounded-2xl"></img>
        </div>
    </div>
}