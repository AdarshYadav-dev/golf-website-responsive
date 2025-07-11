let crsr = document.querySelector("#cursor")
let crsr_blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";
    crsr_blur.style.left = dets.x-200 +"px";
    crsr_blur.style.top = dets.y-200 +"px";

});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 2
        crsr.style.border = "0.5px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })

     elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})



document.addEventListener("mousemove", function(dets){
    gsap.to("#cursor", {
        left: dets.x,
        top: dets.y,
        duration: 0.2,
        ease: "power2.out"
    });
});


gsap.to("#nav",{
    backgroundColor: "#000",
    duration:0.5,
    height: "125px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    duration:0.5,
    scrollTrigger :{
        trigger:"#main",
        scroller :"body",
        // markers: true,
        start:"top -25%",
        end:"top -100%",
        scrub:5
    }
})


gsap.from("#about-us img, #about-us-in, #parabottom",{
    y:90,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollerTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from("#card",{
    scale: 0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    // stagger:0.4,
    scrollerTrigger:{
        trigger:"#card",
        scroller:"body",
        // markers:false,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end: "top 70%",
        scrub: 3
    }
})