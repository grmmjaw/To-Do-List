const addBtn = document.getElementById("addBtn");
const toDoInput = document.getElementById("toDoInput");


const tasks = [];
JSON.stringify(tasks);

function markTaskBtn(event) {
  const taskEl = event.target.parentElement;
  const index = Number(taskEl.dataset.index);
  // toggle the data
  tasks[index].completed = !tasks[index].completed;
  if (tasks[index].completed) {
    taskEl.style.textDecoration = "line-through";
    taskEl.style.backgroundColor = "#9acb6b";
    taskEl.style.color = "#555555";
  } else {
    taskEl.style.textDecoration = "none";
    taskEl.style.backgroundColor = "#a8d480";
    taskEl.style.color = "white";
  }
  saveTasks();
}

  
  function deleteTask(){
    const task = event.target.parentElement;
    task.remove();  
  }
// create div element in addToList 
//task.style.backgroundColor = "red" witht hi   s consideration 
function addToList() {
  if (toDoInput.value.trim() === "") return;

  const list = document.getElementById("toDoUnorderedList");
  list.style.paddingRight = "35px"
  const task = document.createElement("li");
  task.style.color = "white";
  task.style.listStyle = "none";
  task.style.backgroundColor = "#a8d480";
  task.style.border = "solid #7c3f00 0.5px";
  task.style.borderRadius = "6px"
  task.style.textAlign = "center";
  task.style.position = "relative";
  task.style.display = "flex";
  task.style.flexDirection = "row";
  task.style.alignItems = "center";
  task.style.justifyContent = "space-between";
  task.style.width = "100%";
  task.style.textAlign = "center";
  task.style.flexShrink = "1"
task.style.padding = "8px";
task.style.marginBottom = "10px";
task.style.boxSizing = "border-box";

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


  // create task object
const newTask = {
  text: toDoInput.value,
  completed: false
};
// push to array []
tasks.push(newTask);
//get correct index
const index = tasks.length - 1;
// attach index to DOM
task.dataset.index = index;

toDoInput.value = "";
  checkBtn.addEventListener("click",markTaskBtn)
  deleteBtn.addEventListener("click", deleteTask)
  saveTasks()
  
}

function saveTasks(){
localStorage.setItem("tasks", JSON.stringify(tasks))
console.log(JSON.stringify(tasks))
}
function loadTasks(){
    const savedTasks = localStorage.getItem("tasks");
      console.log("raw from localStorage:", savedTasks);
      if (!savedTasks) return
      const parsed = JSON.parse(savedTasks);
        console.log("parsed tasks:", parsed);
         tasks.push(...parsed);
  console.log("tasks array after load:", tasks);
    }
    function renderTasks() {
  const list = document.getElementById("toDoUnorderedList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.dataset.index = index;
    li.textContent = task.text;

    if (task.completed) {
      li.style.textDecoration = "line-through";
    }

    list.appendChild(li);
  });
}


const form = document.getElementById("toDoForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();   
  addToList();           
});


addBtn.addEventListener("click", addToList);
loadTasks();
renderTasks();