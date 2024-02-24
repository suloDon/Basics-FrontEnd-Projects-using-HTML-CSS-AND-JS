const cursor = document.querySelector('.cursor');
document.addEventListener("mousemove",(dets)=>{
    cursor.style.visibility = "visible"
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
})



gsap.to(".nav",{
    backgroundColor: "black",
    height: "80px",
    duration: 0.5,
    scrollTrigger:{
        trigger: ".nav",
        scroller: "body",
        start: "top -10%",
        end: "top -20%",
        scrub: 1
    }
})

gsap.to(".main",{
    backgroundColor: "black",
    scrollTrigger:{
        trigger: ".main",
        scroller: "body",
        start: "top -25vh",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from(".page_two .aboutUs #luf",{
    x: 250,
    opacity: 0,
    duration: 0.3,
    scrollTrigger:({
        trigger:".page_two .aboutUs #luf",
        scroller: "body",
        scrub: 2
    })
})

gsap.from(".page_two .aboutUs #zor",{
    x: -250,
    opacity: 0,
    duration: 0.6,
    scrollTrigger:({
        trigger:".page_two .aboutUs #zor",
        scroller: "body",
        scrub: 2
    })
})

gsap.from(".page_two .aboutUs .about",{
    
    opacity: 0,
    duration: 0.6,
    scale: 2,

    scrollTrigger:({
        trigger:".page_two .aboutUs",
        scroller: "body",
        scrub: 2
    })
})

gsap.from(".page3 .one",{
    
    opacity: 0,
    duration: 0.6,
    x: -100,

    scrollTrigger:({
        trigger:".page3",
        scroller: "body",
        scrub: 3
    })
})

gsap.from(".page3 .textE .imageSection",{
    
    opacity: 0,
    duration: 0.6,
    x: -100,

    scrollTrigger:({
        trigger:".page3 .textE",
        scroller: "body",
        scrub: 3
    })
})

gsap.from(".page3 .textE .textSection",{
    
    opacity: 0,
    duration: 0.8,

    scrollTrigger:({
        trigger:".page3 .textE",
        scroller: "body",
        scrub: 1,
        scale: 2
    })
})

gsap.from(".page4 .im4",{
    
    opacity: 0,
    duration: 0.8,
    scale: 2,

    scrollTrigger:({
        trigger:".page3 .textE",
        scroller: "body",
        scrub: 1,
        
    })
})

const image = document.querySelector('#hell');
const touch = document.querySelector('#p');
let help = true
touch.addEventListener('click',()=>{
    if(help){
        image.classList.add('haha')
        help = false
    } else{
        image.classList.remove('haha')
        help = true
    }
})









