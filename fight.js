// --- Установка картинки игрока ---
const playerImgEl = document.getElementById("player-img");

// Берём путь к выбранному персонажу из localStorage
const savedCharacter =
  localStorage.getItem("selectedCharacter") ||
  localStorage.getItem("playerImage");

// Если есть выбранный персонаж, подставляем его
if (savedCharacter) {
  playerImgEl.src = savedCharacter;
  playerImgEl.alt = "Your character";
} else {
  // Если персонаж не выбран, ставим дефолтную картинку
  playerImgEl.src = "./assets/im-fine.png";
  playerImgEl.alt = "Default character";
}

// --- Логика выбора навыков (максимум 2) ---
const rightCheckboxes = document.querySelectorAll(
  '.right-column input[type="checkbox"]'
);

rightCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const checked = document.querySelectorAll(
      '.right-column input[type="checkbox"]:checked'
    );
    if (checked.length > 2) {
      checkbox.checked = false;
      alert("You can select up to 2 skills only.");
    }
  });
});
// --- Управление доступностью кнопки Attack ---
const fightButton = document.querySelector(".fight-button");
const leftRadios = document.querySelectorAll(
  '.left-column input[type="radio"]'
);

function validateSelection() {
  const leftChecked = document.querySelectorAll(
    '.left-column input[type="radio"]:checked'
  ).length;
  const rightChecked = document.querySelectorAll(
    '.right-column input[type="checkbox"]:checked'
  ).length;

  if (leftChecked === 1 && rightChecked === 2) {
    fightButton.disabled = false;
  } else {
    fightButton.disabled = true;
  }
}

// Вешаем слушатели
leftRadios.forEach((radio) =>
  radio.addEventListener("change", validateSelection)
);
rightCheckboxes.forEach((cb) =>
  cb.addEventListener("change", validateSelection)
);

// Проверим при загрузке
validateSelection();

function validateSelection() {
  const leftChecked = document.querySelectorAll(
    '.left-column input[type="radio"]:checked'
  ).length;
  const rightChecked = document.querySelectorAll(
    '.right-column input[type="checkbox"]:checked'
  ).length;

  if (leftChecked === 1 && rightChecked === 2) {
    fightButton.disabled = false;
    fightButton.removeAttribute("title"); // убираем title
  } else {
    fightButton.disabled = true;
    fightButton.setAttribute("title", "Please pick 1 task and 2 skills");
  }
}
