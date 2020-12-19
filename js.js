const add = document.querySelector(".icon");
const enter = document.querySelector(".enter");
const list = document.querySelector(".lists");

function ad() {
  if (enter.value.length != 0) {
    let div = document.createElement("div");
    div.className = "output";
    list.appendChild(div);

    var input = document.createElement("input");
    input.value = enter.value;
    input.disabled = true;
    input.classList.add("list");
    input.type = "text";
    input.style.color = "black";
    div.appendChild(input);

    let edit = document.createElement("img");
    edit.src = "./src/pencil.svg";
    edit.classList.add("icons");
    edit.classList.add("edit");
    edit.setAttribute("onclick", "editClick(this)");
    div.appendChild(edit);

    let delet = document.createElement("img");
    delet.src = "./src/delete_.svg";
    delet.classList.add("icons");
    delet.classList.add("delete");
    delet.setAttribute("onclick", "deleteClick(this)");
    div.appendChild(delet);
    let finish = document.createElement("img");
    finish.src = "./src/correct-mark.svg";
    finish.classList.add("icons");
    finish.classList.add("finish");
    finish.setAttribute("onclick", "finishClick(this)");
    div.appendChild(finish);
  }
  enter.value = "";
}

function deleteClick(icon) {
  icon.parentElement.remove();
}
function finishClick(finish) {
  finish.parentElement.style.backgroundColor = "#84638a";
  finish.remove();
}
function editClick(edit) {
  var listItem = edit.parentNode;
  var editInput = listItem.querySelector("input[type=text]");
  editInput.style.color == "green"
    ? ((editInput.disabled = true),
      (editInput.style.color = "black"),
      (editInput.style.fontWeight = "200"))
    : ((editInput.disabled = false),
      (editInput.style.color = "green"),
      (editInput.style.fontWeight = "900"));
}
