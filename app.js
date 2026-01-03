const addBtn = document.getElementById("addBtn");
const toDoInput = document.getElementById("toDoInput");

function markTaskBtn()
  { const task = event.target.parentElement;
 if (task.style.textDecoration === "line-through black"){
     task.style.textDecoration = "none"
       task.style.backgroundColor = "#a8d480";
       task.style.color = "white"
  }else{
    task.style.textDecoration = "line-through black";
     task.style.backgroundColor = "#9acb6b";
     task.style.color = "#555555"
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
  task.style.margin = "10px auto";
  task.style.display = "flex";
  task.style.flexDirection = "row";
  task.style.alignItems = "center";
  task.style.justifyContent = "space-between";
  task.style.width = "100%";
  task.style.textAlign = "center";
  task.style.flexShrink = "1"
task.style.padding = "8px 12px";


  const textWrapper = document.createElement("div");
textWrapper.textContent = toDoInput.value;
textWrapper.style.flexGrow = "1";
textWrapper.style.textAlign = "center";
  const checkBtn = document.createElement("button");
  checkBtn.style.backgroundColor = "white";
   checkBtn.style.color = "white";
    checkBtn.style.border = "none";
    checkBtn.style.padding = "5px"
    checkBtn.style.borderRadius = "10px";
    checkBtn.style.marginTop = "4px";
checkBtn.style.flexShrink = "0";
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.style.backgroundColor = "red";
     deleteBtn.style.color = "white";
     deleteBtn.style.border = "none";
     deleteBtn.style.borderRadius = "5px";
     deleteBtn.style.paddingRight = "15px";
     deleteBtn.style.paddingLeft = "15px";
deleteBtn.style.flexShrink = "0";
  task.appendChild(checkBtn);
task.appendChild(textWrapper);
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
