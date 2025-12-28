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

const tradeButtons = document.querySelectorAll(".tradeButton");

tradeButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const isOpen = btn.classList.contains("isOpen");

    if (!isOpen) {
      e.preventDefault();

      tradeButtons.forEach((b) => {
        if (b !== btn) b.classList.remove("isOpen");
      });

      btn.classList.add("isOpen");
      return;
    }

    btn.classList.remove("isOpen");
  });

  btn.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      btn.classList.remove("isOpen");
    }
  });
});

document.addEventListener("click", (e) => {
  const inside = e.target.closest(".tradeButton");
  if (inside) return;
  tradeButtons.forEach((b) => b.classList.remove("isOpen"));
});
