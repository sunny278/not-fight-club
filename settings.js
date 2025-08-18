const nameInput = document.getElementById("name-input");
const saveBtn = document.getElementById("save-btn");
const currentName = document.getElementById("current-name");

// Load name from localStorage on page load
const storedName = localStorage.getItem("userName");
if (storedName) {
  currentName.textContent = storedName;
}

// Save new name
saveBtn.addEventListener("click", () => {
  const newName = nameInput.value.trim();
  if (newName) {
    localStorage.setItem("userName", newName);
    currentName.textContent = newName;
    nameInput.value = "";
    alert("Name saved!");
  } else {
    alert("Please enter a name!");
  }
});
