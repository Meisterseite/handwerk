const navToggle = document.getElementById("navToggle");
const mobileNav = document.getElementById("mobileNav");

if(navToggle && mobileNav){
  navToggle.addEventListener("click",()=>{
    const open = navToggle.getAttribute("aria-expanded")==="true";
    navToggle.setAttribute("aria-expanded",String(!open));
    mobileNav.style.display = open ? "none" : "block";
  });
}
