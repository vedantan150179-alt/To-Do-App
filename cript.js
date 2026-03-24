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
        saveTasks(); // ✅ save after delete
    });

    li.appendChild(deleteBtn);

    li.addEventListener("click", function (e) {
        if (e.target.tagName !== "BUTTON") { // ✅ fixed
            li.style.textDecoration = "line-through";
            saveTasks(); // ✅ save after complete
        }
    });

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";

    saveTasks(); // ✅ save after adding
});

// ✅ function for saving
function saveTasks() {
    localStorage.setItem("tasks", document.getElementById("taskList").innerHTML);
}

// ✅ load tasks
window.onload = function () {
    let saved = localStorage.getItem("tasks");
    if (saved) {
        document.getElementById("taskList").innerHTML = saved;
    }
};