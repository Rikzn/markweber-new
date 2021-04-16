import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);


export default function FixedContactsSidebar() {
    ScrollTrigger.matchMedia({
        '(min-width: 641px)': () => {
            ScrollTrigger.create({
                trigger: '.contact__sidebar',
                start: 'top-=150px top',
                endTrigger: '.contact',
                end: '1000px',
                pin: true,
                pinSpacing: true
            });
        }
    });
}