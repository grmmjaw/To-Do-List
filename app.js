const addBtn = document.getElementById("addBtn");
const toDoInput = document.getElementById("toDoInput");


function addToList(){
    const task = document.createElement("text");
    const newContent = document.createTextNode("what");
    task.appendChild(newContent);
  const list = document.getElementById("toDoUnorderedList")
document.body.insertBefore(task, list);
};

addBtn.addEventListener("click", addToList())