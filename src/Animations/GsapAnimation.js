import gsap from "gsap";

export default function GsapAnimation(boxElement)
{
    gsap.fromTo(boxElement,
        {x : 1000}, 
        { x: 0, duration: 2, ease: "elastic.out(0.3,0.3)" }
    )
}