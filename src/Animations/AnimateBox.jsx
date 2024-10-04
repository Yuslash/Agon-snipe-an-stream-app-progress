import { useRef, useEffect } from 'react'
import GsapAnimation from './GsapAnimation.js'

export default function AnimateBox()
{
    const boxStyleRef = useRef(null)
    const boxStyleRef1 = useRef(null)

    useEffect(() =>
    {   
        GsapAnimation(boxStyleRef.current)
        GsapAnimation(boxStyleRef1.current)
    }, [])


    return <>
    <div className=' w-full flex bg-cyan-300 gap-4 p-6'>
        <div ref={boxStyleRef} className="box-style">
            <div className=' w-full bg-slate-200'>incoming</div>
        </div>
        <div ref={boxStyleRef1} className="box-style">
            <div className=' bg-orange-400'>IM COMing</div>
        </div>
        </div>
    </>
}