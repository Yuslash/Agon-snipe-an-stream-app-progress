import gsap from 'gsap'


export default function ScaleUpGsap(element) {
    gsap.fromTo(
        element,
        { scale: 0 }, 
        {
            scale: 1, 
            duration: 5,
            ease: 'bounce.out(0.5, 0.3)',
        }
    )
}
