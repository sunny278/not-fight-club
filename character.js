// Получаем элементы
const avatar = document.getElementById("avatar");
const avatarSelector = document.getElementById("avatarSelector");
const playerNameEl = document.getElementById("playerName");
const winsEl = document.getElementById("wins");
const lossesEl = document.getElementById("losses");
const usernameEl = document.getElementById("username"); // Для приветствия

// Получаем данные из localStorage или задаем дефолтные
let playerName = localStorage.getItem("userName") || "Player";
let avatarSrc =
  localStorage.getItem("avatar") || "https://i.pravatar.cc/150?img=5";
let wins = parseInt(localStorage.getItem("wins")) || 0;
let losses = parseInt(localStorage.getItem("losses")) || 0;

// Отображаем данные на странице
playerNameEl.textContent = playerName;
avatar.src = avatarSrc;
winsEl.textContent = wins;
lossesEl.textContent = losses;

// Если есть блок приветствия
if (usernameEl) {
  usernameEl.textContent = playerName || "guest";
}

// Клик по аватару — показываем выбор
avatar.addEventListener("click", () => {
  avatarSelector.style.display =
    avatarSelector.style.display === "none" ? "block" : "none";
});

// Клик по аватару из выбора — меняем аватар
avatarSelector.querySelectorAll("img").forEach((img) => {
  img.addEventListener("click", () => {
    avatar.src = img.src;
    localStorage.setItem("avatar", img.src);
    avatarSelector.style.display = "none";
  });
});

// Функции для теста увеличения побед/поражений
function addWin() {
  wins++;
  localStorage.setItem("wins", wins);
  winsEl.textContent = wins;
}

function addLoss() {
  losses++;
  localStorage.setItem("losses", losses);
  lossesEl.textContent = losses;
}
