const inputBox = document.getElementById("input");
const listContainer = document.getElementById("list-container");

// const warning = document.getElementsByClassName("warning");

// ! Add li to ul
function addtask() {
  if (inputBox.value === "") {
    alert("Please write something");

    // let p = document.createElement("p");
    // p.innerHTML = "Please write something";
    // warning.appendChild(p);
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

// ! Check or delete li
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// ! Local Storage adding
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showData();

// ! Press Enter and add todo
inputBox.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    // 13 is the keycode for "Enter"
    event.preventDefault();
    addtask();
  }
});
