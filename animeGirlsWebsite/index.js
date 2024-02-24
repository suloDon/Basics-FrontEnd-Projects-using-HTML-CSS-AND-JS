gsap.from(".nav, .fr, .mid, .sin",{
    y:-100,
    duration: .5,
    stagger: .2,
    opacity: 0,
    backgroundColor: "black",
    scrollTrigger:{
        trigger: ".nav",
        scroller:"body",
        
    }
})


gsap.from(".writing .hy",{
    x:-400,
    duration: .5,
    stagger: .3,
    opacity: 0,
})

gsap.from(".images",{
    x: 200,
    duration: 1,
    opacity: 0,

})

gsap.from(".box .first",{
    x: 220,
    duration: 1,
    opacity: 0,
    scrollTrigger:{
        trigger: ".box img",
        scroller:"body",
        scrub: true
    }
})

gsap.from(".box .third",{
    x: -220,
    duration: 1,
    opacity: 0,
    scrollTrigger:{
        trigger: ".box img",
        scroller:"body",
        scrub: true
    }
})

gsap.from(".box .second",{
    duration: 1,
    opacity: 0,
    scrollTrigger:{
        trigger: ".box img",
        scroller:"body",
        scrub: true
    }
})

gsap.to(".bouncher #on",{
    y:-100,
    duration: .5,
    repeat: -1, 
    yoyo: true,
})

gsap.to(".bouncher #in",{
    y:-100,
    duration: .5,
    delay: .2,
    repeat: -1, 
    yoyo: true,
})

gsap.to(".bouncher #un",{
    y:-100,
    duration: .5,
    delay: .4,
    repeat: -1, 
    yoyo: true,
})

// gsap.to(".loading",{
//     y:-700,
//     duration: .5,
//     delay: 2,
// })


