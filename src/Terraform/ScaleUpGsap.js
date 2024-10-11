import gsap from 'gsap'

export default function ScaleUpGsap(element) {
    gsap.fromTo(
        element,
        { scale: 0, y: 800 },
        { scale: 1, y: 0, duration: 3, ease: "elastic.out(0.2,0.3)" }
    )
}