const inputTask = document.getElementById("inputTask")
const buttonAddTask = document.getElementById("addtask")
const buttonCompleteTask = document.getElementById("completeTask")
const taskManager = document.getElementById("taskmanager")

buttonAddTask.addEventListener("click", () => {
    if (inputTask.value) {
        const newTask = document.createElement("div")
        newTask.classList.add("tasks")

        const textTask = document.createElement("h3")
        textTask.innerText = inputTask.value
        newTask.appendChild(textTask)

        const buttonComplete = document.createElement("button")
        buttonComplete.innerHTML =  '<ion-icon name="checkmark-circle-sharp"></ion-icon>'
        buttonComplete.id = "completeTask"
        newTask.appendChild(buttonComplete)

        taskManager.appendChild(newTask)
    }
});

buttonCompleteTask.addEventListener("click", (e) => {
    const tasks = taskManager.getElementsByTagName("div");
    for (const task of tasks) {
        task.addEventListener("click", () => {
            task.classList.toggle('completeTasks');
        });
    }
});