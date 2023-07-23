//elements utility
const inputTask = document.getElementById("inputTask")
const btnAddTask = document.getElementById("btnAddTask")
const localStorageKey = 'ToDoList'

//function utility
function newTaskAdd() {
    if (inputTask.value) {
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: inputTask.value
        })
        localStorage.setItem(localStorageKey, JSON.stringify(values))
        showTasks()
    }
    else {
        window.alert("Adicione um valor no campo!")
    }
};

function showTasks () {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let listTask = document.getElementById("ToDoList")
    listTask.innerHTML = ""
    for (let i = 0; i < values.length; i++) {
        listTask.innerHTML += `<li>${values[i]['name']}<button onclick="taskCompleted('${values[i]['name']}')" id="completeTask"><ion-icon name="checkmark-circle-sharp"></ion-icon></button></li>`
    }
}

function taskCompleted(data) {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || '[]')
    let index = values.findIndex(x => x.name == data)
    values.splice(index,1)
    localStorage.setItem(localStorageKey, JSON.stringify(values))
    showTasks()
}

//events utility
btnAddTask.addEventListener("click", newTaskAdd);

//init utility 
showTasks()