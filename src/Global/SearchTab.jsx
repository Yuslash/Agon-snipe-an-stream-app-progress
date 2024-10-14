import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ScaleOutAnimations from "./ScaleOutAnimations"

export default function SearchTab() {
        
    const [userData, setUserData] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const navigate = useNavigate()

    const animateCard = useRef([])

    useEffect(() => {

        const fetchUserDetails = async () => {

            const response = await fetch('http://localhost:3000/mainstreamdata')
            const data = await response.json()
            setUserData(data)
        }

        fetchUserDetails()

        animateCard.current.forEach((box) => {
            if (box) ScaleOutAnimations(box);
        })

    }, [])

    const filteredData = userData.filter(card =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.username.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleNaviHome = () => {
        navigate('/main')
    }

    return (
        <>
            <div className="main-search-body absolute top-0 left-0 w-full h-full flex flex-col p-5">
            <div className="flex flex-col items-end gap-3">
                    <input
                        placeholder="Search Stream X"
                        className="main-search-bar w-full"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} />
                        <button onClick={handleNaviHome} className="p-4 bg-gray-300 rounded-full hover:rounded text-lg font-semibold">GO HOME</button>
            </div>
                <div className={` transition-all duration-300 w-full flex flex-wrap mt-5 p-3 gap-3 justify-center h-[370px] `}>
                    {filteredData.length > 0 ? (
                        filteredData.map((game, index) => (
                                <Link to={`/mainview/${game.id}`} ref={(el) => (animateCard.current[index] = el)} key={game.id} className="group newStreamer-card cursor-pointer flex flex-col justify-between w-[485px] p-1 transition-all duration-200  ease-in-out">
                                    {/* Game Image Container */}
                                    <div className="relative w-full h-[255px] overflow-hidden">
                                        {/* Main Game Image */}
                                        <img
                                            className="newStreamer-main-image w-full h-full object-cover"
                                            src={game.imageFile}
                                            alt={game.title}
                                        />

                                        {/* Fast Forward Icon - Visible on Hover */}
                                        <img
                                            className="absolute inset-0 m-auto w-[50px] h-[50px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                            src="/mainstream/videothumb/fastforward.png"
                                            alt="Fast Forward Icon"
                                        />
                                    </div>

                                    <div className="flex p-4 gap-4 items-start ">
                                        <img src="/mainstream/videothumb/profile.png" alt="Profile" />

                                        <div className="mainstream-video-card-title flex flex-col justify-center">
                                            <span>{game.title}</span>
                                            <p>{game.username}</p>
                                        </div>

                                    </div>

                                </Link>
                            ))
                        
                    ) : (
                        <p className="text-white">No Result Found</p>
                    )}
                </div>
            </div>
        </>
    )
}