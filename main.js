var tl = gsap.timeline();

// gsap.to(".card", {duration: 2, y: 50, ease: "elastic"})
tl.from(".card", {duration: 3, y: -1000, rotate: "random(-45,45)", ease: "elastic", stagger: 1})

tl.from(".logo", {duration: 1.5, opacity: 0, scale: 0.3, ease:"back"},"-=2")

tl.from(".logos", {duration: 1, opacity:0, y: 150, stagger: 0.25},"-=2")

// document.querySelector("#btn-pause").onclick = () => tween.pause();
