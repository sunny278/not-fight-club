// Находим все ссылки в меню
const links = document.querySelectorAll("nav a");
const titleElement = document.getElementById("current-menu-title");

// Получаем имя файла страницы
const currentPath = window.location.pathname.split("/").pop() || "index.html";

// Пробегаем по ссылкам и находим текущую
links.forEach((link) => {
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("active");
    titleElement.textContent = link.getAttribute("data-title");
  } else {
    link.classList.remove("active");
  }
});
