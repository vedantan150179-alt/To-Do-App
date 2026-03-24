
let addbtn = document.getElementById("addBtn");

addbtn.addEventListener("click", function () {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;

    if (taskText === "") {
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerText = taskText;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", function () {
        li.remove();
        saveTasks();
});


li.appendChild(deleteBtn);

li.addEventListener("click",function(e){
    if(e.target.tagName !=="BUTTON"){
        li.style.textDecoration = "line-through";
        saveTasks();
    }
});
// above this all the normal task is done 


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
                li.style.textDecoration = "line-through";
                saveTasks();
            }
        });
    });
}