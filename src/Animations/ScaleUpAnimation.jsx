import { useRef, useEffect } from 'react'
import GsapScaleup from './GsapScaleup'

export default function ScaleUpAnimation()
{
    const scaleBox1 = useRef(null)
    const scaleBox2 = useRef(null)

    useEffect(() =>
    {
        GsapScaleup(scaleBox1.current)
        GsapScaleup(scaleBox2.current)
    }, [])

    return <>
        <div className=" w-full bg-orange-300 p-5 flex gap-4">
            <div ref={scaleBox1} className=" p-2 w-40 h-40 bg-purple-500">
                <div>how are you mate</div>
                <div className=' w-full h-[100px] bg-orange-600'></div>
                
            </div>
            <div ref={scaleBox2} className=" w-40 h-40 bg-red-500"></div>
        </div>
    </>
}