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
// create div element in addToList 
//task.style.backgroundColor = "red" witht his consideration 
function addToList() {
  if (toDoInput.value.trim() === "") return;

  const list = document.getElementById("toDoUnorderedList");

  const task = document.createElement("li");
  task.style.color = "white"
  task.style.listStyle = "none"
  task.style.backgroundColor = "blue"
  task.style.border = "solid, black, 10px"
  const newContent = document.createTextNode(toDoInput.value);
  const checkBtn = document.createElement("button");
  checkBtn.style.backgroundColor = "green";
   checkBtn.style.color = "white";
    checkBtn.style.border = "none";
    checkBtn.style.padding = "10px"
    checkBtn.style.borderRadius = "10px";
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.style.backgroundColor = "red";
     deleteBtn.style.color = "white";
     deleteBtn.style.border = "none";
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
