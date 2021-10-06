gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray('.box').array.forEach(box => {
//     ScrollTrigger.create({
//         trigger : box,
//         start : "top top",
//         pin : true
//     })    
// });

gsap.to(".box1",{
    scrollTrigger : {
        trigger : ".box1",
        start : "top top",
        pin : true,
        pinSpacing : false
    }
})
gsap.to(".box2",{
    scrollTrigger : {
        trigger : ".box2",
        start : "top top",
        pin : true,
        pinSpacing : false
    }
})
gsap.to(".box3",{
    scrollTrigger : {
        trigger : ".box3",
        start : "top top",
        pin : true,
        pinSpacing : false
    }
})
gsap.to(".box4",{
    scrollTrigger : {
        trigger : ".box4",
        start : "top top",
        pin : true,
        pinSpacing : false
    }
})
gsap.to(".box5",{
    scrollTrigger : {
        trigger : ".box5",
        start : "top top",
        pin : true,
        pinSpacing : false
    }
})