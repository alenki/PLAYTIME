import Lenis from 'lenis'
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

gsap.registerPlugin(ScrollTrigger);
Splitting();

const fx25Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect25]')];

// Lenis smooth scrolling
let lenis;

// Initialize Lenis smooth scrolling
const initSmoothScrolling = () => {
	
    lenis = new Lenis({
		lerp: 0.2,
		smooth: true
	});

    lenis.on('scroll', () => ScrollTrigger.update());

	const scrollFn = (time) => {
		lenis.raf(time);
		requestAnimationFrame(scrollFn);
	};
	
    requestAnimationFrame(scrollFn);

};

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

// Lenis (smooth scrolling)
initSmoothScrolling();
// GSAP Scroll Triggers
scroll();

