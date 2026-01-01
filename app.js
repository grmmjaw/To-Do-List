const addBtn = document.getElementById("addBtn");
const toDoInput = document.getElementById("toDoInput");

function markTaskBtn()
  { const task = event.target.parentElement;
 if (task.style.textDecoration === "line-through"){
     task.style.textDecoration = "none"

  }else{
    task.style.textDecoration = "line-through";
  }
  }
  
  function deleteTask(){
    const task = event.target.parentElement;
    task.remove();  
  }

function addToList() {
  if (toDoInput.value.trim() === "") return;

  const list = document.getElementById("toDoUnorderedList");
  const task = document.createElement("li");
  const newContent = document.createTextNode(toDoInput.value);
  const checkBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete"
  task.appendChild(newContent);
  task.appendChild(checkBtn);
  task.appendChild(deleteBtn);
  list.appendChild(task);

  toDoInput.value = "";

  checkBtn.addEventListener("click",markTaskBtn)
  deleteBtn.addEventListener("click", deleteTask)
}


const form = document.getElementById("toDoForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();   
  addToList();           
});


addBtn.addEventListener("click", addToList);
