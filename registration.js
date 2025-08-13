const registrationScreen = document.getElementById("registrationScreen");
const playerNameInput = document.getElementById("playerNameInput");
const startButton = document.getElementById("startButton");

// Проверяем, есть ли имя в localStorage
const savedName = localStorage.getItem("playerName");
if (savedName) {
  // Имя уже есть — перенаправляем на домашнюю страницу
  window.location.href = "index.html";
}

startButton.addEventListener("click", () => {
  const name = playerNameInput.value.trim();
  if (!name) return alert("Введите имя!");

  // Сохраняем имя
  localStorage.setItem("playerName", name);

  // Перенаправляем на домашнюю страницу
  window.location.href = "index.html";
});
