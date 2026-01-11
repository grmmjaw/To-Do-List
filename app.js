const addBtn = document.getElementById("addBtn");
const toDoInput = document.getElementById("toDoInput");


const tasks = [];


function markTaskBtn(event) {
  const taskEl = event.target.parentElement;
  const index = Number(taskEl.dataset.index);
  // toggle the data
  tasks[index].completed = !tasks[index].completed;

  saveTasks();
  renderTasks()
}

  
  function deleteTask(event){
    const taskEl = event.target.parentElement;
    const index = Number(taskEl.dataset.index)
   
    tasks.splice(index,1);
    saveTasks();
    renderTasks();  
}     

function addToList() {
  if (toDoInput.value.trim() === "") return;


const newTask = {
  text: toDoInput.value,
  completed: false
};

tasks.push(newTask);
  saveTasks()
  renderTasks()
toDoInput.value = "";
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
  list.style.paddingRight = "35px";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.dataset.index = index;

    li.style.color = "white";
    li.style.listStyle = "none";
    li.style.border = "solid #7c3f00 0.5px";
    li.style.borderRadius = "6px";
    li.style.position = "relative";
    li.style.display = "flex";
    li.style.flexDirection = "row";
    li.style.alignItems = "center";
    li.style.justifyContent = "space-between";
    li.style.width = "100%";
    li.style.flexShrink = "1";
    li.style.padding = "8px";
    li.style.marginBottom = "10px";
    li.style.boxSizing = "border-box";

    const textWrapper = document.createElement("div");
    textWrapper.textContent = task.text;
    textWrapper.style.flexGrow = "1";
    textWrapper.style.textAlign = "center";

    const checkBtn = document.createElement("button");
    checkBtn.style.backgroundColor = "white";
    checkBtn.style.border = "none";
    checkBtn.style.padding = "5px";
    checkBtn.style.borderRadius = "10px";
    checkBtn.style.flexShrink = "0";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.style.backgroundColor = "red";
    deleteBtn.style.color = "white";
    deleteBtn.style.border = "none";
    deleteBtn.style.borderRadius = "5px";
    deleteBtn.style.padding = "0 15px";
    deleteBtn.style.flexShrink = "0";

   
    if (task.completed) {
      li.style.textDecoration = "line-through";
      li.style.backgroundColor = "#9acb6b";
      li.style.color = "#555555";
    } else {
      li.style.textDecoration = "none";
      li.style.backgroundColor = "#a8d480";
      li.style.color = "white";
    }

    
    li.appendChild(checkBtn);
    li.appendChild(textWrapper);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    
    checkBtn.addEventListener("click", markTaskBtn);
    deleteBtn.addEventListener("click", deleteTask);
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