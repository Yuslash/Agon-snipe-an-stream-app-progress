import gsap from "gsap";

export default function ExpandAnimation(element) {
    gsap.fromTo(
        element,
        { scale: 0, borderRadius: "100%" },
        { scale: 1, borderRadius: "0%", duration: 0.5, ease: 'expo.out' }
    )
    setTimeout(() => {
        gsap.to(element, {
            scale: 0,
            borderRadius: "100%",
            duration: 0.5,
            ease: 'expo.in' 
        })
    }, 2300)
}
