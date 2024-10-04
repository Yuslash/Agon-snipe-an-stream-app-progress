import './ParallaxImage.css'
import { useEffect } from 'react'

export default function ParallaxImage()
{

    useEffect(() =>
    {
        const handleMouseMove = (e) =>
        {
            const x = (e.clientX / window.innerWidth) * 10
            const y = (e.clientY / window.innerHeight) * 10
           
            document.body.style.backgroundPosition = `${x}px ${y}px`
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }

    },[])

    return null
}