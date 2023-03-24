const chooseBgImage = document.querySelector(".uploadImage");
const nameEl = document.querySelector(".name");
let lsName = JSON.parse(localStorage.getItem("name"));

if (lsName) {
  nameEl.innerText = lsName;
}
if (nameEl.innerText == "") {
  nameEl.innerText = "[name]";
}

nameEl.addEventListener("input", function () {
  setTimeout(() => {
    if (nameEl.innerText == "") {
      nameEl.innerText = "[name]";
    }
  }, 3000);
  localStorage.setItem("name", JSON.stringify(nameEl.innerText));
});
