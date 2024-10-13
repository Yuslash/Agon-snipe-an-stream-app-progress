import { useEffect, useRef } from 'react'
import './MainStream.css'
import PopularCardAnimation from './PopularCardAnimations'

export default function MainStreamBody({scrollRef, handleHorizontalScroll, isCollapsed}) {

    const animateCard = useRef([])

    useEffect(() => {

        animateCard.current.forEach(box => {
            if(box) PopularCardAnimation(box)
        })

    }, [])

    const options = [
        {
            id: 'valorant',
            name: 'Valorant',
            src: '/mainstream/cards/popular.png'
        },
        {
            id: 'callOfDutyMW2',
            name: 'Call of Duty: Modern Warfare II',
            src: '/mainstream/cards/cod.png'
        },
        {
            id: 'fortnite',
            name: 'Fortnite',
            src: '/mainstream/cards/fortnite.png'
        },
        {
            id: 'gtaV',
            name: 'Grand Theft Auto V',
            src: '/mainstream/cards/gta.png'
        },
        {
            id: 'minecraft',
            name: 'Minecraft',
            src: '/mainstream/cards/minecraft.png'
        },
        {
            id: 'apexLegends',
            name: 'Apex Legends',
            src: '/mainstream/cards/popular.png'
        }
    ]


    return <>
        <div className='mainstream-mainbody flex flex-col justify-between w-full h-full px-10 py-5'>
            <div className='popular-parent-holder flex flex-col w-full h-full gap-5'>
                <div className='popular-header w-full px-3 flex justify-between items-center'>
                    <span>Popular Games</span>
                    <p className='flex gap-1 items-center'>See All<img src='mainstream/arrow.png' /></p>
                </div>
                
                {/* Popular Cards Starts  */}
                <div className="relative transition-all duration-300">
                    <div
                        className={`popular-card transition-all p-3 duration-300 flex gap-6 overflow-x-auto `}
                        style={{ maxWidth: isCollapsed ? '1671px' : '1509px' }}
                        ref={scrollRef}
                        onWheel={handleHorizontalScroll}
                    >
                    {/* card Start */}
                        {options.map((card ,index) => (
                            <div
                                key={card.id}
                                ref={(el) => (animateCard.current[index] = el)}
                                className="card-of-fate cursor-pointer min-w-[274px] h-[465px] group"
                            >
                                {/* Image Container */}
                                <div className="relative w-full h-[392px]">
                                    <img
                                        className="w-full h-full object-cover"
                                        src={card.src}
                                        alt="Popular Game"
                                    />
                                    {/* Fast Forward Icon */}
                                    <img
                                        className="absolute inset-0 m-auto w-[50px] h-[50px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                        src="/mainstream/popfastfarward.png"
                                        alt="Fast Forward Icon"
                                    />
                                </div>

                                {/* Text Holder */}
                                <div className="popular-card-text-holder w-full px-4 h-[66px] flex items-center">
                                    <span>{card.name}</span>
                                </div>
                            </div>
                        ))}
                    {/* card ends */}
                    </div>
                </div>
                
                {/* Popular Cards Ends  */}
            
            </div>
            <div className='p-3 w-full h-full'></div>
        </div>
    </>
}