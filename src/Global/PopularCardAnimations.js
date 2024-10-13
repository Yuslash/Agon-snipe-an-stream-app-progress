import gsap from 'gsap'

export default function PopularCardAnimation(element) {

    gsap.fromTo(element, {  scale: 0 }, {  scale: 1, duration: 2, ease: "elastic.out(0.3,0.3)" })

}