import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import './IconUpload.css'
import Bubbles from "./Bubbles"
import UploadAnimation from "../Animations/UploadAnimation"
import { toast, ToastContainer, Bounce } from "react-toastify"
import ImageUploadAnimation from "../Animations/ImageUploadAnimation"

export default function Upload() {
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [username, setUsername] = useState("")
    const [imageFile, setImageFile] = useState(null)
    const [videoUrl, setVideoUrl] = useState("")

    const [searchTerm, setSearchTerm] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState('')

    const [uploadingProgress, setUploadingProgress] = useState(0)
    const [uploadingVideo, setUploadingVideo] = useState(false)

    const [imageUploadSuccess, setImageUploadSuccess] = useState(false)
    const [videoUploadSuccess, setVideoUploadSuccess] = useState(false)

    const [imageUploadingProgress, setImageUploadingProgress] = useState(0)
    const [imageUploading, setImageUploading] = useState(false)

    const options = [
        { value: 'cyberpunk2077', label: 'Cyberpunk 2077' },
        { value: 'minecraft', label: 'Minecraft' },
        { value: 'fortnite', label: 'Fortnite' },
        { value: 'apexLegends', label: 'Apex Legends' },
        { value: 'theWitcher3', label: 'The Witcher 3: Wild Hunt' },
        { value: 'eldenRing', label: 'Elden Ring' },
        { value: 'leagueOfLegends', label: 'League of Legends' },
        { value: 'callOfDutyMW2', label: 'Call of Duty: Modern Warfare II' },
        { value: 'redDeadRedemption2', label: 'Red Dead Redemption 2' },
        { value: 'overwatch2', label: 'Overwatch 2' },
        { value: 'valorant', label: 'Valorant' },
        { value: 'haloInfinite', label: 'Halo Infinite' },
        { value: 'pubg', label: 'PUBG: Battlegrounds' },
        { value: 'gtaV', label: 'Grand Theft Auto V' },
        { value: 'doomEternal', label: 'Doom Eternal' },
    ]

    const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleOptionClick = (option) => {
        setSelectedOption(option.label)
        setIsOpen(false)
    }

    useEffect(() => {
        const user = localStorage.getItem('username')
        if(user) {
            setUsername(user)
        }

        const expectedToken = import.meta.env.VITE_TOKEN
        const localToken = localStorage.getItem('authToken')
        const expectedGuestToken = import.meta.env.VITE_GUEST_TOKEN
        const guestLocalToken = localStorage.getItem('guestToken')

        if (
            (expectedToken && expectedToken !== localToken) &&
            (expectedGuestToken && expectedGuestToken !== guestLocalToken)
        ) {
            navigate('/signup')
        }
    }, [navigate])


    const uploadData = async () => {
        if (!title || !description || !imageFile || !selectedOption || !videoUrl) {
            toast.warn('All Fields Are Required', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            })
            return
        }

        const formData = {
            title,
            description,
            username,
            imageFile, // Cloudinary URL
            game: selectedOption,
            videoUrl // Cloudinary URL
        };

        const response = await fetch('http://localhost:3000/upload', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            toast.success('Upload Successful!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            })
            setUsername('')
            setTitle('')
            setDescription('')
            setImageFile(null)
            setSelectedOption('')
            setVideoUrl('')
            setUploadingProgress(0)
            setUploadingVideo(false)
            setImageUploadSuccess(false) // Reset image upload success
            setVideoUploadSuccess(false)
        }
    }

    const handleVideoUrl = async (event) => {
        const video = event.target.files[0]
        const formData = new FormData()
        formData.append("file", video)
        formData.append("upload_preset", "Just_Got_Here")
        formData.append("cloud_name", "dpxm4k7v5")

        setUploadingVideo(true)

        const xhr = new XMLHttpRequest()
        xhr.open("POST", "https://api.cloudinary.com/v1_1/dpxm4k7v5/video/upload")

        xhr.upload.onprogress = (event) => {
            if (event.lengthComputable) {
                const percentageComplete = Math.round((event.loaded * 100) / event.total)
                setUploadingProgress(percentageComplete)
            }
        }

        xhr.onload = () => {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText)
                setVideoUrl(response.url)
                setVideoUploadSuccess(true)
                setUploadingVideo(false)
                setUploadingProgress(0)
            } else {
                toast.error('Video Upload Failed. Please try again.', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                })
                setUploadingVideo(false)
                setUploadingProgress(0)
            }
        }

        xhr.onerror = () => {
            toast.error('Video Upload Failed. Please try again.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            })
            setUploadingVideo(false)
            setUploadingProgress(0)
        }

        xhr.send(formData)
    }

    if (uploadingVideo) {
        return <UploadAnimation uploadingProgress={uploadingProgress} />
    }

    const handleImageUpload = async (event) => {

        const image = event.target.files[0]
        const formData = new FormData()
        formData.append("file", image)
        formData.append("upload_preset", "Just_Got_Here")
        formData.append("cloud_name", "dpxm4k7v5")

        setImageUploading(true);

        const xhr = new XMLHttpRequest()
        xhr.open("POST", "https://api.cloudinary.com/v1_1/dpxm4k7v5/image/upload")

        xhr.upload.onprogress = (event) => {
            const percentageComplete = Math.round((event.loaded * 100) / event.total)
            setImageUploadingProgress(percentageComplete) // Track image upload progress
        }

        xhr.onload = () => {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText)
                setImageFile(response.url) // Store only the Cloudinary URL
                setImageUploadSuccess(true) // Mark image upload as successful
                setImageUploading(false)
                setImageUploadingProgress(0)
            } else {
                toast.error('Image Upload Failed. Please try again.')
            }
        }

        xhr.send(formData)
    }


    if(imageUploading) {
        return <ImageUploadAnimation uploadingProgress={imageUploadingProgress} />
    }


    return (
        <div className="main-upload z-50 absolute flex justify-center items-center top-0 left-0 w-full h-full text-white px-[160px] py-20">
            <Bubbles />
            <ToastContainer />
            <div className="upload-panel p-5 w-full h-full flex">
                <div className="w-full h-full flex flex-col gap-2 py-10 px-16 ">
                    <span className="text-3xl font-semibold">Let's Upload Your Monster Content! {username} ✨</span>
                    <span>All fields are Required and Select both Images and Video to Upload</span>

                    <div className="all-input-field flex flex-col gap-4 mt-4">
                        <input
                            className="super-input-field w-full"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <textarea
                            className="super-input-field h-[120px] w-full"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />

                        <h1 className="text-xl tracking-wide">Select Game</h1>
                        <div className="relative w-full">
                            <input
                                type="text"
                                className="super-input-field w-full"
                                placeholder="Search or select a game"
                                value={selectedOption || searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value)
                                    if (e.target.value !== '') {
                                        setSelectedOption('')
                                    }
                                }}
                                onClick={() => setIsOpen(!isOpen)}
                            />
                            {isOpen && (
                                <ul className="custom-dropdown absolute top-full left-0 right-0 bg-white text-black border mt-1 z-10">
                                    {filteredOptions.length ? (
                                        filteredOptions.map((option) => (
                                            <li
                                                key={option.value}
                                                className="p-2 cursor-pointer hover:bg-gray-200"
                                                onClick={() => handleOptionClick(option)}
                                            >
                                                {option.label}
                                            </li>
                                        ))
                                    ) : (
                                        <li className="p-2">No options found</li>
                                    )}
                                </ul>
                            )}
                        </div>

                        <div className="flex gap-4 w-full h-full">
                            <label className="flex-1 cursor-pointer">
                                {videoUploadSuccess ? (
                                    <img className="w-full h-full object-contain" src="/upload/uploadsuccess.png" alt="Upload Blue" />
                                ) : (
                                    <>
                                        <img className="w-full h-full object-contain" src="/upload/uploadblue.png" alt="Upload Blue" />
                                        <input
                                            type="file"
                                            className="hidden"
                                            accept="video/*"
                                            onChange={handleVideoUrl}  // Trigger video upload
                                        />
                                    </>
                                )}
                            </label>


                            <label className="flex-1 cursor-pointer">
                                {imageUploadSuccess ? (
                                    <img className="w-full h-full object-contain" src='/upload/uploadsuccess.png' alt="Uploaded Image" />
                                ) : (
                                    <>
                                        <img className="w-full h-full object-contain" src="/upload/uploadpurple.png" alt="Upload Purple" />
                                        <input
                                            type="file"
                                            className="hidden"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                        />
                                    </>
                                )}
                            </label>

                        </div>

                        <button onClick={uploadData} className="discord-button py-4 rounded-lg font-semibold text-xl">Upload</button>
                    </div>
                </div>
                <div className="w-[1130px] h-full bg-violet-500 rounded-xl flex justify-center items-center">
                    {imageUploadSuccess ? (
                        <img src={imageFile} className="w-full h-full rounded-[12px]" alt="Uploaded Image" />
                    ) : (
                        <span className="text-2xl font-semibold">PREVIEW</span>
                    )}
                </div>
            </div>
        </div>
    )
}
