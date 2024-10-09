import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import './IconUpload.css'
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

    return <div className="main-upload z-50 absolute flex justify-center items-center top-0 left-0 w-full h-full text-white px-[160px] py-20">
        <Bubbles />
        <div className="upload-panel p-5 w-full h-full flex">
            <div className="w-full h-full flex flex-col gap-2 py-10 px-16 ">
                <span className=" text-3xl font-semibold">Let's Upload Your Monster Content! ✨</span>
                <span className=" text-sm font-normal">All fields are Required and Select both Images and Video to Upload</span>

                <div className="all-input-field flex flex-col gap-4 mt-4">
                    <input
                     
                     className="super-input-field w-full"    
                    placeholder="Title"

                    />

                    <textarea
                     
                     className="super-input-field h-[120px] w-full"    
                    placeholder="Description"

                    />
                    
                    <h1 className="text-xl tracking-wide">Select Game</h1>
                    <select className="super-input-field">
                        <option value="">Select an option</option> {/* Default placeholder option */}
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                        <option value="option4">Option 4</option>
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
                <div className="w-[1130px] h-full bg-violet-500 rounded-xl flex justify-center items-center">
                    <span className="text-2xl font-semibold">PREVIEW</span>
                </div>
        </div>
    </div>
}