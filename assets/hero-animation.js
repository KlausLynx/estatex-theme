/// <reference types="gsap" />
document.addEventListener('DOMContentLoaded', function() {
    //Get Gsap timeline
    let tl = gsap.timeline()
    // Check if the hero section exists
    const heroSection = document.querySelector('.hero__media');
    const h1 = document.querySelector('.h1 p');
    const heroSubTitle = document.querySelectorAll('.group-block-content a');
    if(heroSection) {
        tl.from(heroSection, {
            duration: 3,
            scale: 1.8,
            ease: 'power2.out',
        })
        tl.from(h1, {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power2.out',
        }, '<1')
        tl.from(heroSubTitle, {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power2.out',
            stagger: 0.15
        }, '<0.5')
    }

})