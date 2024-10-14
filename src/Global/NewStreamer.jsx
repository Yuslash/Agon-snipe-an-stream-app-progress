import { useEffect, useRef, useState } from "react"
import ScaleOutAnimations from "./ScaleOutAnimations"
import { Link } from "react-router-dom"
import gsap from "gsap"

export default function NewStreamer({ newstream,topstream,hotstream, topclip, isCollapsed }) {

    const animateCard = useRef([])

    const [activateCategory, setActiveCategory] = useState("top")


    const getItems = () => {
        switch (activateCategory) {
            case 'top':
                return topstream
            case 'hot':
                return hotstream
            case 'new':
                return newstream
            case 'clip':
                return topclip
            default:
                return newstream
        }
    }

    const activeItems = getItems()
    

    useEffect(() => {
        const ctx = gsap.context(() => {
            animateCard.current.forEach((box) => {
                if (box) ScaleOutAnimations(box);
            });
        });

        // Clean up previous animations on unmount or change
        return () => ctx.revert();
    }, [activeItems])


    return <>
        <div className='p-3 w-full h-full '>
            <div className='main-video-card-top w-full py-5 flex gap-9'>
                <button
                    className={`transition-colors duration-200 ${activateCategory === "top" ? "font-semibold text-purple-500 sandleman underline" : "sandleman"
                        }`}
                    onClick={() => setActiveCategory("top")}
                >
                    Top Streamers
                </button>

                <button
                    className={` transition-colors duration-200 ${activateCategory === "hot" ? "font-semibold text-purple-500 sandleman underline" : "sandleman"
                        }`}
                    onClick={() => setActiveCategory("hot")}
                >
                    Hot Streamer
                </button>

                <button
                    className={` transition-colors duration-200 ${activateCategory === "new" ? "font-semibold text-purple-500 sandleman underline" : "sandleman"
                        }`}
                    onClick={() => setActiveCategory("new")}
                >
                    New Streamer
                </button>

                <button
                    className={` transition-colors duration-200 ${activateCategory === "clip" ? "font-semibold text-purple-500 sandleman underline" : "sandleman"
                        }`}
                    onClick={() => setActiveCategory("clip")}
                >
                    Top Clip
                </button>


            </div>

            {/* Streamer Video Playlist Starts */}
            <div className={` transition-all duration-300 w-full flex flex-wrap mt-5 p-3 gap-3  ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
                {activeItems.map((game, index) => (
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
                ))}
            </div>
            {/* Streamer Video Playlist Ends */}

        </div>
    </>
}