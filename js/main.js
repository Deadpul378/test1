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

// Анимация открытия/закрытия полного списка литературы с прокруткой
document.addEventListener("DOMContentLoaded", function () {
  const btnShow = document.getElementById("show-all-books");
  const preview = document.getElementById("books-preview");
  const full = document.getElementById("books-full");

  // Открыть список
  if (btnShow && full) {
    btnShow.addEventListener("click", function () {
      preview.classList.add("hidden");
      full.style.display = "block";
      setTimeout(() => {
        full.classList.add("open");
        full.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 10);
      btnShow.style.display = "none";
    });
  }

  // Закрыть список с прокруткой после завершения анимации
  if (full) {
    let needScrollToPreview = false;
    full.addEventListener("transitionend", function (e) {
      if (!full.classList.contains("open")) {
        full.style.display = "none";
        if (needScrollToPreview) {
          const previewSection = document.getElementById("books-preview");
          if (previewSection) {
            previewSection.scrollIntoView({ behavior: "smooth", block: "start" });
          }
          needScrollToPreview = false;
        }
      }
    });

    document.addEventListener("click", function (e) {
      if (e.target && e.target.id === "hide-all-books") {
        full.classList.remove("open");
        btnShow.style.display = "inline-block";
        preview.classList.remove("hidden");
        needScrollToPreview = true;
      }
    });
  }
});
