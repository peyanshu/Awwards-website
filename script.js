
var scroll1 = document.querySelector("#scroll")
var overlay = document.querySelector("#overlay")

overlay.addEventListener("mousemove", function (e) {
        scroll1.style.opacity = 1;
        scroll1.style.left = `${e.x - 15}px`
        scroll1.style.top = `${e.y - 15}px`
})


var page1img =document.querySelector("#page1 img")
page1img.addEventListener("mouseenter",function(y){
        scroll1.style.opacity=0;
       
})
page1img.addEventListener("mouseleave",function(y){
        scroll1.style.opacity=1;
      
})


var scroll2 = document.querySelector("#scroll2")
var overlay2 = document.querySelector("#page2")
overlay2.addEventListener("mousemove", function (e) {
        scroll2.style.opacity = 1;
        scroll2.style.left = `${e.x - 15}px`
        scroll2.style.top = `${e.y - 15}px`
})
var scroll3 = document.querySelector("#scroll3")
var overlay2 = document.querySelector("#page3")
overlay2.addEventListener("mousemove", function (e) {
        scroll3.style.opacity = 1;
        scroll3.style.left = `${e.x - 15}px`
        scroll3.style.top = `${e.y - 15}px`
})
var scroll4 = document.querySelector("#scroll4")
var overlay4 = document.querySelector("#page4")
overlay4.addEventListener("mousemove", function (e) {
        scroll4.style.opacity = 1;
        scroll4.style.left = `${e.x - 15}px`
        scroll4.style.top = `${e.y - 15}px`
})
var scroll5 = document.querySelector("#scroll5")
var overlay5 = document.querySelector("#page5")
overlay5.addEventListener("mousemove", function (e) {
        scroll5.style.opacity = 1;
        scroll5.style.left = `${e.x - 15}px`
        scroll5.style.top = `${e.y - 15}px`
})

gsap.to(".scale2", {
        scale: .8,
        opacity: 1, 
        scrollTrigger: {
                scroller: "body",
                trigger: ".scale2",
                start: "top 50%",
                end: " top 60%",
                scrub: true,
        }
})
gsap.to(".scale3", {
        scale: .8,
        opacity: 1,
        scrollTrigger: {
                scroller: "body",
                trigger: ".scale3",
                start: "top 50%",
       end: " top 60%",
                scrub: true,
        }
})
gsap.from("#menu",{
        y:-200,
        delay:1,
        opacity:0,
        duration:1
})
gsap.from("#movtxt1 h1",{
        y:-250,
        delay:1,
       
        duration:1
})
gsap.from("#movtxt2 h1",{
        y:-250,
        delay:1,
        
        duration:1
})
gsap.to(".scale4", {
        scale: .8,
        opacity: 1,
        scrollTrigger: {
                scroller: "body",
                trigger: ".scale4",
                start: "top 50%",
                end: " top 60%",
                
                scrub: true,
        }
})
gsap.to("#elem1>h1",{
        duration:2,
      
        onStart: function () {
                $('#elem1>h1').textillate({ in: { effect: 'rollIn',   delaySc4le: 4, } });
            },
            scrollTrigger:{
                scroller:"body",
                trigger:"#elem1 h1",
                 start:"top 0",
                end:"+=20",
               scrub:true
            }
})
gsap.to("#elem1>h2",{
        
        duration:2,
        onStart: function () {
                $('#elem1>h2').textillate({ in: { effect: 'rollIn',   delayScale: 4, } });
            },
            scrollTrigger:{
                scroller:"body",
                trigger:"#elem1 h2",
                start:"top 0",
                end:"+=20",
               scrub:true
            }
})
gsap.to("#elem1>h3",{
        duration:2,
      
        onStart: function () {
                $('#elem1>h3').textillate({ in: { effect: 'rollIn',   delayScale: 4, } });
            },
            scrollTrigger:{
                scroller:"body",
                trigger:"#elem1 h3",
                start:"top 0",
                end:"+=20",
               scrub:true
            }
})
gsap.to(".scale5", {
        scale: 0.8,
        opacity: 1,
        scrollTrigger: {
                scroller: "body",
                trigger: ".scale5",
                start: "top 50%",
                end: " top 60%",

                scrub: true,
        }
})
 
gsap.from("#img2", {
        ease:"slow",
        duration:100,
        left:"100%",
        scale:1.2,
        rotate:-7,
        top:70,
        

        scrollTrigger: {
                scroller: "body",
                trigger: "#img2",
                start: "top 30%",
                end: "+=40%",
                scrub: true,

        }

})
gsap.from("#img3", {
        ease:"slow",
        duration:100,
        left:"100%",
        scale:1.2,
        rotate:-7,
        top:70,
     
        scrollTrigger: {
                scroller: "body",
                trigger: "#img3",
                start: "top 30%",
                end: "+=40%",
                scrub: true,

        }
 })
gsap.from("#img4", {
        ease:"slow",
        duration:100,
        left:"100%",
        scale:1.2,
        rotate:-7,
        top:70,
  

        scrollTrigger: {
                scroller: "body",
                trigger: "#img4",
                start: "top 30%",
                end: "+=40%",
                scrub: true,


        }

})
gsap.from("#img5", {
        ease:"slow",
        duration:100,
        left:"100%",
        scale:1.2,
        rotate:-7,
        top:70,
        scrollTrigger: {
                scroller: "body",
                trigger: "#img5",
                start: "top 20%",
                end: "+=40%",
                scrub: true,

        }
 
})
var photo = document.querySelector("#page6>img")
var page6 = document.querySelector("#page6")
 page6.addEventListener("mousemove", function (e) {
        photo.style.opacity = 1;
        photo.style.left = `${e.x}px`
        photo.style.top = `${e.y }px`
})
var elem = document.querySelectorAll("#elem1")
elem.forEach(function(e){
        var a =e.getAttribute("data-img")
        e.addEventListener(  "mouseenter",function(){
                document.querySelector("#page6>img").setAttribute("src",a)
        })
})


