// Элементы
const avatar = document.getElementById("avatar");
const avatarSelector = document.getElementById("avatarSelector");
const playerNameBox = document.getElementById("playerNameBox");
const winsEl = document.getElementById("wins");
const lossesEl = document.getElementById("losses");

// Данные из localStorage
let playerName = localStorage.getItem("userName") || "Player";
let avatarSrc = localStorage.getItem("avatar") || "./assets/im-fine.png";
let wins = parseInt(localStorage.getItem("wins")) || 0;
let losses = parseInt(localStorage.getItem("losses")) || 0;

// Отображение
playerNameBox.textContent = playerName;
avatar.src = avatarSrc;
winsEl.textContent = wins;
lossesEl.textContent = losses;

// Клик по аватару — показать/скрыть выбор
avatar.addEventListener("click", () => {
  avatarSelector.classList.toggle("show");
});

// Клик по мини-аватару
avatarSelector.querySelectorAll("img").forEach((img) => {
  img.addEventListener("click", () => {
    avatar.src = img.src;
    localStorage.setItem("avatar", img.src);
    avatarSelector.classList.remove("show");
  });
});

// Функции теста
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
