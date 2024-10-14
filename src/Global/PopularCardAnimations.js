import gsap from 'gsap'

export default function PopularCardAnimation(element) {

    gsap.fromTo(element, { scale: 0, opacity: 0, x: 1800 }, { scale: 1, opacity: 1, x:0, duration: 2, ease: "power2.out", overwrite: "auto" })

}