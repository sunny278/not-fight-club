document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  const currentPage = path.split("/").pop();
  const links = document.querySelectorAll("header nav a");
  let activeLink = null;

  links.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      activeLink = link;
    }
  });

  const titleEl = document.getElementById("current-menu-title");
  if (activeLink && titleEl) {
    titleEl.textContent = activeLink.dataset.title;
  }
});
