const navToggle = document.getElementById("navToggle");
const mobileNav = document.getElementById("mobileNav");

if (navToggle && mobileNav) {
  navToggle.addEventListener("click", () => {
    const open = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!open));
    mobileNav.style.display = open ? "none" : "block";
    mobileNav.setAttribute("aria-hidden", String(open));
  });

  mobileNav.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;
    navToggle.setAttribute("aria-expanded", "false");
    mobileNav.style.display = "none";
    mobileNav.setAttribute("aria-hidden", "true");
  });
}

