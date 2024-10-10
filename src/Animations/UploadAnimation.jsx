import Lottie from 'lottie-react';
import gameAnimation from './game.json';
import { useEffect, useRef, useState } from 'react';
import ExpandAnimation from './ExpandAnimation';
import './Load.css';
import UploadExpandAnimation from './UploadExpandAnimation';

export default function UploadAnimation({ uploadingProgress }) {
    const expandScale = useRef(null); // Move useRef inside the component
    const miniScale = useRef(null)
    const [bgColor, setBgColor] = useState('')
    const [textColor, setTextColor] = useState('')

    const colors = [
        { primary: '#6a0dad', secondary: '#ff69b4' }, // Purple + Pink
        { primary: '#007acc', secondary: '#00d4ff' }, // Blue + Cyan
        { primary: '#ff7f50', secondary: '#ffd700' }, // Orange + Yellow
        { primary: '#32cd32', secondary: '#00ff7f' }, // Green + Lime
        { primary: '#dc143c', secondary: '#ffd700' }, // Red + Gold
        { primary: '#ff4500', secondary: '#ff6347' }, // OrangeRed + Tomato
        { primary: '#1e90ff', secondary: '#00bfff' }, // DodgerBlue + DeepSkyBlue
        { primary: '#ff1493', secondary: '#ff69b4' }, // DeepPink + HotPink
        { primary: '#20b2aa', secondary: '#3cb371' }, // LightSeaGreen + MediumSeaGreen
        { primary: '#8a2be2', secondary: '#9370db' }, // BlueViolet + MediumPurple
        { primary: '#ff00ff', secondary: '#ff69b4' }, // Magenta + HotPink
        { primary: '#48d1cc', secondary: '#00ced1' }, // MediumTurquoise + DarkTurquoise
        { primary: '#ff4500', secondary: '#ff8c00' }, // OrangeRed + DarkOrange
        { primary: '#daa520', secondary: '#ffdead' }, // GoldenRod + NavajoWhite
        { primary: '#ffb6c1', secondary: '#ff69b4' }, // LightPink + HotPink
        { primary: '#adff2f', secondary: '#7fff00' }, // GreenYellow + Chartreuse
        { primary: '#00fa9a', secondary: '#00ff7f' }, // MediumSpringGreen + SpringGreen
        { primary: '#4682b4', secondary: '#5f9ea0' }, // SteelBlue + CadetBlue
        { primary: '#db7093', secondary: '#ff1493' }, // PaleVioletRed + DeepPink
        { primary: '#ff4500', secondary: '#ff6347' }, // OrangeRed + Tomato
        { primary: '#87ceeb', secondary: '#1e90ff' }, // SkyBlue + DodgerBlue
        { primary: '#b22222', secondary: '#ff6347' }, // FireBrick + Tomato
        { primary: '#7b68ee', secondary: '#6a5acd' }, // MediumSlateBlue + SlateBlue
        { primary: '#ff6347', secondary: '#ff7f50' }, // Tomato + Coral
        { primary: '#2e8b57', secondary: '#3cb371' }, // SeaGreen + MediumSeaGreen
        { primary: '#ba55d3', secondary: '#ff69b4' }, // MediumOrchid + HotPink
        { primary: '#ff69b4', secondary: '#ff1493' }, // HotPink + DeepPink
        { primary: '#9932cc', secondary: '#9400d3' }, // DarkOrchid + DarkViolet
        { primary: '#d2691e', secondary: '#ff7f50' }, // Chocolate + Coral
        { primary: '#00bfff', secondary: '#1e90ff' }, // DeepSkyBlue + DodgerBlue
        { primary: '#8fbc8f', secondary: '#32cd32' }, // DarkSeaGreen + LimeGreen
        { primary: '#dc143c', secondary: '#ff4500' }, // Crimson + OrangeRed
        { primary: '#f08080', secondary: '#fa8072' }, // LightCoral + Salmon
        { primary: '#b8860b', secondary: '#daa520' }, // DarkGoldenRod + GoldenRod
        { primary: '#00ff00', secondary: '#32cd32' }, // Lime + LimeGreen
        { primary: '#4169e1', secondary: '#4682b4' }, // RoyalBlue + SteelBlue
        { primary: '#ff4500', secondary: '#ffa07a' }, // OrangeRed + LightSalmon
        { primary: '#dda0dd', secondary: '#ee82ee' }, // Plum + Violet
        { primary: '#4682b4', secondary: '#87ceeb' }, // SteelBlue + SkyBlue
    ]

    const brightTextColors = [
        '#ffff00', // Bright Yellow
        '#ffffff', // White
        '#00ffff', // Cyan
        '#39ff14', // Neon Green
        '#ff4500', // OrangeRed
        '#ff69b4', // HotPink
        '#ffd700', // Gold
        '#00ff7f', // Spring Green
        '#ff6347', // Tomato
        '#ff1493', // DeepPink
        '#ff8c00', // DarkOrange
        '#7fff00', // Chartreuse
        '#1e90ff', // DodgerBlue
        '#ff00ff', // Magenta
        '#adff2f', // GreenYellow
    ]


    useEffect(() => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)]
        const randomTextColor = brightTextColors[Math.floor(Math.random() * brightTextColors.length)] // Pick random CSS named color
        setBgColor(`linear-gradient(135deg, ${randomColor.primary}, ${randomColor.secondary})`)
        setTextColor(randomTextColor)

        UploadExpandAnimation(expandScale.current, miniScale.current);
    }, []);

    return (
        <>
            <div style={{ background: bgColor, color: textColor }} ref={expandScale} className='scontainer z-50 absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                <div ref={miniScale} className='w-full flex flex-col justify-center items-center'>
                    <Lottie animationData={gameAnimation} loop={true} style={{ width: 500, height: 500 }} />
                    <h1 className='loading-text font-semibold'>
                        Uploading {uploadingProgress}%<span className="dot dot1">.</span>
                        <span className="dot dot2">.</span>
                        <span className="dot dot3">.</span>
                    </h1>
                </div>
            </div>
        </>
    );
}
