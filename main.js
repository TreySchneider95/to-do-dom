let form = document.querySelector("#todo")
let taskInput = document.querySelector("#task")
let addTask = document.querySelector("#addTask")
let clearCompleted = document.querySelector("#clearCompleted")
let cleaAll = document.querySelector("#cleaAll")
let taskUList = document.querySelector("#taskList")

let taskList = []

form.addEventListener("submit", function(e){
    e.preventDefault()
    taskList.push(taskInput.value)
    let li = document.createElement("li")
    li.style.margin = "5px"
    let button = document.createElement("button")
    button.innerHTML = "Edit"
    button.style.marginLeft = "10px"
    li.innerHTML = taskInput.value
    button.addEventListener("click", function(e){
        e.preventDefault()
        let newTask = prompt("Enter new task")
        li.innerHTML = newTask
        li.classList.toggle("completed")
        li.appendChild(button)
    })
    li.appendChild(button)
    li.addEventListener("click", function(){
        li.classList.toggle("completed")
    })
    taskUList.appendChild(li)
    taskInput.value = ""
})

clearCompleted.addEventListener("click", function(e){
    e.preventDefault()
    let completed = document.querySelectorAll(".completed")
    completed.forEach((ele)=>(ele.remove()))
})

cleaAll.addEventListener("click", function(e){
    e.preventDefault()
    let listItems = document.querySelectorAll("li")
    listItems.forEach((ele)=>(ele.remove()))
})



