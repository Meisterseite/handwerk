// script.js

// Mobile Menü
const navToggle = document.getElementById("navToggle");
const mobileNav = document.getElementById("mobileNav");

if (navToggle && mobileNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    mobileNav.style.display = isOpen ? "none" : "block";
    mobileNav.setAttribute("aria-hidden", String(isOpen));
  });

  // Mobile Menü schließen nach Klick
  mobileNav.querySelectorAll("a[href^='#']").forEach((a) => {
    a.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      mobileNav.style.display = "none";
      mobileNav.setAttribute("aria-hidden", "true");
    });
  });
}

// Active Link Handling
const desktopLinks = Array.from(document.querySelectorAll(".nav a.navLink[href^='#']"));
const mobileLinks = Array.from(document.querySelectorAll(".mobileNav a[href^='#']"));
const allNavLinks = [...desktopLinks, ...mobileLinks];

function setActiveByHash(hash) {
  if (!hash) return;

  allNavLinks.forEach((l) => l.classList.remove("isActive"));
  const selector = `.nav a.navLink[href='${hash}'], .mobileNav a[href='${hash}']`;
  document.querySelectorAll(selector).forEach((l) => l.classList.add("isActive"));
}

// Klick setzt aktiv
allNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const hash = link.getAttribute("href");
    setActiveByHash(hash);
  });
});

// Beim Laden: Hash aktiv setzen (falls vorhanden), sonst #gewerke als default
window.addEventListener("load", () => {
  setActiveByHash(location.hash || "#gewerke");
});

// Beim Scrollen: Section im Viewport aktiv setzen
const sectionIds = ["#gewerke", "#leistungen", "#ablauf"];
const sections = sectionIds
  .map((id) => document.querySelector(id))
  .filter(Boolean);

if (sections.length) {
  const obs = new IntersectionObserver(
    (entries) => {
      // Nimm die Section, die am stärksten sichtbar ist
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible && visible.target && visible.target.id) {
        setActiveByHash("#" + visible.target.id);
      }
    },
    {
      root: null,
      threshold: [0.25, 0.4, 0.6],
      rootMargin: "-20% 0px -55% 0px"
    }
  );

  sections.forEach((s) => obs.observe(s));
}
