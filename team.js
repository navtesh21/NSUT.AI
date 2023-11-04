const nav_btn = document.querySelector(".nav-btn")
const head = document.querySelector(".header")
const  core = document.querySelector(".core")


const media = () => {
  head.classList.toggle("active")
}

function colorChange() {
    core.classList.add("click");
}

function rem() {
    core.style.border =" 2px solid #a41034"
    const adv = document.querySelector(".advise");
    adv.style.display = "none"
    colorChange();
}

nav_btn.addEventListener("click",media)
core.addEventListener("click", rem)