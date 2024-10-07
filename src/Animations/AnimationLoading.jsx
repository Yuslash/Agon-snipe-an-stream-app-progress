import Lottie from 'lottie-react';
import gameAnimation from './game.json';
import { useEffect, useRef } from 'react';
import ExpandAnimation from './ExpandAnimation';
import './Load.css';

export default function AnimationLoading() {
    const expandScale = useRef(null); // Move useRef inside the component
    const miniScale = useRef(null)

    useEffect(() => {
            ExpandAnimation(expandScale.current, miniScale.current);
    }, []);

    return (
        <>
            <div ref={expandScale} className='scontainer bg-violet-500 absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                <div ref={miniScale} className='w-full flex flex-col justify-center items-center'>
                    <Lottie animationData={gameAnimation} loop={true} style={{ width: 500, height: 500 }} />
                    <h1 className='loading-text font-semibold'>
                        Loading<span className="dot dot1">.</span>
                        <span className="dot dot2">.</span>
                        <span className="dot dot3">.</span>
                    </h1>
                </div>
            </div>
        </>
    );
}
