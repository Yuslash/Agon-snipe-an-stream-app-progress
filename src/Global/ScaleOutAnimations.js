import gsap from "gsap"

export default function ScaleOutAnimations(element) {
    gsap.fromTo(element, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: "sine.inOut", overwrite: "auto" })
}