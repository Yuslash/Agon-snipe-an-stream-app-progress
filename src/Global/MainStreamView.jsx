import { useState } from 'react'
import './MainStream.css'


export default function MainStreamView() {

    const [activeItems, setActiveItems ] = useState('Home')
    const [isCollapsed, setIsCollapsed ] = useState(false)

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
        <div className="absolute flex top-0 left-0 w-full h-full bg-orange-300">
            
            <div className={`mainstream-side-nav ${isCollapsed ? 'collapsed' : ''}`}>
                <div onClick={handleCollpase} className='logo-text w-full cursor-pointer justify-center items-center flex gap-[10px]'>
                    <img src='/mainstream/logo.png'  />
                    {!isCollapsed && <span>AGON SNIPE</span>}
                </div>
                <div className='mainstream-sidenav-content w-full flex flex-col gap-[30px] '>
                    
                    {menuItems.map(item =>(
                        <div 
                        key={item.id} 
                        className={`mainstream-sidenavs flex w-full items-center gap-[28px] px-[30px] py-[20px] ${activeItems === item.name ? 'active': ''} `} 
                        onClick={() => handleClick(item.name)}>
                            <img className={`transition-transform duration-300 ${isCollapsed ? 'scale-[4]': 'scale-[1]'}`} src={item.icon} alt={item.name} />
                            {!isCollapsed && <span className='w-full h-full flex items-end border-none'>{item.name}</span>}
                        </div>
                    ))}
                    
                </div>
            </div>

            <div className='bg-purple-500 w-full h-full'></div>
        </div>
    </>
}