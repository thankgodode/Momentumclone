const taskEl = document.querySelector(".task");
const container = document.querySelector(".container");
const enterTaskWrapper = document.querySelector(".enter-task");

const taskValue = JSON.parse(localStorage.getItem("task"));

if (taskValue) {
  taskValue.forEach((el) => {
    enterTask(el);
  });
}

function enterTask(task) {
  let checked = false;
  let taskVal = taskEl.value;
  if (task) {
    taskVal = task.text;
    checked = task.check;
  }
  if (taskVal) {
    container.style.display = "flex";
    enterTaskWrapper.style.display = "none";
    let para = document.createElement("p");
    let closeBtn = document.createElement("img");
    closeBtn.src = "images/closeBtn.png";
    para.innerHTML = taskVal;
    container.append(para, closeBtn);

    if (taskVal && checked) {
      para.classList.add("checked");
    }

    closeBtn.addEventListener("click", function () {
      container.style.display = "none";
      enterTaskWrapper.style.display = "block";
      para.remove();
      closeBtn.remove();
      updateLS();
    });
    para.addEventListener("click", function () {
      para.classList.toggle("checked");
      updateLS();
    });
  }
}

function updateLS() {
  const arr = [];
  const para = document.querySelectorAll("p");
  para.forEach((el) => {
    arr.push({ text: el.innerHTML, check: el.classList.contains("checked") });
  });
  localStorage.setItem("task", JSON.stringify(arr));
}

taskEl.addEventListener("keyup", function (e) {
  if (e.keyCode == 13) {
    enterTask();
    updateLS();
  }
});
