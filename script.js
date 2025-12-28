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
  btn.addEventListener("click", () => {
    const isOpen = btn.classList.contains("isOpen");
    tradeButtons.forEach((b) => b.classList.remove("isOpen"));
    if (!isOpen) btn.classList.add("isOpen");
  });

  const openBtn = btn.querySelector(".tradeOpen");
  if (openBtn) {
    openBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const href = btn.getAttribute("data-href");
      if (href) window.location.href = href;
    });
  }
});

document.addEventListener("click", (e) => {
  if (e.target.closest(".tradeButton")) return;
  tradeButtons.forEach((b) => b.classList.remove("isOpen"));
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") tradeButtons.forEach((b) => b.classList.remove("isOpen"));
});
