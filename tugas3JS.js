const form = document.getElementById("form");
const input = document.getElementById("itemInput");
const deadline = document.getElementById("deadline");
const urgency = document.getElementById("urgency");
const errorMessage = document.getElementById("errorMessage");
const addedTask = document.getElementById("addedTask");
const list = document.getElementById("list");


form.addEventListener("submit", function(event){
    event.preventDefault();
    const nilaiInput = input.value.trim();

        if (nilaiInput === ""){
            errorMessage.textContent = "Oops! Forgot to add something?";
            input.classList.add("invalid");
            input.classList.remove("valid");
            return;
        }

    errorMessage.textContent = "";
    input.classList.remove("invalid");
    input.classList.add("valid");

    const listBaru = document.createElement("li");

    const taskTitle = document.createElement("div");
    taskTitle.classList.add("taskTitle");
    taskTitle.textContent = nilaiInput;

    const info = document.createElement("div");
    info.classList.add("taskInfo");
    const deadlineText = deadline.value ? `🗓️ ${deadline.value}` : "🗓️ -";
    const urgencyText = `⚡ ${urgency.value}`;
    info.textContent = `${deadlineText} ${urgencyText}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑️";
    deleteButton.type = "button";
    deleteButton.classList.add("deleteButton");

    listBaru.appendChild(taskTitle);
    listBaru.appendChild(info);
    listBaru.appendChild(deleteButton);
    list.appendChild(listBaru);

    addedTask.style.display = "block";

    listBaru.addEventListener("click", function(){
        listBaru.classList.toggle("checked");
    });

    deleteButton.addEventListener('click', function(a){
        a.stopPropagation();
        listBaru.remove();

        if (list.children.length === 0) {
            addedTask.style.display ="none";
        }
    });

    input.value = '';
    deadline.value = '';
    urgency.value = '';

});