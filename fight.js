// ---для  картинки и имени игрока ---
const playerImgEl = document.getElementById("player-img");
const playerNameEl = document.getElementById("player-name");

//  путь к выбранному персонажу и имя из localStorage
const savedCharacter =
  localStorage.getItem("selectedCharacter") ||
  localStorage.getItem("playerImage");
const savedCharacterName = localStorage.getItem("userName");

if (savedCharacter) {
  playerImgEl.src = savedCharacter;
  playerImgEl.alt = savedCharacterName || "Your character";
} else {
  playerImgEl.src = "./assets/im-fine.png";
  playerImgEl.alt = "Default character";
}

// Выводим имя
if (savedCharacterName) {
  playerNameEl.textContent = savedCharacterName;
} else {
  playerNameEl.textContent = "Unnamed hero";
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

// ---  доступность Attack ---
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
    fightButton.removeAttribute("title");
  } else {
    fightButton.disabled = true;
    fightButton.setAttribute("title", "Please pick 1 task and 2 skills");
  }
}

// Слушатели на изменения
leftRadios.forEach((radio) =>
  radio.addEventListener("change", validateSelection)
);
rightCheckboxes.forEach((cb) =>
  cb.addEventListener("change", validateSelection)
);

// Проверю при загрузке
validateSelection();
