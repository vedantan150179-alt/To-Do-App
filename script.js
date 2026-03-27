
let addbtn = document.getElementById("addBtn");


addbtn.addEventListener("click", function () {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;
    if (taskText.trim() === "") {
        alert("Enter a task");
        return;
    }
    
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.innerText = taskText;
    li.appendChild(span);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";


    deleteBtn.addEventListener("click", function () {
        li.remove();
        saveTasks();
});
li.appendChild(deleteBtn);
li.appendChild(editBtn);


editBtn.addEventListener("click", function () {
    let span = li.querySelector("span");
    if(!span){
        alert("Error: span not found");
        return;
    }

    let newText = prompt("Edit your task:",span.innertext);

    if (newText !== null && newText !== "") {
        span.innerText = newText;
        saveTasks();
    }
});


li.addEventListener("click",function(e){
    if(e.target.tagName !=="BUTTON"){
        li.style.textDecoration = "line-through";
        saveTasks();
    }
});
document.getElementById("taskList").appendChild(li);
taskInput.value = "";
saveTasks();
// Below this it used to store the listed task 
});
function saveTasks(){
    localStorage.setItem("tasks",document.getElementById("taskList").innerHTML);
}

window.onload = function () {
    let saved = localStorage.getItem("tasks");
    if (saved) {
        document.getElementById("taskList").innerHTML = saved;
        attachEvents();
    }
};

/// below this it is used to work the delete button after the page is refreshed 
function attachEvents() {
let allLi = document.querySelectorAll("#taskList li");

    allLi.forEach(function (li) {
        let deleteBtn = li.querySelector("button");

        deleteBtn.addEventListener("click", function () {
            li.remove();
            saveTasks();
        });

        li.addEventListener("click", function (e) {
            if (e.target.tagName !== "BUTTON") {
                span.style.textDecoration = "line-through";
                saveTasks();
            }
        });
    });
}

document.getElementById("clearAll").addEventListener("click" , function() {
    document.getElementById("taskList").innerHTML = "";
    localStorage.removeItem("tasks");
});
console.log("clear button conneted");

