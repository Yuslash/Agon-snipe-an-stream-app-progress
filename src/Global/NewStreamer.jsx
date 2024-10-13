import { useEffect, useRef } from "react"
import PopularCardAnimation from "./PopularCardAnimations"

export default function NewStreamer({ newstream, isCollapsed }) {

    const animateCard = useRef([])

    useEffect(() => {

        animateCard.current.forEach(box => {
            if (box) PopularCardAnimation(box)
        })

    }, [])

    return <>
        <div className={` transition-all duration-300 w-full flex flex-wrap mt-5 p-3 gap-3 ${isCollapsed ? 'justify-center': 'justify-between'}`}>
            {newstream.map((game, index) => (
                <div ref={(el) => (animateCard.current[index] = el)} key={game.id} className="group newStreamer-card cursor-pointer flex flex-col justify-between w-[485px] p-1 transition-all duration-200  ease-in-out">
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
                            <img src="/mainstream/videothumb/profile.png" alt="Profile"/>
                        
                        <div className="mainstream-video-card-title flex flex-col justify-center">
                            <span>{game.title}</span>
                            <p>{game.username}</p>
                        </div>
                    
                    </div>
                
                </div>
                ))}
        </div>
    </>
}