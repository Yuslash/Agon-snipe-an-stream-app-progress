import { useEffect, useRef, useState } from 'react'
import './MainStream.css'
import { Link } from 'react-router-dom'
import PopularCardAnimation from './PopularCardAnimations'


export default function MainStreamView() {

    const [activeItems, setActiveItems ] = useState('Home')
    const [isCollapsed, setIsCollapsed ] = useState(false)
    const scrollRef = useRef(null)
    const animateCard = useRef(null)

    useEffect(() => {
        PopularCardAnimation(animateCard.current)
    })

    const handleHorizontalScroll = (e) => {
        if(scrollRef.current) {
            scrollRef.current.scrollLeft += e.deltaY
        }
    }

    const menuItems = [
        { id: 1, name: 'Home', icon: '/mainstream/home.png' },
        { id: 2, name: 'Trending', icon: '/mainstream/home.png' },
        { id: 3, name: 'Category', icon: '/mainstream/home.png' },
        { id: 4, name: 'Support', icon: '/mainstream/home.png' },
        { id: 5, name: 'Settings', icon: '/mainstream/home.png' },
    ]

    const handleClick = (itemName) => {
        setActiveItems(itemName)
    }

    const handleCollpase = () => {
        setIsCollapsed((prevState) => !prevState)
    }

    return <>
        <div className="absolute flex top-0 left-0 w-full h-full ">
            
            {/* Mainstream SideNavbar Starts */}
            <div className={`mainstream-side-nav ${isCollapsed ? 'collapsed' : ''}`}>
                <div onClick={handleCollpase} className='logo-text w-full cursor-pointer justify-center items-center flex gap-[10px]'>
                    <img className={` transition-transform duration-300 ${isCollapsed ? 'transition-transform duration-300 rotate-0 p-4 bg-gray-200 rounded-2xl' : 'transition-transform duration-300 rotate-180 '}`} src='/mainstream/logo.png'  />
                    {!isCollapsed && <span>AGON SNIPE</span>}
                </div>
                <div className='mainstream-sidenav-content w-full flex flex-col gap-[30px] '>
                    
                    {menuItems.map(item =>(
                        <div 
                        key={item.id} 
                            className={`mainstream-sidenavs ${isCollapsed ? 'flex justify-center p-4' : 'flex w-full items-center gap-[28px] px-[30px] py-[20px]'} ${activeItems === item.name ? 'active': ''} `} 
                        onClick={() => handleClick(item.name)}>
                            <img className={`transition-transform duration-300 ${isCollapsed ? 'scale-100': 'scale-100'}`} src={item.icon} alt={item.name} />
                            {!isCollapsed && <span className='w-full h-full flex items-end border-none'>{item.name}</span>}
                        </div>
                    ))}
                    
                </div>
            </div>
            {/* Mainstream SideNavbar Ends */}

        {/* Mainstream Main ParentElement Starts */}
            <div className=' flex flex-col w-full h-full'>
                
                {/* Mainstream topnavbar Starts */}
                <div className='mainstream-topnavbar flex justify-between items-center w-full p-10'>
                    <div className='flex gap-[10px] w-full'>
                        <div className='mainstream-searchbar flex w-full items-center gap-5'>
                            <img src='/mainstream/search.png' />
                            <span>Search Stream X</span>
                        </div>
                        <div className='bell-icon flex items-center py-[18px] px-[20px]'>
                            <img src='/mainstream/Bell.png' />
                        </div>
                    </div>
                    <Link to={'/profile'} className='mainstream-profile flex items-center px-10 gap-5 '>
                        <img src='mainstream/profile.png' />
                        <span className='text-nowrap w-full h-full rounded-full'>Your Username</span>
                    </Link>
                </div>
                {/* Mainstream topnavbar Ends */}

                
                {/* Mainstream main body Starts */}
                <div className='mainstream-mainbody flex flex-col justify-between w-full h-full px-10 py-5'>
                    <div className='popular-parent-holder p-3 bg-orange-200 flex flex-col w-full h-full gap-5'>
                        <div className='popular-header w-full flex justify-between items-center'>
                            <span>Popular Games</span>
                            <p className='flex gap-1 items-center'>See All<img src='mainstream/arrow.png' /></p>
                        </div>
                        <div 
                            className={`popular-card transition-all duration-300 flex gap-6 p-4 overflow-x-auto`}
                            style={{ maxWidth: isCollapsed ? '1671px' : '1509px' }}
                            ref={scrollRef}
                            onWheel={handleHorizontalScroll}
                            >
                            <div ref={animateCard} className='bg-yellow-400 min-w-[274px] h-[465px]'>
                              <img />
                              <div>
                                <span></span>
                              </div>  
                            </div>
                        </div>
                    </div>
                    <div className='p-3 bg-purple-200 w-full h-full'></div>
                </div>
                {/* Mainstream main body Ends */}
            
            </div>
        {/* Mainstream Main ParentElement Ends */}
        </div>
    </>
}