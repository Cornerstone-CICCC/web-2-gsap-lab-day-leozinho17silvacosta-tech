gsap.registerPlugin(ScrollTrigger);

// Section 1 Animation:

const nameJohn = gsap.timeline();

nameJohn.from(".content h1 span:first-child", { opacity: 0, x: "-100vw", duration: 2, ease: "power3.out" })
        .from(".content h1 span:last-child", { opacity: 0, x: "100vw", duration: 1, ease: "power3.out" }, "-=2")
        .from(".content p", { y: "100", rotation: 90, opacity: 0, transformOrigin: "left bottom", duration: 1, ease: "power3.out" }, "-=1")
        .from(".content img", { opacity: 0, y: "100vw", duration: 1 }, "-=0.5")

// Section 2 Animation:

const aboutMe = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    start: "top top",
    end: "bottom top",
    //markers: true
  }
})

aboutMe.from(".section2 h2 span", { y: "-100vh", opacity: 0, duration: 0.5, ease: "power5.out", stagger: 0.5 })
       .from(".section2 p", { scale: 0, opacity: 0, duration: 0.5 })

// Section 3 Animation:

const horizontalScroll = gsap.to(".horizontal-sections", {
  x: () => -(document.querySelector(".horizontal-sections").scrollWidth - window.innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-sections",
    start: "top top",
    end: () => `+=${document.querySelector(".horizontal-sections").scrollWidth - window.innerWidth}`,
    scrub: 1,
    pin: true,
  }
});

const section3Skills = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3",
    start: "left center",
    end: "right center",
    containerAnimation: horizontalScroll,
    pin: false 
  }
});

section3Skills.from(".section3 h2", {
  x: -200,
  scale: 3,
  opacity: 0,
  duration: 0.5,
  ease: "power5.out"
}, 0);

gsap.set(".section3 p span", { backgroundColor: "white", color: "black" });

section3Skills.from(".section3 p span", {
  y: 80,
  opacity: 0,
  padding: "6px 10px",
  borderRadius: "6px",
  stagger: 0.2,
  duration: 1,
  ease: "power3.out"
}, 0.3);

// Section 4 Animation:

gsap.from(".section4 .portfolio-item", {
  x: 300,
  opacity: 0,
  stagger: 0.1,
  duration: 2,
  scrollTrigger: {
    trigger: ".section4",
    start: "left center",
    end: "right center",
    containerAnimation: horizontalScroll,
    scrub: 1
  }
});

// Section 5 Animation:

const contactHeading = document.querySelector(".section5 h2");
const letters = contactHeading.textContent.split("");

contactHeading.innerHTML = letters
  .map(l => (l === " " ? "<span>&nbsp;</span>" : `<span>${l}</span>`))
  .join("");


const section5Contact = gsap.timeline({
  scrollTrigger: {
    trigger: ".section5",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pin: true
  }
});

section5Contact.from(".section5", {
  backgroundPositionX: "100%", 
  duration: 1.5,
  ease: "power3.out",
});

section5Contact.from(".section5 h2 span", {
  y: -150,
  rotation: -50,
  opacity: 0,
  stagger: 0.1,
  ease: "back.out(1.5)",
  duration: 1
}, 0.05);

section5Contact.from(".section5 p", {
  y: 100,
  opacity: 0,
  duration: 1
}, 0.5);

section5Contact.from(".section5 .contact-btn", {
  scale: 0,
  opacity: 0,
  ease: "back.out(1.5)",
  duration: 1
}, 0.7);

section5Contact.to(".section5", {
  backgroundColor: "black",
  color: "white",
  duration: 1,
  ease: "power2.out"
}, 1.5);