const addBtn = document.getElementById("addBtn");
const toDoInput = document.getElementById("toDoInput");


function addToList() {
  if (toDoInput.value.trim() === "") return;

  const list = document.getElementById("toDoUnorderedList");
  const task = document.createElement("li");
  const newContent = document.createTextNode(toDoInput.value);

  task.appendChild(newContent);
  list.appendChild(task);

  toDoInput.value = "";
}

// get input value
// add to document.createTextNode()
// get addBtn to submit 
//list functional 

const form = document.getElementById("toDoForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();   
  addToList();          
});



addBtn.addEventListener("click", addToList)