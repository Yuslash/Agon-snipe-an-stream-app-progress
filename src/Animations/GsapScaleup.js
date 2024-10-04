import gsap from 'gsap'

export default function GsapScaleup(element)
{
    gsap.fromTo(
        element,
        {scale : 0, x: 800},
        {scale : 1, x: 0, duration: 3, ease: "elastic.out(0.5,0.3)"}
    )
}