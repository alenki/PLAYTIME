import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

gsap.registerPlugin(ScrollTrigger);
Splitting();

const fx16Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect16]')];
const fx17Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect17]')];
const fx25Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect25]')];

// GSAP Scroll Triggers
const scroll = () => {
    fx25Titles.forEach(title => {    
        gsap.fromTo(title.querySelectorAll('.char'), {
            'will-change': 'transform',
            transformOrigin: '50% 100%',
            scaleY: 0
        }, 
        {
            ease: 'power3.in',
            opacity: 1,
            scaleY: 1,
            stagger: 0.05,
            scrollTrigger: {
                trigger: title,
                start: 'center center',
                end: '+=500%',
                scrub: true,
                pin: title.parentNode,
            }
        });

    });
}

window.addEventListener('load', () => {
    // GSAP Scroll Triggers
    scroll();
})