// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add scroll effect to navbar
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 100) {
    nav.classList.add("backdrop-blur-xl");
  } else {
    nav.classList.remove("backdrop-blur-xl");
  }
});

// Books toggle functionality
const showAllBooksBtn = document.getElementById("show-all-books");
const hideAllBooksBtn = document.getElementById("hide-all-books");
const booksPreview = document.getElementById("books-preview");
const booksFull = document.getElementById("books-full");

showAllBooksBtn.addEventListener("click", () => {
  booksPreview.style.display = "none";
  booksFull.classList.remove("opacity-0", "max-h-0");
  booksFull.classList.add("opacity-100", "max-h-full");
  showAllBooksBtn.style.display = "none";
});

hideAllBooksBtn.addEventListener("click", () => {
  booksFull.classList.add("opacity-0", "max-h-0");
  booksFull.classList.remove("opacity-100", "max-h-full");
  booksPreview.style.display = "grid";
  showAllBooksBtn.style.display = "inline-block";
});

// Мобильное меню
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeMobileMenu = document.getElementById("close-mobile-menu");

if (mobileMenuBtn && mobileMenu && closeMobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("-translate-x-full");
  });
  closeMobileMenu.addEventListener("click", () => {
    mobileMenu.classList.add("-translate-x-full");
  });
  // Закрытие меню при клике на ссылку
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("-translate-x-full");
    });
  });
}
