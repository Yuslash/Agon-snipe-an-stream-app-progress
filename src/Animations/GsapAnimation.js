import gsap from "gsap";

export default function GsapAnimation(boxElement)
{
    gsap.fromTo(boxElement,
        {x : 800}, 
        { x: 0, duration: 5, ease: "elastic.out(0.3,0.3)" }
    )
}