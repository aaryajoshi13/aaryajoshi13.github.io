const menuToggle=document.querySelector(".menu-toggle");
const navCenter=document.querySelector(".nav-center");
const navLinks=document.querySelectorAll(".nav-center a");

menuToggle.addEventListener("click", ()=>{
    navCenter.classList.toggle("active");
});
navLinks.forEach(link=>{
    link.addEventListener("click",()=>{
        navCenter.classList.remove("active");
    });
});