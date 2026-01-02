const addBtn = document.getElementById("addBtn");
const toDoInput = document.getElementById("toDoInput");

function markTaskBtn()
  { const task = event.target.parentElement;
 if (task.style.textDecoration === "line-through white"){
     task.style.textDecoration = "none"
       task.style.backgroundColor = "#a8d480";
  }else{
    task.style.textDecoration = "line-through white";
     task.style.backgroundColor = "#779892";
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
  task.style.color = "white";
  task.style.listStyle = "none";
  task.style.backgroundColor = "#a8d480";
  task.style.border = "solid #7c3f00 3px";
  task.style.borderRadius = "6px"
  task.style.textAlign = "center";
  task.style.position = "relative";
  task.style.paddingTop = "3px";
  task.style.paddingBottom = "3px"
  task.style.margin = "10px";
  const newContent = document.createTextNode(toDoInput.value);
  const checkBtn = document.createElement("button");
  checkBtn.style.backgroundColor = "#b18d8dff";
   checkBtn.style.color = "white";
    checkBtn.style.border = "none";
    checkBtn.style.padding = "10px"
    checkBtn.style.borderRadius = "10px";
    checkBtn.style.position = "absolute";
    checkBtn.style.left = "10px"
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.style.backgroundColor = "red";
     deleteBtn.style.color = "white";
     deleteBtn.style.border = "none";
     deleteBtn.style.borderRadius = "5px";
     deleteBtn.style.paddingRight = "15px";
     deleteBtn.style.paddingLeft = "15px";
      deleteBtn.style.right = "10px";
      deleteBtn.style.top = "50%";
      deleteBtn.style.position = "absolute";
deleteBtn.style.transform = "translateY(-50%)";
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
