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

document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.querySelector(".hero__light-button");
  const htmlElement = document.documentElement;

  // Проверяем сохраненную тему
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    htmlElement.setAttribute("data-theme", savedTheme);
  }

  themeButton.addEventListener("click", () => {
    let currentTheme = htmlElement.getAttribute("data-theme");
    let newTheme = currentTheme === "light" ? "dark" : "light";

    htmlElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Сохраняем тему
  });
});
