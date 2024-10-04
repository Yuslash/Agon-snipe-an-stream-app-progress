import { useRef, useEffect } from 'react'
import GsapScaleup from './GsapScaleup'

export default function ScaleUpAnimation()
{
    const scaleBox1 = useRef([])

    const boxData = [
        { id: 1, color: 'green', label: 'Box 1' },
        { id: 2, color: 'blue', label: 'Box 2' },
        { id: 3, color: 'red', label: 'Box 3' },
        { id: 4, color: 'purple', label: 'Box 4' }, 
    ];

    useEffect(() =>
    {
        scaleBox1.current.forEach(box =>
            {
                GsapScaleup(box)
            }
        )
    }, [])

    return <>
        <div className=" w-full bg-orange-300 p-5 flex gap-4">
        {boxData.map((box, index) =>
        (
            <div key={box.id} style={{backgroundColor: box.color, transformOrigin: 'center'}} ref={(el) => (scaleBox1.current[index] = el)} className=" p-2 w-40 h-40"></div>
        ))}
        </div>
    </>
}