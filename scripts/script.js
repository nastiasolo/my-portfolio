document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".header__menu-list");

  const toggleMenu = () => {
    menu.classList.toggle("open");
    hamburger.classList.toggle("open");
  };

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && menu.classList.contains("open")) {
      menu.classList.remove("open");
      hamburger.classList.remove("open");
    }
  });
});
