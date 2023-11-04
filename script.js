gsap.registerPlugin(ScrollTrigger);

const textElements = gsap.utils.toArray(".text");

textElements.forEach((text) => {
  gsap.to(text, {
    backgroundSize: "100%",
    ease: "none",
    scrollTrigger: {
      trigger: text,
      start: "center 80%",
      end: "center 20%",
      scrub: true
    }
  });
});

const nav_btn = document.querySelector(".nav-btn")
const head = document.querySelector(".header")

const media = () => {
  head.classList.toggle("active")
}



nav_btn.addEventListener("click",media)
